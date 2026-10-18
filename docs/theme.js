(function () {
  const storageKey = "boprcManualTheme";
  const root = document.documentElement;
  const systemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const savedTheme = () => {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "dark" || value === "light" ? value : null;
    } catch (error) {
      return null;
    }
  };

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const button = document.querySelector(".theme-toggle");
    if (button) {
      const nextTheme = theme === "dark" ? "light" : "dark";
      button.textContent = theme === "dark" ? "☀ Light" : "☾ Dark";
      button.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
      button.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  applyTheme(savedTheme() || systemTheme());

  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("header.site nav");
    if (!nav || nav.querySelector(".theme-toggle")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem(storageKey, nextTheme); } catch (error) {}
      applyTheme(nextTheme);
    });
    nav.appendChild(button);
    applyTheme(root.dataset.theme || systemTheme());
  });

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener?.("change", event => {
    if (!savedTheme()) applyTheme(event.matches ? "dark" : "light");
  });
})();
