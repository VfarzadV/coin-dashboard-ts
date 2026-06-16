
# 💰 Coin Dashboard – Crypto & Gold Tracker

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.0-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive dashboard for tracking real-time cryptocurrency and gold prices – built with React 19, TypeScript, Vite, and Tailwind CSS 4.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

| Category | Feature |
|----------|---------|
| 📊 **Dashboard** | Aggregated view of all assets with live price cards |
| ₿ **Crypto Prices** | Real-time prices for BTC, ETH, and top altcoins |
| 🥇 **Gold Rates** | Live gold prices in USD, EUR, GBP, and more |
| 💱 **Currency Converter** | Fiat conversion between 10+ currencies |
| 🎨 **Theming** | Smooth dark/light mode toggle with persistent preference |
| 📱 **Responsive** | Collapsible sidebar, optimized for mobile & tablet |
| ⚡ **Performance** | Built with Vite for instant HMR and fast builds |
| 🔒 **Type Safety** | Full TypeScript support with strict type checking |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI library with hooks and concurrent features |
| TypeScript 5.7 | Static typing and better DX |
| Vite 6.0 | Next‑generation frontend tooling |
| Tailwind CSS 4 | Utility‑first CSS framework |
| React Router 7 | Client‑side routing with data loaders |
| Heroicons | Beautiful SVG icons |

---

## 📸 Screenshots

> *(Add your screenshots here – replace the placeholders with actual images)*

![Dashboard Light](./screenshots/dashboard-light.png)  
![Dashboard Dark](./screenshots/dashboard-dark.png)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher  
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/VfarzadV/coin-dashboard-ts.git
cd coin-dashboard-ts

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your API keys (if you use any external price API). Example:

```env
VITE_API_BASE_URL=https://api.coingecko.com/api/v3
VITE_API_KEY=your_api_key_here
```

> **Note:** This project uses mock data by default. To enable live data, set the appropriate environment variables.

### Running the App

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) to see the dashboard.

---

## 📁 Project Structure

```
coin-dashboard-ts/
├── public/                     # Static assets (favicon, robots.txt)
├── src/
│   ├── Components/             # Reusable UI components
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   └── PriceCard/
│   ├── Pages/                  # Route pages
│   │   ├── Dashboard/
│   │   ├── Crypto/
│   │   ├── Gold/
│   │   └── Currency/
│   ├── Types/                  # TypeScript interfaces & types
│   ├── hooks/                  # Custom React hooks (optional)
│   ├── utils/                  # Helper functions
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   ├── routes.tsx              # Route definitions
│   └── index.css               # Tailwind imports & global styles
├── .env.example                # Environment variables template
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🤝 Contributing

Contributions are what make the open‑source community such an amazing place. Any contributions you make are **greatly appreciated**.

1. **Fork** the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

Please ensure your code follows the existing style and includes appropriate tests.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Farzad Vatandoust**  
- GitHub: [@VfarzadV](https://github.com/VfarzadV)  
- Project Link: [https://github.com/VfarzadV/coin-dashboard-ts](https://github.com/VfarzadV/coin-dashboard-ts)

---

⭐️ **If this project helped you, don't forget to give it a star!** ⭐️
```
