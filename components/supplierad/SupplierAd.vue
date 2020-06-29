<template>
  <div style="margin: 25px">
    <v-data-table :headers="headers" :items="item">
      <template v-slot:item.commission="{ item }">
        <slot name="commission" :item="item" />
        <v-text-field
          type="number"
          label="commission"
          outlined
          dense
          style="width: 40%;margin-top: 25px"
        ></v-text-field>
      </template>
      <template v-slot:item.actions="{ item }">
        <slot name="actions" :item="item" />
        <v-btn small color="green" dark>Accept</v-btn>
        <v-btn small color="red" dark>Reject</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'SupplierAd',
  data() {
    return {
      headers: [
        { text: '#', value: 'No' },
        { text: 'Supplier Name', value: 'supplierName' },
        { text: 'Ad Details', value: 'adDetails' },
        { text: 'Admin Commission', value: 'commission' },
        { text: 'Actions', value: 'actions' }
      ],
      item: [
        { No: '1', supplierName: 'ABC', adDetails: 'asds' },
        { No: '2', supplierName: 'ABC', adDetails: 'asds' },
        { No: '3', supplierName: 'ABC', adDetails: 'asds' },
        { No: '4', supplierName: 'ABC', adDetails: 'asds' },
        { No: '5', supplierName: 'ABC', adDetails: 'asds' },
        { No: '6', supplierName: 'ABC', adDetails: 'asds' },
        { No: '7', supplierName: 'ABC', adDetails: 'asds' },
        { No: '8', supplierName: 'ABC', adDetails: 'asds' },
        { No: '9', supplierName: 'ABC', adDetails: 'asds' },
        { No: '10', supplierName: 'ABC', adDetails: 'asds' },
        { No: '11', supplierName: 'ABC', adDetails: 'asds' }
      ]
    }
  }
}
</script>

<style scoped></style>
