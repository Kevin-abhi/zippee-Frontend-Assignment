# 🚀 Star Wars Characters App (Frontend Assignment – Zippee)

A fully responsive **React + Vite + Tailwind CSS** app that lists **Star Wars characters** using the [SWAPI](https://swapi.dev/) public API.  
Includes **search, filters, pagination, and mock authentication**.

---

## 🌟 Live Demo
**Live URL:** https://zippee-frontend-assignment-ashen.vercel.app/  
**GitHub Repo:** https://github.com/Kevin-abhi/zippee-Frontend-Assignment  

---

## 🧠 Features

### Core Features
- Fetches **Star Wars characters** from SWAPI.
- **Pagination** to navigate between pages.
- **Character Cards** with random images (using Picsum).
- **Modal View** with details like:
  - Height (in meters)
  - Mass
  - Date Added (formatted as dd-MM-yyyy)
  - Number of films
  - Birth Year
  - Homeworld details (name, terrain, climate, population)
- **Responsive UI** for mobile, tablet, and desktop screens.

### Search & Filter
- **Search by character name** (partial match).
- **Filter** by homeworld, film, or species.
- Supports **combined search and filter**.

### Mock Authentication
- Simple login/logout using **fake credentials**.
- **Username:** `admin`  
  **Password:** `123456`
- Mocked **JWT token** generation and **silent refresh logic** (no backend needed).
- Authenticated users can explore characters.
- Includes logout and session expiry handling.

### Bonus (Implemented)
- Fully typed, modular structure using hooks and contexts.
- Integration test verifying that the **modal opens with correct character details** (Vitest + React Testing Library).

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | React.js (Vite) |
| Styling | Tailwind CSS |
| API | [SWAPI – Star Wars API](https://swapi.dev/) |
| HTTP Client | Axios |
| State & Hooks | React Hooks + Context API |
| Auth | Mocked JWT (in localStorage) |
| Testing | Vitest + React Testing Library |
| Deployment | Vercel |

---

## ⚙️ Setup Instructions
```bash
# 1️⃣ Clone the Repository
git clone https://github.com/Kevin-abhi/zippee-Frontend-Assignment.git
cd zippee-Frontend-Assignment

# 2️⃣ Install Dependencies
npm install

# 3️⃣ Run the App
npm run dev

# Open the app in your browser
http://localhost:5173
```

---

## 📁 Folder Structure
```
src/
│
├── api/               # API requests (SWAPI)
├── auth/              # Mock login, AuthContext, and token refresh
├── components/        # UI Components (Cards, Modals, Pagination)
├── hooks/             # Custom data fetching hooks
├── utils/             # Helper functions (formatting, conversions)
├── __tests__/         # Integration tests
├── App.jsx            # Main app logic
├── main.jsx           # Entry file
└── index.css          # Tailwind base styles
```

---

## 🔐 Authentication Logic
The mock auth is implemented using a simple Context API system.

- On login with **admin / 123456**, a fake JWT token is generated and stored in **localStorage**.  
- The app silently refreshes the token every few minutes.  
- When the user logs out or the token expires, they are redirected to the login screen.

```js
// Example usage
const { user, login, logout } = useAuth();

// Login
await login('admin', '123456');

// Logout
logout();
```

---

## 🧪 Testing
Integration test using **Vitest + React Testing Library** ensures the modal opens with correct data.

```bash
npm run test
```

---

## 🧾 Notes
- Uses **SWAPI**, a free and public Star Wars API.  
- No backend required — authentication is mocked entirely on the frontend.  
- Clicking the **"Star Wars Characters"** title resets the view to the home page.  
- Built with modular components, clean code, and responsive layouts.

---

## 👨‍💻 Developer
**Developed by:** Abhishek Pratap Mall  
**Role:** Frontend Developer (React + Tailwind CSS)  
**GitHub:** https://github.com/Kevin-abhi  
**LinkedIn:** https://www.linkedin.com/in/abhishek-pratap-mall-252481250/
