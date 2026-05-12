# University Living — React + Vite + Bootstrap clone

A static replica of universityliving.com built with **React + Vite + Bootstrap 5** (plain JSX, no TypeScript).

## Features
- Hero homepage with country tabs (UK, AUS, USA, GER, CAN, IRL, ITA, PRT)
- Search bar that opens a dropdown listing **popular cities + universities** per country
- Type to search — live filter across all cities & universities
- Click any city → navigates to `/city/<name>` with a properties listing page (filters sidebar, grid/list toggle, property cards exactly like the reference screenshots)

## Run

```bash
cd university-living
npm install      # or: bun install
npm run dev
```

Open http://localhost:5173

## Stack
- React 18, Vite 5
- React Router DOM 6
- Bootstrap 5 + Bootstrap Icons
- No TypeScript — pure `.jsx`
