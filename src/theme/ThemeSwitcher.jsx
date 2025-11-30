import React, { useEffect, useState } from "react";

const themes = {
  dark: { name: "Dark", className: "theme-dark" },
  neon: { name: "Neon", className: "theme-neon" },
  minimal: { name: "Minimal", className: "theme-minimal" },
  gold: { name: "Gold", className: "theme-gold" },
  retro: { name: "Retro", className: "theme-retro" },
};

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // apply theme class to html element; layout/background CSS chooses based on this class
    document.documentElement.classList.remove(...Object.keys(themes).map(k=>themes[k].className));
    document.documentElement.classList.add(themes[theme].className);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <select value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-white/10 px-2 py-1 rounded">
        {Object.entries(themes).map(([key, t]) => <option key={key} value={key}>{t.name}</option>)}
      </select>
    </div>
  );
  
}
