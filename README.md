# Karan Kumar — Portfolio

A two-part project: a static React/Vite frontend and a small Express API backend, deployed separately.

```
.
├── frontend/   React + Vite + Tailwind — deploy to Vercel
└── backend/    Express API (contact form) — deploy to Render
```

## Frontend (`frontend/`)

```
cd frontend
npm install
npm run dev        # local dev server on http://localhost:5173
npm run build       # production build -> frontend/dist
npm run check        # type-check
```

Copy `.env.example` to `.env` and set `VITE_API_URL` to your deployed backend URL.

### Deploying to Vercel

- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_API_URL` = your Render backend URL

`vercel.json` is already set up with an SPA rewrite so client-side routing works.

## Backend (`backend/`)

```
cd backend
npm install
npm run dev          # local dev server on http://localhost:5000
npm run build        # bundles to backend/dist
npm run start         # runs the built server
npm run check         # type-check
```

Copy `.env.example` to `.env` and set `FRONTEND_URL` to your deployed frontend URL (comma-separated if you need more than one, e.g. a Vercel preview + production domain).

### Deploying to Render

- Root directory: `backend`
- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Environment variable: `FRONTEND_URL` = your Vercel frontend URL
- Render sets `PORT` automatically — the server reads it at runtime.

Contact form submissions are currently held in memory on the backend (no database is wired up), so they reset on every deploy/restart. That's fine for a low-traffic contact form; swap in a real datastore later if you need persistence.
