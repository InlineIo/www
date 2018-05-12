const Board = {
  template: `<div class="container">
    <div class="columns">
      <board-column v-bind:title="'Backlog'" v-bind:items="backlog"></board-column>
      <board-column v-bind:title="'Doing'" v-bind:items="doing"></board-column>
      <board-column v-bind:title="'Staging'" v-bind:items="staging"></board-column>
      <board-column v-bind:title="'Sandbox'" v-bind:items="sandbox"></board-column>
    </div>
  </div>`,

  data() {
    return {
      backlog: [{ name: "hello" }, { name: "second" }],
      doing: [{ name: "second list" }],
      staging: [{ name: "second list" }],
      sandbox: [{name: "second list"}]
    };
  },
  methods: {
    log(event) {
      console.log(event);
    }
  }
};