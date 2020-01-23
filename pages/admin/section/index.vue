<template>
  <div class="elementbox">
    <section>
      <b-table :data="data" :columns="columns">
        <template slot-scope="props">
          <b-table-column field="id">{{props.row.id}}</b-table-column>
          <b-table-column field="name">{{props.row.name}}</b-table-column>
          <b-table-column class="has-text-right">
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
        { id: 1, name: "HQ" },
        { id: 2, name: "ARC" },
        { id: 3, name: "AC" },
        { id: 4, name: "EC" }
      ],
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
