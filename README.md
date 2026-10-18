# Ahmed Faiyaz — Portfolio

Bilingual (日本語 / English) personal portfolio built with React, TypeScript, Tailwind CSS v4 and Motion.

## Scripts

| Command | What it does |
| --- | --- |
| `npm i` | Install dependencies |
| `npm run dev` | Start the dev server on http://localhost:3000 |
| `npm run build` | Type-check, then build to `build/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run the TypeScript compiler without emitting |
| `npm run lint` | Lint with ESLint |

## Where things live

- `src/i18n/en.ts`, `src/i18n/jp.ts` — all copy. `jp.ts` is typed against the English keys, so a missing translation fails the type-check.
- `src/data/contact.ts` — email, phone, résumé link and social profiles. Social links with an empty `url` are hidden; fill one in to show it.
- `src/data/navigation.ts` — section order shared by the nav bar and footer.
- `src/components/Projects.tsx` — project list; add `liveUrl` / `repoUrl` to show "Live Demo" / "Source Code" buttons.
- `src/index.css` — Tailwind entry point and design tokens (`@theme`).
