// src/js/20-site.js
(function () {

  function mount(targetSelector, html) {
    const target = document.querySelector(targetSelector);
    if (!target) return false;
    target.innerHTML = html;
    return true;
  }

  function renderHome() {
    const templates = window.PINNACLE_TEMPLATES || {};

    // Home page placeholder in Squarespace should be: <div class="pinnacle-home"></div>
    if (templates.home) {
      mount(".pinnacle-home", templates.home());
    }
  }

  // --- Mobile Quick Links (site-wide) ---
  function injectMobileQuickLinks() {
    // prevent duplicates (Squarespace can re-render / edit mode)
    if (document.querySelector(".prt-mobile-quicklinks")) return;

    // TODO: update these if your slugs differ
    const racesHref = "/races";
    const resultsHref = "/results";

    const bar = document.createElement("nav");
    bar.className = "prt-mobile-quicklinks";
    bar.setAttribute("aria-label", "Quick links");
    bar.innerHTML = `
      <a class="prt-ql prt-ql--races" href="${racesHref}">Races</a>
      <a class="prt-ql prt-ql--results" href="${resultsHref}">Results</a>
    `;

    // Insert directly after Squarespace header (best UX)
    const header =
      document.querySelector("header.Header") ||
      document.querySelector(".Header") ||
      document.querySelector("header");

    if (header) {
      header.insertAdjacentElement("afterend", bar);
    } else {
      // fallback: top of body
      document.body.insertAdjacentElement("afterbegin", bar);
    }
  }

  function init() {
    // Always run (site-wide)
    injectMobileQuickLinks();

    // Only affects home if .pinnacle-home exists
    renderHome();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();