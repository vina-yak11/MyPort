Brain — mapping of portfolio content to code files

Overview
- This file maps UI sections to the code locations where content and text live. Edit the data objects in `src/data/portfolio.ts` for most textual updates (name, subtitle, projects, experience, etc.).

Key files and what lives there

- src/data/portfolio.ts
  - `siteConfig`: name, initials, role, tagline, subtitle (hero/intro text), location, email, phone, social links, avatar paths.
  - `navLinks`: Navbar labels and anchors.
  - `stats`, `skills`, `projects`: used by `About`, `Skills`, and `Projects` components.
  - `experience`: the list of internships/jobs shown in `Experience` — edit entries here. Each item: `{ duration, role, company, points }`.
  - NOTES: There's a small editable comment block above the `experience` array where you can add more items.

- src/components/Hero.tsx
  - Renders the top section. Uses `siteConfig.name`, `siteConfig.subtitle`, and `siteConfig.maleAvatarPath` for the avatar.
  - To change the greeting layout, update the JSX here.

- src/components/About.tsx
  - Renders the avatar ring and summary text. Uses `siteConfig.maleAvatarPath` and `services`, `stats` from data.

- src/components/Projects.tsx
  - Reads `projects` from `src/data/portfolio.ts`. Edit project objects there to update titles, descriptions, tech, and links.

- src/components/Experience.tsx
  - Renders the `experience` array from the data file. To update durations, roles, companies, and bullets, edit `src/data/portfolio.ts`.

- src/components/Contact.tsx
  - Controls the contact card and social links (uses `siteConfig.email`, `siteConfig.phone`, `siteConfig.linkedin`, `siteConfig.github`).
  - The contact form triggers a `mailto:` using `siteConfig.email`.

- src/components/MiniGame.tsx
  - New component that embeds the Drive video and a small canvas game. The iframe uses the Drive preview link. Replace the `drivePreview` URL inside this file if you change the video.

- src/app/page.tsx
  - Page composition: `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `MiniGame`, `Experience`, `GitHubSection`, `Contact`, `Footer`.

Where to change what (quick cheatsheet)
- Change your visible name and subtitle: `src/data/portfolio.ts` → `siteConfig.name` and `siteConfig.subtitle`.
- Change avatar image: replace the files in `public/` (e.g., `avatar.png`, `male-avatar.svg`) and ensure paths in `siteConfig` point to them.
- Edit experience entries: `src/data/portfolio.ts` → `experience` array.
- Update projects: `src/data/portfolio.ts` → `projects` array.
- Change contact email/phone/socials: `src/data/portfolio.ts` → `siteConfig.email`, `siteConfig.phone`, `siteConfig.github`, `siteConfig.linkedin`.

Developer notes
- The hero uses Framer Motion for animations. Keep the import if you modify animations.
- The mini-game is intentionally small and client-side only. You can replace it with a full game or an embedded iframe to a game host.

If you'd like, I can:
- Replace the avatar with a specific cartoon image you provide.
- Improve the mini-game (make Snake or Flappy Bird) and add a high-score save to `localStorage`.
- Run the dev server and preview changes locally.
