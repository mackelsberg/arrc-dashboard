---
name: arrc-design
description: Use this skill to generate well-branded interfaces and assets for ARRC (Accountability & Reform Research Consortium), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — CSS variables (brand colors, semantic tokens, type scale, spacing, radii, shadows, motion)
- `assets/` — logos (use these, do not redraw the pillar mark)
- `ui_kits/report/` — the year-one foundation report (dashboard + US reach map) as a buildable reference

If creating visual artifacts (slides, mocks, throwaway prototypes, foundation reports, one-pagers), copy assets out of `assets/` and import `colors_and_type.css`, then build static HTML files for the user to view.

If working on production code, you can copy assets and read the rules here to become an expert designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, venue, length, level of polish, whether this is for a foundation / academic / internal audience), and act as an expert designer. ARRC's voice is scholarly, measured, foundation-report-serious — decline requests to make outputs that read as marketing-y, emoji-heavy, or gradient-heavy.
