Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Buefy.default);

// routing
const routes = [
  {path: '/', component: Home},
  {path: '/organizations', component: Organizations},
  {path: '/repositories/:orgId', component: Repositories},
  {path: '/boards', component: Boards},
  {path: '/boards/:orgId', component: Boards},
  {path: '/boards/:orgId/:repo', component: Boards},
  {path: '/board/:id', component: Board}
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
    routes: [{
      path: '/organizations',
      title: "Organizations"
    }]
  }
}).$mount('#app');
