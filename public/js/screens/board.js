const Board = {
  template: `<div class="container">
    <div class="columns">
      <board-column v-bind:title="'Backlog'" v-bind:items="issues"></board-column>
      <board-column v-bind:title="'Doing'" v-bind:items="doing"></board-column>
      <board-column v-bind:title="'Staging'" v-bind:items="staging"></board-column>
      <board-column v-bind:title="'Sandbox'" v-bind:items="sandbox"></board-column>
    </div>
  </div>`,

  data() {
    return {
      backlog: [{ number: 3456, id: 1, title: "hello" }, { number: 6754, id: 2, title: "second" }],
      doing: [{ number: 34, id: 3, title: "second list" }],
      staging: [{ number: 678, id: 4, title: "second list" }],
      sandbox: [{number: 3, id: 5, title: "second list"}]
    };
  },
  methods: {
    log(event) {
      console.log(event);
    }
  },
  computed: {
    issues() {
      return this.$store.getters.issues;
    }
  },
  created() {
    this.$store.dispatch('getIssues', { repos: ["Betterez/betterez-app"]});
  }
};