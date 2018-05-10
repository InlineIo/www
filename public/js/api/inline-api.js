
const InlineApi = {
  getOrganizations() {
    return axios.get("/organizations");
  },
  getRepositories() {
    return axios.get("/repositories");
  },
  getBoards() {
    return axios.get("/boards");
  }
};