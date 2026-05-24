# Landing page brief — sheesh.host

Raw context for the design build. This is **not** `PRODUCT.md`: the `impeccable teach`
flow runs a short interview and writes `PRODUCT.md`/`DESIGN.md`. This file is the source
material that interview should draw on. Full product spec lives in `../box/architecture.md`.

## What sheesh.host is

Self-hostable, CLI-first, git-backed gated publishing for static artifacts. "git push →
instant TLS-gated URL, in your own AWS." A single small EC2 box runs Caddy + git-sync; git
is the source of truth and the audit log; the box is a disposable projection of the repo.
License Apache 2.0. Org: `sheesh-host`. Status: design / pre-v0.

## Register

**brand** (this is a marketing/landing surface — design IS the product).

## Audience & job

Infra-literate developers and small teams who want gated static hosting they own. Their
context: they have a built artifact (HTML/MD, agent output, a report) and want a permanent,
optionally auth-gated URL without SaaS lock-in, on their own AWS, with a git audit trail.
Emotional goals: confidence (this is real infra, not a toy), relief (cheap + simple), a bit
of delight (the brand has personality).

## Positioning (the wedge)

- vs **GitHub Pages (private + auth):** ~$5/mo AWS flat vs GH Enterprise (~$21/user/mo);
  SSO against any IdP, not just GH org membership; data in your AWS/region.
- vs **Cloudflare Pages / Vercel / Netlify:** different category — "self-hosted hosting,"
  competes on ownership (compliance, data residency, forkability), not edge/build pipelines.
- vs **display.dev:** same space, SaaS side. sheesh's wedge: compliance/data-residency teams,
  security postures that reject another vendor, IaC purists ($5/mo to AWS vs $49/mo), forkers.
  Position: "git-native gated publishing — like display.dev, but in your AWS, with git as the
  audit log." The roadmap differentiator: inline comments stored as git files (v0.3).

## Brand personality

Playful-but-credible. Thermal-receipt-printer + terminal + duct-tape "held together by sheer
willpower" energy, backed by genuinely sound infra. Voice samples: "git push. instant https.",
"$<5/MO", "share first. organize later.", "your artifacts, your history, your AWS, your auth,
your fork."

## Visual DNA (inputs, not final tokens)

- **Hero illustration:** `public/printer.webp` — a thermal receipt printer spitting a receipt
  with an orange `</>`. This is the ONLY logo concept we use; ignore other concept variations.
- **Mark / favicon:** `public/mark.svg` — cream receipt sheet + orange `</>`. Adjustable.
- **Palette source (re-express in OKLCH):** orange `#FF6A1A`, cream/paper `#F6F1E7`, ink
  `#1A1A1A`, a terminal-lime accent. Never `#000`/`#fff`; tint neutrals toward the brand hue.
- **Type:** monospace-forward (receipt/terminal feel). Avoid generic AI fonts (Inter/Roboto/
  system). Final type direction is a `DESIGN.md` decision.

## Anti-references (what it must NOT look like)

- Generic SaaS-cream "AI slop" landing pages (the first-order reflex).
- Navy-and-gold fintech, healthcare white+teal, crypto-neon-on-black.
- The dark-terminal-infra cliché (the second-order reflex for a dev infra tool). The
  receipt-printer-on-warm-paper direction is the deliberate escape from that trap.

## Suggested sections (hero + core)

Drawn from `../box/architecture.md`. Final structure is `shape`'s call.

1. **Hero** — printer illustration, `</> sheesh.host`, "git push. instant https.", sub
   "self-hostable, git-native gated publishing — your AWS, your auth, your fork.", primary CTA
   (→ the `box` repo quickstart), secondary (→ GitHub org). A receipt-style "spec" moment:
   ✓ EC2 ✓ CADDY ✓ GIT-SYNC ✓ HTTPS ✓ CHEAP / TOTAL: $<5/MO.
2. **What it is** — publish static HTML/MD to a permanent, optionally auth-gated URL; one small
   EC2 box; git = source of truth + audit log; box = disposable projection.
3. **Why git-native** — the differentiators above (price for the auth tier, your AWS/region,
   git audit log, SSO any IdP, forkable). Avoid an identical 3-card grid (impeccable: "cards
   are the lazy answer").
4. **60-second try-it** — the no-AWS docker-compose path ("see the loop before the cloud").
5. **How it works** — git push → git-sync poll (~30s) → Caddy ACME TLS → visitors.
6. **Roadmap** — v0 → v0.3 (inline comments as git files = the real differentiator).
7. **Footer** — Apache 2.0, GitHub org link, `abuse@sheesh.host`, "infrastructure held
   together by sheer willpower."

## Accessibility

Semantic landmarks, real headings, alt text (the printer hero needs a meaningful alt),
visible focus states, respect `prefers-reduced-motion`. Target WCAG AA contrast — watch the
orange-on-cream and any lime accents.
