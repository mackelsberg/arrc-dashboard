# ARRC Design System

**Accountability & Reform Research Consortium**

A civic-minded research consortium of public-administration scholars. ARRC funds academic research on government accountability and reform, convenes communities of practice, and publishes findings for policymakers and foundations. This design system supports the consortium's reports, dashboards, slide decks, and one-pagers — artifacts that read as credible, scholarly, and quietly purposeful.

---

## Sources & inputs

This system was derived from the following materials the user uploaded:

| File | Purpose |
|---|---|
| `uploads/ARRC.color.with name.png` | Primary color logo, wordmark + icon, 2500×1816 PNG with transparency |
| `uploads/ARRC.color.just logo.png` | Icon-only logo mark (pillar + up/down arrows) |
| `uploads/arrc_year_one_dashboard_v2.html` | Year-one report dashboard fragment (stats, donut chart, milestones) |
| `uploads/arrc_institutional_reach_map_v2.html` | D3 map of US institutions (founding members + funded hosts) |

The uploaded HTML fragments reference CSS variables (`--color-text-primary`, `--color-background-secondary`, `--border-radius-md`) that assume a parent host context. **No upstream design tokens were provided** — values in this system were inferred from the literal hex codes inside the fragments (`#534AB7`, `#D85A30`, `#1D9E75`, `#F1EFE8`, `#C2C0B6`, `#444441`) and the logo PNGs. Check the Caveats section at the bottom before treating the tokens as canonical.

There was no codebase, Figma, or style guide attached. No slide template was attached; slides are not in scope for this first pass.

---

## Index

- `README.md` — this file
- `colors_and_type.css` — CSS variables (brand, semantic, dataviz), type scale, spacing, radii, shadows, motion
- `SKILL.md` — skill manifest for use in Claude Code / as an Agent Skill
- `assets/` — brand assets
  - `arrc-logo-with-name.png` — full logo with wordmark
  - `arrc-logo.png` — icon-only pillar mark
- `ui_kits/`
  - `report/` — the foundation one-pager: dashboard tiles, stat cards, donut chart, US reach map, milestone list
- `preview/` — small cards that populate the Design System tab
  - `logo.html`, `colors-brand.html`, `colors-dataviz.html`, `colors-neutrals.html`, `type-display.html`, `type-scale.html`, `stat-cards.html`, `data-donut.html`, `map-dot.html`, `milestone-row.html`, `radii-shadows.html`, `spacing.html`, `buttons.html`, `pill-legend.html`

---

## Content fundamentals

**Voice.** ARRC writes like a foundation report or a peer-reviewed brief: third-person, precise, plain. No marketing verbs; no "we're thrilled." Outputs tend to name what happened, the count, and the dates. Example from the year-one dashboard: "13 founding member schools and 19 institutions hosting funded research across 18 states and DC." Declarative. One clause per fact.

**Person.** Institutional / third-person ("ARRC funded 17 projects"). Avoid "we" unless quoting leadership; avoid "you" entirely in reports.

**Casing.**
- **Sentence case** for titles, section labels, and tile headers: *"ARRC year one,"* *"Research pipeline,"* *"Funding sources,"* *"Upcoming milestones."* No Title Case on headings.
- **ALL CAPS / small caps** reserved for overlines and category tags (used sparingly).
- Acronyms stay uppercase: ARRC, W&E, GC, SSI, ASPA, NASPAA, CoP.

**Numbers.**
- Lead with the number for stats: `17 · Funded projects`, not `Funded projects: 17`.
- Currency shortened in dashboard contexts: `$230K`, `$100K`. Full form (`$230,000`) in formal prose.
- Ranges use en-dash: `Jun 4–6, 2026`.
- Percentages are spelled with the symbol: `35% selection rate`.

**Dates.** `Apr 2025 to Apr 2026` or `May 11, 2026`. Months abbreviated in dense tables, spelled out in prose.

**Punctuation quirks.**
- Ampersands are preferred in the formal name and program labels (*Accountability & Reform*, *W&E*).
- En-dashes (`–`) separate ranges; em-dashes (`—`) separate clauses.
- Oxford comma used.

**Tone floor.** Never glib, never breathless. A good sentence for ARRC reads like something a foundation program officer or academic peer would write to another: measured, specific, faintly dry.

**Do / don't.**

| ✅ Do | ❌ Don't |
|---|---|
| "17 projects funded across W&E, GC, and SSI." | "We funded an amazing 17 projects!" |
| "35% selection rate." | "🎉 Only the best made it in." |
| "Draft Federal Exit Survey report" | "Exciting news about the survey!" |
| "Founding member schools paid $120K." | "Schools generously contributed." |

**Emoji.** Never in reports or report UI. Acceptable only in informal internal newsletters, and even then sparingly. The public voice is emoji-free.

---

## Visual foundations

**The core idea.** Civic seriousness with warmth. The logo's pillar + up/down arrows reference both classical institutions (columns, a tribunal) and accountability (scrutiny going up, findings going down). The system carries that: deep navy ink on warm paper, red used as punctuation, data rendered in a small set of purple / orange / teal accents. Nothing glossy, nothing trendy.

**Color.**
- **Brand core:** navy `#1E2A4A` and red `#C9342B` from the logo. Navy is the default ink for titles and headers; red is reserved for single points of emphasis (a key stat, an alert, a CTA's active state) — never as a field color, never as a gradient.
- **Neutrals:** warm, paper-toned. `#F5F2E9` is the default page color; `#EDE9DC` for card fills; `#1B1B18` and `#444441` for primary / secondary text. This replaces the pure-white + pure-gray conventions and makes the work feel printed rather than SaaS-y.
- **Data accents:** a small, named palette — purple `#534AB7`, orange `#D85A30`, teal `#1D9E75` with two tints each. Each has a semantic role in the year-one report:
  - Purple = funded projects / core ARRC programs
  - Orange = hosted research / partner side
  - Teal = funding / money flows
- Usage rule: **at most two accent colors per chart**, unless it is a donut with named segments (which may carry up to three teals, as in the funding-sources chart).

**Typography.**
- **Serif display** (Source Serif 4) for page titles, section headers, and big stat numbers. It signals publication / white-paper.
- **Sans body** (Inter) for paragraphs, labels, captions, legends, UI.
- **Mono** (JetBrains Mono) for code-like data: IDs, tabular counts, footnotes.
- Numerals use `font-feature-settings: 'lnum', 'tnum'` — lining + tabular — so columns of stats align.
- Weights used: 400 (body), 500 (stat display / tile label), 600 (section headers), 700 (rare, for display).

**Spacing.** 4-pt grid. The dashboard uses 12px gaps between tiles, 16px tile padding, 24px between sections — values encoded in `--space-3`, `--space-4`, `--space-6`. Prefer generous whitespace over decorative rules. A horizontal rule is almost always a spacing failure.

**Backgrounds.** Flat, single-fill. Warm paper (`#F5F2E9`) as the page ground, white for individual cards when extra prominence is needed. **No gradients** on brand surfaces. No hand-drawn illustrations. No repeating patterns. No photography in the year-one set. A full-bleed color block is acceptable only as a section anchor (navy with inverse text, used sparingly).

**Cards.**
- Filled style: `background: var(--color-background-secondary)`, no border, `--border-radius-md` (8px), `--space-4` padding. This is the default on the dashboard.
- Outlined style: white background with a 0.5px `var(--color-border-tertiary)` line, same radius. Used for convenings + sub-metrics in the report.
- Shadows are almost absent. When used, `--shadow-md` is a very subtle warm-black wash; never a drop shadow strong enough to imply lift.
- **No rounded-left-border accent cards.** That pattern is banned — it reads as generic SaaS.

**Corners.** 4 / 8 / 12 / 16. 8px is the workhorse. Pills only on legend chips, tag badges, and small status indicators.

**Borders.** 0.5px hairlines in warm neutral tones (`#D4D0C1`, `#EEEAE0`). Heavy 1–2px borders only on navigation dividers or large section boundaries.

**Shadows.** Minimal by default. Inner shadows, never. Outer `--shadow-md` is the only one that sees regular use (tooltip over map). Decks should usually have none.

**Transparency / blur.** Avoided. Overlays are opaque. Tooltip over map is solid warm-white with a hairline border, not a frosted blur — that keeps the publication feel.

**Hover.** Subtle. 6% darker on the same hue, or a hairline-border darken. Never a full hue change. Dots on the map scale to 1.15× (no shadow).

**Press.** Same hover color, `transform: scale(0.98)`. No color flip.

**Motion.** Slow and honest. `cubic-bezier(0.4, 0, 0.2, 1)` at 120–320ms. Fade + slight translate (`4–8px`) for entering content. No bounces, no springs, no parallax. A chart filling in over 400ms on load is the most ambitious motion the brand permits.

**Fixed elements.** None in the report format. The artifact is a static one-pager. In slide decks (future), a fixed header with the ARRC wordmark, page number, and program label is appropriate.

**Imagery.** The system is almost entirely text + dataviz + the one logo mark. When imagery is needed (future), lean toward: documentary photography, muted color grading, no filters, no lens flare — think foundation annual report, not startup landing page. Map visualizations are the default "picture" in ARRC outputs.

---

## Iconography

**The codebase contains no icons.** The two uploaded HTML files use zero icons — every visual element is a CSS shape, a data dot, or a typeset character. That's deliberate: ARRC artifacts lean on typography and data visualization, not UI chrome.

**Rules for this system.**
- **Default: no icons.** Prefer a labeled number or a text tag. Most ARRC UI elements will not have an icon.
- **When an icon is essential** (e.g. a download action, an external-link mark, a caret in a table header), use **Lucide** via CDN: `https://unpkg.com/lucide@latest`. Lucide's hairline stroke (1.5px at 24px) matches the brand's preference for quiet, editorial chrome. This is flagged as a substitution — the user has not specified an icon system, so Lucide is the safest neutral default.
- **Stroke icons only.** No filled icon faces. No two-color icons. No icon-in-a-circle patterns.
- **Size.** 16px inline with body text, 20px in UI chrome, 24px for section anchors. Never larger than 32px.
- **Color.** Inherit `currentColor`. On dashboards, icons default to `var(--color-text-secondary)` and shift to `var(--color-text-primary)` on hover.
- **Emoji: never** in public artifacts. Unicode symbols are fine for bullets (`·`, `•`, `—`) and arrows (`→`, `↑`, `↓`) where they read as typographic characters rather than pictograms.
- **Logos for partner institutions** (universities, foundations) should be sourced from each institution's official brand portal and placed in `assets/partners/` as needed — this system does not include them out-of-the-box.

The ARRC pillar mark in `assets/arrc-logo.png` is itself iconographic; do not redraw it. Use the PNG at 2× display density or request a vector version from the user.

---

## Font substitutions (flag to user)

- **Source Serif 4** (Google Fonts) is used as the serif display face. No brand serif was specified; Source Serif 4 is chosen for its foundation-report character and excellent tabular numerals.
- **Inter** (Google Fonts) is used as the sans face. Same rationale — widely available, strong tabular figures, neutral voice.
- **JetBrains Mono** (Google Fonts) for mono.

**Action for the user:** confirm these substitutions or provide the brand's licensed display + body faces (`.woff2` / `.ttf`), which I will drop into `fonts/` and wire into `colors_and_type.css`.

---

## Caveats

- The source HTML fragments reference CSS variables that were **not defined anywhere in the inputs**. All semantic tokens in `colors_and_type.css` are inferred from the literal hex codes found in the fragments and the logo PNGs. If ARRC has a canonical token file (Figma variables, a theme.ts, etc.), send it and I will conform.
- No icon set, no photography, no slide template were provided. Those sections are best-guesses aligned to the brand's editorial voice.
- Typefaces are Google Fonts substitutions (see above).
- The dashboard uses a purple `#534AB7` and an orange-red `#D85A30` that don't appear in the logo at all. I've treated them as *chart palette* rather than *brand* colors, on the theory that the navy + red are the brand and the purple + orange are functional dataviz. Confirm.
