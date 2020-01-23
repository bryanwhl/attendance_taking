<template>
<section>
  <div class="background-c">
    <div class="boxfornameandstatus" v-for="(name, idx) in filteredNameList" :key="idx" :value="name" v-model="radio" name="name" :native-value="name">
      {{name}}
      <br />
      <br />
      <b-field :label="time" v-for="(time, tidx) in daytimeList" :key="tidx" style ="display: inline-block">
        <!-- <span style="display: inline-block">{{time}}</span> -->

        <div class="block" style="width:100%; height:50px; display: inline-block">
            <b-select placeholder="Select Status">
                <option
                    v-for="(status, sidx) in statusList"
                    :value="status"
                    :key="sidx">
                    {{ status }}
                </option>
            </b-select>
            <!-- <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown> -->
            <!-- <b-label style="display: inline-block; padding-left:20px;" v-for="(status, sidx) in statusList" :key="sidx" :value="status" v-model="radio" name="name" :native-value="status">
              {{status}}
              <input type="radio" name="editList" value="status">
            </b-label> -->
        </div>
      </b-field>
    </div>
  </div>


  <b-field>
    <b-select expanded multiple native-size="8" v-model="RSOListCurr">
      <option v-for="(name, idx) in filteredNameList" :key="idx" :value="name">
        {{ name }}
      </option>
    </b-select>
  </b-field>
</section>
</template>

<script>
import {
  mapState,
  mapMutations
} from "vuex";
export default {
  computed: {
    ...mapState({
      nameList: state => state.nameList,
      presentList: state => state.presentList,
      RSOList: state => state.RSOList,
      statusList: state => state.statusList,
      daytimeList: state => state.daytimeList
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
      radio: "",
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
<style>
/* section.main-content{
 width:100%
} */
section.main-content {
  width: 100%;
  margin: 0 auto;
}

aside.section {
  background-color: white;
  width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 0 1pt 1pt #DADCE0;
}

.boxfornameandstatus {
  text-transform: uppercase;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 0 0 1pt 1pt #DADCE0;
}

div.ex1 {
  overflow-x: scroll;
}

.radio {
  display: inline-block
}

#__layout {
  background-color: #F0EBF8;
}
</style>
