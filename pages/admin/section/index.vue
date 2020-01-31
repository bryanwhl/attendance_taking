<template>
  <section class="section">
    <div class="formbox">
      <h1 class="is-size-4">SECTION</h1>
      <div class="is-flex actionsBtn">
        <b-button
          style="margin-left:auto;"
          type="is-success"
          icon-right="plus"
          tag="nuxt-link"
          :to="'section/add/'"
        ></b-button>
      </div>
      <b-table :data="sectionsList">
        <template slot-scope="props">
          <b-table-column field="name" label="Name">{{ props.row.name }}</b-table-column>
          <b-table-column field="cluster" label="Cluster">{{ getClusterById(props.row.id).name }}</b-table-column>
          <b-table-column class="has-text-right">
            <div class="is-flex">
              <div style="margin-left:auto;">
                <b-button
                  type="is-info"
                  icon-right="square-edit-outline"
                  tag="nuxt-link"
                  :to="'section/edit/' + props.row.id"
                />
                <b-button
                  class="deleteBtn"
                  type="is-danger"
                  icon-right="delete"
                  @click="deleteItem(props.row.id)"
                />
              </div>
            </div>
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
      sectionsList: state => state.sectionsList,
      clustersList: state => state.clustersList
    }),
    ...mapGetters(["getClusterById"])
  },
  async mounted() {
    await this.getAll("Sections");
  },
  methods: {
    ...mapActions(["deleteResource", "getAll"]),
    deleteItem(selectedID) {
      const payload = {
        name: "Section",
        id: selectedID
      };
      this.deleteResource(payload);
    }
  }
};
</script>
<style></style>
