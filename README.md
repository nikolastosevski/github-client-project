# GitHub Repo Explorer

This is a simple React application that interacts with the GitHub API.  
It allows users to view repositories of a specified user and explore detailed info about each repository.

## 🚀 Features

- Fetch and display GitHub repositories for a given user (default: `octocat`)
- Pagination ("Load More") for large repository lists
- Repository details screen with:
  - Owner avatar and username
  - Repository stats (stars, forks, watchers)
  - List of tags with commit SHA
- Search functionality in the navigation bar to load repositories for any GitHub user
- Dark/Light mode toggle with persistence in `localStorage`
- Modular architecture with service abstraction for easy mocking and testing
- React Router for navigation between screens

## 🧰 Tech Stack

- React (created with Vite)
- React Router v6
- Axios (with interceptors for error handling)
- TailwindCSS for styling
- JavaScript (no TypeScript, per task requirement)

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

## 📦 Possible Future Improvement
- Advanced error handling with Error Boundaries
- Infinite scrolling instead of "Load More" button
- Additional filtering and sorting options for repositories
- Unit and integration tests
- Authentication support for private repositories

## ✅ Licence
This project is open source and free to use and modify.