<template>
  <section class="section">
    <div class="formbox">
      <b-field>
        <h1>USER</h1>
      </b-field>
      <b-field label="Name">
        <b-input v-model="person.name"></b-input>
      </b-field>
      <b-field label="Cluster">
        <b-select expanded placeholder="Select Cluster" v-model="clusterId" @input="clearSection">
          <option
            v-for="(cluster, cidx) in clustersList"
            :value="cluster.id"
            :key="cidx"
          >{{ cluster.name }}</option>
        </b-select>
      </b-field>
      <b-field label="Section">
        <b-select expanded placeholder="Select Section" v-model="person.section_id">
          <option
            v-for="(section, sidx) in filteredSectionsList"
            :value="section.id"
            :key="sidx"
          >{{ section.name }}</option>
        </b-select>
      </b-field>
      <b-button
        type="is-primary"
        :disabled="person.name === '' || person.section_id === null"
        @click="edit"
      >Edit</b-button>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ params, $http, $store }) {
    const data = await $http.$get(`getPerson/${params.id}`);
    const section = await $http.$get(`getSection/${data.section_id}`);
    const cluster = await $http.$get(`getCluster/${section.cluster_id}`);
    return { person: data, clusterId: cluster.id };
  },
  computed: {
    ...mapState({
      sectionsList: state => state.sectionsList,
      clustersList: state => state.clustersList
    }),
    ...mapGetters(["getSectionById", "getClusterById"]),
    filteredSectionsList() {
      if (this.clusterId !== "") {
        const retList = this.sectionsList.filter(
          section => section.cluster_id === this.clusterId
        );
        return retList;
      } else {
        return this.sectionsList;
      }
    }
  },
  methods: {
    ...mapActions(["update"]),
    async edit() {
      const payload = {
        name: "Person",
        data: this.person
      };
      await this.update(payload);
      this.$router.push("/admin/user/");
    },
    clearSection() {
      this.person.section_id = null;
    }
  }
};
</script>
<style>
</style>
