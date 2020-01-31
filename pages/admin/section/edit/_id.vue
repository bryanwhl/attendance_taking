<template>
  <section class="section">
    <div class="formbox">
      <b-field>
        <h1>SECTION</h1>
      </b-field>
      <b-field label="Name">
        <b-input v-model="section.name"></b-input>
      </b-field>
      <b-field label="Cluster">
        <b-select expanded placeholder="Select Cluster" v-model="section.cluster_id">
          <option
            v-for="(cluster, cidx) in clustersList"
            :value="cluster.id"
            :key="cidx"
          >{{ cluster.name }}</option>
        </b-select>
      </b-field>
      <b-button type="is-primary" :disabled="section.name === ''">Edit</b-button>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ params, $http }) {
    const data = await $http.$get(`getSection/${params.id}`);
    return { section: data };
  },
  computed: {
    ...mapState({
      clustersList: state => state.clustersList
    })
  },
  methods: {
    ...mapActions(["update"]),
    async edit() {
      const payload = {
        name: "Section",
        data: this.section
      };
      await this.update(payload);
      this.$router.push("/admin/section/");
    }
  }
};
</script>