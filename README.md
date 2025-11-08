# Star Wars Characters App

React + Vite + Tailwind CSS app that lists Star Wars characters using SWAPI.

## Features
- Fetches characters from SWAPI with pagination
- Character cards with random images (Picsum)
- Species-based accent color
- Modal with details: height (in meters), mass, date added (dd-MM-yyyy), number of films, birth year, homeworld details (name, terrain, climate, population)
- Search by name (partial match)
- Responsive UI for mobile/tablet/desktop

## Setup
1. Ensure Node.js (>=16) and npm are installed.
3. Install:
   ```
   npm install
   ```
4.  npm run dev
   ```
5. Open http://localhost:5173

## Notes
- No API key required; SWAPI is public.
- If you want tests, run `npm run test` (Vitest + Testing Library included as devDeps).
