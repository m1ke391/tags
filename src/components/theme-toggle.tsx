"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("reviewtap-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar entre modo claro e modo escuro"
      className="inline-flex size-10 items-center justify-center rounded-full text-ink transition hover:bg-card"
    >
      <Sun className="hidden size-[18px] dark:block" />
      <Moon className="size-[18px] dark:hidden" />
    </button>
  );
}
