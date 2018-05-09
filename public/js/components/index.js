Vue.component("login-with-github", {
  template: `<button v-on:click="onClick" class="button block">{{message}}</button>`,
  name: "LoginWithGithub",
  computed: {
    message() {
      if (getCookie && getCookie("inline-profile")) {
        return `Logout ${getCookie("inline-profile").username}`
      }
      return "Login with Github";
    }
  },
  methods: {
    onClick() {
      if (getCookie && getCookie("inline-profile")) {
        document.location = "/logout";
      } else {
        document.location = "/github";
      }
    }
  }
});

Vue.component("list-of-repos", {
  template: `<b-table :data="data" :columns="columns"></b-table>`,
  name: "ListOfRepos",
  props: {
    data: [],
    columns: []
  }
});