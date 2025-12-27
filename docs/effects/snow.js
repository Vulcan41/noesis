// effects/snow.js
(() => {
    // If a page doesn't define this, default OFF
    const enabled = (window.ENABLE_SNOW === true);
    if (!enabled) return;

    // Create container
    const snow = document.createElement("div");
    snow.className = "snow";
    snow.setAttribute("aria-hidden", "true");

    // You can tweak these from the page:
    // window.SNOW_COUNT, window.SNOW_SYMBOLS
    const COUNT = Number.isFinite(window.SNOW_COUNT) ? window.SNOW_COUNT : 26;
    const SYMBOLS = Array.isArray(window.SNOW_SYMBOLS) && window.SNOW_SYMBOLS.length
    ? window.SNOW_SYMBOLS
    : ["❄", "✻", "✼", "❅"];

    const rand = (min, max) => Math.random() * (max - min) + min;

    for (let i = 0; i < COUNT; i++) {
        const flake = document.createElement("span");
        flake.className = "flake";
        flake.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

        // CSS variables (randomized)
        flake.style.setProperty("--x", `${rand(0, 100).toFixed(2)}vw`);
        flake.style.setProperty("--s", `${rand(14, 26).toFixed(0)}px`);
        flake.style.setProperty("--o", `${rand(0.18, 0.55).toFixed(2)}`);
        flake.style.setProperty("--t", `${rand(10, 20).toFixed(1)}s`);
        flake.style.setProperty("--sw", `${rand(3.2, 6.0).toFixed(1)}s`);
        flake.style.setProperty("--dx", `${rand(10, 44).toFixed(0)}px`);
        flake.style.setProperty("--d", `${(-rand(0, 20)).toFixed(1)}s`);

        snow.appendChild(flake);
    }

    document.body.appendChild(snow);

    // Ensure your login card stays above the snow
    const wrap = document.querySelector(".wrap");
    if (wrap) {
        wrap.style.position = "relative";
        wrap.style.zIndex = "1";
    }
})();
