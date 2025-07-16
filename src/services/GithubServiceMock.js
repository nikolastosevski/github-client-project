import IGithubService from './IGithubService';

class GithubServiceMock extends IGithubService {

  // Vraćanje svih repozitorijuma za korisnika GitHub-a - TEST
  async getUserRepos(username, page = 1) {
    return [
      {
        id: 1,
        name: 'mock-repo1',
        description: 'This is a mock repository1',
        stargazers_count: 42,
        forks_count: 10,
        watchers_count: 99,
        owner: {
          login: username,
          avatar_url: 'https://via.placeholder.com/100',
        }
      },
      {
        id: 2,
        name: 'mock-repo2',
        description: 'This is a mock repository2',
        stargazers_count: 11,
        forks_count: 11,
        watchers_count: 11,
        owner: {
          login: username,
          avatar_url: 'https://via.placeholder.com/100',
        }
      },
      {
        id: 3,
        name: 'mock-repo3',
        description: 'This is a mock repository3',
        stargazers_count: 11,
        forks_count: 11,
        watchers_count: 11,
        owner: {
          login: username,
          avatar_url: 'https://via.placeholder.com/100',
        }
      },
      {
        id: 4,
        name: 'mock-repo4',
        description: 'This is a mock repository1',
        stargazers_count: 11,
        forks_count: 11,
        watchers_count: 11,
        owner: {
          login: username,
          avatar_url: 'https://via.placeholder.com/100',
        }
      },
    ];
  }

  // Vraćanje detalja izabranog repozitorijuma - TEST
  async getRepoDetails(username, repoName) {
    return {
      name: repoName,
      stargazers_count: 42,
      forks_count: 10,
      watchers_count: 99,
      owner: {
        login: username,
        avatar_url: 'https://via.placeholder.com/100',
      },
    };
  }

  // Vraćanje tagova izabranog repozitorijuma - TEST
  async getRepoTags(username, repoName) {
    return [
      { name: 'v1.0.0', commit: { sha: 'abc123' } },
      { name: 'v1.1.0', commit: { sha: 'def456' } },
    ];
  }
}

export default new GithubServiceMock();