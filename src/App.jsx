import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserReposScreen from './views/UserReposScreen';
import RepoDetailsScreen from './views/RepoDetailsScreen';
import ErrorBoundary from './components/ErrorBoundary';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css'

function App() {

  const [username, setUsername] = useState('octocat');
  const [theme, setTheme] = useState(() =>
  localStorage.getItem('theme') || 'light'
);

// Primeni klasu na body/html
useEffect(() => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
}, [theme]);

const toggleTheme = () => {
  setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
};

const handleSearch = (newUsername) => {
  setUsername(newUsername);
};

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar onSearch={handleSearch} onToggleTheme={toggleTheme} currentTheme={theme} />
      <Router>
        <Routes>
          <Route path="/" element={<UserReposScreen username={username} />} />
          <Route path="/repo/:name" element={<RepoDetailsScreen />} />
        </Routes>
      </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App
