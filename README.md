# Aditya Jaiswal — Portfolio

A premium, animated developer portfolio built with React, Framer Motion, and a JSON-driven project system. Auto/manual dark-light theme, a 3D mouse-reactive avatar, a canvas particle hero, and a full project gallery with smart visit/download actions.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  data/
    projects.json      <- ALL project content lives here (see below)
    profile.json        <- name, bio, stats, socials, resume path
    skills.json          <- skill groups + proficiency bars
    experience.json     <- work experience + education timeline
  components/            <- reusable UI pieces (cards, modal, header, orb...)
  sections/                <- page sections (Hero, About, Skills, Projects...)
  context/ThemeContext.jsx <- dark/light/auto theme logic
  hooks/                  <- useProjectAction (visit/download logic), useOverlay (scroll-lock)
public/
  images/                 <- project screenshots, avatar, logo
  documents/              <- resume + certificates (served as static files)
  apks/                   <- drop APK files here for app-type projects
```

## Adding or editing a project

Everything about a project lives in **`src/data/projects.json`** — no component code needs to change. Each entry looks like:

```json
{
  "id": "unique-slug",
  "name": "Project Name",
  "tagline": "One-line hook shown on the card.",
  "description": "Longer description shown in the detail modal.",
  "cover_image": "/images/your-screenshot.png",
  "project_type": "web",
  "level": "Advanced",
  "build_time": "3 weeks",
  "year": "2026",
  "status": "Live",
  "tech_stack": ["React", "Node.js"],
  "steps": [
    { "title": "Step name", "detail": "What you did in this step." }
  ],
  "documents": [
    { "label": "Database Design", "type": "database", "description": "Schema overview." }
  ],
  "links": {
    "visit": "https://your-site.com",
    "repo": "https://github.com/...",
    "apk": "/apks/your-app.apk"
  },
  "featured": true
}
```

`project_type` is "web" or "app" — it controls the action button behavior. `featured: true` shows the project in the homepage grid; `false` means it only appears in "View All Projects".

### How the smart action button works

This is handled in `src/hooks/useProjectAction.js`:

- **`project_type: "web"`** -> the primary button opens `links.visit` in a new tab.
- **`project_type: "app"`** -> the primary button automatically downloads the file at `links.apk`.
- If the relevant link is missing, it falls back to `links.repo`, then to a disabled "Coming Soon" state.

### Adding a real APK

1. Drop the `.apk` file into `public/apks/`.
2. Set that project's `links.apk` to `/apks/your-file-name.apk` in `projects.json`.
3. Done — no component changes needed.

## Theme system

Defaults to the visitor's OS preference (`prefers-color-scheme`), with a manual override via the toggle in the header (cycles Auto -> Dark -> Light). Choice is remembered in `localStorage`. Color tokens live in `src/styles/tokens.css` under `:root` (dark) and `[data-theme="light"]` (light) — edit values there to retheme everything at once.

## Notes

- The contact form is currently front-end only (no backend wired up) — it gives a "Message noted" confirmation but doesn't send anywhere yet. Wire `handleSubmit` in `src/sections/Contact.jsx` to a real endpoint (e.g. Formspree, EmailJS, or your own API) when ready.
- `node_modules` and `dist` are not included in this package — run `npm install` then `npm run build` (or `npm run dev`) to regenerate them.
- Avoid spaces in filenames you drop into `public/` — use underscores, since URL paths with spaces need encoding.
