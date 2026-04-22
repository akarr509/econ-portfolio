"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "projects", href: "#projects" },
  { label: "research", href: "#research" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
      }}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          AK
        </a>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:opacity-60"
              style={{ color: "var(--fg-muted)" }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md p-1.5 transition-opacity hover:opacity-60"
            aria-label="Toggle theme"
            style={{ color: "var(--fg-muted)" }}
          >
            {mounted ? (
              theme === "dark" ? <Sun size={16} /> : <Moon size={16} />
            ) : (
              <div className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
