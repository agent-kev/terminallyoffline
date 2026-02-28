# Terminally Offline — Project Guide

## What This Is
An ethical, non-profit digital wellness project at terminallyoffline.club. Encouragement to disconnect. No monetization, no products, no corporate programmes — just a beautiful website with ideas for putting your phone down, a journal, and an email subscribe.

## Tech Stack
- **Framework**: Next.js 16+ with App Router, `src/` directory, TypeScript
- **Styling**: Tailwind CSS v4 with `@theme inline` design tokens in `globals.css`
- **MDX**: `@next/mdx` for journal articles (no frontmatter — uses `export const metadata`)
- **Email**: Resend SDK (lazy `getResend()` in `src/lib/resend.ts`), branded HTML template in `src/lib/email-templates.ts`
- **Themes**: `next-themes` with `class` strategy
- **Analytics**: Plausible (privacy-friendly, no cookies)

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
- Forms use Server Actions with `useActionState` (subscribe)
- Hero images from Unsplash via `next/image` remote patterns
- Journal articles in `src/content/journal/*.mdx` with `export const metadata = {...}`
- Components: `src/components/ui/` (primitives), `src/components/layout/` (header/footer), `src/components/sections/` (page sections), `src/components/journal/` (blog)
- No CMS — all content is in code or MDX files
- All `<label>` elements must use `htmlFor` with matching `id` on inputs
- Decorative SVGs get `aria-hidden="true"`

## Routes
| Path | Purpose |
|------|---------|
| `/` | Homepage (hero, manifesto, subscribe) |
| `/disconnect` | Gentle invitation to disconnect (ideas grid, tag-out concept, FAQ) |
| `/journal` | Blog index (2 articles) |
| `/journal/[slug]` | Blog articles (with share buttons + per-article OG image) |
| `/about` | Origin story, manifesto, values (4) |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |
| `/api/subscribe` | Email signup (Resend audience + welcome email) |
| `/journal/feed.xml` | RSS feed |

## SEO & Structured Data
- **OG images**: Every page + every journal article has a dedicated `opengraph-image.tsx` using `src/lib/og-image.tsx`
- **JSON-LD**: Organization (layout), FAQPage (disconnect)
- **Twitter cards**: `summary_large_image` configured in root metadata
- **Sitemap**: `src/app/sitemap.ts` — all pages + dynamic journal slugs
- **Robots**: `src/app/robots.ts` — allows all except `/api/`
- **RSS**: `src/app/journal/feed.xml/route.ts`

## Security
- **CSP header** in `vercel.json` — restricts scripts, images, frames, objects
- **Security headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- **Input validation**: Zod schema on subscribe API input
- **No user-generated content** rendered in the browser

## Journal Articles (2)
| Slug | Topic |
|------|-------|
| `why-we-built-this` | Honest origin story, acknowledges the irony |
| `your-brain-on-boredom` | DMN neuroscience, real citations, accessible tone |

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
npm run build   # Production build
npm run lint    # ESLint
```

## Brand Concept
**Tag out / Tag in** — borrowed from wrestling. Tag out from digital, tag in to real. Not about quitting technology — about choosing when you engage with it.

## Social
- X / Twitter: @termoffline
- Instagram: @terminallyoffline
- TikTok: @terminallyoffline

## Running Cost
$0 — Vercel free tier + Resend free tier.
