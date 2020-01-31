<template>
  <section class="section is-flex center-flex">
    <form class="formbox" style="width: 90%;">
      <b-field label="Username">
        <b-input v-model="username" expanded></b-input>
      </b-field>
      <b-field label="Password">
        <b-input v-model="pw" type="password" expanded></b-input>
      </b-field>
      <b-field>
        <b-button type="is-success" @click="login" expanded>Login</b-button>
      </b-field>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "form",
  data() {
    return {
      username: "",
      pw: ""
    };
  },
  methods: {
    ...mapActions(["getAll"]),
    async login() {
      //Temporary until we set up the login system
      const accExist = true;
      if (accExist) {
        //Gather data for clusters and sections
        await this.getAll("Clusters");
        await this.getAll("Sections");
        this.$router.push("cluster");
      } else {
        //Give an error message
      }
    }
  }
};
</script>

<style>
</style>
