import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserReposScreen from './views/UserReposScreen';
import RepoDetailsScreen from './views/RepoDetailsScreen';
import ErrorBoundary from './components/ErrorBoundary';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [username, setUsername] = useState('octocat');                                    // Dinamički username sa forme - inicijalno octocat
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');     // Postavljanje teme koja se učitava iz lokalne memorije

  // Događaji koji se izvršavaju promenom theme parametra
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Metoda za promenu teme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Metoda za hendlovanje pritiska na dugme pretraga u Navbar-u
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
