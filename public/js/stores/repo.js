const RepoStore = {
  state: {
    all: []
  },
  getters: {
    repositories(state) {
      return state.all;
    }
  },
  actions: {
    getRepositories({ commit }) {
      InlineApi.getRepositories()
        .then((repositories) => {
          commit("setRepositories", repositories);
          return;
        })
        .catch((err) => {
          console.log("Error calling getOrganizations", err);
        });
    }
  },
  mutations: {
    setRepositories(state, repositories) {
      state.all = repositories;
    }
  }
};
