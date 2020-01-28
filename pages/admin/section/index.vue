<template>
  <div class="elementbox">
    <section>
      <div class="is-flex">
        <b-button style="margin-left:auto;" type="is-success" icon-right="plus"></b-button>
      </div>
      <b-table :data="data" :columns="columns">
        <template slot-scope="props">
          <b-table-column field="id" label="ID">{{props.row.id}}</b-table-column>
          <b-table-column field="name" label="Name">{{props.row.name}}</b-table-column>
          <b-table-column field="cluster" label="Cluster">{{props.row.cluster}}</b-table-column>
          <b-table-column class="has-text-right">
            <b-button type="is-info" icon-right="square-edit-outline"></b-button>
            <b-button type="is-danger" icon-right="delete" />
          </b-table-column>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { id: 1, name: "CO", cluster: "HQ" },
        { id: 2, name: "S1", cluster: "HQ" },
        { id: 3, name: "S3", cluster: "HQ" },
        { id: 4, name: "S4", cluster: "HQ" }
      ],
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
          field: "cluster",
          label: "CLUSTER"
        },
        { label: "" }
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
