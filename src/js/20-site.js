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
    if (templates.home) {
      mount(".pinnacle-home", templates.home());
    }
  }

  // --- Mobile Bottom Tab Bar (site-wide) ---
  function injectMobileBottomNav() {
    // Prevent duplicates (Squarespace can re-render / edit mode)
    if (document.querySelector(".prt-mobile-quicklinks")) return;

    const homeHref = "/";
    const racesHref = "/races";
    const resultsHref = "/results";

    const bar = document.createElement("nav");
    bar.className = "prt-mobile-quicklinks";
    bar.setAttribute("aria-label", "Primary navigation");

    // Simple inline icons (optional but looks more “app-like”)
    bar.innerHTML = `
      <a class="prt-ql prt-ql--home" href="${homeHref}" aria-label="Home">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        </svg>
        <span>Home</span>
      </a>

      <a class="prt-ql prt-ql--races" href="${racesHref}" aria-label="Races">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 20V10m10 10V6M3 20h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M7 10c0-3 2-5 5-5s5 2 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>Races</span>
      </a>

      <a class="prt-ql prt-ql--results" href="${resultsHref}" aria-label="Results">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 6h13M8 12h13M8 18h13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M3 6l1 1 2-2M3 12l1 1 2-2M3 18l1 1 2-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Results</span>
      </a>
    `;

    // Put at end of body (fixed bottom, site-wide)
    document.body.appendChild(bar);

    // Let CSS reserve bottom padding for #page
    document.documentElement.classList.add("prt-has-bottomnav");
  }

  function setBottomNavActiveState() {
    const bar = document.querySelector(".prt-mobile-quicklinks");
    if (!bar) return;

    const path = (window.location.pathname || "/").toLowerCase();

    const home = bar.querySelector(".prt-ql--home");
    const races = bar.querySelector(".prt-ql--races");
    const results = bar.querySelector(".prt-ql--results");

    [home, races, results].forEach((el) => el && el.classList.remove("is-active"));

    // Home: treat "/" and "/home" as home
    if (path === "/" || path.startsWith("/home")) {
      if (home) home.classList.add("is-active");
      return;
    }

    if (path.startsWith("/races")) {
      if (races) races.classList.add("is-active");
      return;
    }

    if (path.startsWith("/results")) {
      if (results) results.classList.add("is-active");
      return;
    }
  }

  function init() {
    injectMobileBottomNav();
    setBottomNavActiveState();

    // Only affects home if .pinnacle-home exists
    renderHome();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

})();