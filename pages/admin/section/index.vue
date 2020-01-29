<template>
  <section class="section">
    <div class="is-flex actionsBtn">
      <b-button style="margin-left:auto;" type="is-success" icon-right="plus"></b-button>
    </div>
    <b-table :data="sectionsList">
      <template slot-scope="props">
        <b-table-column field="name" label="Name">{{ props.row.name }}</b-table-column>
        <b-table-column field="cluster" label="Cluster">{{ props.row.cluster }}</b-table-column>
        <b-table-column class="has-text-right">
          <div class="is-flex">
            <div style="margin-left:auto;">
              <b-button type="is-info" icon-right="square-edit-outline" />
              <b-button class="deleteBtn" type="is-danger" icon-right="delete" />
            </div>
          </div>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      sectionsList: state => state.sectionsList
    })
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getAll", "Sections");
  }
};
</script>
<style></style>
