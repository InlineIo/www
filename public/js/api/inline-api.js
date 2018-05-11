
const InlineApi = {
  getOrganizations() {
    return axios.get("/organizations")
      .then((response) => {
        return response.data;
      });
  },
  getRepositories(org) {
    return axios.get(`/repositories/${org}`)
      .then((response) => {
        return response.data;
      });
  },
  getBoards(org, repo) {
    const url = repo ? `/boards/${org}/${repo}` : `/boards/${org}`;
    return axios.get(url)
      .then((response) => {
        return response.data;
      });
  }
};