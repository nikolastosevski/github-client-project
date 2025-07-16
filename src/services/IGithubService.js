// Interface API-ja koji će implementirati pravi i mock API.

export default class IGithubService {
    // Vraćanje svih repozitorijuma za korisnika GitHub-a
    getUserRepos(username, page = 1) {
      throw new Error('Not implemented');
    }
  
    // Vraćanje detalja izabranog repozitorijuma
    getRepoDetails(username, repoName) {
      throw new Error('Not implemented');
    }
  
    // Vraćanje tagova izabranog repozitorijuma
    getRepoTags(username, repoName) {
      throw new Error('Not implemented');
    }
  }