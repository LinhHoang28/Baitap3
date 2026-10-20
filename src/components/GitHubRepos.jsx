import { useRepos } from '../hooks/useRepos';
import { RepoSkeleton } from './RepoSkeleton';

export function GitHubRepos({ username }) {
  const { repos, loading, error } = useRepos(username);
  if (loading) return <RepoSkeleton />;
  if (error) return <p role="alert">Lỗi tải repo.</p>;
  if (repos.length === 0) return <p>Chưa có repo.</p>;
  return (
    <ul className="repo-list">
      {repos.slice(0, 6).map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      ))}
    </ul>
  );
}