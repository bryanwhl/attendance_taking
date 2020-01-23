<template>
<section class="section">
  <div class="formbox">
    <b-field>
    <h1> USER </h1>
    </b-field>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>
    <b-field label="Section">
      <b-select expanded placeholder="Select Section">
        <option v-for="(section, sidx) in sectionList" :value="section" :key="sidx">
          {{ section }}
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
      sectionList: state => state.sectionList
    })
  },
  data() {
    return {
      name: '',
      section: ''
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
