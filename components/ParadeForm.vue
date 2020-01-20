<template>
  <section>
    <!-- <p class="content"><b>selected</b>: {{ presentSelected }}</p> -->
    <b-field>
      <b-select
        expanded
        multiple
        native-size="8"
        v-model="presentListCurr"
        @input="addToPresentList"
      >
        <option v-for="(name, idx) in nameList" :key="idx" :value="name">
          {{ name }}
        </option>
      </b-select>
    </b-field>
    <b-field>
      <b-select expanded multiple native-size="8" v-model="RSOListCurr">
        <option
          v-for="(name, idx) in filteredNameList"
          :key="idx"
          :value="name"
        >
          {{ name }}
        </option>
      </b-select>
    </b-field>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      nameList: state => state.nameList,
      presentList: state => state.presentList,
      RSOList: state => state.RSOList
    }),
    filteredNameList() {
      const returnList = [];
      for (const name of this.nameList) {
        if (!this.presentList.includes(name)) {
          returnList.push(name);
        }
      }
      return returnList;
    }
  },
  data() {
    return {
      presentListCurr: [],
      RSOListCurr: []
    };
  },
  methods: {
    ...mapMutations(["addToPresentList", "addToRSOList"]),
    checkNameSelected(name) {
      console.log(this.presentList.includes(name));
      if (this.presentList.includes(name)) {
        return false;
      } else return true;
    }
  }
};
</script>
