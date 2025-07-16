import { useNavigate } from 'react-router-dom';

function RepoCard({ repo, username }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/repo/${repo.name}?user=${username}`);
  };

  return (
    <div
      onClick={handleClick}
      className="
        bg-white dark:bg-gray-800
        border border-gray-300 dark:border-gray-700
        rounded-lg
        p-4
        mb-4
        cursor-pointer
        hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700
        transition
        duration-200
        ease-in-out
        select-none
      "
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
      aria-label={`View details for repository ${repo.name}`}
    >
      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{repo.name}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-1 mb-2">
        {repo.description || 'No description provided.'}
      </p>
      <small className="text-sm text-gray-500 dark:text-gray-400">
        ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
      </small>
    </div>
  );
}

export default RepoCard;
