import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import githubService from '../services/GithubServiceReal';

function RepoDetailsScreen() {
  const { name } = useParams(); // repo ime
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('user'); // korisnik iz query stringa

  const [repo, setRepo] = useState(null);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username || !name) {
      setError('Missing repository or user information.');
      return;
    }

    const fetchData = async () => {
      try {
        const [repoData, tagData] = await Promise.all([
          githubService.getRepoDetails(username, name),
          githubService.getRepoTags(username, name),
        ]);
        setRepo(repoData);
        setTags(tagData);
      } catch (err) {
        setError('Failed to load repository details');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!repo) return null;

  return (
    <div style={{ padding: 20 }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <img
          src={repo.owner.avatar_url}
          alt="Avatar"
          width={60}
          height={60}
          style={{ borderRadius: '50%', marginRight: 20 }}
        />
        <div>
          <h2>{repo.owner.login}</h2>
          <h3>{repo.name}</h3>
          <p>
            ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} | 👀 {repo.watchers_count}
          </p>
        </div>
      </header>

      <h4>Tags</h4>
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: 10 }}>
        {tags.length === 0 && <p>No tags available.</p>}
        {tags.map(tag => (
          <div key={tag.name} style={{ marginBottom: 10 }}>
            <strong>{tag.name}</strong>: {tag.commit.sha}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoDetailsScreen;