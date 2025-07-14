// Interface: definicija metode koje pravi servis mora imati

export default class IGithubService {
    getUserRepos(username, page = 1) {
      throw new Error('Not implemented');
    }
  
    getRepoDetails(username, repoName) {
      throw new Error('Not implemented');
    }
  
    getRepoTags(username, repoName) {
      throw new Error('Not implemented');
    }
  }