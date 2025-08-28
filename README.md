# CodingNinja 🚀

A modern, responsive clone of the CodingNinjas learning platform built with React, TypeScript and Vite. Intended as a UI prototype / starter for frontend work and integration with a backend.

## Features
- Responsive pages: Home, Courses, Practice, Events, Login, Signup
- Multi-step signup form with client-side validation
- Navbar and Footer components
- Course listings and simple mock/fallback data
- Accessible SVG icons with hover color styles

## Tech Stack
- React 18 + TypeScript
- Vite (dev server + build)
- Tailwind CSS (utility styling) or plain CSS depending on project files
- ESLint for linting

## Screenshots

![cd1](https://github.com/user-attachments/assets/a24dbd6e-74a8-47f6-8310-9a3d38b0e367)



## Quick Start

Prerequisites
- Node.js v16+ (recommended)
- npm or yarn

Install
```bash
npm install
# or
yarn
```

Run development server
```bash
npm run dev
# or
yarn dev
```

Build for production
```bash
npm run build
# or
yarn build
```

Preview production build
```bash
npm run preview
# or
yarn preview
```

## Available Scripts
- npm run dev — start dev server with HMR
- npm run build — production build
- npm run preview — preview production build
- npm run lint — run ESLint (if configured)
- npm run test — run tests (if present)

Adjust exact script names to match package.json.

## Environment / Backend
This project is frontend-first. If you integrate a backend:
- Add API base URL in an .env file (example for Vite):
```env
VITE_API_BASE_URL=http://localhost:4000/api
```
- Access via import.meta.env.VITE_API_BASE_URL
- Ensure CORS is enabled on the backend for local development

## Development Notes
- Signup form POSTs to `/api/signup`. If no backend exists, the app can use a localStorage fallback (dev mode) — check the signup handler in src/pages/SignupPage.tsx.
- Footer social icons are SVGs using fill="currentColor" so hover color can be controlled via CSS (e.g. hover:text-[--color-ninjaOrange]).
- When flows fail, open browser DevTools → Network & Console to inspect errors (CORS, 404, network).

## Contributing
1. Fork the repository
2. Create a branch: git checkout -b feat/your-feature
3. Commit changes: git commit -m "feat: description"
4. Push and open a PR

Keep changes focused and run lint/tests before submitting.

## License
Choose a license (e.g. MIT) before publishing. This repo is a learning/demo clone — avoid infringing trademarks.

## Contact
Open an issue for bugs or feature requests. For questions, add a GitHub issue or contact the maintainer listed in the repository.
