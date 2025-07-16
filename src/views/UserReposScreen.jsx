import { useEffect, useState } from 'react';
import githubService from '../services';
import RepoCard from '../components/RepoCard';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';

//Definisanje funkcije za prikaz stranice sa korisničkim repozitorijumima.
function UserReposScreen({ username }) {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(true);

  //Funkcija koja se inicijalno pokreće prilikom pokretanja
  useEffect(() => {
    setRepos([]);
    setPage(1);
    setHasMore(true);
    setError('');

    loadRepos();
  }, [username, page]);

  //Metoda se uvek poziva dva puta zbog taga React.StrictMode koji je postavljen u main.jsx
  //Iz tog razloga potrebno je obraditi duplikate
  const loadRepos = async () => {
    try {
      //Prikaz učitavanja
      setLoading(true);

      //Preuzimanje podataka (pravih ili mokovanih)
      const data = await githubService.getUserRepos(username, page);

      //Postavljanje prikaza repozitorijuma za korisnika
      setRepos(prev => {
        const existingIds = new Set(prev.map(r => r.id));
        const unique = data.filter(repo => !existingIds.has(repo.id));
        return [...prev, ...unique];
      });

      if (data.length < 5) setHasMore(false); // Manje od 5 znači da nema dugmeta za učitavanje još.
    } catch (err) {
      setError('Greška prilikom učitavanja repozitorijuma:' + err);
    } finally {
      //Zatvaranje učitavanja
      setLoading(false);
    }
  };

  const loadNextPage = () => {
    setPage(prev => prev + 1);
  }

  //Stranica
  return (
  <div className="max-w-4xl mx-auto px-4 py-6">

    {/* Naslov stranice */}
    <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
      {username}'s Repositories
    </h1>

    {/* Lista repozitorijuma */}
    <div className="space-y-4">
      {repos.map(repo => (
        <RepoCard key={repo.id} repo={repo} username={username} />
      ))}
    </div>

    {/* Prikaz greške */}
    {error && <ErrorMessage message={error} />}

    {/* Dugme za učitavanje sledeće stranice */}
    {hasMore && (
      <div className="mt-6 text-center">
        <button
          onClick={loadNextPage}
          disabled={loading}
          className="
            px-6 py-2 rounded bg-blue-600 text-white font-medium
            hover:bg-blue-700
            disabled:bg-gray-400 dark:disabled:bg-gray-600
            transition-colors duration-200
          "
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <LoadingSpinner />
              Loading...
            </div>
          ) : (
            'Load More'
          )}
        </button>
      </div>
    )}

  </div>
);

}

export default UserReposScreen;