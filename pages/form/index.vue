<template>
  <section class="section">
    <div class="formbox">
      <b-field label="Cluster">
        <b-select expanded placeholder="Select Cluster" v-model="selectedCluster">
          <option
            v-for="(cluster, cidx) in clustersList"
            :value="cluster.id"
            :key="cidx"
          >{{ cluster.name }}</option>
        </b-select>
      </b-field>
      <b-field label="Section">
        <b-select
          :disabled="selectedCluster === null"
          expanded
          placeholder="Select Section"
          v-model="selectedSection"
        >
          <option
            v-for="(section, sidx) in filteredSectionsList"
            :value="section"
            :key="sidx"
          >{{ section.name }}</option>
        </b-select>
      </b-field>
      <b-field>
        <b-button
          expanded
          type="is-success"
          @click="directToForm"
          :disabled="selectedSection === ''"
        >Go</b-button>
      </b-field>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  layout: "form",
  computed: {
    ...mapState({
      clustersList: state => state.clustersList,
      sectionsList: state => state.sectionsList
    }),
    filteredSectionsList() {
      if (this.selectedCluster !== null) {
        const retList = this.sectionsList.filter(
          section => section.cluster_id === this.selectedCluster
        );
        return retList;
      } else {
        return this.sectionsList;
      }
    }
  },
  data() {
    return {
      selectedCluster: null,
      selectedSection: null
    };
  },
  async mounted() {
    await this.getAll("Clusters");
    await this.getAll("Sections");
  },
  methods: {
    ...mapActions(["getAll"]),
    directToForm() {
      this.$router.push(`form/${this.selectedSection.id}`);
    }
  }
};
</script>
