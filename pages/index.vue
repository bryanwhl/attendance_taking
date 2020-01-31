<template>
  <section class="section is-flex center-flex">
    <b-button tag="nuxt-link" to="admin/login" type="is-danger">Admin</b-button>
    <b-button tag="nuxt-link" to="form" type="is-success" id="form-link-id">Form</b-button>
  </section>
</template>

<script>
export default {
  layout: "form",
  name: "HomePage"
};
</script>

<style>
#form-link-id {
  margin-left: 1rem;
}
</style>