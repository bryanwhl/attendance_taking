<template>
  <section class="section">
    <div class= "formbox">

    <b-field label="Name">
            <b-input v-model="name"></b-input>
    </b-field>
    <b-button type="is-primary">Submit</b-button>
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
.formbox {
  text-transform: uppercase;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 0 0 1pt 1pt #DADCE0;
}
/* section {
  height:100%
} */
</style>
