# Prime Protocols — Website

Doctor-led Australian men's health telehealth clinic.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind · Sanity (CMS) ·
GoHighLevel (CRM) · Cloud Run (hosting)

## Architecture (Option B from the conversation)

```
┌─────────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│  Next.js on         │   │  Sanity (CMS)    │   │  GoHighLevel     │
│  Cloud Run          │   │                  │   │  (CRM)           │
│                     │   │  Blog content,   │   │                  │
│  primeprotocols     │◀─▶│  authors,        │   │  Doctor enquiry  │
│  .com.au            │   │  categories      │   │  pipeline,       │
│                     │   │                  │   │  automations     │
│  • Treatment pages  │   │  Edit at         │   │                  │
│  • Blog (Sanity)    │   │  /studio         │   │  Form posts via  │
│  • For Doctors form │   │                  │   │  webhook         │
│  • SEO pages        │   │                  │   │                  │
└─────────────────────┘   └──────────────────┘   └──────────────────┘
        │
        │ Booking CTAs
        ▼
┌─────────────────────┐
│  Halaxy (booking)   │
└─────────────────────┘
```

Three platforms, each doing one job well.

## Quick start

```bash
npm install
cp .env.example .env.local      # fill in real values
npm run dev                     # http://localhost:3000
```

Visit `/studio` to manage content (requires Sanity project set up — see `docs/sanity-setup.md`).

## Setup checklist (in order)

1. **Sanity** — create project, set env vars, run `npm run seed`.
   Full guide: `docs/sanity-setup.md`
2. **GHL** — create webhook workflow, set `NEXT_PUBLIC_GHL_WEBHOOK_URL`.
   Full guide: `docs/ghl-setup.md`
3. **Halaxy** — replace placeholder URL in `NEXT_PUBLIC_HALAXY_BOOKING_URL`
4. **DNS + SSL** — see `docs/gcp-load-balancer-setup.md`

## Project layout

```
src/
├── app/
│   ├── studio/[[...index]]/  # Sanity Studio mounted at /studio
│   ├── blog/                  # Sanity-driven blog
│   ├── treatments/            # 6 treatment pages
│   └── ...                    # 14 pages total
├── components/
│   ├── compliance/   # Disclaimer, GuestDisclaimer, TGANotice (verbatim text)
│   ├── layout/       # Header, Footer, Layout, MobileNav
│   ├── ui/           # Logo, Button, Badge, Accordion, etc.
│   ├── sections/     # Hero, DualPathway, TreatmentGrid, etc.
│   ├── treatment/    # TreatmentHero, TreatmentCard
│   ├── blog/         # BlogCard, AuthorBio, PortableTextRenderer, etc.
│   └── forms/        # DoctorEnquiryForm (→ GHL webhook), HalaxyEmbed
├── lib/              # constants.ts, sanity.ts, blog.ts, halaxy.ts, utils.ts
├── types/            # blog.ts, treatment.ts
└── styles/globals.css

sanity/
├── schemas/
│   ├── post.ts       # Blog post schema
│   ├── author.ts     # Author with disclosure + credentials (EEAT)
│   ├── category.ts   # Content pillars (1–7 per strategy §7.3)
│   └── blockContent.ts

sanity.config.ts      # Studio configuration

scripts/
├── seed-sanity.ts    # One-off content seed
├── setup-gcp.sh
└── deploy-static.sh

docs/
├── sanity-setup.md   # CMS setup
├── ghl-setup.md      # CRM webhook setup
├── gcp-load-balancer-setup.md
└── audit-report.md
```

## Compliance posture

All compliance hard-stops from the strategy doc are satisfied. See
`docs/audit-report.md` for the full audit.

Briefly:
- No specific peptide names in any promotional copy
- No brand drug names in promotional context
- No pricing on the site
- No specific patient outcome claims
- Sexual Health page held — held card only on the treatments grid
- TGA notice on `/treatments/peptide-therapy`
- Disclaimer on all treatment pages and staff blog posts
- Guest disclaimer on guest contributor articles
- Footer disclaimer + Privacy/Terms links everywhere
- Privacy and Terms marked `noindex` pending solicitor sign-off
- EEAT: every blog post has named author + credentials + clinical
  reviewer (Sanity-enforced)
- Strategy §13.5 persona disclosure on Elise author bio

## Editorial workflow

Three roles, three workflows:

**Elise (staff writer)** → drafts article in Sanity Studio with `Draft`
ticked → saves → done.

**Dr Kai (clinical reviewer)** → opens drafts in Studio → reviews and
edits → unticks `Draft` to publish.

**Adam / Michael (guest contributors)** → either invited to Sanity with
write-only access for their own posts, or they write in Google Docs and
Elise pastes into Sanity on their behalf. Guest disclaimer auto-renders
when author type is `guest`.

Pages revalidate every 60s after publish.

## Launch blockers

Still required before going live (see `project-state/projectState.json`):

- Solicitor: Privacy Policy + Terms of Service (placeholders with `noindex`)
- Solicitor: Disclaimer + Guest Disclaimer text review
- Regulatory lawyer: TGA content review across treatment pages
- Dr Kai: full clinical profile session
- Halaxy: live booking URL
- 6 more blog articles (4 seeded; strategy §10 minimum is 10)
- Real testimonials (currently placeholders)
- Elise canonical portrait (strategy §13.3 prompt)
- DNS + SSL for custom domain
- GHL workflow active in production

## Deployment

**Cloud Run (current):**
```bash
git push                # Cloud Build triggers automatically
```

If Cloud Build builds but doesn't deploy, see `docs/audit-report.md` for
the trigger config fix.

**Or via Cloud Build manually:**
```bash
gcloud builds submit --config=cloudbuild.yaml
```

## Environment variables

| Variable                                | Required | Notes                         |
|-----------------------------------------|----------|-------------------------------|
| `NEXT_PUBLIC_SITE_URL`                  | yes      | Canonical URL                 |
| `NEXT_PUBLIC_SITE_NAME`                 | yes      |                               |
| `NEXT_PUBLIC_CONTACT_EMAIL`             | yes      |                               |
| `NEXT_PUBLIC_HALAXY_BOOKING_URL`        | yes      | Booking CTAs                  |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`         | yes      | Blog will be empty without it |
| `NEXT_PUBLIC_SANITY_DATASET`            | yes      | Default: `production`         |
| `SANITY_API_TOKEN`                      | seed only| For `npm run seed`            |
| `NEXT_PUBLIC_GHL_WEBHOOK_URL`           | for forms| Doctor enquiry → CRM          |
