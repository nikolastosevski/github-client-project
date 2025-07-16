import { useState } from 'react';
import ReactLogo from '../assets/react.svg';

// Komponenta koja prikazuje navbar na vrhu svih stranica
function Navbar({ onSearch, onToggleTheme, currentTheme }) {
  const [inputValue, setInputValue] = useState('octocat');      // Hendlovanje unešeno username-a, default = octocat

  const handleSubmit = (e) => {                                 // Hendlovanje klika na dugme za pretragu repo-a unešenog user-a
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <nav className="bg-gray-50 dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Leva strana - ikonica i naziv projekta */}
      <div className="flex items-center gap-2">
        <img src={ReactLogo} alt="React Logo" className="h-6 w-6" />
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">GitHub Explorer</h1>
      </div>

      {/* Desna strana - pretraga i toggle za temu */}
      <div className="flex items-center gap-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="GitHub username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
          >
            Search
          </button>
        </form>

        {/* Toggle dugme - TODO: Možemo staviti i u posebnu komponentu */}
        <button
          onClick={onToggleTheme} className="text-sm px-2 py-1 border border-gray-400 dark:border-gray-600 rounded text-gray-200 dark:text-gray-900 bg-gray-900 dark:bg-gray-200">
          {currentTheme === 'dark' ? '🌞 Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;