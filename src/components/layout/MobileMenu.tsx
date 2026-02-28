"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll when menu is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Slide-in menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <button
            onClick={onClose}
            className="self-end mb-8 p-2 hover:bg-foreground/5 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-lg font-medium py-3 px-4 rounded-lg hover:bg-foreground/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Button href="/challenge" size="lg" className="w-full">
              Take the Challenge
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
