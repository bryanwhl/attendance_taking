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
export default {
  data() {
    return {
      items: [
        {
          title: "Cluster",
          to: { path: "cluster" }
        },
        {
          title: "Section",
          to: { path: "section" }
        },
        {
          title: "User",
          to: { path: "user" }
        },
        {
          title: "record",
          to: { path: "record" }
        }
      ]
    };
  }
};
</script>
<style>
.full-height {
  height: 100%;
}
.section {
  min-height: 100vh;
  padding: 3rem 1.5rem;
}
.main-content {
  background-color: #f0ebf8;
}
.nuxt-link-active {
  background-color: #7957d5;
  color: #fff;
}
.formbox {
  text-transform: uppercase;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 0 0 1pt 1pt #dadce0;
}
.actionsBtn {
  margin-bottom: 10px;
}
.deleteBtn {
  margin-left: 0.3rem;
}
</style>
