import axiosInstance from '../api/axiosInstance';
import IGithubService from './IGithubService';

class GithubServiceReal extends IGithubService {
  async getUserRepos(username, page = 1) {
    const response = await axiosInstance.get(`/users/${username}/repos`, {
      params: {
        per_page: 10,
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
}

export default new GithubServiceReal();