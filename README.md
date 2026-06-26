# Sumin — Portfolio

A clean, production-ready rebuild of the Framer portfolio site, hand-coded with
**Vite + React + TypeScript + Tailwind CSS** and **Framer Motion** for animations.

## Stack

- **Vite** — fast dev server & build
- **React 18 + TypeScript** — typed, component-driven UI
- **Tailwind CSS** — design tokens for the original palette/typography
- **Framer Motion** — scroll reveals & hero entrance animations

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Design system

Reverse-engineered from the original Framer site and centralized in
[`tailwind.config.js`](tailwind.config.js):

| Token     | Value       | Use                       |
| --------- | ----------- | ------------------------- |
| `cream`   | `#faf7f3`   | Page background           |
| `ink`     | `#111111`   | Primary text / solid btns |
| `forest`  | `#123510`   | Accent / hover            |
| `muted`   | `#999999`   | Secondary text            |
| Font      | Inter       | All type                  |

Breakpoints follow Framer's: mobile `< 810px`, tablet `810–1279px`,
desktop `≥ 1280px` (mapped to Tailwind `md` / `lg`).

## Structure

```
src/
  components/      Reusable UI primitives
    Button.tsx        Pill button + rolling-text hover
    RollingText.tsx   Framer "RollingTextHover" recreation
    Reveal.tsx        Scroll-triggered fade/rise wrapper
    Navbar.tsx        Sticky nav (scroll state + mobile menu)
    Footer.tsx
  sections/        One file per page section, in render order
    Hero.tsx  Bio.tsx  Services.tsx  Work.tsx
    Testimonials.tsx  Articles.tsx  Contact.tsx
  data/
    content.ts     All copy/content (single source of truth)
  App.tsx          Composition root
```

All text content lives in [`src/data/content.ts`](src/data/content.ts) so copy
edits never require touching layout code.

## Notes

- Project & article thumbnails use gradient placeholders standing in for the
  original Framer-hosted images — drop real assets into `Work.tsx` / `Articles.tsx`.
- The contact form is client-side only; wire it to your backend/Formspree as needed.
