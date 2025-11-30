import React from "react";
import { Link, Outlet } from "react-router-dom";
import ThemeSwitcher from "../theme/ThemeSwitcher";

export default function Layout(){
  return (
    <div className="min-h-screen">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Code Poetry Studio ✨</Link>

        <nav className="flex gap-4 items-center">
          <Link to="/studio" className="text-sm px-3 py-1 rounded-lg hover:opacity-90 transition">Studio</Link>
          <Link to="/gallery" className="text-sm px-3 py-1 rounded-lg hover:opacity-90 transition">Gallery</Link>
          <Link to="/about" className="text-sm px-3 py-1 rounded-lg hover:opacity-90 transition">About</Link>
          <ThemeSwitcher />
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <div className="glass p-6 rounded-2xl shadow-xl">
          <Outlet />
        </div>
      </main>

      <footer className="max-w-5xl mx-auto p-6 text-sm opacity-80">
        Built with ❤️ — Turn logic into poetry
      </footer>
    </div>
  );
}
