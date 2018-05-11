
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
  getBoards() {
    return axios.get("/boards")
      .then((response) => {
        return response.data;
      });
  }
};