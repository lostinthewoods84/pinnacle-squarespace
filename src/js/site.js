// src/js/site.js
(function () {

    function mount(targetId, html) {
        const target = document.getElementById(targetId);
        if (!target) return false;
        target.innerHTML = html;
        return true;
    }

    function renderHome() {
        const templates = window.PINNACLE_TEMPLATES || {};

        // Home page placeholder in Squarespace should be: <div id="pinnacle-home"></div>
        // This will replace that placeholder's contents with the full template.
        if (templates.home) {
            mount("pinnacle-home", templates.home());
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderHome, { once: true });
    } else {
        renderHome();
    }
})();
