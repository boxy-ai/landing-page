# Boxy Landing Page Contributor Guide

This guide is for teammates with design background and/or vibe-coding experience who want to ship changes safely with coding agents.

Default setup in this repo:

- Editor: VS Code
- Agent: Codex extension
- Git flow: feature branch -> PR into `main`

## 10-Minute Quickstart

1. Clone the repo and enter it:

```bash
git clone git@github.com:boxy-ai/landing-page.git
cd landing-page
```

2. Install the pinned toolchain and dependencies:

```bash
mise trust
mise install
pnpm install
```

3. Start the local site:

```bash
pnpm dev
```

4. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Environment Basics

This repo pins tool versions with `.mise.toml`:

- Node `24.14.0`
- pnpm `10.30.3`

If you already have those exact versions locally, `mise` is still recommended so everyone is aligned.

## Opinionated Default: VS Code + Codex

1. Open the repo folder in VS Code.
2. Install and open the Codex extension.
3. Start with a clear request that includes:

- Goal
- Design intent
- Constraints
- Definition of done

Use this prompt template:

```text
Implement this change in the landing page:

Goal:
- ...

Design intent:
- ...

Constraints:
- Keep existing visual language
- Mobile + desktop both must work
- Keep route/SEO consistency

Definition of done:
- ...
- Run format/lint/typecheck before finishing
```

Agent tip: ask Codex to explain what it changed and why, not just to change files.

## See the Website Locally

- Run dev server: `pnpm dev`
- Build production output: `pnpm build`
- The production output is generated into `dist/`

When changing routes or SEO, always run `pnpm build` to validate sitemap + prerender output.

## Daily Workflow (Recommended)

1. Sync with latest `main`:

```bash
git switch main
git pull
```

2. Create a feature branch:

```bash
git switch -c feat/short-description
```

3. Ask Codex to implement the change.
4. Run checks:

```bash
pnpm format
pnpm lint
pnpm typecheck
pnpm build
```

5. Commit using concise Conventional Commits:

```bash
git add -A
git commit -m "feat(home): update hero copy"
```

6. Push branch:

```bash
git push -u origin feat/short-description
```

7. Open a Pull Request into `main`.

## GitHub and PR Rules

- Never commit directly to `main`.
- Always open a PR from a feature branch into `main`.
- Keep commits concise and scoped: `type(scope): summary`.
- Keep PRs focused; avoid mixing unrelated refactors.

PR description should include:

1. What changed
2. Why it changed
3. Validation run (commands)
4. Screenshots/video for UI changes
5. Risks, caveats, or follow-up tasks

## Command Cheat Sheet

```bash
# Setup
mise trust
mise install
pnpm install

# Local dev
pnpm dev

# Quality checks
pnpm format
pnpm lint
pnpm typecheck
pnpm build

# Branch + commit + push
git switch main
git pull
git switch -c feat/short-description
git add -A
git commit -m "feat(scope): short summary"
git push -u origin feat/short-description
```

## Use Codex for More Than Coding

Codex can also help with:

- Explaining CI failures in plain language
- Writing commit messages and PR descriptions
- Summarizing diffs for reviewers
- Preparing test/checklists before release
- Troubleshooting local setup issues

Example asks:

- "Explain why CI failed and give me the minimum fix."
- "Draft a PR description from my staged changes."
- "Summarize this branch in reviewer-friendly bullets."
- "What commands should I run before opening the PR?"

## Troubleshooting

### `pnpm` or `node` version problems

- Run `mise install` again.
- Confirm versions:

```bash
node -v
pnpm -v
```

### Port already in use

- `pnpm dev` may choose another port automatically.
- If needed, stop other local servers and retry.

### Build fails after route changes

- Check route consistency across:
  - `src/app/routes.ts`
  - `src/app/seo.ts`
  - `scripts/generate-sitemap.mjs`
  - `scripts/prerender.mjs`

### Push or PR auth issues

- Confirm your GitHub SSH/auth setup for this machine.
- Ask Codex for step-by-step debugging of your exact error.

## Repo-Specific Agent Rules

Before major agent-driven edits, read `AGENTS.md` at the repo root. It contains the workflow and guardrails coding agents should follow in this codebase.
