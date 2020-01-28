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
            :checked-rows.sync="checkedRows"
            checkable
            :checkbox-position="checkboxPosition"
          >
          <template slot-scope="props">
            <b-table-column field="id" label="ID">{{props.row.id}}</b-table-column>
            <b-table-column field="name" label="Name">{{props.row.name}}</b-table-column>
            <b-table-column field="section" label="Section">{{props.row.section}}</b-table-column>
            <b-table-column field="cluster" label="Cluster">{{props.row.cluster}}</b-table-column>
            <b-table-column field="am_status" label="Am Status">{{props.row.am_status}}</b-table-column>
            <b-table-column field="pm_status" label="Pm Status">{{props.row.pm_status}}</b-table-column>
            <b-table-column class="has-text-right">
              <b-button type="is-info" icon-right="square-edit-outline"></b-button>
              <b-button type="is-danger" icon-right="delete" />
            </b-table-column>
          </template>
          <!-- <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'actions'">

        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>

        </template> -->
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
      { id: 1, name: "Wei Hong", section: "CO", cluster: "HQ", am_status: "Present", pm_status: "Present", actions:''},
      { id: 2, name: "Chun Jie", section: "CO", cluster: "HQ", am_status: "Present", pm_status: "Present", actions:'' },
      { id: 3, name: "Wei Sheng", section: "CO", cluster: "HQ", am_status: "Present", pm_status: "Present", actions:'' }
    ];

    return {
      data,
      checkboxPosition: "right",
      checkedRows: [data[1], data[3]],
      columns: [
        {
          field: "id",
          label: "ID"
        },
        {
          field: "name",
          label: "NAME"
        },
        {
          field: "section",
          label: "SECTION"
        },
        {
          field: "cluster",
          label: "CLUSTER"
        },
        {
          field: "am_status",
          label: "AM STATUS"
        },
        {
          field: "pm_status",
          label: "PM STATUS"
        },
        {
          field: "actions",
          label: "ACTIONS"
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
