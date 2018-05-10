const OrgStore = {
  state: {
    all: []
  },
  getters: {
    organizations(state) {
      return state.all;
    }
  },
  actions: {
    getOrganizations({ commit }) {
      InlineApi.getOrganizations()
        .then((organizations) => {
          commit("setOrganizations", organizations);
          return;
        })
        .catch((err) => {
          console.log("Error calling getOrganizations", err);
        });
    }
  },
  mutations: {
    setOrganizations(state, organizations) {
      state.all = organizations;
    }
  }
};
