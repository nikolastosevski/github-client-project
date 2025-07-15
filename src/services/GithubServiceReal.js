import axiosInstance from '../api/axiosInstance';
import IGithubService from './IGithubService';

class GithubServiceReal extends IGithubService {
  async getUserRepos(username, page = 1) {
    const response = await axiosInstance.get(`/users/${username}/repos`, {
      params: {
        per_page: 5,
        page,
      },
    });
    return response.data;
  }

  async getRepoDetails(username, repoName) {
    const response = await axiosInstance.get(`/repos/${username}/${repoName}`);
    return response.data;
  }

  async getRepoTags(username, repoName) {
    const response = await axiosInstance.get(`/repos/${username}/${repoName}/tags`);
    return response.data;
  }

  // GitHub API ne vraća broj otvorenih release-ova u /repos endpointu.
  // To zahteva dodatni poziv po repo-u: /repos/{user}/{repo}/releases
  // S obzirom na performanse, to je izostavljeno iz početne implementacije.
}

export default new GithubServiceReal();