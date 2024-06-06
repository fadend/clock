(function () {
    [...document.querySelectorAll('.clock-element')].map(e => {
        setInterval(() => { e.textContent = new Date().toString(); }, 200);
    });
})();