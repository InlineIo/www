Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Buefy.default);

// routing
const routes = [
  { path: '/', component: Home, title: "Home"},
  { path: '/organizations', component: Organizations, title: "Organizations" },
  { path: '/repositories', component: Repositories, title: "Repositories" },
  { path: '/boards', component: Boards, title: "Boards" }
];

const router = new VueRouter({
  routes
});

// store
const store = new Vuex.Store({
  modules: {
    OrgStore,
    RepoStore,
    BoardStore
  }
});

const app = new Vue({
  router,
  store,
  data: {
    routes
  }
}).$mount('#app');
