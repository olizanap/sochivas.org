"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "La Sociedad",
    href: "/la-sociedad",
    children: [
      { label: "Quiénes Somos", href: "/la-sociedad" },
      { label: "Directorio", href: "/directorio" },
    ],
  },
  { label: "Agenda", href: "/agenda" },
  { label: "Noticias", href: "/noticias" },
  { label: "Extensión", href: "/extension" },
  { label: "Info. Pacientes", href: "/informacion-pacientes" },
  { label: "Webinars", href: "/webinars" },
  { label: "Contacto", href: "/contacto" },
  {
    label: "Convención 2026",
    href: "https://convencion2026.sochivas.cl",
    external: true,
    highlight: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled && "shadow-md"
      )}
    >
      <div className="container-site flex items-center justify-between h-16">
        <Logo compact={scrolled} />

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-[13px] font-semibold rounded-md transition-colors whitespace-nowrap",
                  item.highlight
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "text-navy hover:text-accent hover:bg-muted-light"
                )}
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </a>

              {item.children && openDropdown === item.label && (
                <ul className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-lg border border-gray-100 py-1 min-w-[200px] animate-in fade-in slide-in-from-top-1 duration-200">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-body hover:bg-muted-light hover:text-accent transition-colors"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <ul className="container-site py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                    item.highlight
                      ? "bg-accent text-white"
                      : "text-navy hover:bg-muted-light"
                  )}
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="pl-6 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-muted hover:text-accent"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
