# sheesh-host.github.io

Landing page for [sheesh.host](https://sheesh.host) — self-hostable, CLI-first, git-backed
gated publishing for static artifacts. See [`../box/architecture.md`](../box/architecture.md)
for the product itself.

This repo follows the GitHub Pages **org-site** convention (`sheesh-host.github.io`, served at
the org root) with a `CNAME` for the custom domain `sheesh.host`.

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Develop

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/ (includes public/CNAME)
npm run preview
```

## Design workflow

The visual design is built and maintained with the [`impeccable`](https://impeccable.style)
skill. See [`docs/brief.md`](docs/brief.md) for product/brand context and
[`HANDOVER.md`](HANDOVER.md) for the current build state and next steps.

Agent skills are managed by [`npx skills`](https://github.com/vercel-labs/skills); restore them
with `npx skills install` (reads `skills-lock.json`).

## Status

Placeholder page shipped locally. Real landing page is in progress (Phase B — see `HANDOVER.md`).
