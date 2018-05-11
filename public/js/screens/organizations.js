const Organizations = {
  template: `<b-table :data="orgs">
    <template slot-scope="props">
      <b-table-column label="" width="50">
        <img :src="props.row.avatar_url" width="24px"></img>
      </b-table-column>
      <b-table-column field="login" label="Name">
          {{ props.row.login }}
      </b-table-column>
      <b-table-column field="login" label="Boards">
          <router-link :to="'/boards/'+ props.row.login">Choose</router-link>
      </b-table-column>
      <b-table-column field="login" label="Repositories">
          <router-link :to="'/repositories/'+ props.row.login">Explore</router-link>
      </b-table-column>
    </template>
  </b-table>`,
  computed: {
    orgs() {
      return this.$store.getters.organizations;
    }
  },
  created () {
    this.$store.dispatch('getOrganizations');
  }
};