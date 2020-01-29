<template>
  <section class="section">
    <div class="columns is-vcentered full-height is-flex">
      <div class="column">
        <form class="formbox">
          <b-field label="Username">
            <b-input v-model="username"></b-input>
          </b-field>
          <b-field label="Password">
            <b-input v-model="pw" type="password"></b-input>
          </b-field>
          <b-field>
            <b-button type="is-success" expanded @click="login">Login</b-button>
          </b-field>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
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
