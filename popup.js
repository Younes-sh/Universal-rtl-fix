/**
 * RTL Fix — popup.js
 * Connects the popup user interface to chrome.storage.sync.
 * Changes are saved instantly, and the content script (which listens to storage.onChanged)
 * applies them in real-time to the active web page.
 *
 * اتصال رابط کاربری پاپ‌آپ به chrome.storage.sync.
 * تغییرات بلافاصله ذخیره می‌شوند و content script (که به storage.onChanged
 * گوش می‌دهد) آن‌ها را در لحظه روی صفحه‌ی فعال اعمال می‌کند.
 */
const STORAGE_KEY = "rtlFixSettings";
const DEFAULT_SETTINGS = {
  enabled: true,
  targets: { fa: true, ar: true, he: true },
};

const elSwitch = document.getElementById("mainSwitch");
const elHint = document.getElementById("statusHint");
const langInputs = document.querySelectorAll(".lang-chip input");

function getSettings() {
  return new Promise((resolve) => {
    chrome.storage.sync.get([STORAGE_KEY], (result) => {
      resolve(
        result[STORAGE_KEY]
          ? { ...DEFAULT_SETTINGS, ...result[STORAGE_KEY] }
          : { ...DEFAULT_SETTINGS },
      );
    });
  });
}

function saveSettings(settings) {
  chrome.storage.sync.set({ [STORAGE_KEY]: settings });
}

function render(settings) {
  const isOn = settings.enabled;
  elSwitch.setAttribute("aria-checked", String(isOn));

  // اصلاح باگ ۲: استفاده از سیستم i18n برای متون پویای وضعیت سوییچ
  elHint.textContent = isOn
    ? chrome.i18n.getMessage("statusActive")
    : chrome.i18n.getMessage("statusDisabled");

  langInputs.forEach((input) => {
    const lang = input.dataset.lang;
    input.checked = !!settings.targets[lang];
  });
}

/**
 * Automatically localizes static UI elements marked with data-i18n attribute.
 * تزریق خودکار ترجمه‌ها به المان‌های ثابت واجد ویژگی data-i18n
 */
function localizeUI() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const message = chrome.i18n.getMessage(key);
    if (message) {
      el.textContent = message;
    }
  });
}

async function init() {
  const settings = await getSettings();

  // اصلاح باگ ۱: ابتدا متون ثابت ترجمه می‌شوند، سپس وضعیت اولیه رندر می‌شود
  // Bug fix 1: Fixed texts are translated first, then the initial state is rendered
  localizeUI();
  render(settings);

  elSwitch.addEventListener("click", async () => {
    const current = await getSettings();
    current.enabled = !current.enabled;
    saveSettings(current);
    render(current); // تغییر متن وضعیت به صورت محلی در متد رندر انجام می‌شود
    //Changing the status text is done locally in the render method.
  });

  langInputs.forEach((input) => {
    input.addEventListener("change", async () => {
      const current = await getSettings();
      current.targets[input.dataset.lang] = input.checked;
      saveSettings(current);
      render(current);
    });
  });
}

init();