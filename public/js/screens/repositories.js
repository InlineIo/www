const Repositories = {
  template: `<b-table :data="repositories">
    <template slot-scope="props">
      <b-table-column label="" width="50">
        <img :src="props.row.avatar_url" width="24px"></img>
      </b-table-column>
      <b-table-column field="login" label="Name">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column field="login" label="Boards">
        <router-link :to="'/boards/'+ props.row.full_name">Choose</router-link>
      </b-table-column>
    </template>
  </b-table>`,
  computed: {
    repositories() {
      return this.$store.getters.repositories;
    }
  },
  created() {
    this.$store.dispatch('getRepositories', {org: window.location.hash.split("/")[2]});
  }
};