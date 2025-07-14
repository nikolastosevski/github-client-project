import { useNavigate } from 'react-router-dom';

function RepoCard({ repo, username }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/repo/${repo.name}?user=${username}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: '1px solid #ccc',
        borderRadius: 6,
        padding: 10,
        marginBottom: 10,
        cursor: 'pointer',
      }}
    >
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <small>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</small>
    </div>
  );
}

export default RepoCard;
