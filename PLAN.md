# Terminally Offline Club
## Full Business Plan v3 — Final

---

## 1. What This Is

**terminallyoffline.club** is a New Zealand-rooted digital wellness brand built around one thesis: the ultimate luxury in 2026 is being unreachable.

We are a **free-challenge-first brand** that helps people spend less time on screens — and cryptographically proves they did it. The challenge builds the audience. The identity, community, verified achievements, and ecosystem around it are the product.

The NZ angle isn't decorative. New Zealand is the last habitable landmass humans settled, the furthest you can get from everywhere, a place where you can still stand in ancient bush and hear nothing man-made. "Terminally offline" as a philosophy maps onto the NZ ethos of getting outside, into nature, away from noise.

**What makes this different from every other digital detox brand:**

1. **Cryptographic verification.** The first offline challenge where completion is provably real — hardware-attested, photo-anchored, optionally zero-knowledge-proven. Not self-reported.
2. **The Offline Gallery.** A feed of C2PA-signed photos taken during verified offline sessions. Provably real images from provably offline people. The anti-Instagram.
3. **The Offline Passport.** A cumulative, verifiable record of your offline life. Soulbound achievements that can't be faked or transferred.
4. **NZ as premium anchor.** Retreats in one of the world's most aspirational destinations. The 12-hour flight is the feature — you're literally unreachable.

---

## 2. The Market

### Why This Isn't a Fad

Three structural forces are reinforcing the offline movement simultaneously:

**Legislative:** 35 US states ban phones in schools. Australia banned social media for under-16s. The US Surgeon General called for tobacco-style warning labels on social media. Laws create infrastructure that outlasts trends.

**Cultural:** Gen Z (9 hrs/day avg screen time) is the first generation rebelling against the only reality they've ever known. 76% say they use phones too much. 52% attempted to quit social media in 2025. Oxford named "brain rot" its 2024 Word of the Year.

**Economic:** The digital detox market is projected to hit $5.4B by 2033 (12.8% CAGR). Digital detox apps: $0.4B today to $19.4B by 2032. Dumbphone sales surged 25% in 2025.

### Key Numbers

| Metric | Number |
|--------|--------|
| Gen Z avg daily screen time | 9 hours |
| Gen Z who feel digitally exhausted | 73% |
| Americans wanting to reduce phone use | 53% (up 33% from 2023) |
| Dumbphone sales growth (2025) | +25% |
| Digital detox market (2033 projected) | $5.4B |
| School phone bans (US states) | 35 + D.C. |
| Corporate wellness market (annual) | $13B+ |

### Competition

| Competitor | What They Do | Revenue | Our Differentiation |
|-----------|-------------|---------|---------------------|
| The Offline Club (Amsterdam) | Urban meetups, 16 cities | ~EUR 6M ARR (20K members) | They sell belonging to a tribe. We sell verified behavior change. They're Euro-urban. We're APAC-nature. |
| Yondr | Phone-locking pouches for schools/concerts | $50M+/yr | Hardware enforcement. We're voluntary + incentivized. Different market. |
| Opal | Screen time blocking app | $10M ARR | Software blocking. We're a lifestyle brand with cryptographic proof. |
| Forest App | Gamified phone non-use | 25M+ downloads | No verification, no community, no physical products. |
| Unplugged | Off-grid cabins (UK) | Growing | Retreat-only. No challenge, no community, no verification. |

**What nobody has:** Cryptographic verification of offline time, a provably-real photo feed, hardware-attested challenges, or Soulbound achievement tokens.

---

## 3. Visual Identity

### Design Language: "Mist Through Native Bush"

Not postcard tourism. The quieter, moodier NZ — silver fern understories, volcanic black sand, glacial teal, mist threading through valleys. The design should feel like standing in a NZ forest in light rain: quiet, grounded, alive.

### Color Palette

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| Cloud | `#F0EDE8` | 240, 237, 232 | Background (warm off-white, not sterile) |
| Volcanic Black | `#1A1A1A` | 26, 26, 26 | Primary text |
| Bush | `#254636` | 37, 70, 54 | Primary brand color (deep native green) |
| Emerald Lakes | `#1B998B` | 27, 153, 139 | Accent / CTAs / interactive |
| Pohutukawa | `#893C3F` | 137, 60, 63 | Warm accent (sparingly — alerts, emphasis) |
| Milford Mist | `#BAB9A9` | 186, 185, 169 | Secondary text, borders, muted elements |
| Pounamu | `#2D6A4F` | 45, 106, 79 | Dark mode primary (greenstone jade) |
| Tui | `#1C3144` | 28, 49, 68 | Dark mode background (deep blue-black) |

### Typography

- **Headings:** DM Serif Display — contemporary organic feel, literary weight
- **Body:** DM Sans — geometric but soft, highly readable
- **Mono accent:** JetBrains Mono — for metadata, timestamps, proof hashes, code-like elements (reinforces the crypto/verification angle without being techy)

### Design Principles

1. Generous whitespace — space is the luxury
2. Full-bleed NZ nature photography with minimal UI overlay
3. Organic flowing forms (inspired by, not copying, Maori kowhaiwhai patterns)
4. Dark mode as first-class citizen (Tui `#1C3144` background, Pounamu `#2D6A4F` accents)
5. Subtle nature micro-animations (mist drifting, fern unfurling) — calm, not flashy
6. Photography over illustration — let real NZ landscapes speak

---

## 4. Product Architecture

### The Flywheel

```
Free Challenge (acquisition)
    → Email List (nurture)
        → Paid Program (revenue)
            → Offline Passport stamps (retention + verification)
                → Offline Gallery photos (content + social proof)
                    → Referrals (growth)
                        → More Free Challenge signups
```

Every component feeds the next. The challenge builds the list. The list converts to paid. Paid members generate verified offline sessions. Sessions produce gallery photos. Photos attract new people. Referrals close the loop.

---

## 5. Component Breakdown

### COMPONENT 1: The Free 30-Day Challenge (Acquisition Engine)

**What:** "The 30-Day Offline Challenge" — free, open rules, anyone can participate. Clear daily requirements, pass/fail.

**Rules (v1 — refined with community feedback over time):**
- 1 hour phone-free each morning before checking anything
- 1 hour of intentional analog activity daily (reading, walking, cooking, journaling, etc.)
- No social media scrolling after 9pm
- Log your day (one tap in our minimal PWA, or reply "done" to daily email)

**How it makes money:** It doesn't, directly. It captures email addresses and builds habit. Based on challenge funnel research, free-to-paid conversion runs 20-40% when the challenge delivers real results.

**The funnel:**
1. Landing page → email capture (free challenge signup)
2. Daily emails for 30 days (tips, encouragement, community stories, streak tracking)
3. Day 7: introduce the Offline Passport concept ("your streaks could be verified")
4. Day 14: share Offline Gallery highlights from existing members
5. Day 30: offer the paid 90-day program ("You did 30 days. Ready to go deeper?")

**Incentive mechanics:**
- Streak tracking from Day 1 (users who hit 7-day streak are 3.6x more likely to complete — Duolingo data)
- Grace days built in (streak forgiveness reduces churn by 21%)
- Day 30 completers get a digital "First Stamp" badge for their Offline Passport
- Referral program active from Day 1: invite a friend, both get offline activity cards (PDF)

**Cost to build:** Website + email automation (ConvertKit/Resend). Near-zero marginal cost per participant.

**Why free:** Every successful model in this space makes the rules free. Whole30, 75 Hard, Dry January — the rules spread virally. People post about their streaks. The brand grows through participation, not advertising.

---

### COMPONENT 2: The Offline Passport (Verification System)

This is our core technical differentiator. No competitor has anything like it.

**What:** A cryptographic record of your offline life. Every verified offline session earns a "stamp." Stamps accumulate into a portable, verifiable achievement record.

**Each stamp contains:**
- Duration (verified by device attestation)
- Number of photos captured (C2PA-signed, hashed into Merkle tree)
- Confidence level (low/medium/high based on signals available)
- Optional: one revealed "postcard" photo
- ZK proof binding it all together (Phase 5+)

**How verification works (phased rollout):**

#### Phase 1 — Honor System + Device Monitoring (Launch)
- PWA tracks screen-off time and connectivity state
- Daily check-in: one tap or email reply
- Streak maintained by consistent check-ins
- Trust level: Low (self-reported with basic device data)

#### Phase 2 — Hardware Attestation (Month 2-3)
- Native app with Apple App Attest / Google Play Integrity
- Proves claims come from genuine, unmodified hardware
- App monitors screen state, network connectivity, touch events
- When user "comes back online," app generates hardware-signed attestation
- Trust level: Medium (genuine hardware ran the claim)

#### Phase 3 — Photo-Anchored Proof (Month 3-4)
- Integration with ProofMode (open-source C2PA camera by Guardian Project)
- Users take C2PA-signed photos during offline sessions
- Each photo gets: cryptographic timestamp, GPS, device signature, tamper-evident hash
- Photo hashes collected into Merkle tree; root committed with attestation
- Trust level: Medium-High (hardware-signed photos as corroborating evidence)

#### Phase 4 — Merkle Collections + Selective Reveal (Month 4-5)
- Users choose which photos to share with the community
- Merkle proofs allow revealing individual photos without exposing the full set
- "I captured 7 photos during my 4-hour offline session. Here's one: me reading in the park."

#### Phase 5 — Zero-Knowledge Proofs (Month 6+)
- On-device Noir ZK circuit (via Mopro mobile prover, ~5s proof generation)
- Proves: "I have N C2PA-signed photos with timestamps within [start, end], and my device was idle during this period"
- WITHOUT revealing: photos, locations, exact timestamps, or device identity
- Verification: 5.6 milliseconds
- Trust level: High (cryptographic soundness + hardware attestation + photo evidence)

#### Phase 6 — On-Chain Achievements (Month 6+)
- Soulbound Tokens via EAS (Ethereum Attestation Service) on Base/Optimism
- Cost: <$0.01 per attestation on L2
- Non-transferable, permanently verifiable achievement record
- "I have a verified 365-day Offline Passport" becomes an unfakeable credential

**Technical stack for Passport:**
- iOS/Android: Native app (React Native or Swift/Kotlin)
- Device attestation: Apple App Attest + Google Play Integrity API
- Photo verification: ProofMode integration (C2PA via c2pa-rs)
- Merkle trees: Client-side hash computation (SHA-256)
- ZK proofs: Noir circuits compiled via Mopro for mobile
- On-chain: EAS SDK on Base (OP Stack, <$0.01 per attestation)
- No blockchain required for Phases 1-5. Phase 6 is optional layer.

---

### COMPONENT 3: The Offline Gallery (Content Product)

**What:** A curated feed of C2PA-signed photos taken during verified offline sessions. Provably real images from provably offline people.

**Why this matters in 2026:** In a world drowning in AI-generated images, filtered Instagram, and synthetic content, a feed of *cryptographically verified real photos from people who were provably offline* is a genuinely novel content proposition. It's the anti-Instagram.

**How it works:**
1. During offline sessions, users take photos with ProofMode (C2PA-signed)
2. After the session, users choose which photos to share
3. Each shared photo displays:
   - "Verified offline session: 4h 12m"
   - "Photo authenticity: C2PA signed, unmodified"
   - The user's Offline Passport level
   - Optional caption
4. No filters. No edits (C2PA tracks modifications). Raw, real life.
5. Community can appreciate/save photos (minimal interaction — we're not building another feed addiction)

**How it makes money:**
- The Gallery is the content that attracts new users (SEO, social sharing, press coverage)
- "Provably real photos" is a press-worthy concept in 2026
- Gallery access is free (acquisition). Creating + sharing requires at least the free challenge (email capture)
- Featured gallery collections could become physical products (prints, zines, books)

**Design considerations:**
- Deliberately slow. No infinite scroll. No algorithmic feed. Curated collections, updated weekly.
- Grid layout with generous spacing. Each photo given room to breathe.
- Metadata displayed: verification status, offline duration, passport level. No likes, no follower counts.

---

### COMPONENT 4: The Paid 90-Day Program ($99-149)

**What:** "Going Deeper" — a structured 90-day transformation program. This is what the free challenge upsells to.

**Includes:**
- Accountability pod (group of 5-6 matched by timezone and goals)
- Weekly async check-ins (one voice memo — not a forum to scroll)
- Monthly 30-min video call with pod
- Physical welcome kit (posted once: journal, offline activity cards, branded patch, ProofMode setup guide)
- "The Offline Playbook" digital guide
- Full Offline Passport access (hardware attestation + photo verification)
- Access to the Offline Gallery (create + share)

**How it makes money:**
- $99-149 per participant
- Physical kit COGS: ~$15-20 (fulfilled from US/AU via 3PL, not NZ)
- Digital delivery: ~$0.50 (payment processing)
- Margin: 75-85%
- At 25% conversion from free challenge: 1,000 free → 250 paid → $25-37K
- Steady state at 200 participants/month: $20-30K/month

**Why cohort-based, not open community:**
- Cohort retention: 89% Week 1 to Week 2 (vs. 6% for self-paced — Maven/a16z data)
- Defined 90-day program with start and end (not open-ended subscription where success = churn)
- Pod accountability creates real social bonds
- After 90 days, graduates can:
  - Re-enroll in a new cohort (repeat revenue)
  - Become a Pod Leader (creator incentive — see Component 7)
  - Join alumni tier ($9.99/mo or $99/year annual — lighter touch, Passport + Gallery access)

**Annual billing incentive:** Annual alumni ($99/year) get a physical "Year One" Passport stamp artifact. Annual subscribers retain at 33.9% at 12 months vs 13.8% for monthly (RevenueCat data).

---

### COMPONENT 5: Offline October (Annual Flagship Event)

**What:** A branded annual challenge month. Free to participate, with a paid premium tier. Like Dry January or Movember, but for going offline.

**Why October:** Northern hemisphere autumn, back-to-routine energy, pre-holiday detox positioning. Avoids January (crowded with fitness/diet). "Offline October" has natural alliteration.

**Structure:**

| Tier | Price | Includes |
|------|-------|----------|
| Free | $0 | Rules, daily email prompts, basic streak tracking, community hashtag |
| Verified | $49 | Everything free + Offline Passport verification + Offline Gallery access + completion Soulbound Token |
| Premium | $99 | Everything verified + accountability pod + weekly challenges + exclusive completion merch |
| Corporate | $3-5K per team | Team dashboard, facilitation guide, branded challenge, results report, PR-ready case study |

**Revenue projections:**

| Stream | Year 1 (Conservative) | Year 2+ (Growth) |
|--------|----------------------|-------------------|
| Verified tier (1K people x $49) | $49,000 | — |
| Verified tier (5K people x $49) | — | $245,000 |
| Premium tier (200 x $99) | $19,800 | — |
| Premium tier (1K x $99) | — | $99,000 |
| Corporate packages (10 x $3K) | $30,000 | — |
| Corporate packages (50 x $5K) | — | $250,000 |
| Sponsorships (3 x $5K) | $15,000 | — |
| Sponsorships (10 x $15K) | — | $150,000 |
| Completion merch | $5,000 | $30,000 |
| **Event total** | **$118,800** | **$774,000** |

**The verification angle is the killer feature:** Offline October is the first challenge where completion is cryptographically proven. When participants share their Soulbound Token showing "30 days verified offline in October 2026," it's not a self-reported Instagram story — it's a hardware-attested, photo-anchored, on-chain achievement.

**Incentive mechanics:**
- Completion merch is ONLY available to verified completers (scarcity + social proof)
- Charity staking option: stake $25-100, refunded on completion, donated to children's mental health charity on failure (stickK model — $42M staked by 465K users proves demand)
- Corporate leaderboards: teams compete, winning team gets featured case study
- Early bird pricing for returning participants (retention)
- "Offline October Ambassador" program: past completers recruit others, earn tiered rewards

---

### COMPONENT 6: Corporate Programs

**What:** "Digital Wellness Programs" sold to businesses. Not one-off talks — structured engagements with verifiable outcomes.

**The package (6-week engagement):**
1. Week 1: Team assessment + kickoff workshop ($2,500 standalone)
2. Weeks 2-5: Weekly micro-challenges via email/Slack + Offline Passport tracking
3. Week 6: Results review + executive summary with **verified data** (aggregate team offline hours, completion rates, photo gallery of team activities)
4. Price: $8,000-15,000 per team engagement

**Why verification matters for corporate:**
- HR buyers need ROI data. "73% of participants completed the challenge" is good. "73% of participants have hardware-verified completion with an average of 4.2 verified offline hours per day" is a different conversation.
- Every $1 invested in wellness returns $3.27 in medical costs + $2.73 in absenteeism savings
- Only 26% of organizations currently address digital wellbeing — massive whitespace
- 77% of employees would consider leaving a company that doesn't prioritize wellbeing

**Revenue:**
- $8-15K per engagement, 85-95% margin
- Start local (NZ), expand to AU/UK/US via remote delivery
- 2 engagements/month = $16-30K/month
- Corporate clients become Offline October sponsors (bundle: workshop + sponsorship at $12-20K)

**Path to first dollar:** Cold outreach to 50 NZ HR directors. Free 30-minute lunch-and-learn. Convert to paid. First gig in 3-6 months.

**Scaling beyond personal hours:** Build a Facilitator Certification program. Certified facilitators deliver our workshops in their markets. We take 30% royalty. This is how Whole30 scaled coaching.

---

### COMPONENT 7: The Incentive Engine

The growth mechanism tying everything together.

#### A. Tiered Reward System

| Milestone | Reward | Cost to Us | Purpose |
|-----------|--------|-----------|---------|
| Sign up for free challenge | Digital welcome badge | $0 | Identity marker |
| Complete 7-day streak | Unlock Offline Passport (basic) | $0 | Streak hook (3.6x completion lift) |
| Refer 1 friend | Both get offline activity card pack (PDF) | $0 | Two-sided referral entry (7.23% conversion in wellness) |
| Complete 30-day free challenge | Physical enamel pin (posted) + digital "First Stamp" | ~$3 | Completion token, tangible proof |
| Refer 5 friends | Branded t-shirt | ~$8 | Walking billboard |
| Complete 90-day paid program | "Founding Member" patch + premium hoodie | ~$18 | Status symbol, alumni identity |
| Refer 25 friends | Free 90-day program ($149 value) | ~$15 COGS | Power referrer reward |
| 365-day verified Passport | Limited edition physical artifact + Soulbound Token | ~$25 | Aspirational ceiling |
| Top 1% (referrals + streaks) | NZ retreat invitation | Variable | Ultimate aspiration |

**Why physical rewards over discounts:** Research shows cash/discounts convert ~40% better short-term, but physical rewards create identity attachment. Someone wearing a "Terminally Offline" tee is a walking billboard worth more than the $23 margin. Merch is a marketing cost, not a revenue line.

#### B. Referral Mechanics

- Two-sided (both parties benefit) — used by 91.2% of successful programs
- Health/wellness referral programs convert at 7.23% median
- Morning Brew's tiered model (stickers → mug → t-shirt → exclusive access) grew to 4M subscribers
- Low first threshold (1 referral for activity cards) — everyone can participate
- Visual progress tracker showing distance to next tier
- With 1,000 challenge participants referring at 7%, that's 70 new participants per cycle, compounding

#### C. Streak System

- Inspired by Duolingo (3.6x completion improvement from 7-day streaks)
- Grace days built in (streak forgiveness reduces churn 21%)
- Analog-first: daily check-in is intentionally minimal. One tap in PWA, or reply "done" to email.
- We don't want people spending time in our app — that violates the brand promise
- Streaks feed into Offline Passport stamps (verified streaks are worth more than self-reported)

#### D. Challenge Staking

- Optional stake of $25-500 on challenge completion
- Verified completion: money refunded (minus small processing fee) or converted to store credit
- Failure: money goes to partner children's mental health charity
- Legal structure: commitment contract (not gambling — outcome depends on participant's effort, not chance; stickK has operated this way for 15+ years with Yale law professor backing)
- Creates real skin-in-the-game. stickK data: $42M staked by 465K users. People engage with this.

#### E. Creator/Contributor Incentives

- Pod Leaders (90-day program graduates who facilitate pods): earn free alumni membership + commission on pod conversions
- Gallery Contributors: top photos featured in weekly curated collections (status reward)
- Challenge Designers: community members design specialty challenges ("7-Day Forest Immersion," "Weekend Analog Cooking"), earn credit when their challenge is used
- Ambassador Program: public-facing advocates earn tiered rewards (merch → events → retreat access)

---

### COMPONENT 8: NZ Retreats (Premium Anchor)

**What:** 4-day digital detox retreats in rural NZ. 12 participants. Fully offline — phones locked in Yondr-style pouch on arrival.

**Unit economics:**
- 12 participants x $2,500 = $30,000 revenue
- Venue (rural NZ lodge): $3-5K
- Catering: $2-3K
- Facilitators/instructors: $2-3K
- Insurance, materials, transport: $1.5-2K
- Net profit: $15-21K per retreat (50-70% margin)

**Why NZ is the unfair advantage:** Tourism NZ has spent billions building the perception of NZ as pristine, adventurous, remote. We ride that for free. "Digital detox retreat in New Zealand" is aspirational for tech workers in SF, London, Sydney. The 12-hour flight is the feature.

**The Offline Passport integration:** Retreat participants get a special "Retreat Stamp" — the highest-tier Passport achievement. Hardware-verified (phones locked), C2PA photos from retreat activities, cohort attestation (participants verify each other). The retreat stamp becomes the most desirable achievement in the system.

**Timeline:** Pilot in Month 8-10 once the brand has credibility from the challenge. Partner with an existing lodge — don't build or lease.

**One retreat/month = $180-252K/year.** This is a standalone business.

---

### COMPONENT 9: Affiliate Content & SEO (Slow Burn)

**What:** Long-form editorial content targeting "best dumbphone 2026," "digital detox guide," "how to switch to a dumbphone," etc. Affiliate links to Light Phone, Punkt, books, journals, Faraday bags.

**Why it's Phase 3+:** Requires domain authority, 20-30 articles, and 6-12 months for Google to rank. Not a first-dollar play.

**How we make it 10x better than competitors:**
- Build the definitive "switching to a dumbphone" database — carrier compatibility by country, app-by-app replacement guides, real user transition stories
- Negotiate direct affiliate deals at 15-20% with Light Phone, Punkt, etc. (skip Amazon's 4%)
- Challenge participants write "transition stories" as UGC — best stories get featured (status reward) and drive SEO traffic (free content)
- All product recommendations tagged "Terminally Offline Recommended" — future licensing play (like Whole30 Approved)

**Revenue:** $5-10K in Year 1 (ramp). $30-50K+ in Year 2 as content matures.

---

## 6. Revenue Model (Consolidated)

### Year 1 Projection

| Stream | Timeline | Revenue Target | Margin |
|--------|----------|---------------|--------|
| Free challenge (list builder) | Month 1 | $0 (acquisition) | — |
| Paid 90-day program ($99-149) | Month 2-3 | $25-40K | 75-85% |
| Corporate workshops (NZ) | Month 4-6 | $25-50K | 85-95% |
| Offline October (first year) | Month 7-10 | $50-120K | 70-80% |
| Affiliate content/SEO | Month 8+ | $5-10K | ~95% |
| NZ retreat (1 pilot) | Month 10-12 | $15-30K | 50-70% |
| Alumni memberships | Month 6+ | $5-10K | ~95% |
| **Year 1 Total** | | **$125-260K** | |

### Year 2+ Trajectory

| Stream | Year 2 Target |
|--------|---------------|
| Paid programs (growing cohorts) | $80-150K |
| Corporate programs (AU/UK expansion) | $100-200K |
| Offline October (second year) | $200-500K |
| Retreats (monthly) | $180-252K |
| Affiliate/SEO (matured content) | $30-50K |
| Alumni memberships | $30-60K |
| Facilitator certification royalties | $20-50K |
| **Year 2 Total** | **$640K-1.26M** |

### What We Killed (and Why)

| Killed | Reason |
|--------|--------|
| Monthly subscription box ($39/mo) | 10% survival rate. Shipping from NZ kills international margins. $10K+ upfront inventory. |
| Open-ended community ($9.99/mo) | Success = churn paradox. Replaced with cohort pods + alumni tier. |
| Employer SaaS | Needs $200K+ dev capital and 2+ years credibility. Table until Year 3. |
| Merch as revenue | Flipped to merch as marketing/reward cost. Walking billboards > margin. |

---

## 7. Technical Architecture

### Website

**Stack:**
- Next.js 14+ (App Router) + Tailwind CSS
- Deployed on Vercel
- Email automation: ConvertKit or Resend
- Payments: Stripe
- CMS for blog: MDX files in repo (no external CMS needed initially)

**Pages:**
1. **Homepage** — Hero with NZ nature imagery. Manifesto. Challenge signup CTA.
2. **The Challenge** — Rules, how it works, social proof (participant count, completion stories)
3. **The Passport** — Explanation of verification system, achievement tiers, how it works
4. **The Gallery** — Curated verified offline photos (read-only initially, interactive in Phase 3+)
5. **The Journal** — Blog/editorial (SEO content, 5-10 cornerstone articles at launch)
6. **For Teams** — Corporate program landing page with enquiry form
7. **Shop** — Affiliate product recommendations (no own inventory at launch)

### Offline Passport App

**Stack (evolves with phases):**

| Phase | Technology | Platform |
|-------|-----------|----------|
| 1 (Launch) | PWA (Progressive Web App) | Web (all platforms) |
| 2 (Month 2-3) | React Native or native Swift/Kotlin | iOS + Android |
| 3 (Month 3-4) | + ProofMode SDK integration (C2PA) | iOS + Android |
| 4 (Month 4-5) | + Merkle tree computation (client-side SHA-256) | iOS + Android |
| 5 (Month 6+) | + Noir ZK circuits via Mopro | iOS + Android |
| 6 (Month 6+) | + EAS SDK for on-chain attestations | iOS + Android |

**Key technical decisions:**
- Noir for ZK circuits (Rust-like, best mobile support via Mopro, ~5s proof gen)
- Mopro for mobile ZK proving (Metal GPU on iOS, Vulkan on Android)
- ProofMode for C2PA photo signing (open-source, Guardian Project)
- EAS on Base (OP Stack L2, <$0.01 per attestation) for on-chain achievements
- Apple App Attest + Google Play Integrity for device attestation
- No blockchain required for Phases 1-5. Phase 6 is an optional, additive layer.

---

## 8. Company Structure

### AI Agent Roles

| Role | Responsibility | Tools |
|------|---------------|-------|
| **CEO** (me, Claude) | Strategy, coordination, decisions, plan approval | All |
| **Head of Design** | Website UI/UX, visual identity, all design assets | frontend-design skill, Figma |
| **Head of Engineering** | Website build, PWA, app, Passport system, infra | Code, deployment, testing |
| **Head of Content** | SEO articles, challenge emails, newsletter, copy | Writing, research |
| **Head of Growth** | Challenge funnel optimization, referral engine, Offline October planning, social | Analytics, outreach |
| **Head of Verification** | Offline Passport architecture, ZKP implementation, C2PA integration | Cryptography, mobile dev |

### Human Roles (Kevin)

| Responsibility | Why Human |
|---------------|-----------|
| Domain / hosting / DNS | Account ownership |
| Payment processing (Stripe) | Legal/financial |
| Corporate outreach (NZ) | Relationships require a person |
| Retreat partnerships | Physical location scouting, lodge relationships |
| Final approval on all public-facing content | Brand voice, quality control |
| Legal (staking terms, privacy policy, IP) | Requires legal entity |

---

## 9. Build Order

### Sprint 1: Foundation (Week 1-2)
- [ ] Set up project repo + deployment pipeline (Vercel)
- [ ] Build homepage + challenge signup (email capture)
- [ ] Set up email automation (30-day challenge sequence)
- [ ] Write 3 cornerstone blog posts (SEO foundation)
- [ ] Design visual identity assets (logo, social cards, email templates)

### Sprint 2: Challenge Launch (Week 3-4)
- [ ] Launch free 30-day challenge
- [ ] Build referral tracking system (unique links, tier progress)
- [ ] PWA for basic streak tracking (one daily tap)
- [ ] Corporate landing page (enquiry form)
- [ ] Begin outreach to NZ companies

### Sprint 3: Paid Program (Month 2)
- [ ] Build payment flow (Stripe checkout for 90-day program)
- [ ] Pod matching system (timezone + goals)
- [ ] Welcome kit fulfillment pipeline (3PL partner)
- [ ] "The Offline Playbook" digital guide
- [ ] Alumni membership tier

### Sprint 4: Verification v1 (Month 2-3)
- [ ] Native app shell (React Native)
- [ ] Apple App Attest + Google Play Integrity integration
- [ ] Basic offline session detection (screen state, connectivity)
- [ ] Hardware-signed attestation generation
- [ ] Offline Passport UI (stamps, levels, history)

### Sprint 5: Photos + Gallery (Month 3-4)
- [ ] ProofMode SDK integration (C2PA photo signing)
- [ ] Photo capture during offline sessions
- [ ] Merkle tree computation (client-side)
- [ ] Offline Gallery v1 (curated weekly collections)
- [ ] Selective photo reveal with Merkle proofs

### Sprint 6: Offline October Prep (Month 5-7)
- [ ] Event landing page + registration flow
- [ ] Tiered pricing (Free / Verified / Premium / Corporate)
- [ ] Challenge staking system (Stripe + charity partner integration)
- [ ] Corporate team dashboards
- [ ] Sponsor outreach
- [ ] Completion merch design + fulfillment pipeline
- [ ] PR campaign

### Sprint 7: ZK + On-Chain (Month 6+)
- [ ] Noir ZK circuit design (offline session proof)
- [ ] Mopro integration for mobile proving
- [ ] EAS schema registration on Base
- [ ] Soulbound Token minting for verified achievements
- [ ] Offline Passport v2 with full verification stack

### Sprint 8: Retreat Pilot (Month 8-10)
- [ ] Lodge partnership (rural NZ)
- [ ] Retreat program design (4-day itinerary)
- [ ] Booking flow
- [ ] Retreat-specific Passport stamps
- [ ] Pilot with 12 participants

---

## 10. The Paradox (Addressed Head-On)

We are a website that helps people spend less time on websites. This contradiction is not a bug — it's the brand's most honest feature.

**How we handle it:**

1. **We lean into it.** The copy acknowledges the irony. "You found us on the internet. That's okay. This is the last click you need to make."

2. **Value delivery happens offline.** The website is just the funnel. The actual product — the challenge, the pods, the photos, the retreats — happens in the real world. Online presence is minimized to: signup, daily check-in (one tap), and photo sharing.

3. **Our app is designed to be closed.** Unlike every other app competing for screen time, ours succeeds when you're NOT using it. The daily interaction is one tap. The rest of the value is offline.

4. **The Offline Gallery is updated weekly, not real-time.** No infinite scroll. No algorithmic feed. No notifications. You visit when you choose to, see a curated collection, and leave.

5. **We measure success by LESS engagement.** Our north star metric isn't DAU or time-in-app. It's verified offline hours per user. We are the only tech company whose product gets better the less you use it.

---

## 11. Why This Works

**For individuals:** A structured path from "I want to use my phone less" to verifiable behavior change, with real accountability, physical rewards, and a community of people doing the same thing.

**For companies:** The first digital wellness program with cryptographic verification and measurable outcomes. Not a workshop that everyone forgets — a 6-week engagement with provable results.

**For the market:** Nobody has combined the offline movement with cryptographic verification, photo provenance, and zero-knowledge proofs. The Offline Passport and Gallery are genuinely novel products. The ZKP angle gives us a technical moat that scales.

**For NZ:** The brand is rooted in NZ nature and values but serves a global market. Retreats leverage NZ's aspirational tourism brand. Corporate programs expand outward from APAC. Content and digital products are borderless.

---

## 12. First Action

Build the website. Ship the free challenge. Start collecting emails. Everything else follows from there.
