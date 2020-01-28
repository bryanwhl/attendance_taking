<template>
<section class="section">
  <div class="formbox">
    <b-field>
      <h1> Record </h1>
    </b-field>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>
    <b-field label="User">
      <b-select expanded placeholder="Select User" v-model ="user">
        <option v-for="(user, uidx) in userList" :value="user" :key="uidx">
          {{ user }}
        </option>
      </b-select>
    </b-field>

    <b-field label="Section">
      <b-select expanded placeholder="Select Section">
        <option v-for="(section, sidx) in sectionList" :value="section" :key="sidx">
          {{ section }}
        </option>
      </b-select>
    </b-field>

    <b-field label="Cluster">
      <b-select expanded placeholder="Select Cluster">
        <option v-for="(cluster, cidx) in clusterList" :value="cluster" :key="cidx">
          {{ cluster }}
        </option>
      </b-select>
    </b-field>

    <b-field label = "AM">
        <b-select expanded placeholder="Select Status" v-model="statusAM">
          <option v-for="(statusAM, sidx) in statusList" :value="statusAM" :key="sidx">
            {{ statusAM }}
          </option>
        </b-select>
    </b-field>

    <b-field label = "PM">
        <b-select expanded placeholder="Select Status" v-model="statusPM">
          <option v-for="(statusPM, s2idx) in statusList" :value="statusPM" :key="s2idx">
            {{ statusPM }}
          </option>
        </b-select>
    </b-field>
    <b-field>
      <b-button type="is-primary">Edit</b-button>
    </b-field>
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
      userList: state => state.userList,
      statusList: state => state.statusList,
      daytimeList: state => state.daytimeList,
      clusterList: state => state.clusterList,
      sectionList: state => state.sectionList
    })
  },
  data() {
    return {
      name: '',
      section: '',
      cluster:'',
      user: '',
      statusAM:'',
      statusPM:''

    }
  }
};
</script>
<style>

</style>
