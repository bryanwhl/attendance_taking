<template>
  <section class="section">
    <ParadeForm></ParadeForm>
    <PresentCounter></PresentCounter>
  </section>
</template>

<script>
import ParadeForm from "~/components/ParadeForm";
import PresentCounter from "~/components/PresentCounter";

export default {
  layout: "form",
  name: "HomePage",
  async asyncData({ params, $http }) {
    const retList = await $http.$get(`getPersonsBySectionId/${params.sid}`);
    return { personList: retList };
  },
  components: {
    ParadeForm,
    PresentCounter
  }
};
</script>
