# DESIGN.md — sheesh.host

> Design direction for the landing surface. Register: **brand** (design IS the product).
> Companion to `PRODUCT.md`. Tokens are the source of truth; they live in `src/index.css`
> as a Tailwind v4 `@theme` block. Re-run `/impeccable document` if the build drifts.

## Concept

**The whole page is one continuous printout.** The hero is a black thermal printer
(`/hero.png`) feeding a receipt; every section below is paper that kept feeding out of it.
Receipt-paper panels with perforated/scalloped edges (CSS masks), dotted leader lines, faint
alternating rows. No card grids. One deliberate contrast: the "60-second try-it" section is a
single dark terminal block. Dark appears once, as a *quoted object* inside the paper, so the
page escapes both SaaS-cream slop and the dark-terminal-infra cliche.

The receipt-on-warm-paper direction is genuine here: sheesh literally prints a receipt. Mono
is not costume; it is the product's native voice.

## Color

Strategy: **Committed**. Cream paper is the surface; orange carries the brand. OKLCH only,
never #000/#fff, every neutral tinted warm (hue ~60-84).

| Token | OKLCH | Role |
|---|---|---|
| --color-paper | oklch(0.957 0.013 84) | dominant surface (cream, approx #F6F1E7) |
| --color-paper-shade | oklch(0.928 0.016 84) | panel shade, perforation valleys, alt rows |
| --color-ink | oklch(0.255 0.007 60) | primary text, stamp buttons (warm near-black) |
| --color-ink-soft | oklch(0.418 0.012 65) | secondary text (AA on paper, ~4.8:1) |
| --color-orange | oklch(0.705 0.196 47) | brand fills/rules/icons/cursor (approx #FF6A1A) |
| --color-orange-ink | oklch(0.48 0.142 45) | the only orange used as *text* on paper (AA) |
| --color-lime | oklch(0.86 0.19 128) | terminal accent, dark block only |
| --color-term | oklch(0.22 0.012 60) | the single warm-dark section |
| --color-term-soft | oklch(0.78 0.01 80) | dim text inside the terminal |

### Contrast rules (WCAG AA, enforced)

Orange #FF6A1A on cream is ~2.7:1 - it fails for text at any size. So:

- Vibrant --color-orange is for non-text only: fills, rules, the perforation accent,
  checkmarks, the blinking cursor block, focus rings, CTA stamp accents.
- Any orange-colored text on paper uses --color-orange-ink (the burnt deep orange, AA).
- --color-lime is never placed on paper; it lives only on --color-term.
- Primary CTA = --color-ink stamp with paper label (reads as a rubber stamp on the receipt)
  plus an orange accent. Secondary CTA = ink outline on paper.

## Typography

Mono-forward, two variable families self-hosted via @fontsource-variable (no runtime CDN).
Both escape the reflex-reject list (no Plex / Space / Inter / DM). Hierarchy from weight +
size contrast, not family count.

- --font-display: Martian Mono Variable (weights 600-800). Headlines, section numbers,
  the TOTAL line, kickers. Mechanical, wide, opinionated. Tight tracking at large sizes.
- --font-mono: Spline Sans Mono Variable (400/500/700). Body, receipt line-items, code,
  nav, footer. Readable mono that harmonizes with the receipt's baked-in mono.

Scale: fluid clamp(), ratio >=1.25. Body measure capped 60-68ch (receipt-narrow). Display
line-height tight (1.0-1.05); body 1.55.

## Layout & components

- Centered receipt column (max ~62ch on paper sections). A receipt is narrow by nature; the
  perforated frame and feed motion make the column a physical object, not a generic stack.
- .receipt panel: paper-shade hairline border, perforated top/bottom edge via repeating
  radial-gradient mask. Not a card; a torn strip of paper.
- .leader: dotted leader line between a label and its value (why-git-native line-items and
  roadmap rows). The receipt grammar, replacing a 3-up grid.
- Hero printer image shown near native size (376x392; never upscaled full-bleed), framed so
  the receipt appears to feed into the first paper section.

## Motion

- Page-load: the hero prints/feeds in (clip-path / transform reveal). Body sections print
  line-by-line as they enter the viewport (staggered translate + opacity, IntersectionObserver).
- Ease-out only (cubic-bezier(0.22,1,0.36,1)); no bounce, no layout-property animation.
- The terminal block has a blinking caret.
- prefers-reduced-motion: reduce removes all of it: everything is present, caret stops. Hard
  requirement, not a nicety.

## Accessibility

Semantic landmarks (header/main/section/footer), real heading hierarchy, meaningful alt on the
printer hero (it carries baked-in text: spec checklist, TOTAL $<5/mo, wordmark, tagline - the
alt says so). Visible focus rings (orange, 2px offset). Touch targets >=44px. WCAG AA, with the
orange/lime contrast rules above enforced.

## Voice (copy)

Lowercase, terse, technical, confident. No marketing fluff, no exclamation marks, no em dashes
(use commas, colons, periods, parentheses). "reads like a receipt and a man page had a kid."
