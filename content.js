// # RTL Language Fix Extension

// A Chrome extension for proper rendering of **Persian (Farsi)**, **Arabic**, and **Hebrew** text across websites.

// The extension improves right-to-left (RTL) text rendering, especially when English words, technical terms, URLs, or source code are mixed within RTL sentences.

// Developed by **Younes SHEIKHLAR**

// ## Installation (Developer Mode)

// 1. Open `chrome://extensions` in Chrome.
// 2. Enable **Developer Mode**.
// 3. Click **Load unpacked**.
// 4. Select the extension folder.
// 5. Visit any website containing Persian, Arabic, or Hebrew content to see the automatic RTL correction.

// ## How It Works

// * The extension scans text blocks such as paragraphs, lists, table cells, and other content containers.
// * If RTL characters are dominant within a block, it automatically applies:

//   * `direction: rtl`
//   * `unicode-bidi: plaintext`
// * This allows the browser to correctly render mixed RTL and LTR content.
// * Code blocks (`pre`, `code`) always remain left-to-right.
// * A `MutationObserver` continuously monitors dynamically added content and applies corrections automatically.

// ## Settings

// Click the extension icon to access settings:

// * Enable or disable the extension globally.
// * Select which languages should be processed:

//   * Persian (Farsi)
//   * Arabic
//   * Hebrew

// Changes are applied instantly without refreshing the page.

// ## File Structure

// | File                        | Purpose                                |
// | --------------------------- | -------------------------------------- |
// | `manifest.json`             | Extension definition (Manifest V3)     |
// | `content.js`                | RTL detection and DOM processing logic |
// | `content.css`               | Styling for corrected RTL content      |
// | `popup.html`                | Settings interface                     |
// | `popup.css`                 | Popup styling                          |
// | `popup.js`                  | Popup functionality                    |
// | `icons/`                    | Extension icons                        |
// | `_locales/fa/messages.json` | Persian localization                   |

// ## Notes

// Website HTML structures may change over time. The extension uses resilient selectors and fallback mechanisms whenever possible.

// If RTL correction stops working after a website update, the selectors in `content.js` may need to be adjusted.

// ## Supported Languages

// * Persian (Farsi)
// * Arabic
// * Hebrew

// Additional RTL languages may be added in future releases.

// ---

// **Author:** Younes SHEIKHLAR
// **Project:** RTL Language Fix Extension
// **License:** MIT
 
// Persian 

// # افزونه اصلاح نمایش زبان‌های راست‌به‌چپ (RTL)

// افزونه‌ای برای مرورگر Chrome جهت نمایش صحیح متن‌های **فارسی**، **عربی** و **عبری** در وب‌سایت‌ها.

// این افزونه نمایش متون راست‌به‌چپ را بهبود می‌دهد؛ به‌ویژه زمانی که واژه‌های انگلیسی، اصطلاحات فنی، آدرس‌های اینترنتی یا کد برنامه‌نویسی در میان جملات فارسی، عربی یا عبری قرار گرفته باشند.

// توسعه‌دهنده: **Younes SHEIKHLAR**

// ## نصب (حالت توسعه‌دهنده)

// 1. آدرس `chrome://extensions` را در مرورگر Chrome باز کنید.
// 2. گزینه **Developer mode** را فعال کنید.
// 3. روی **Load unpacked** کلیک کنید.
// 4. پوشه افزونه را انتخاب کنید.
// 5. هر وب‌سایتی که دارای محتوای فارسی، عربی یا عبری باشد را باز کنید تا اصلاح خودکار اعمال شود.

// ## نحوه عملکرد

// * افزونه بلوک‌های متنی مانند پاراگراف‌ها، آیتم‌های فهرست، سلول‌های جدول و سایر بخش‌های متنی را بررسی می‌کند.
// * اگر تعداد کاراکترهای راست‌به‌چپ غالب باشد، تنظیمات زیر به‌صورت خودکار اعمال می‌شوند:

//   * `direction: rtl`
//   * `unicode-bidi: plaintext`
// * این کار باعث می‌شود مرورگر ترتیب صحیح نمایش متن‌های ترکیبی RTL و LTR را محاسبه کند.
// * بلوک‌های کد (`pre` و `code`) همواره چپ‌به‌راست باقی می‌مانند.
// * یک `MutationObserver` محتوای جدیدی را که به‌صورت پویا به صفحه اضافه می‌شود نیز بررسی و اصلاح می‌کند.

// ## تنظیمات

// با کلیک روی آیکون افزونه:

// * فعال یا غیرفعال کردن کلی افزونه
// * انتخاب زبان‌های مورد پردازش:

//   * فارسی
//   * عربی
//   * عبری

// تمام تغییرات بدون نیاز به بارگذاری مجدد صفحه اعمال می‌شوند.

// ## ساختار فایل‌ها

// | فایل                        | توضیح                              |
// | --------------------------- | ---------------------------------- |
// | `manifest.json`             | تعریف افزونه (Manifest V3)         |
// | `content.js`                | منطق تشخیص جهت متن و اصلاح DOM     |
// | `content.css`               | استایل‌های مربوط به متون اصلاح‌شده |
// | `popup.html`                | رابط کاربری تنظیمات                |
// | `popup.css`                 | استایل پنجره تنظیمات               |
// | `popup.js`                  | منطق پنجره تنظیمات                 |
// | `icons/`                    | آیکون‌های افزونه                   |
// | `_locales/fa/messages.json` | ترجمه فارسی افزونه                 |

// ## نکات

// ساختار HTML وب‌سایت‌ها ممکن است در طول زمان تغییر کند. این افزونه تا حد امکان از انتخابگرهای مقاوم و روش‌های جایگزین استفاده می‌کند.

// در صورتی که پس از به‌روزرسانی یک وب‌سایت، اصلاح جهت متن متوقف شود، ممکن است لازم باشد انتخابگرهای موجود در فایل `content.js` به‌روزرسانی شوند.

// ## زبان‌های پشتیبانی‌شده

// * فارسی
// * عربی
// * عبری

// در نسخه‌های آینده امکان افزودن زبان‌های راست‌به‌چپ دیگر نیز وجود خواهد داشت.

// ---

// **نویسنده:** Younes SHEIKHLAR
// **پروژه:** RTL Language Fix Extension
// **مجوز:** MIT


(() => {
  ("use strict");

  const STORAGE_KEY = "rtlFixSettings";
  const DEFAULT_SETTINGS = {
    enabled: true,
    targets: { fa: true, ar: true, he: true },
  };
  // Unicode character range for right-to-left languages
  // محدوده‌ی کاراکترهای یونیکد برای زبان‌های راست‌به‌چپ
  const RTL_RANGES = {
    fa: /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/,
    ar: /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/,
    he: /[\u0590-\u05FF]/,
  };
  const ANY_RTL =
    /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/;
  const ANY_LTR = /[A-Za-z]/;

  let settings = { ...DEFAULT_SETTINGS };
  let mutationObserver = null;
  let scheduled = false;

  // ---------- Load and sync settings ----------
  // ---------- بارگذاری و همگام‌سازی تنظیمات ----------

  function loadSettings() {
    return new Promise((resolve) => {
      chrome.storage.sync.get([STORAGE_KEY], (result) => {
        const stored = result[STORAGE_KEY];
        settings = stored
          ? { ...DEFAULT_SETTINGS, ...stored }
          : { ...DEFAULT_SETTINGS };
        resolve(settings);
      });
    });
  }

  chrome.storage.onChanged.addListener((changes) => {
    if (changes[STORAGE_KEY]) {
      settings = { ...DEFAULT_SETTINGS, ...changes[STORAGE_KEY].newValue };
      applyOrRevertAll();
    }
  });
  // ---------- Detect text direction ----------
  // ---------- تشخیص جهت متن ----------
  /**
   * Determines the direction of a text string based on the strong character count.
   * Returns: "rtl" | "ltr" | null (if not enough strong characters)
   */

  /**
   * جهت یک رشته متن را بر اساس شمارش کاراکترهای قوی تشخیص می‌دهد.
   * برمی‌گرداند: "rtl" | "ltr" | null (اگر کاراکتر قوی کافی نباشد)
   */
  function detectDirection(text) {
    if (!text || !ANY_RTL.test(text)) return null;
    if (!isAnyTargetEnabled()) return null;

    let rtlCount = 0;
    let ltrCount = 0;
    for (const ch of text) {
      if (ANY_RTL.test(ch)) rtlCount++;
      else if (ANY_LTR.test(ch)) ltrCount++;
    }
    if (rtlCount === 0) return null;
    // If the RTL share is at least equal to LTR, we consider the block to be RTL.
    // This threshold allows a sentence that starts with an English word
    // but has a Persian body to still be recognized correctly.
    // اگر سهم RTL حداقل برابر LTR باشد، بلوک را RTL در نظر می‌گیریم.
    // این آستانه باعث می‌شود جمله‌ای که با کلمه انگلیسی شروع می‌شود
    // ولی بدنه‌اش فارسی است، همچنان درست تشخیص داده شود.
    return rtlCount >= ltrCount * 0.4 ? "rtl" : "ltr";
  }

  function isAnyTargetEnabled() {
    return settings.targets.fa || settings.targets.ar || settings.targets.he;
  }

  // ---------- Select target blocks ----------
  // ---------- انتخاب بلوک‌های هدف ----------
  // Persistent and semantic selectors (not hashed classes) for message bubbles.
  // Generic fallback based on the message's role in the DOM is covered.
  // سلکتورهای پایدار و معنایی (نه کلاس‌های هش‌شده) برای حباب‌های پیام.
  // fallback عمومی بر اساس نقش پیام در DOM پوشش داده شده.
  const MESSAGE_CONTAINER_SELECTOR = [
    '[role="article"]',
    '[data-testid*="message"]', 
    '[data-testid*="chat"]', 
    "form",
    ".messages-container",
  ].join(", ");

  // Block-level elements that should each take their own independent direction
  // عناصر سطح‌بلوک که هر کدام باید جهت مستقل خودشان را بگیرند
  const BLOCK_SELECTOR =
    "p, li, h1, h2, h3, h4, h5, h6, td, th, blockquote, dd, dt, textarea, input[type='text']";

  function getBlockElements(root) {
    const blocks = [];
    if (matchesBlock(root)) blocks.push(root);
    root.querySelectorAll(BLOCK_SELECTOR).forEach((el) => blocks.push(el));
    return blocks;
  }

  function matchesBlock(el) {
    return el instanceof HTMLElement && el.matches(BLOCK_SELECTOR);
  }

  function isInsideCodeBlock(el) {
    return !!el.closest("pre, code");
  }

  // ---------- اعمال / حذف استایل ----------

  const MARK_ATTR = "data-rtlfix";

  function applyToBlock(el) {
    if (isInsideCodeBlock(el)) return;
    const text = el.textContent;
    const dir = detectDirection(text);

    if (dir === "rtl") {
      el.setAttribute(MARK_ATTR, "rtl");
      el.style.direction = "rtl";
      el.style.unicodeBidi = "plaintext";
      el.style.textAlign = "start";
    } else if (el.hasAttribute(MARK_ATTR)) {
      revertBlock(el);
    }
  }

  function revertBlock(el) {
    el.removeAttribute(MARK_ATTR);
    el.style.direction = "";
    el.style.unicodeBidi = "";
    el.style.textAlign = "";
  }

  function processContainer(container) {
    if (!(container instanceof HTMLElement)) return;
    getBlockElements(container).forEach(applyToBlock);
  }

  function applyAll() {
    if (!settings.enabled) return;
    document
      .querySelectorAll(MESSAGE_CONTAINER_SELECTOR)
      .forEach(processContainer);
    // در صورتی که سلکتورهای فوق ساختار فعلی صفحه را پوشش ندهند،
    // یک پویش عمومی هم روی ناحیه‌ی اصلی محتوای صفحه انجام می‌شود.
    const main = document.querySelector("main") || document.body;
    processContainer(main);
  }

  function revertAll() {
    document.querySelectorAll(`[${MARK_ATTR}]`).forEach(revertBlock);
  }

  function applyOrRevertAll() {
    if (settings.enabled) applyAll();
    else revertAll();
  }

  // ---------- اجرای بهینه با debounce روی تغییرات DOM ----------

  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      if (settings.enabled) applyAll();
    });
  }

  function startObserving() {
    if (mutationObserver) return;
    mutationObserver = new MutationObserver((mutations) => {
      let nodesToProcess = [];

      for (const m of mutations) {
        // اگر متن داخل یک Node تغییر کرد
        if (m.type === "characterData") {
          const parent = m.target.parentElement;
          if (parent) nodesToProcess.push(parent);
        }
        // اگر المان‌های جدیدی اضافه شدند
        else if (m.type === "childList" && m.addedNodes.length) {
          m.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              nodesToProcess.push(node);
            }
          });
        }
      }

      if (nodesToProcess.length > 0) {
        requestAnimationFrame(() => {
          nodesToProcess.forEach((node) => {
            // فقط المان جدید و فرزندانش پردازش می‌شوند، نه کل body!
            processContainer(node);
          });
        });
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  // ---------- شروع start ----------

  async function init() {
    await loadSettings();
    applyOrRevertAll();
    startObserving();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
