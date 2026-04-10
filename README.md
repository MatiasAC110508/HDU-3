# MAT — UI System with Next.js backend

This repository demonstrates a small UI component system (frontend) and a minimal Next.js backend API (backend). The goal is a simple, well-structured example you can run locally and extend.

Project layout

- `ui-system/` — frontend (Vite + React + TypeScript)
  - `src/` — React source files and components
  - `package.json` — frontend scripts and deps
- `backend/` — minimal Next.js app exposing an API route
  - `pages/api/hello.ts` — example API returning JSON { message, time }
  - `package.json` — backend scripts and deps
- `.gitignore` — root ignore rules

What I added

- Minimal Next.js backend with `GET /api/hello`.
- `ApiCard` component in the frontend that fetches the backend and renders the result inside the middle card (no external error box).
- `.gitignore` files for root, backend and frontend.

Run locally (recommended)

1. Start the backend (default port 3000):

```bash
cd backend
npm install
npm run dev
```

2. Start the frontend (Vite, default port 5173):

```bash
cd ui-system
npm install
npm run dev
```

3. Open the frontend in your browser (usually `http://localhost:5173`). The middle card ("Mantenimiento de Servidores") shows API status fetched from `http://localhost:3000/api/hello`.

Notes for development

- CORS: For development convenience the API sets permissive CORS headers. In production you should restrict `Access-Control-Allow-Origin` to your frontend origin or use a proper proxy.
- API URL: The frontend currently fetches `http://localhost:3000/api/hello`. Consider moving this to an environment variable for different environments (Vite: `VITE_API_BASE`).
- Ports: If you run the backend on a different port, update the fetch URL in `ui-system/src/components/ApiCard.tsx`.

Files of interest

- [backend/pages/api/hello.ts](backend/pages/api/hello.ts)
- [ui-system/src/components/ApiCard.tsx](ui-system/src/components/ApiCard.tsx)
- [ui-system/src/App.tsx](ui-system/src/App.tsx)

Next steps you might want

- Move API base URL to an env variable and update frontend to read it.
- Add more API routes and map them to different cards.
- Add unit tests / integration tests.

If you want, I can:

- create a `.env` example and wire `VITE_API_BASE`,
- make a git commit with a clear message, or
- add a simple health-check endpoint.
# ReactApp
