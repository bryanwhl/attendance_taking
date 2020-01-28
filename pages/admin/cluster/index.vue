<template>
<div class="elementbox">
  <section>
    <div class="is-flex actionsBtn">
      <b-button style="margin-left:auto;" type="is-success" icon-right="plus"></b-button>
    </div>
    <b-table :data="data">
      <template slot-scope="props">
        <b-table-column field="id" label="ID">{{props.row.id}}</b-table-column>
        <b-table-column field="name" label="Name">{{props.row.name}}</b-table-column>
        <b-table-column class="has-text-right">
          <div class="is-flex">
            <div style="margin-left:auto;">
              <b-button type="is-info" icon-right="square-edit-outline" />
              <b-button class="deleteBtn" type="is-danger" icon-right="delete" />
            </div>
          </div>

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
      data: [{
          id: 1,
          name: "HQ"
        },
        {
          id: 2,
          name: "ARC"
        },
        {
          id: 3,
          name: "AC"
        },
        {
          id: 4,
          name: "EC"
        }
      ],
      columns: [{
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: "NAME"
        },
        {
          label: ""
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
