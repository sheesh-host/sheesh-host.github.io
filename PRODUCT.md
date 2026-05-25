# PRODUCT.md — sheesh.host

> Bootstrapped from `docs/brief.md` + `../box/architecture.md` (instead of a `teach`
> interview; content was already settled). Re-run `/impeccable teach` if strategy shifts.

## Register

**brand** — this is a marketing/landing surface. Design IS the product.

## What it is

Self-hostable, CLI-first, git-backed gated publishing for static artifacts.
"git push -> instant TLS-gated URL, in your own AWS." A single small EC2 box runs
Caddy + git-sync; git is the source of truth and the audit log; the box is a
disposable projection of the repo. Apache 2.0. Org: `sheesh-host`. Status: pre-v0.

## Users & job

Infra-literate developers and small teams who want gated static hosting they own.
They have a built artifact (HTML/MD, agent output, a report) and want a permanent,
optionally auth-gated URL without SaaS lock-in, on their own AWS, with a git audit
trail. Emotional goals: confidence (real infra, not a toy), relief (cheap + simple),
a bit of delight (the brand has personality).

## Positioning (the wedge)

- vs **GitHub Pages (private + auth):** ~$5/mo AWS flat vs GH Enterprise (~$21/user/mo);
  SSO against any IdP, not just GH org membership; data in your AWS/region.
- vs **Cloudflare Pages / Vercel / Netlify:** different category. "Self-hosted hosting,"
  competes on ownership (compliance, data residency, forkability), not edge/build.
- vs **display.dev:** same space, SaaS side. The wedge: compliance/data-residency teams,
  security postures that reject another vendor, IaC purists ($5/mo to AWS vs $49/mo),
  forkers. Roadmap differentiator: inline comments stored as git files (v0.3).

## Brand personality

Playful-but-credible. Thermal-receipt-printer + terminal + duct-tape "held together
by sheer willpower" energy, backed by genuinely sound infra. Voice samples:
"git push. instant https.", "$<5/MO", "share first. organize later.",
"your artifacts, your history, your AWS, your auth, your fork."

## Tone

Lowercase, terse, technical, confident. No marketing fluff, no exclamation marks,
no em dashes. Reads like a receipt and a man page had a kid.

## Anti-references (must NOT look like)

- Generic SaaS-cream "AI slop" landing pages (the first-order reflex).
- Navy-and-gold fintech, healthcare white+teal, crypto-neon-on-black.
- The dark-terminal-infra cliche (the second-order reflex for a dev infra tool).
  The receipt-printer-on-warm-paper direction is the deliberate escape from that trap.

## Sections (content settled)

1. **Hero** — printer illustration (`/hero.png`), wordmark, "git push. instant https.",
   sub "self-hostable, git-native gated publishing. your AWS, your auth, your fork.",
   primary CTA (-> box quickstart), secondary (-> GitHub org).
2. **What it is** — publish static HTML/MD to a permanent, optionally auth-gated URL;
   one small EC2 box; git = source of truth + audit log; box = disposable projection.
3. **Why git-native** — the wedge as receipt line-items, NOT a 3-card grid.
4. **60-second try-it** — the no-AWS docker-compose path ("see the loop before the cloud").
5. **How it works** — git push -> git-sync poll (~30s) -> Caddy ACME TLS -> visitors.
6. **Roadmap** — v0 -> v0.3 (inline comments as git files = the real differentiator).
7. **Footer** — Apache 2.0, GitHub org, abuse@sheesh.host, "held together by sheer willpower."

## Accessibility

Semantic landmarks, real headings, meaningful alt on the printer hero, visible focus,
respect `prefers-reduced-motion`. WCAG AA contrast (watch orange-on-cream + lime).
