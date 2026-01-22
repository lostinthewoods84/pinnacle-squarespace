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
    // Prevent duplicates (Squarespace can re-render / edit mode)
    if (document.querySelector(".prt-mobile-quicklinks")) return;

    // Update these if your slugs differ
    const racesHref = "/races";
    const resultsHref = "/results";

    const bar = document.createElement("nav");
    bar.className = "prt-mobile-quicklinks";
    bar.setAttribute("aria-label", "Quick links");
    bar.innerHTML = `
      <a class="prt-ql prt-ql--races" href="${racesHref}">Races</a>
      <a class="prt-ql prt-ql--results" href="${resultsHref}">Results</a>
    `;

    // Best placement:
    // Put the bar right before the first Squarespace page section
    // so any internal "header spacer" doesn't sit between the bar and content.
    const page = document.querySelector("#page");
    if (page) {
      const firstSection =
        page.querySelector(".page-section") ||
        page.querySelector("main") ||
        page.querySelector("#siteWrapper") ||
        page.firstElementChild;

      if (firstSection) {
        firstSection.insertAdjacentElement("beforebegin", bar);
        return;
      }

      page.insertAdjacentElement("afterbegin", bar);
      return;
    }

    // Fallback: after header
    const header =
      document.querySelector("header.Header") ||
      document.querySelector(".Header") ||
      document.querySelector("header");

    if (header) {
      header.insertAdjacentElement("afterend", bar);
      return;
    }

    // Last resort: top of body
    document.body.insertAdjacentElement("afterbegin", bar);
  }

  function init() {
    injectMobileQuickLinks();
    renderHome();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();