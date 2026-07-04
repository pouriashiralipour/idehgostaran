# CHANGELOG — Project Memory (ایده گستران جنوب / Idehgostaran)

> This file is the single source of truth for project memory.
> Read it at the start of every session before doing anything else.
> Persian is used only in the `/home/pouriashirali/documents/` docs; this file is English.

---

## Project Overview

Migration of a legacy HTML template ("ایده گستران جنوب") into a modern,
production-grade Next.js application for **ایده گستران جنوب** (Idehgostaran
Janoub), a software-services / education company.

- **Current scope:** Authentication module only (two-step phone → OTP flow).
- **Long term:** Full site migration. Auth is the first vertical slice.

The `html/` directory is a reference-only implementation (gitignored). It is
**not** part of the Next.js project. Rebuild, never copy blindly.

---

## Tech Stack

| Layer            | Choice                                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| Framework        | Next.js **16.2.7** (App Router) — ⚠️ newer than usual; read `node_modules/next/dist/docs/` before coding |
| UI runtime       | React **19.2.4** / react-dom 19.2.4                                                                      |
| Language         | TypeScript ^5 (strict)                                                                                   |
| Styling          | Tailwind CSS **v4** (CSS-first `@theme`, no JS config)                                                   |
| Forms plugin     | `@tailwindcss/forms` ^0.5.11                                                                             |
| Class utils      | `clsx` + `tailwind-merge` → `cn()` in `lib/utils.ts`                                                     |
| Icons            | Hand-written SVG components (`components/ui/icons.tsx`)                                                  |
| Themes           | `next-themes` (class strategy, system default)                                                           |
| Carousel         | `swiper` ^14.0.1                                                                                         |
| Fonts            | YekanBakh (local, `next/font/local`, `--font-yekanbakh`)                                                 |
| Linting          | ESLint 9 + `eslint-config-next`                                                                          |
| Validation lib   | **None** — to be built from scratch                                                                      |
| API layer        | **None** — to be introduced                                                                              |
| State management | Local React state (useState/useRef); no global store                                                     |

---

## Folder Structure

```
frontend/
├─ app/
│  ├─ layout.tsx        # RootLayout: lang=fa dir=rtl, YekanBakh, Providers, Header, Footer
│  ├─ providers.tsx     # next-themes ThemeProvider (class/system)
│  ├─ fonts.ts          # yekanBakh localFont config
│  ├─ globals.css       # Tailwind v4 @theme + CSS vars (light/dark) + base layer
│  ├─ page.tsx          # Home (sections)
│  └─ not-found.tsx     # 404 (Server Component)
├─ components/
│  ├─ ui/icons.tsx      # All icons: typed SVGProps, JSDoc, aria-hidden, default className
│  ├─ layout/{header,footer}/...
│  ├─ sections/{intro,features,counseling,feedback}/...
│  └─ articles/...
├─ data/                # Static typed data (articles, categories, navigation, ...)
├─ hooks/
│  ├─ use-click-outside.ts   # Working, well-documented
│  └─ use-on-key-press.ts    # ⚠️ EMPTY 0-byte placeholder (unused)
├─ lib/utils.ts         # cn() only — no validation yet
├─ types/               # category.ts, navigation.ts
├─ html/                # Legacy reference (gitignored): home-3, login-register, verification, terms
└─ public/              # fonts/yekanBakh, images, svg
```

Path alias: `@/*` → project root.

---

## Coding Conventions

- **Named exports** preferred (`export function Header`); a few default exports exist (`Logo`, `SearchForm`).
- **kebab-case** filenames; folder-per-feature grouping.
- **Client components** start with `'use client'` and own interactive state (`useState`/`useRef`).
- **JSDoc/TSDoc** on every exported function, component, and type.
- **English comments only.** Persian only in `/home/pouriashirali/documents/` docs.
- **a11y baseline:** `aria-haspopup`, `aria-expanded`, `role`, `sr-only` labels, keyboard-friendly buttons.
- **Form styling:** `form-input` class, `h-11`, `rounded-xl`, `bg-secondary`, `!ring-0 !ring-offset-0`,
  primary buttons `bg-primary text-primary-foreground rounded-full hover:opacity-80`.
- **Class merging:** always via `cn(...)`; never concatenate conditionally by hand.
- **Icons:** add to `components/ui/icons.tsx` following the existing typed-component pattern.

---

## Architecture Summary

- App Router, Server Components by default; `'use client'` only where interactivity is required.
- Data layer: static typed objects in `data/` consumed by Server Components (no fetch yet).
- Theme: CSS variables defined in `globals.css` (`:root` / `.dark`), surfaced to Tailwind via `@theme`.
- Header/Footer rendered once in `RootLayout`; page content injected as `children`.
- No auth, no session, no middleware, no API routes yet.

---

## Authentication Module (current focus)

### Requirement

Two-step flow on a **single page, no route navigation**:

1. User enters phone number → validate.
2. "Send Code" → smooth transition animation.
3. Phone form replaced by OTP form (in place).
4. User enters verification code.

### Validation requirements (production-grade, Iranian users)

Iranian mobile validation; Persian-digit normalization; English-digit normalization;
trim whitespace; invalid-character detection; empty-input validation; length validation;
security-focused sanitization; accessibility support; edge-case handling.
Reuse existing utilities — avoid duplicated logic.

### Animation requirements

Modern; no layout shift; accessible; performant; reusable; respect
`prefers-reduced-motion`.

### Legacy HTML reference

- `html/login-register.html` — step 1: phone/email input (`dir=ltr`, `form-input h-11`),
  "برو بریم" submit, terms footer.
- `html/verification.html` — step 2: OTP input (`inputmode=numeric`, `dir=ltr`,
  `maxlength=5`, `tracking-9 text-center`, `pattern=[0-9]+`), masked phone, "تایید" submit.
- Card chrome: `max-w-sm`, `bg-gradient-to-b from-secondary to-background`, `rounded-3xl`,
  inner `bg-background rounded-b-3xl` header.

---

## Workflow (mandatory, per project instructions)

1. **Phase 1 — Inspect / Analyze / Explain.** No code. Only this memory file may change.
2. **Phase 2 — Generate full implementation in chat.** Do not touch repo files. Wait for approval.
3. **Phase 3 — Apply implementation** after approval. Update this CHANGELOG. Export docs to
   `/home/pouriashirali/documents/` (folder with all new/modified source files preserving hierarchy,
   - a Persian Markdown doc describing the work).
4. **Phase 4 — Generate Conventional Commit** message. Do not commit. Wait for approval, then commit.

Always explain: why chosen, alternatives, performance, scalability, maintainability,
security, accessibility. Never provide code without explanation.

---

## Current Progress

- [x] Phase 1 complete: full repository inspection & analysis (2026-07-04).
- [ ] Auth: validation utilities (`lib/validation/`).
- [ ] Auth: animated step-transition primitive.
- [ ] Auth: phone form component.
- [ ] Auth: OTP form component.
- [ ] Auth: single-page auth route wiring the two steps.
- [ ] Auth: documentation export to `/home/pouriashirali/documents/`.

---

## Completed Tasks

- (none yet — auth work not started)

---

## Pending Tasks

- Build the Authentication module (see "Current Progress").
- Decide & document: auth route location, OTP input style (single field vs segmented),
  submit-handler seam for future API/server action.

---

## Technical Decisions

- **Tailwind v4 CSS-first config** is the styling source of truth (`@theme` in `globals.css`).
- **No new dependencies** unless justified — animation/validation hand-built and reusable.
- **Next.js 16 specifics** must be verified against bundled docs before coding (Phase 2).

---

## Known Issues / Technical Debt

- `hooks/use-on-key-press.ts` is an empty 0-byte placeholder.
- `CategoriesMegaMenu` and `CartButton` are commented out in `header.tsx`.
- `article-card.tsx` vs `article-list-card.tsx` may overlap in purpose.
- `lucide-react` is a dependency but unused (all icons are hand-written SVG).
- No backend/API — auth submit handlers will be stubbed with a typed seam.

---

## Future Recommendations

- Introduce a typed API/client layer and a minimal validation schema utility reusable app-wide.
- Implement real OTP send/verify via a Next.js Server Action or Route Handler.
- Wire `UserMenu` to actual auth state (session) once auth exists.
- Fill or remove the empty `use-on-key-press` hook.
