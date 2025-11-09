🌌 Star Wars Characters App

A responsive React + Vite + Tailwind CSS application that lists Star Wars characters using the Star Wars API (SWAPI)
.
This project demonstrates skills in frontend development, API integration, state management, and mock authentication.

🚀 Live Demo

🔗 Live: https://zippee-frontend-assignment-ashen.vercel.app/

💻 GitHub: https://github.com/Kevin-abhi/zippee-Frontend-Assignment

🧠 Overview

The app fetches Star Wars character data from SWAPI and displays it in a clean, responsive grid.
Each character card includes a random image, and you can view detailed info in a modal.
It also includes search, filters, and mock login/logout authentication with a simulated JWT system.

✨ Features
🧑‍🚀 Core

Fetches Star Wars characters from SWAPI

Supports pagination

Displays character cards with random images from Picsum Photos

Click a card to view details in a modal

🔍 Character Details

Name

Height (in meters)

Mass (in kilograms)

Birth year

Number of films appeared in

Homeworld (name, terrain, climate, population)

Date added (formatted as dd-MM-yyyy)

🔐 Authentication (Mocked)

Simple Login/Logout using fake credentials

Mock JWT token stored in localStorage

Silent token refresh (simulated in frontend)

🧭 Search & Filter

Search by character name (partial match)

Filter by homeworld (Tatooine, Alderaan, Naboo, etc.)

Combined search + filter functionality

📱 Responsive Design

Optimized for mobile, tablet, and desktop screens

🧰 Tech Stack
Category	Technology
Framework	React (Vite)
Styling	Tailwind CSS
State Management	React Hooks
API	SWAPI

Testing (Optional)	Vitest + React Testing Library
⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/Kevin-abhi/zippee-Frontend-Assignment.git
cd zippee-Frontend-Assignment

2. Install Dependencies
npm install

3. Run the App
npm run dev


Now open http://localhost:5173
 in your browser.

🔑 Login Credentials
Username	Password
admin	123456
🧪 Testing (Optional)

To run tests (if configured):

npm run test

🧾 Notes

Uses SWAPI, a free and public Star Wars API.

No backend is required — authentication is mocked on the frontend.

Clicking the “Star Wars Characters” title resets the view to the home page.

Designed with modular components, clean code, and responsive layouts.

👨‍💻 Developer

Developed by: Abhishek Pratap Mall
Role: Frontend Developer (React + Tailwind CSS)
GitHub: https://github.com/Kevin-abhi

LinkedIn: https://www.linkedin.com/in/abhishek-pratap-mall-252481250/