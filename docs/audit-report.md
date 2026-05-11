# Audit Report — Build System vs Strategy Document v0.4

**Date:** 2026-05-11
**Scope:** Compare the Prime Protocols multi-agent build system spec
against the strategy doc v0.4. Identify gaps. Address them in the build.

---

## Summary

The build system spec was largely faithful to the strategy doc, with ten
specific gaps that materially affected output quality or compliance posture.
All ten were addressed in the build. The most consequential were the logo
colour conflict (visible brand mismatch between mark and site), the missing
Elise persona disclosure (legal exposure under Australian Consumer Law),
and the missing EEAT author bio architecture (direct impact on Google
health-content ranking signals).

---

## Findings

### 1. Logo colour conflict — VISUAL BRAND BREAK

**Strategy doc reference:** §13.3 specifies brand navy `#162347` but does
not lock the secondary colour. The "Signal" logo image (Option B) pairs
navy with a steel blue, not teal.

**Build system spec:** Tailwind config uses navy + teal `#1A9E8F` as the
primary pairing.

**Severity:** High — the logo and the website would not look like the same
brand if shipped against the build spec as written.

**Resolution:** Tokens in `tailwind.config.ts` aligned to the logo (navy
primary, steel blue secondary). Teal retained as a tertiary accent for
compliance-component borders only (Disclaimer, TGANotice) so the existing
visual association with regulatory-notice cues is preserved. Audit note
left inline in the Tailwind config header for future contributors.

---

### 2. Elise persona disclosure missing from author bio — LEGAL EXPOSURE

**Strategy doc reference:** §13.5 — "Prime Protocols should take legal
advice on whether and how the avatar persona needs to be disclosed on the
website and social platforms. A short disclosure such as 'Elise Hartley is
the communications persona of Prime Protocols. All content is reviewed by
our medical team.' in the author bio section is a reasonable precaution
pending legal review."

**Build system spec:** The AuthorBio component spec in Agent 2 / Task 2 is
generic — author headshot, name, title, bio. No persona disclosure.

**Severity:** High — without the disclosure, the site is making implicit
claims about Elise that go beyond what the strategy doc intends, with
real exposure under Australian Consumer Law (misleading or deceptive
conduct, even for an unintentional implied claim).

**Resolution:** `disclosure` string added to `AUTHORS['elise-hartley']` in
`lib/constants.ts`. `AuthorBio.tsx` renders it as a bordered note for any
staff author with a `disclosure` property. Marked on the launch blocker
list for solicitor sign-off (Open Items #17 in strategy).

---

### 3. EEAT author bio architecture missing — SEO IMPACT

**Strategy doc reference:** §7.5 — "All health content should be authored
by or reviewed by Dr Kai — supports both regulatory compliance and Google's
EEAT signals" and "A structured author bio with credentials should appear
on every article page."

**Build system spec:** AuthorBio spec is generic; no required fields for
credentials or clinical-review attribution.

**Severity:** High for organic search performance — Google has stated
explicitly that health content without clear author expertise signals is
deprioritised in rankings.

**Resolution:** Three changes:
1. `AUTHORS` registry in `lib/constants.ts` includes `credentials` field
   for every author.
2. `AuthorBio.tsx` always renders credentials and, when `reviewedBy` is
   set, renders an explicit "Clinically reviewed and approved by [Dr Kai]
   prior to publication" line.
3. Blog post pages emit `MedicalWebPage` JSON-LD with `author` and, where
   applicable, `reviewedBy`. Schema.org's `reviewedBy` is the exact field
   Google looks at for medical content review attribution.

---

### 4. Adam Burgess 36-article publication schedule not productionised

**Strategy doc reference:** §8.2 — detailed 36-article schedule across six
topic categories, one article per month for three years.

**Build system spec:** Mentions guest contributors generically.

**Severity:** Medium — operational rather than build-blocking. The pipeline
exists in the strategy doc but the build system doesn't capture it.

**Resolution:** Adam Burgess registered in `AUTHORS` with the confirmed
byline from §8.2 and his website link. The 36-article schedule itself sits
in the strategy doc; the operational pattern is straightforward (drop one
MDX file per month into `src/content/blog/` with `author: "adam-burgess"`
in frontmatter). One sample Adam article shipped to validate the flow.

---

### 5. Hub-and-spoke internal linking architecture not explicit

**Strategy doc reference:** §7.5 — "Each treatment area page acts as the
hub for its corresponding content pillar — blog articles link back to the
relevant hub page."

**Build system spec:** Agent 5 (SEO) calls for a linking audit but does not
define the mapping.

**Severity:** Medium — without the explicit mapping, the audit can't be
mechanical.

**Resolution:** `PILLAR_TO_TREATMENT_HUB` map added to `lib/constants.ts`.
Each blog category slug maps to its corresponding treatment hub URL (or to
`/how-it-works` for the Patient Education pillar, or `/for-doctors` for the
For Doctors pillar). Future linking audits become a one-line check.

---

### 6. Article length guidance missing

**Strategy doc reference:** §7.5 — "Long-form articles (1,500–2,500 words)
tend to perform better in health-related search."

**Build system spec:** Content Agent Task 4.8 calls for 800–1,200-word
blog articles.

**Severity:** Low — but a real performance hit if followed as written.

**Resolution:** Sample articles target the 1,500–2,000-word range.
Length guidance noted in README and is the implicit standard going forward.

---

### 7. Blog category misalignment

**Strategy doc reference:** §7.3 — seven content pillars, with "How It
Works / Patient Education" as Pillar 6 and "For Doctors" as Pillar 7.
Peptide therapy is a treatment area but not a separate content pillar.

**Build system spec:** `BLOG_CATEGORIES` has "Peptide Therapy" as a
category and omits "Patient Education".

**Severity:** Medium — affects content taxonomy, navigation, and SEO
hub-and-spoke structure.

**Resolution:** `BLOG_CATEGORIES` in `lib/constants.ts` rebuilt to match
the seven strategy pillars exactly. Each category has a `pillar` field for
cross-reference. Sample articles distributed across pillars 1, 4, 5, 6 to
validate the structure.

---

### 8. Pathology provider placeholder

**Strategy doc reference:** §9 / Open Items #14 — "Does Prime Protocols
arrange blood tests directly through a specific pathology provider, or
does the patient arrange their own via referral?"

**Build system spec:** QA Agent's J5 mentions this as a launch blocker but
the build itself doesn't render a placeholder.

**Severity:** Low — minor patient-facing ambiguity if it ships unresolved.

**Resolution:** Explicit placeholder added to How It Works step 03 with
inline reference to strategy Open Items #14. Listed in `projectState.json`
launch blockers.

---

### 9. Halaxy informed-consent intake

**Strategy doc reference:** §9 — "Is there a compliance-reviewed disclaimer
and informed consent framework in place for the patient intake process
within Halaxy?"

**Build system spec:** Not addressed.

**Severity:** Medium — this is a regulatory item, not a build item, but
the build system shouldn't be silent on it. If the site goes live before
Halaxy intake is compliance-reviewed, the patient consent posture is
incomplete.

**Resolution:** Launch marker added to `lib/halaxy.ts` (inline TODO with
explicit reference to strategy §9). Same item in `projectState.json` launch
blockers.

---

### 10. Typography too generic

**Strategy doc reference:** §11 — "Clinical and professional — credible
without being cold or intimidating. Clearly a medical service, not a
supplement brand or wellness influencer. Clinical precision with masculine
directness."

**Build system spec:** Inter only, via `@next/font`.

**Severity:** Low — site would function. But Inter is the default for
clinical/medical Australian SaaS and the strategy doc explicitly positions
Prime Protocols against that generic aesthetic.

**Resolution:** Bricolage Grotesque (display, variable, distinctive
optical sizing) + DM Sans (body) loaded via `next/font/google`. Display
font does the brand work, body font handles readability. The visual
character is clinical-but-distinctive without crossing into wellness or
editorial territory.

---

## Items deferred (not gaps, but worth noting)

- **Recurring 3-month protocol reviews as an appointment type** (strategy
  §9): Halaxy-platform-side concern, not a website concern.
- **Compounding pharmacy relationships** (strategy §9): Mentioned only
  generically in the peptide therapy page; awaits founder decision.
- **Michael Staal guest contributor strategy** (strategy §8.3): Registered
  in `AUTHORS` as placeholder; awaits dedicated content session.

---

## Sign-off prerequisites

This build is not launch-ready by design. The fourteen items in
`project-state/projectState.json` `launchBlocklist` require human action
(solicitor review, regulatory lawyer review, content decisions,
infrastructure) before the site can go live. The build provides everything
that can be done without those gates.
