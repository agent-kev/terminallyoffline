# Terminally Offline — Project Guide

## What This Is
A New Zealand-rooted digital wellness brand at terminallyoffline.club. The 30-Day Offline Challenge encourages people to reduce screen time. The website is the public face: marketing pages, blog (7 articles), email capture, teams programme, shop, and Offline Passport (soulbound NFT on Base).

## Tech Stack
- **Framework**: Next.js 16+ with App Router, `src/` directory, TypeScript
- **Styling**: Tailwind CSS v4 with `@theme inline` design tokens in `globals.css`
- **MDX**: `@next/mdx` for journal articles (no frontmatter — uses `export const metadata`)
- **Email**: Resend SDK (lazy `getResend()` in `src/lib/resend.ts`), branded HTML templates in `src/lib/email-templates.ts`
- **Themes**: `next-themes` with `class` strategy
- **Analytics**: Plausible (privacy-friendly, no cookies)
- **Blockchain**: Soulbound ERC-721 on Base L2 (metadata API at `/api/passport/`)

## Design System
Brand colors defined in `globals.css` `:root`:
- Cloud `#F0EDE8`, Volcanic `#1A1A1A`, Bush `#254636`
- Emerald Lakes `#1B998B`, Pounamu `#2D6A4F`, Tui `#1C3144`
- Pohutukawa `#893C3F`, Milford `#BAB9A9`
- Primary (light): `#0E7566`, Primary (dark): `#22B8A7`

Semantic tokens resolve differently in `.dark` class. Use semantic names (`bg-primary`, `text-foreground`, `bg-surface`) not raw brand colors.

**Contrast rules** (WCAG AA — Lighthouse 100):
- Buttons: `bg-primary-button` (not raw emerald-lakes) — passes 4.5:1
- Body text: `text-foreground/65` minimum (not /60 — fails on cream)
- Footer text on volcanic: `text-cloud/50` minimum (not /30)
- Never use `text-primary/60` — use `text-foreground/65` instead

## Fonts
- **Display/Headings**: DM Serif Display (`font-display`)
- **Body**: DM Sans (`font-sans`)
- **Mono**: JetBrains Mono (`font-mono`)

## Key Conventions
- Server Components by default; `"use client"` only when needed
- Forms use Server Actions with `useActionState` (subscribe) or fetch + useState (contact)
- Hero images from Unsplash via `next/image` remote patterns
- Journal articles in `src/content/journal/*.mdx` with `export const metadata = {...}`
- Components: `src/components/ui/` (primitives), `src/components/layout/` (header/footer), `src/components/sections/` (page sections), `src/components/journal/` (blog), `src/components/shop/` (shop)
- No CMS — products, tiers, roadmap data are hardcoded arrays in page files
- HTML-escape all user input before injecting into email HTML (see `escapeHtml()` in contact route)
- All `<label>` elements must use `htmlFor` with matching `id` on inputs (Input component uses `useId()`)
- Decorative SVGs get `aria-hidden="true"`

## Routes
| Path | Purpose |
|------|---------|
| `/` | Homepage (hero, stats, how-it-works, countdown, manifesto, signup, testimonials) |
| `/challenge` | 30-Day Challenge (rules, weekly breakdown, benefits, FAQ) |
| `/passport` | Offline Passport + NFT tiers + roadmap |
| `/gallery` | Photo gallery (coming soon — blurred placeholder images) |
| `/journal` | Blog index (7 articles) |
| `/journal/[slug]` | Blog articles (with share buttons + per-article OG image) |
| `/teams` | Corporate programme + contact form |
| `/shop` | 10 curated products with affiliate links |
| `/about` | Origin story, manifesto, values, "Why NZ?" |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |
| `/api/subscribe` | Email signup (Resend audience + welcome email) |
| `/api/contact` | Teams enquiry (internal notification + confirmation email) |
| `/api/passport/metadata/[tokenId]` | ERC-721 metadata JSON |
| `/api/passport/image/[tier]` | Dynamic NFT tier images (next/og) |
| `/journal/feed.xml` | RSS feed |

## SEO & Structured Data
- **OG images**: Every page + every journal article has a dedicated `opengraph-image.tsx` using `src/lib/og-image.tsx`
- **JSON-LD**: Organization (layout), Article (journal posts), FAQPage (challenge), ItemList/Product (shop)
- **Twitter cards**: `summary_large_image` configured in root metadata
- **Sitemap**: `src/app/sitemap.ts` — all pages + dynamic journal slugs
- **Robots**: `src/app/robots.ts` — allows all except `/api/`
- **RSS**: `src/app/journal/feed.xml/route.ts`

## Security
- **CSP header** in `vercel.json` — restricts scripts, images, frames, objects
- **Security headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- **Input validation**: Zod schemas on all API inputs
- **HTML escaping**: User input escaped before email HTML injection
- **No user-generated content** rendered in the browser

## Journal Articles (7)
| Slug | Topic |
|------|-------|
| `the-case-for-boredom` | Science of boredom + Default Mode Network |
| `your-phone-is-not-a-tool` | Reframing "phone as tool" argument |
| `30-days-offline-what-i-learned` | First-person challenge narrative |
| `the-dopamine-economy` | Variable reward schedules + notification design |
| `a-beginners-guide-to-digital-minimalism` | 5-step practical framework |
| `screen-time-statistics-2026` | Data-heavy stats article (SEO) |
| `what-is-a-digital-detox` | Evergreen guide (SEO) |

## Environment Variables
```
RESEND_API_KEY=           # Required for email
RESEND_AUDIENCE_ID=       # Required for subscriber list
RESEND_FROM_EMAIL=        # Required for sending (e.g. hello@terminallyoffline.club)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=  # Optional analytics
```

## Commands
```bash
npm run dev     # Start dev server (Turbopack) — localhost:3000
npm run build   # Production build (expect ~40 static routes)
npm run lint    # ESLint
```

## Pre-Deploy Checklist (Kevin)
- [ ] Resend: create account, verify domain, create audience, get API key
- [ ] GitHub: create repo, push code
- [ ] Vercel: connect repo, set env vars, deploy
- [ ] DNS: point terminallyoffline.club to Vercel
- [ ] Plausible: set up, add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- [ ] Social: create @terminallyoffline on Instagram + TikTok
- [ ] Shop: replace placeholder affiliate URLs with real ones
- [ ] Photography: source original NZ images for heroes
