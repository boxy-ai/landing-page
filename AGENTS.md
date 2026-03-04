# AGENTS.md

## Purpose

- This repository contains the Boxy marketing/landing site.
- Optimize for fast, safe iteration on content and UI while preserving SEO correctness and static deploy reliability.

## Stack and Toolchain

- Frontend: React + TypeScript + Vite.
- Styling: Tailwind CSS v4 (`@tailwindcss/vite`) and project CSS in `src/styles/`.
- Package manager: `pnpm`.
- Pinned runtime/tooling (from `.mise.toml`):
  - Node `24.14.0`
  - pnpm `10.30.3`

## Local Setup

1. `mise trust`
2. `mise install`
3. `pnpm install`
4. `pnpm dev`

## High-Level Architecture

- Entry point: `src/main.tsx`
- App root: `src/app/App.tsx`
- Routing: `src/app/routes.ts` (lazy-loaded pages)
- Shared shell/layout: `src/app/components/Layout.tsx`
- SEO metadata model: `src/app/seo.ts`
- Runtime meta/canonical management: `src/app/components/SeoHead.tsx`
- Static/public assets: `public/`
- Build-time generation scripts: `scripts/`

## Build and Generation Workflow

- `pnpm build` executes:
  1. `pnpm run generate:sitemap`
  2. `pnpm run build:app`
  3. `pnpm run prerender`
- `scripts/generate-sitemap.mjs` generates `public/sitemap.xml`.
- `scripts/prerender.mjs` prerenders configured routes into `dist/**/index.html`.

## Route and SEO Change Checklist

When adding/removing/renaming a route, keep all route lists consistent:

- `src/app/routes.ts`
- `src/app/seo.ts`
- `scripts/generate-sitemap.mjs`
- `scripts/prerender.mjs`
- Navigation/footer/internal links as needed

For route changes, verify:

- Route resolves in dev (`pnpm dev`)
- SEO metadata is correct
- Sitemap includes expected canonical URLs
- Prerendered output exists under `dist/` after build

## Quality Gates

Before opening or updating a PR, run:

1. `pnpm format`
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm build` for route/SEO/build-pipeline changes (recommended for all UI/content changes)

## Styling and UX Guardrails

- Preserve existing Boxy visual language and interaction patterns.
- Keep dark/light mode behavior aligned (`ThemeProvider` + theme token overrides).
- Maintain responsive behavior for navigation and page sections.
- Prefer incremental, localized style edits over broad visual rewrites unless explicitly requested.

## Generated Files Policy

- Do not manually edit generated artifacts.
- Update source code/scripts, then regenerate outputs.
- In particular, regenerate sitemap/prerendered output via project scripts rather than hand-editing.

## Git and PR Workflow

1. Create a feature branch from `main` for every change.
2. Never commit directly to `main`.
3. Use concise Conventional Commits: `type(scope): summary`.
4. Keep commits logically scoped (one clear change per commit when possible).
5. Open a pull request targeting `main` for all changes.
6. PR description must include:
   - What changed
   - Why it changed
   - Validation performed (commands run)
   - Visual proof for UI changes (screenshots or short recording)
   - Risks, caveats, and follow-ups
7. Keep PRs focused and reviewable; avoid unrelated refactors.

## CI and Deployment Expectations

- CI enforces formatting, linting, and type checking.
- Deployment to GitHub Pages occurs from `main` after required checks pass.
- Treat CI failures as blockers; fix before merge.

## Agent Behavior Guidelines

- Make minimal, targeted changes aligned with current architecture.
- Prefer root-cause fixes over quick patches.
- Call out cross-file coupling risks explicitly (especially routes/SEO/sitemap/prerender).
- Avoid introducing new dependencies or tooling unless necessary for the task.
