// src/js/site.js
(function () {

    function mount(targetSelector, html) {
        const target = document.querySelector(targetSelector);  // Changed to querySelector
        if (!target) return false;
        target.innerHTML = html;
        return true;
    }

    function renderHome() {
        const templates = window.PINNACLE_TEMPLATES || {};

        // Home page placeholder in Squarespace should be: <div class="pinnacle-home"></div>
        if (templates.home) {
            mount(".pinnacle-home", templates.home());  // Changed to class selector
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderHome, { once: true });
    } else {
        renderHome();
    }
})();