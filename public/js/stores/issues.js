const IssuesStore = {
  state: {
    all: []
  },
  getters: {
    issues(state) {
      return state.all;
    }
  },
  actions: {
    getIssues({ commit }, payload) {
      InlineApi.getIssues(payload)
        .then((issues) => {
          commit("setIssues", issues);
          return;
        })
        .catch((err) => {
          console.log("Error calling getIssues", err);
        });
    }
  },
  mutations: {
    setIssues(state, issues) {
      state.all = issues;
    }
  }
};
