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

## Tech Stack
- React 18
- Vite 5
- CSS (custom, no UI framework)

## Project Structure
- `index.html`: Vite entry HTML
- `src/main.jsx`: React root bootstrap
- `src/App.jsx`: Main page layout and interaction logic
- `src/styles.css`: Styling, animation system, responsive rules
- `vite.config.js`: Vite configuration

## Getting Started
1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev -- --host`
3. Build for production:
   - `npm run build`
4. Preview production build:
   - `npm run preview`

## Key UI Sections
- Hero with typing effect and CTA buttons
- About profile summary
- Education timeline
- Internship highlights
- Interactive projects grid
- Skills with animated bars
- Certifications and achievements
- Contact information and contact form

## Animation System
Animations are handled with CSS keyframes and small React hooks:
- `useTyping` in `src/App.jsx` drives the role typing text
- `IntersectionObserver` toggles `.visible` on `.reveal` elements
- Skills animate when the skills section enters the viewport
- Gradient and glow animations are managed in `src/styles.css`

## Theming and Visual Customization
Most theme values are centralized in `:root` inside `src/styles.css`:
- `--bg`, `--bg-soft` for base background
- `--grad-1` to `--grad-5` for accent palette
- `--text`, `--muted` for typography colors

To quickly re-theme:
1. Update gradient variables in `:root`
2. Adjust `body` and `body::before` background gradients
3. Tune glow/shadow intensity via `--shadow` and component shadow rules

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

## Deployment
This project can be deployed to any static hosting provider.

Typical flow:
1. `npm run build`
2. Deploy the generated `dist/` directory to hosting (Netlify, Vercel, GitHub Pages, etc.)

## Known Notes
- Contact form currently uses front-end only behavior and does not submit to a backend.
- For real submissions, integrate a backend/API or form service.
