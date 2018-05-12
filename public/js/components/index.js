Vue.component("login-with-github", {
  template: `<a v-on:click="onClick">{{message}}</a>`,
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

Vue.component("board-card", {
  template: `<div class="card mb-1 border-highlight drag-handler" >
              <header class="card-header">
                <p class="card-header-title">{{ item.title }}</p>
              </header>
              <div class="card-content">
                <div class="content">
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
        </div>`,
  name: "BoardCard",
  props: {
    item: {
      type: Object,
      default() {
        return {name: ""};
      }
    }
  },
});

Vue.component("board-column", {
  template: `<div class="column is-one-quarter">
  <header class="card-header mb-1"><p class="card-header-title">{{title}}</p></header>
  <draggable class="dragArea min-height-100" v-bind:list="items" v-bind:options="{group:'people'}" @change="log">
  <board-card v-for="(element, index) in items" v-bind:key="element.id" v-bind:item="element" v-bind:index="index"></board-card>
  </draggable></div>`,
  name: "BoardColumn",
  props: {
    title: {
      type: String,
      default: "Column"
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    log(event) {
      console.log(event);
    }
  }
});
