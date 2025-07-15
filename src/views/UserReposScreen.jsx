import { useEffect, useState } from 'react';
import githubService from '../services';
import RepoCard from '../components/RepoCard';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';

//Definisanje funkcije za prikaz stranice sa korisničkim repozitorijumima.
function UserReposScreen() {
  const username = 'octocat'; // Za test, kasnije može biti input polje na stranici.
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(true);

  //Funkcija koja se inicijalno pokreće prilikom pokretanja
  useEffect(() => {
    loadRepos();
  }, [page]);

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
    <div style={{ padding: 20 }}>

      {/* Prikaz naslova na stranici */}
      <h1>{username}'s Repositories</h1>

      {/* Prikaz preuzetih repozitorijuma u listi */}
      {repos.map(repo => (
        <RepoCard key={repo.id} repo={repo} username={username} />
      ))}

      {/* Prikaz greške ukolimo postoji */}
      {error && <ErrorMessage message={error} />}

      {/* Prikaz dugmeta za učitavanje preostalih repozitorijuma */}
      {hasMore && (
        <button onClick={loadNextPage} disabled={loading}>
          {loading && <LoadingSpinner />}
        </button>
      )}

    </div>
  );
}

export default UserReposScreen;