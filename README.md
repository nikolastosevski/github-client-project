# GitHub Repo Explorer

This is a simple React application that interacts with the GitHub API.  
It allows users to view repositories of a specified user and explore detailed info about each repository.

## 🚀 Features

- Fetch and display GitHub repositories for a given user (default: `octocat`)
- Pagination ("Load More") for large repo lists
- Repository details screen with:
  - Owner avatar and username
  - Repo stats (stars, forks, watchers)
  - List of tags with commit SHA
- Modular architecture with service abstraction for easy testing

## 🧰 Tech Stack

- React (via Vite)
- React Router
- Axios (with interceptors)
- JavaScript (no TypeScript, per task request)

## 📁 Project Structure

src/
├── api/ # Axios instance
├── components/ # Reusable UI components
├── services/ # GitHub API service + DI interface
├── views/ # Screen components (Repo List & Details)
├── hooks/ # (future) Custom React hooks
├── types/ # (optional) JS pseudo-interfaces
├── App.jsx
└── main.jsx

## ✅ Usage

1. Install dependencies (npm install)
2. Run development server (npm run dev)
3. Open in browser (http://localhost:5173)

## 📦 To Do

- TailwindCSS styling
- Error boundary and fallback UI
- Mock service for testing
