# Portfolio Project Documentation

## Overview
This is a React + Vite personal portfolio website for Divya Prabha Shree N S.

The UI is designed as a premium, animation-rich, colorful dark experience with:
- Glassmorphism cards
- Multi-color gradient accents
- Animated background mesh and floating orbs
- Typing animation for hero roles
- Scroll reveal transitions
- Animated skill progress bars
- Interactive project cards and modern contact form

The project is intentionally built as a single-page portfolio with section-based navigation,
fast initial load, and smooth interactions that highlight professional profile content.

## Tech Stack
- React 18
- Vite 5
- CSS (custom, no UI framework)

## Objectives
- Present profile, education, skills, and projects in a clear and modern format.
- Keep the codebase lightweight and easy to maintain.
- Support responsive behavior across desktop, tablet, and mobile.
- Provide an animation-rich interface while preserving accessibility and usability.

## Project Structure
- `index.html`: Vite entry HTML
- `src/main.jsx`: React root bootstrap
- `src/App.jsx`: Main page layout and interaction logic
- `src/styles.css`: Styling, animation system, responsive rules
- `vite.config.js`: Vite configuration

## Prerequisites
- Node.js 18.0.0 or later (LTS recommended)
- npm 9 or later

To verify versions:
- `node -v`
- `npm -v`

## Getting Started
1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev -- --host`
3. Build for production:
   - `npm run build`
4. Preview production build:
   - `npm run preview`

## Available Scripts
- `npm run dev`: starts local Vite development server.
- `npm run build`: creates optimized production output in `dist/`.
- `npm run preview`: serves the production build locally for validation.

## Application Architecture
- Entry Flow:
   - `index.html` provides root mount node.
   - `src/main.jsx` mounts React app into root.
   - `src/App.jsx` renders all portfolio sections and interaction hooks.
- Style Flow:
   - `src/styles.css` defines global theme tokens, section layouts, animation keyframes,
      and responsive breakpoints.
- Interaction Flow:
   - Typing effect updates role text in hero section.
   - IntersectionObserver marks section elements visible for reveal transitions.
   - Skill animations trigger when the skills section enters viewport.

## Key UI Sections
- Hero with typing effect and CTA buttons
- About profile summary
- Education timeline
- Internship highlights
- Interactive projects grid
- Skills with animated bars
- Certifications and achievements
- Contact information and contact form

## Data Model and Content Sources
This portfolio currently uses in-component arrays/objects as its data source in `src/App.jsx`.

Primary editable content collections:
- `roles`: text list used by the typing animation.
- `projects`: card content for project showcase section.
- `skillData`: labels and progress values for skill bars.
- `techTags`: technology labels shown across relevant UI areas.

Recommended content update workflow:
1. Update arrays and text content in `src/App.jsx`.
2. Run `npm run dev` and manually verify section layout.
3. Run `npm run build` before final release.

## Animation System
Animations are handled with CSS keyframes and small React hooks:
- `useTyping` in `src/App.jsx` drives the role typing text
- `IntersectionObserver` toggles `.visible` on `.reveal` elements
- Skills animate when the skills section enters the viewport
- Gradient and glow animations are managed in `src/styles.css`

Animation behavior guidelines:
- Keep motion purposeful and avoid excessive simultaneous transitions.
- Maintain `prefers-reduced-motion` behavior for accessibility.
- Prefer opacity + transform animations for smoother rendering.

## Theming and Visual Customization
Most theme values are centralized in `:root` inside `src/styles.css`:
- `--bg`, `--bg-soft` for base background
- `--grad-1` to `--grad-5` for accent palette
- `--text`, `--muted` for typography colors

To quickly re-theme:
1. Update gradient variables in `:root`
2. Adjust `body` and `body::before` background gradients
3. Tune glow/shadow intensity via `--shadow` and component shadow rules

## Responsive Design Notes
- Ensure hero headings and CTA groups remain readable below 768px.
- Keep project card grids fluid using responsive column sizing.
- Validate spacing scale and typography across common widths:
   - 320px to 480px (small phones)
   - 481px to 768px (large phones/tablets)
   - 769px and above (desktop)

## Content Customization
All portfolio content is currently embedded in `src/App.jsx` arrays/sections:
- `roles`
- `skillData`
- `projects`
- `techTags`

To update portfolio data, edit these arrays and section text directly.

## Accessibility Notes
- Includes `prefers-reduced-motion` fallback to reduce heavy animation.
- Uses clear text contrast on dark backgrounds.
- Form fields support keyboard focus states.
- Semantic heading order should be preserved when adding new sections.

## Performance and Quality
- Keep image assets compressed and web-optimized.
- Avoid loading large third-party libraries unless required.
- Minimize re-renders in interaction hooks where possible.
- Validate production build output using `npm run build`.

## Browser Compatibility Targets
Recommended support baseline:
- Latest 2 versions of Chrome
- Latest 2 versions of Edge
- Latest 2 versions of Firefox
- Latest 2 versions of Safari

## Deployment
This project can be deployed to any static hosting provider.

Typical flow:
1. `npm run build`
2. Deploy the generated `dist/` directory to hosting (Netlify, Vercel, GitHub Pages, etc.)

Post-deployment checklist:
1. Verify page load and route behavior.
2. Check responsive layout on mobile and desktop.
3. Validate animations and reduced-motion fallback.
4. Confirm contact links and social links are correct.

## Troubleshooting
- Development server does not start:
   - Delete `node_modules` and lock file, then run `npm install` again.
- Styles not updating:
   - Confirm `src/styles.css` is imported and no cached build is being previewed.
- Build fails:
   - Check terminal output for syntax errors in `src/App.jsx` or CSS parsing issues.
- Animation jitter on low-end devices:
   - Reduce animation duration/count and heavy shadow blur values.

## Security and Privacy Notes
- Do not hardcode secrets or private tokens in front-end files.
- If adding contact submission APIs, keep keys server-side.
- Sanitize any user-entered content if backend integration is added.

## Maintenance Guide
- Review and update profile content periodically.
- Keep dependencies updated (`npm outdated` then upgrade carefully).
- Re-test layout whenever major content changes are introduced.
- Track major changes in a changelog or release notes section.

## Future Enhancements
- Add backend-powered contact form integration.
- Add CMS or JSON-based external content source.
- Add dark/light theme toggle (if design direction requires it).
- Add automated checks (lint/test) in CI pipeline.

## Known Notes
- Contact form currently uses front-end only behavior and does not submit to a backend.
- For real submissions, integrate a backend/API or form service.
