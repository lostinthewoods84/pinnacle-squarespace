// src/js/site.js
(function () {

    function mount(targetId, html) {
        const target = document.getElementById(targetId);
        if (!target) return false;
        target.innerHTML = html;
        return true;
    }

    function tryRenderHome() {
        const templates = window.PINNACLE_TEMPLATES || {};

        // Home page placeholder in Squarespace should be: <div id="pinnacle-home"></div>
        // This will replace that placeholder's contents with the full template.
        if (!templates.home) {
            return false;
        }

        return mount("pinnacle-home", templates.home());
    }

    function renderHomeWhenReady() {
        if (tryRenderHome()) {
            return;
        }

        const observer = new MutationObserver(() => {
            if (tryRenderHome()) {
                observer.disconnect();
            }
        });

        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        }

        setTimeout(() => observer.disconnect(), 10000);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderHomeWhenReady, { once: true });
    } else {
        renderHomeWhenReady();
    }
})();
