<template>
  <section class="section">
    <div class="formbox">
      <b-field>
        <h1>Cluster</h1>
      </b-field>
      <b-field label="Name">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-button type="is-primary" @click="create" :disabled="name === ''">Add</b-button>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapActions(["createResource"]),
    async create() {
      const payload = {
        name: "Cluster",
        data: { name: this.name }
      };
      await this.createResource(payload);
      this.$router.push("/admin/cluster/");
    }
  }
};
</script>
<style></style>
