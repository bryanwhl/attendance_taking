<template>
  <section class="section">
    <div class="formbox">
      <b-field>
        <h1>USER</h1>
      </b-field>
      <b-field label="Name">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="Cluster">
        <b-select expanded placeholder="Select Cluster" v-model="clusterId">
          <option
            v-for="(cluster, cidx) in clustersList"
            :value="cluster.id"
            :key="cidx"
          >{{ cluster.name }}</option>
        </b-select>
      </b-field>
      <b-field label="Section">
        <b-select
          :disabled="clusterId === null"
          expanded
          placeholder="Select Section"
          v-model="sectionId"
        >
          <option
            v-for="(section, sidx) in filteredSectionsList"
            :value="section.id"
            :key="sidx"
          >{{ section.name }}</option>
        </b-select>
      </b-field>
      <b-button type="is-primary" :disabled="sectionId === null || name === ''">Add</b-button>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      sectionsList: state => state.sectionsList,
      clustersList: state => state.clustersList
    }),
    filteredSectionsList() {
      if (this.clusterId !== null) {
        const retList = this.sectionsList.filter(
          section => section.cluster_id === this.clusterId
        );
        return retList;
      } else {
        return this.sectionsList;
      }
    }
  },
  data() {
    return {
      name: "",
      sectionId: null,
      clusterId: null
    };
  },
  methods: {
    ...mapActions(["createResource"]),
    async create() {
      const payload = {
        name: "Person",
        data: { name: this.name, section_id: this.sectionId }
      };
      await this.createResource(payload);
      this.$router.push("/admin/user/");
    }
  }
};
</script>
<style>
</style>
