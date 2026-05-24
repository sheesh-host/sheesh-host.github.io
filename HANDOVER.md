# HANDOVER — sheesh.host landing page

For the agent relaunched in this directory. Read this top to bottom before acting.
Full plan: `~/.claude/plans/clever-watching-nest.md`. Product spec: `../box/architecture.md`.
Brand/content brief: `docs/brief.md`.

---

## TL;DR

A React + Vite + Tailwind v4 **placeholder** has been scaffolded and builds cleanly. Git is
initialized locally (so0k identity, no commits beyond the baseline). **No GitHub remote exists
yet** — the user asked that it not be created in the prep session. The design skills
(`impeccable`, `frontend-design`) are symlinked into `.claude/skills/` so they load on this
relaunch.

Your job: (1) create the remote + push, (2) build the real landing page with `impeccable`,
(3) ship it to GitHub Pages.

## Done in prep (Phase A)

- Vite + React + TS scaffold; Tailwind v4 wired (`@tailwindcss/vite`, `@import "tailwindcss"`).
- `vite.config.ts` → `base: '/'` (org root site).
- Placeholder `src/App.tsx` (clearly marked PLACEHOLDER — replace it).
- `index.html` title/meta/OG + favicon `/mark.svg`.
- Brand assets copied: `public/printer.webp` (hero), `public/mark.svg` (favicon).
- `public/CNAME` = `sheesh.host`; build copies it to `dist/CNAME` (verified).
- `.github/workflows/deploy.yml` — GitHub Actions → Pages (build on push to `main`).
- `.claude/skills/{impeccable,frontend-design}` symlinks → `.agents/skills/*` (verified resolve).
- `.gitignore` ignores `node_modules/`, `dist/`, `.agents/`, `.claude/skills/`, `.crit/`.
- `docs/brief.md`, `README.md` written. `npm run build` + `npm run preview` smoke-tested (HTTP 200).
- `git init` + **local** author `Vincent De Smet <vincent.drl@gmail.com>` + baseline commit.

## ⚠️ Identity safeguards (do not skip)

- The **global** git identity here is `vindes@handshakes.com.sg`. This repo must use the
  **local** so0k identity. Verify before any commit: `git config user.email` →
  `vincent.drl@gmail.com`.
- gh: use the **so0k** account (`gh auth switch --user so0k`; `gh auth status` to confirm).
- Remote must use the custom SSH host **`github.com-so0k`**, not `github.com`.
  (See `../repo-bootstrap.md`.)

## Step 1 — Create the GitHub remote & push (per `../repo-bootstrap.md`)

```sh
gh auth switch --user so0k   # ensure active; verify with: gh auth status
gh repo create sheesh-host/sheesh-host.github.io --public \
  --description "sheesh.host — git-native gated static publishing (landing page)"
git remote add origin git@github.com-so0k:sheesh-host/sheesh-host.github.io.git
git push -u origin main
# Set Pages source to GitHub Actions:
gh api -X POST repos/sheesh-host/sheesh-host.github.io/pages -f build_type=workflow
# Verify author landed as gmail, not handshakes:
gh api repos/sheesh-host/sheesh-host.github.io/commits/main \
  --jq '.commit.author.name + " <" + .commit.author.email + ">"'
```

The placeholder should deploy green and be reachable at `https://sheesh-host.github.io/`.

## Step 2 — Build the real landing page with impeccable (Phase B)

Confirm the skills loaded (you should see `impeccable` / `frontend-design` available). Then:

1. `/impeccable teach` — short interview, register = **brand**. Draw on `docs/brief.md` and
   `../box/architecture.md`. Writes `PRODUCT.md` (do not pre-author it; the interview is required).
2. `/impeccable document` — seed `DESIGN.md` (OKLCH palette from the brand colors, monospace-forward
   type, motion). Re-runnable later against real tokens.
3. `/impeccable craft landing page` — Step 0 will detect this Vite project and use it (do not
   introduce Astro or a second framework). Shape → build the real sections into `src/` → iterate
   in-browser (chrome-devtools MCP) → `polish` / `audit`. Replace the placeholder `App.tsx`.
   Honor impeccable's laws: OKLCH, never `#000`/`#fff`, "cards are the lazy answer," no em dashes
   in copy. Sections + content: see `docs/brief.md`.
4. Commit + push; confirm the deploy is green and sections render.

## Step 3 — Follow-ups (user-owned)

- **DNS:** point `sheesh.host` at GitHub Pages (apex A/AAAA + `www` CNAME). Until then the site
  lives at `sheesh-host.github.io`. After DNS, enable "Enforce HTTPS" in repo Pages settings.
- Favicon/OG polish: simplified mark at 16/32px; OG card from `printer.webp` (Phase B polish).

## Restoring skills (if needed)

`.agents/` and `.claude/skills/` are gitignored. On a fresh clone, run `npx skills install`
(reads `skills-lock.json`), then recreate the Claude Code symlinks:

```sh
mkdir -p .claude/skills
ln -sf ../../.agents/skills/frontend-design .claude/skills/frontend-design
ln -sf ../../.agents/skills/impeccable .claude/skills/impeccable
```
