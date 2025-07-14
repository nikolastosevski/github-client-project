import { useEffect, useState } from 'react';
import githubService from '../services/GithubServiceReal';
import RepoCard from '../components/RepoCard';

function UserReposScreen() {
  const username = 'octocat'; // Za test, kasnije može biti input
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadRepos();
  }, []);

  const loadRepos = async () => {
    try {
      setLoading(true);
      const data = await githubService.getUserRepos(username, page);
      setRepos(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
      if (data.length < 10) setHasMore(false); // manje od 10 znači da nema više
    } catch (err) {
      setError('Failed to load repositories');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{username}'s Repositories</h1>

      {repos.map(repo => (
        <RepoCard key={repo.id} repo={repo} username={username} />
      ))}

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {hasMore && (
        <button onClick={loadRepos} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default UserReposScreen;