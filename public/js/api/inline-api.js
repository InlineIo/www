
const InlineApi = {
  getOrganizations() {
    return axios.get("/organizations")
      .then((response) => {
        return response.data;
      });
  },
  getRepositories() {
    return axios.get("/repositories")
      .then((response) => {
        return response.data;
      });
  },
  getBoards() {
    return axios.get("/boards")
      .then((response) => {
        return response.data;
      });
  }
};