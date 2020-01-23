<template>
<section class="section">
  <div class="formbox">
    <b-field>
    <h1> SECTION </h1>
    </b-field>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>
    <b-field label ="Cluster">
      <b-select expanded placeholder="Select Cluster">
        <option v-for="(cluster, cidx) in clusterList" :value="cluster" :key="cidx">
          {{ cluster }}
        </option>
      </b-select>
    </b-field>
    <b-button type="is-primary">Add</b-button>
  </div>


</section>
</template>
<script>
import {
  mapState,
} from "vuex";
export default {
  computed: {
    ...mapState({
      clusterList: state => state.clusterList
    })
  },
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
