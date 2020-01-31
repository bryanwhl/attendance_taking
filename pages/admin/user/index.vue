<template>
  <section class="section">
    <div class="formbox">
      <h1 class="is-size-4">USER</h1>
      <div class="is-flex actionsBtn">
        <b-field grouped group-multiline style="margin-left:auto;">
          <button
            class="button field is-danger"
            @click="checkedRows = []"
            :disabled="!checkedRows.length"
          >
            <b-icon icon="close"></b-icon>
            <span>Delete checked</span>
          </button>
          <b-button type="is-success" icon-right="plus" tag="nuxt-link" :to="'user/add/'"></b-button>
        </b-field>
      </div>

      <b-table
        :data="personsList"
        :checked-rows.sync="checkedRows"
        checkable
        checkbox-position="right"
      >
        <template slot-scope="props">
          <b-table-column field="id" label="ID">{{props.row.id}}</b-table-column>
          <b-table-column field="name" label="Name">{{props.row.name}}</b-table-column>
          <b-table-column
            field="section"
            label="Section"
          >{{getSectionById(props.row.section_id).name}}</b-table-column>
          <b-table-column
            field="cluster"
            label="Cluster"
          >{{getClusterById(getSectionById(props.row.section_id).id).name}}</b-table-column>
          <b-table-column class="has-text-right">
            <b-button
              type="is-info"
              icon-right="square-edit-outline"
              tag="nuxt-link"
              :to="'user/edit/' + props.row.id"
            ></b-button>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      personsList: state => state.personsList
    }),
    ...mapGetters(["getSectionById", "getClusterById"])
  },
  data() {
    return {
      checkedRows: []
    };
  },
  async mounted() {
    await this.getAll("Persons");
  },
  methods: {
    ...mapActions(["deleteResource", "getAll"]),
    deleteItem(selectedID) {
      const payload = {
        name: "Person",
        id: selectedID
      };
      this.deleteResource(payload);
    }
  }
};
</script>
<style>
</style>
