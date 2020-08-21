<template>
  <div style="margin: 25px;background-color: black">
    <v-card>
      <v-card-title>
        Supplier Ads
      </v-card-title>
      <v-data-table :headers="headers" :items="supplierProducts">
        <template v-slot:item.commission="{ item }">
          <slot name="commission" :item="item" />
          <v-text-field
            v-model="item.adminCommission"
            type="number"
            label="commission"
            outlined
            dense
            style="width: 40%;margin-top: 25px"
          ></v-text-field>
        </template>
        <template v-slot:item.actions="{ item }">
          <slot name="actions" :item="item" />
          <v-btn small color="green" dark @click="onAccepted(item)"
            >Accept</v-btn
          >
          <v-btn small color="red" dark @click="onRejected(item)">Reject</v-btn>
        </template>
      </v-data-table>
      <v-snackbar
        v-model="snackbar"
        bottom
        :color="snackbarColor"
        :timeout="1500"
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SupplierAd',
  props: {
    supplierProducts: Array
  },
  data() {
    return {
      snackbarText: 'Success!',
      snackbarColor: 'green',
      snackbar: false,
      headers: [
        { text: 'Supplier Name', value: 'name' },
        { text: 'Ad Details', value: 'description' },
        { text: 'Admin Commission', value: 'commission' },
        { text: 'Actions', value: 'actions' }
      ]
    }
  },
  methods: {
    onAccepted(item) {
      this.$axios.patch('/products/approve', item)
      this.snackbarColor = 'green'
      this.snackbarText = 'Product Accepted Successfully!'
      this.snackbar = true
    },
    onRejected(item) {
      this.$axios.patch('/products/approve', item)
      this.snackbarColor = 'red'
      this.snackbarText = 'Product Rejected Successfully!'
      this.snackbar = true
    }
  }
}
</script>

<style scoped></style>
