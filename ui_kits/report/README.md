# ARRC Report UI Kit

A foundation-report one-pager. This kit is a finished composition — a single `index.html` that combines:

- **Masthead** — logo lockup + date range
- **Title block** — serif display headline + italic lede
- **Headline KPIs** — 4 large + 3 small stat tiles (`--arrc-paper-2` fill, 8px radius)
- **Pipeline panel** — proposals received vs funded with a proportional progress bar
- **Donut chart** — funding sources in the teal ramp (inline SVG, no chart library)
- **US reach map** — D3 + `us-atlas` topojson, purple/orange dots, tooltip on hover
- **Convenings** — 4 outlined tiles (`--color-surface-card` white + 0.5px hairline border)
- **Milestones** — compact date / label rows on paper fill
- **Footer** — meta

## Files

- `index.html` — the full report. Self-contained; only external deps are D3 + topojson from CDN and Google Fonts.
- `source_dashboard.html` — original input fragment from the user
- `source_map.html` — original input fragment from the user

## Design notes

- The **title headline** is the one place red ink appears (`<em>numbers</em>` in `--arrc-red`). Everything else is navy or warm ink.
- Section heads follow a pattern: `01` numeral in red, serif section title in navy, a hairline rule to the right. Consistent and scannable.
- All big numbers use `font-feature-settings: 'lnum', 'tnum'` so columns of digits align.
- The donut is hand-rolled SVG (three `<circle>` with `stroke-dasharray`) — Chart.js isn't needed for three slices.
- The map is ported from `source_map.html` and recolored to brand tokens. Land fill is `--arrc-paper-2`, strokes are `--arrc-ink-300`, dots use `--arrc-purple` / `--arrc-orange` with `--arrc-paper` as the halo stroke so dots read against the paper ground.

## Caveats

This kit produces one artifact type: the static one-pager. It is not a component library for arbitrary screens. For new surfaces (email, slide deck, microsite) the tokens in `colors_and_type.css` are the source of truth; build on top of those.
