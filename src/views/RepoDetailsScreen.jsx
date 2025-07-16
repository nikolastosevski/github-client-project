import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import githubService from '../services';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';

function RepoDetailsScreen() {
  const { name } = useParams(); // repo ime
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('user');

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
        setError('Failed to load repository details: ' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, name]);

  if (loading) return <div className="flex justify-center mt-8"><LoadingSpinner /></div>;
  if (error) return <ErrorMessage message={error} />;
  if (!repo) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* HEADER */}
      <header className="flex items-center gap-4 mb-6">
        <img
          src={repo.owner.avatar_url}
          alt="Avatar"
          className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-600"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{repo.owner.login}</h2>
          <h3 className="text-lg text-blue-600 dark:text-blue-400 font-medium">{repo.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} | 👀 {repo.watchers_count}
          </p>
        </div>
      </header>

      {/* TAGOVI */}
      <section>
        <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Tags</h4>
        <div className="max-h-64 overflow-y-auto rounded border border-gray-300 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800 space-y-3">
          {tags.length === 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-400">No tags available.</p>
          )}
          {tags.map(tag => (
            <div key={tag.name} className="text-sm text-gray-800 dark:text-gray-200">
              <strong>{tag.name}</strong>: <span className="break-all text-gray-600 dark:text-gray-400">{tag.commit.sha}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RepoDetailsScreen;