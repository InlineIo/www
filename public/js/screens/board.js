const Board = {
  template: `<div class="container">
    <div class="columns">
      <draggable class="column dragArea" :list="backlog" :options="{group:'people'}" @change="log">
        <div class="card" v-for="(element, index) in backlog">
          <div class="card-header">
            <div class="cart-title">{{ element.name }}</div>
          </div>
        </div>
      </draggable >

      <draggable class="column dragArea" :list="doing" :options="{group:'people'}" @change="log">
        <div class="card" v-for="(element, index) in doing" :key="index">
          <div class="card-header">
            <div class="card-title">{{ element.name }}</div>
          </div>
        </div>
      </draggable>

      <draggable class="column dragArea" :list="staging" :options="{group:'people'}" @change="log">
        <div class="card" v-for="(element, index) in staging" :key="index">
          <div class="card-header">
            <div class="card-title">{{ element.name }}</div>
          </div>
        </div>
      </draggable>

      <draggable class="column dragArea" :list="sandbox" :options="{group:'people'}" @change="log">
        <div class="card" v-for="(element, index) in sandbox" :key="index">
          <div class="card-header">
            <div class="card-title">{{ element.name }}</div>
          </div>
        </div>
      </draggable>
    </div>
  </div>`,
  methods: {
    log(event) {
      console.log(event);
    }
  },
  data() {
    return {
      backlog: [{ name: "hello" }, { name: "second" }],
      doing: [{ name: "second list" }],
      staging: [{ name: "second list" }],
      sandbox: [{name: "second list"}]
    };
  }
};