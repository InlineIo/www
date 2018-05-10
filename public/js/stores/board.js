const BoardStore = {
  state: {
    all: []
  },
  getters: {
    boards(state) {
      return state.all;
    }
  },
  actions: {
    getBoards({ commit }) {
      InlineApi.getBoards()
        .then((boards) => {
          commit("setBoards", boards);
          return;
        })
        .catch((err) => {
          console.log("Error calling getOrganizations", err);
        });
    }
  },
  mutations: {
    setBoards(state, boards) {
      state.all = boards;
    }
  }
};
