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
    getRepositories({ commit }, payload) {
      InlineApi.getRepositories(payload.org)
        .then((repositories) => {
          commit("setRepositories", repositories.sort((a, b) => {
            return (a.name < b.name) ? -1 : 1;
          }));
          return;
        })
        .catch((err) => {
          console.log("Error calling getRepositories", err);
        });
    }
  },
  mutations: {
    setRepositories(state, repositories) {
      state.all = repositories;
    }
  }
};
