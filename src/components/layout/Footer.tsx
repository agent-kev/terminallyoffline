import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-volcanic text-cloud">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-cloud/10 to-transparent" />

      <Container size="xl">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-display text-2xl">
              Terminally Offline
            </Link>
            <p className="mt-4 text-cloud/50 text-sm leading-relaxed max-w-xs">
              Encouragement to disconnect. From Aotearoa, New Zealand.
            </p>
            <p className="mt-3 text-cloud/50 text-xs leading-relaxed max-w-xs font-mono tracking-wide">
              Tag out from digital. Tag in to real.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-cloud/50 mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cloud/60 hover:text-cloud transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-cloud/50 mb-4">
              Connect
            </p>
            <nav className="flex flex-col gap-2.5">
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cloud/60 hover:text-cloud transition-colors w-fit"
              >
                X / Twitter
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cloud/60 hover:text-cloud transition-colors w-fit"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cloud/60 hover:text-cloud transition-colors w-fit"
              >
                TikTok
              </a>
              <a
                href="mailto:hello@terminallyoffline.club"
                className="text-sm text-cloud/60 hover:text-cloud transition-colors w-fit"
              >
                Email Us
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-cloud/50 mb-4">
              Legal
            </p>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/privacy"
                className="text-sm text-cloud/60 hover:text-cloud transition-colors w-fit"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-cloud/60 hover:text-cloud transition-colors w-fit"
              >
                Terms of Use
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-cloud/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cloud/50">
            &copy; {new Date().getFullYear()} Terminally Offline. Made in Aotearoa.
          </p>
          <p className="text-[10px] text-cloud/50 font-mono tracking-wider">
            Built offline, obviously.
          </p>
        </div>
      </Container>
    </footer>
  );
}
