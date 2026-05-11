# Prime Protocols — Website

Doctor-led Australian men's health telehealth clinic. Next.js 14, TypeScript, Tailwind, MDX content.

## Quick start

```bash
npm install
cp .env.example .env.local      # then edit
npm run dev                     # http://localhost:3000
```

Production build:
```bash
npm run build
npm run start
```

## Project layout

```
src/
├── app/                  # Next.js App Router pages (14 total)
├── components/
│   ├── compliance/       # Disclaimer, GuestDisclaimer, TGANotice (verbatim text)
│   ├── layout/           # Header, Footer, MobileNav, Layout
│   ├── ui/               # Logo, Button, BookingButton, Badge, Card, Accordion, etc.
│   ├── sections/         # Hero, DualPathway, TreatmentGrid, TrustPillars, CTABanner, ...
│   ├── treatment/        # TreatmentHero, TreatmentCard
│   ├── blog/             # BlogCard, AuthorBio (with EEAT + persona disclosure)
│   └── forms/            # DoctorEnquiryForm (zod + react-hook-form), HalaxyEmbed
├── content/blog/         # MDX articles
├── lib/                  # constants.ts (single source of truth), blog.ts, halaxy.ts, utils.ts
├── types/                # TypeScript type definitions
└── styles/globals.css

project-state/
└── projectState.json     # Build state + launch blockers

docs/
└── gcp-load-balancer-setup.md

scripts/
├── setup-gcp.sh
└── deploy-static.sh

.github/workflows/deploy.yml
cloudbuild.yaml
Dockerfile
```

## What was actually built

| Layer | Status |
|---|---|
| Project scaffold + configs | Done |
| Design system (tokens, fonts, primitives) | Done — see audit note below |
| All 25+ components | Done |
| All 14 pages | Done |
| Compliance components | Done — verbatim text from strategy doc §7.4 and §8.5 |
| Doctor enquiry form (zod) | Done |
| Halaxy integration | Placeholder, env-driven |
| 4 blog articles | Done (6 more required to hit the minimum-10 launch criterion) |
| SEO metadata per page | Done |
| Structured data (Org + WebSite + MedicalWebPage) | Done |
| Sitemap config | Done |
| Dockerfile + Cloud Run config | Done |
| Cloud Build + GitHub Actions | Done |
| GCS static deploy option | Done |
| Load balancer setup docs | Done |

## Audit — build system vs strategy doc

Ten findings from comparing the multi-agent build system to the strategy doc (v0.4).
All are addressed in this build.

| # | Finding | Resolution |
|---|---|---|
| 1 | **Logo colour conflict** — build spec uses navy + teal; the "Signal" logo image uses navy + steel blue. | Tailwind tokens aligned to logo (navy + steel blue). Teal retained as a tertiary accent for compliance components only. See `tailwind.config.ts` header comment. |
| 2 | **Elise persona disclosure missing** — strategy §13.5 requires the disclosure language in author bios; build's `AuthorBio` spec omitted it. | Disclosure is rendered in `AuthorBio.tsx` for staff authors. Source string lives in `lib/constants.ts` as `AUTHORS['elise-hartley'].disclosure`. |
| 3 | **EEAT author credentials missing** — strategy §7.5 makes this explicit. | `AuthorBio` renders credentials + clinical-review attribution. Blog post pages emit `MedicalWebPage` JSON-LD with named author and reviewer. |
| 4 | **Adam Burgess 36-article schedule not captured** — strategy §8.2 details a 3-year publication pipeline. | Acknowledged in `AUTHORS` registry. Full schedule lives in strategy doc; not productionised here — drop monthly MDX files into `src/content/blog/` per cadence. |
| 5 | **Hub-and-spoke linking not explicit** — strategy §7.5 calls for blog → treatment hub linking. | `PILLAR_TO_TREATMENT_HUB` map in `lib/constants.ts` defines the explicit pillar→hub mapping. |
| 6 | **Article-length guidance missing** — strategy §7.5 calls for 1,500–2,500-word long-form. | Sample articles hit this length. Note added to README and content guidelines. |
| 7 | **Blog category mismatch** — build had "Peptide Therapy" as a category but lacked "Patient Education" (strategy Pillar 6). | `BLOG_CATEGORIES` rebuilt to match the 7 strategy pillars exactly. |
| 8 | **Pathology provider placeholder** — strategy Open Items #14. | Explicit placeholder added to How It Works step 03 with inline comment referencing strategy Open Items. |
| 9 | **Halaxy informed-consent intake** — strategy §9. | Launch marker added in `lib/halaxy.ts` and `projectState.json`. |
| 10 | **Typography too generic** — build spec used Inter only. | Bricolage Grotesque (display) + DM Sans (body) via `next/font/google`. |

## Compliance status

All compliance hard-stops from the build system are satisfied:

- No specific peptide names anywhere in promotional copy (checked: BPC-157, TB-500, CJC-1295, Ipamorelin, GHK-Cu, Sermorelin, Tesamorelin, AOD-9604 — none present)
- No brand-name drug advertising in promotional context (Ozempic / Wegovy / Mounjaro / Semaglutide / Tirzepatide — none used outside educational mechanism explanation)
- No pricing on the site
- No specific patient outcome claims
- Sexual Health page does not exist — held card only on treatments hub + homepage
- TGA notice rendered on `/treatments/peptide-therapy`
- Standard disclaimer rendered on all treatment pages and blog post pages (staff)
- Guest disclaimer rendered on guest blog posts
- Footer disclaimer + Privacy / Terms links on every page
- Privacy and Terms pages marked `robots: { index: false }` until solicitor sign-off

## Launch blockers (require human action)

See `project-state/projectState.json` for the full list with owners. Headline items:

- Privacy Policy — solicitor draft
- Terms of Service — solicitor draft
- Disclaimer + Guest Disclaimer — solicitor review of verbatim text
- TGA content review across all treatment pages — regulatory lawyer
- Dr Kai full profile — dedicated content session
- Halaxy live booking URL + intake consent framework
- Pathology provider decision
- 6 additional blog articles (4 seeded, 10 required)
- Real testimonials (with consent + outcome-claim review) — currently placeholders
- Elise canonical portrait — strategy §13.3 prompt
- DNS + SSL — see `docs/gcp-load-balancer-setup.md`

## Deployment paths

**Cloud Run (recommended)** — SSR enabled, autoscaling, secrets via Secret Manager.
See `Dockerfile`, `cloudbuild.yaml`, `.github/workflows/deploy.yml`.

**GCS static export** — set `output: 'export'` in `next.config.ts`, then run `scripts/deploy-static.sh`.
Cheaper, faster, no SSR. Doctor enquiry form would need a third-party endpoint.

Both deploy to **australia-southeast1 (Sydney)** as specified.

## A note about the build system vs this build

The build system PDF describes a Project Manager + 8 sub-agent architecture
designed for Claude Code. This site was built in a single agent session in the
Claude container. The work covers the same scope as the agent prompts would
have, in the same dependency order — but the multi-agent orchestration itself
was not executed. If you want to run the agent system against this codebase
(e.g. to keep building it iteratively), the `projectState.json` is structured
to be compatible with the orchestration model described in the build spec.
