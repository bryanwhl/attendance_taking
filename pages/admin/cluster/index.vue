<template>
  <section class="section">
    <div class="formbox">
      <h1 class="is-size-4">CLUSTER</h1>
      <div class="is-flex actionsBtn">
        <b-button
          style="margin-left:auto;"
          type="is-success"
          icon-right="plus"
          tag="nuxt-link"
          :to="'cluster/add/'"
        />
      </div>
      <b-table :data="clustersList">
        <template slot-scope="props">
          <b-table-column field="name" label="Name">{{ props.row.name }}</b-table-column>
          <b-table-column class="has-text-right">
            <div class="is-flex">
              <div style="margin-left:auto;">
                <b-button
                  type="is-info"
                  icon-right="square-edit-outline"
                  tag="nuxt-link"
                  :to="'cluster/edit/' + props.row.id"
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
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      clustersList: state => state.clustersList
    })
  },
  mounted() {
    this.getAll("Clusters");
  },
  methods: {
    ...mapActions(["deleteResource", "getAll"]),
    deleteItem(selectedID) {
      const payload = {
        name: "Cluster",
        id: selectedID
      };
      this.deleteResource(payload);
    }
  }
};
</script>
<style></style>
