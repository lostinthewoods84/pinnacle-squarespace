// src/js/site.js
(function () {
    const templates = window.PINNACLE_TEMPLATES || {};

    function mount(targetId, html) {
        const target = document.getElementById(targetId);
        if (!target) return false;
        target.innerHTML = html;
        return true;
    }

    // Home page placeholder in Squarespace should be: <div id="pinnacle-home"></div>
    // This will replace that placeholder's contents with the full template.
    if (templates.home) {
        mount("pinnacle-home", templates.home());
    }
})();