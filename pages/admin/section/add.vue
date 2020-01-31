<template>
  <section class="section">
    <div class="formbox">
      <b-field>
        <h1>Section</h1>
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
      <b-button type="is-primary" @click="create" :disabled="name === '' || clusterId === null">Add</b-button>
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
  data() {
    return {
      name: "",
      clusterId: null
    };
  },
  methods: {
    ...mapActions(["createResource"]),
    async create() {
      const payload = {
        name: "Section",
        data: { name: this.name, cluster_id: this.clusterId }
      };
      await this.createResource(payload);
      this.$router.push("/admin/section/");
    }
  }
};
</script>
<style>
</style>
