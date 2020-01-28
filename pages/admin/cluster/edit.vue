<template>
<section class="section">
  <div class="formbox">
    <b-field>
      <h1> Cluster </h1>
    </b-field>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>
    <b-button type="is-primary">Edit</b-button>
  </div>


</section>
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  }
};
</script>
<style>

</style>
