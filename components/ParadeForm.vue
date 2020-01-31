<template>
  <section>
    <div class="boxfornameandstatus" v-for="(name, idx) in nameList" :key="idx">
      <p style="margin-bottom: 1rem;">{{ name }}</p>
      <b-field :label="time" v-for="(time, tidx) in daytimeList" :key="tidx">
        <b-select expanded placeholder="Select Status">
          <option v-for="(status, sidx) in statusList" :value="status" :key="sidx">{{ status }}</option>
        </b-select>
      </b-field>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      nameList: state => state.nameList,
      presentList: state => state.presentList,
      statusList: state => state.statusList,
      daytimeList: state => state.daytimeList
    })
  },
  data() {
    return {
      radio: "",
      presentListCurr: []
    };
  },
  methods: {
    ...mapMutations(["addToPresentList"])
  }
};
</script>
<style>
.boxfornameandstatus {
  text-transform: uppercase;
  background-color: white;
  padding: 1rem;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 0 0 1pt 1pt #dadce0;
}
</style>
