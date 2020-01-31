<template>
  <section class="section">
    <div class="formbox">
      <b-field>
        <h1>Cluster</h1>
      </b-field>
      <b-field label="Name">
        <b-input v-model="cluster.name"></b-input>
      </b-field>
      <b-button type="is-info" @click="edit" :disabled="cluster.name === ''">Edit</b-button>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ params, $http }) {
    const data = await $http.$get(`getCluster/${params.id}`);
    return { cluster: data };
  },
  methods: {
    ...mapActions(["update"]),
    async edit() {
      const payload = {
        name: "Cluster",
        data: this.cluster
      };
      await this.update(payload);
      this.$router.push("/admin/cluster/");
    }
  }
};
</script>
