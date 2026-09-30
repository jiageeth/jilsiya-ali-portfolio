"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // The inline script in layout.tsx sets the class before paint; sync React state with it.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
