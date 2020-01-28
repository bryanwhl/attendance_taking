<template>
<div class="elementbox">
  <section>
    <div class="is-flex">
      <b-button style="margin-left:auto;" type="is-success" icon-right="plus"></b-button>
    </div>

    <b-table :data="data">
      <template slot-scope="props">
        <b-table-column field="id" label="ID">{{props.row.id}}</b-table-column>
        <b-table-column field="name" label="Name">{{props.row.name}}</b-table-column>
        <b-table-column field="section" label="Section">{{props.row.section}}</b-table-column>
        <b-table-column field="cluster" label="Cluster">{{props.row.cluster}}</b-table-column>
        <b-table-column field="am_status" label="Am Status">{{props.row.am_status}}</b-table-column>
        <b-table-column field="pm_status" label="Pm Status">{{props.row.pm_status}}</b-table-column>
        <b-table-column class="has-text-right">
          <b-button type="is-info" icon-right="square-edit-outline"></b-button>
        </b-table-column>
      </template>
    </b-table>

  </section>
</div>
</template>

<script>
export default {
  data() {
    const data = [{
        id: 1,
        name: "Wei Hong",
        section: "CO",
        cluster: "HQ",
        am_status: "Present",
        pm_status: "Present",
        actions: ''
      },
      {
        id: 2,
        name: "Chun Jie",
        section: "CO",
        cluster: "HQ",
        am_status: "Present",
        pm_status: "Present",
        actions: ''
      },
      {
        id: 3,
        name: "Wei Sheng",
        section: "CO",
        cluster: "HQ",
        am_status: "Present",
        pm_status: "Present",
        actions: ''
      }
    ];

    return {
      data,
      checkboxPosition: "right",
      checkedRows: [data[1], data[3]],
      columns: [{
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
