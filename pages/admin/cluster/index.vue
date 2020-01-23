<template>
  <div class="elementbox">
    <section>
      <b-field grouped group-multiline>
        <button
          class="button field is-danger"
          @click="checkedRows = []"
          :disabled="!checkedRows.length"
        >
          <b-icon icon="close"></b-icon>
          <span>Delete checked</span>
        </button>
      </b-field>

      <b-tabs>
        <b-tab-item label="Table">
          <b-table
            :data="data"
            :columns="columns"
            :checked-rows.sync="checkedRows"
            checkable
            :checkbox-position="checkboxPosition"
          >
            <template slot="bottom-left">
              <b>Total checked</b>: {{ checkedRows.length }}
            </template>
          </b-table>
        </b-tab-item>
<!-- 
        <b-tab-item label="Checked rows">
          <pre>{{ checkedRows }}</pre>
        </b-tab-item> -->
      </b-tabs>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    const data = [
      { id: 1, name: "HQ" },
      { id: 2, name: "ARC" },
      { id: 3, name: "AC" },
      { id: 4, name: "EC" }
    ];

    return {
      data,
      checkboxPosition: "right",
      checkedRows: [data[1], data[3]],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: "NAME"
        }
      ]
    };
  }
};
</script>
<style>
.elementbox {
  text-transform: uppercase;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 0 0 1pt 1pt #dadce0;
}
</style>
