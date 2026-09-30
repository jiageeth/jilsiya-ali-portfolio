# Jilsiya Ali C: Portfolio

Suggested repository name: `jilsiya-ali-portfolio`

## Overview

A single-page portfolio for Jilsiya Ali C, a B.Tech Computer Science student building full-stack web applications with React and Node.js. The page opens with her name, role and a one-line positioning statement, plus an interactive sketch of the loading, success, failure and retry states she handles in her Jobby App. Below that: four project case studies, about, grouped skills, education and contact details.

All content comes from her resume and LinkedIn profile. No metrics, testimonials or experience have been invented. Because neither source lists work experience, there is no Experience section.

## Technology stack

- Next.js 14 (App Router) and React 18
- TypeScript
- Tailwind CSS 3, with light and dark themes driven by CSS variables
- `next/font` (Bricolage Grotesque and Figtree)
- No API keys, environment variables or database

## Run locally

Requires Node.js 18.17 or newer and an internet connection (fonts are downloaded by `next/font` the first time).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other commands:

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Customize

**Content.** Everything is in `src/data/profile.ts`:

- `profile`: name, title, positioning statement, contact links, about text
- `projects`: add, remove or reorder case studies. Set `repoUrl` and `liveUrl` on a project and "Code" and "Live demo" links appear automatically.
- `skillGroups` and `education`

**Resume download.** Copy your PDF to `public/resume.pdf`, then set `resumeUrl: "/resume.pdf"` in `profile`. A "Download resume" button appears in the hero.

**Colors.** Edit the variables at the top of `src/app/globals.css` (`:root` for light, `.dark` for dark). Values are space-separated RGB.

**Fonts.** Change the two font imports in `src/app/layout.tsx`.

**Hero demo.** `src/components/ViewStatesDemo.tsx` uses layout placeholders only. Replace it with a screenshot or a link to a live demo if you prefer.

## Project structure

```
jilsiya-ali-portfolio/
├── public/                  # static files (put resume.pdf here)
├── src/
│   ├── app/
│   │   ├── globals.css      # design tokens and base styles
│   │   ├── icon.svg         # favicon
│   │   ├── layout.tsx       # fonts, metadata, theme script
│   │   └── page.tsx         # page composition
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Section.tsx
│   │   ├── Skills.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ViewStatesDemo.tsx
│   └── data/
│       └── profile.ts       # all portfolio content
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Notes on the source documents

- The resume lists the NxtWave certification as January 2024 to ongoing, while LinkedIn lists NxtWave as September 2023 to May 2027. The portfolio uses the resume dates. Update LinkedIn or `src/data/profile.ts` so they match.
- The resume has no repository or live links for individual projects. Add them in `profile.ts` once they exist; recruiters respond well to them.

## Deploy

The easiest option is Vercel: push the repository to GitHub, import it in Vercel, and deploy with the default settings.
