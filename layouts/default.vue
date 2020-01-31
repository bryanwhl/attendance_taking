<template>
  <div>
    <b-navbar spaced shadow type="is-primary">
      <template slot="start">
        <b-navbar-item
          v-for="(item, key) of items"
          :key="key"
          tag="nuxt-link"
          :to="item.to"
        >{{item.title}}</b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content">
      <div class="container">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          title: "Cluster",
          to: { path: "/admin/cluster" }
        },
        {
          title: "Section",
          to: { path: "/admin/section" }
        },
        {
          title: "User",
          to: { path: "/admin/user" }
        },
        {
          title: "record",
          to: { path: "/admin/record" }
        }
      ]
    };
  },
  async created() {
    await this.getAll("Clusters");
    await this.getAll("Sections");
  },
  methods: {
    ...mapActions(["getAll"])
  }
};
</script>
<style>
</style>
