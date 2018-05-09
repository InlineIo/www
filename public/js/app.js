Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Buefy.default);

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
});