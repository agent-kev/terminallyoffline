"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

// Pages with full hero images get the transparent header overlay
const HERO_ROUTES = ["/", "/challenge", "/passport", "/gallery", "/teams", "/shop", "/about"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const hasHero = HERO_ROUTES.includes(pathname);
  // On pages without a hero, always show the solid header
  const solid = scrolled || !hasHero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          solid
            ? "bg-background/95 backdrop-blur-lg border-b border-foreground/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-display text-xl sm:text-2xl tracking-tight transition-colors ${
              solid ? "text-foreground" : "text-white"
            }`}
          >
            Terminally Offline
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${
                    solid
                      ? isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground/65 hover:text-foreground hover:bg-foreground/5"
                      : isActive
                      ? "text-white bg-white/15"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle scrolled={solid} />
            <Button
              href="/challenge"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Take the Challenge
            </Button>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${
                solid ? "hover:bg-foreground/5" : "hover:bg-white/10"
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke={solid ? "currentColor" : "white"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
