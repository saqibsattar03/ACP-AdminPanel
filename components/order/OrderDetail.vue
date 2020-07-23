<template>
  <v-card>
    <div>
      <div
        style="display: flex;align-items: center;flex-direction: column;justify-content: center"
      >
        <v-avatar
          ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="john"
        /></v-avatar>
        <p>Name{{ orders.name }}</p>
        <p>Address{{ orders.address }}</p>
        <p>Order Date</p>
        <p>Contact</p>
        <p>Admin Remark</p>
        <p>Shipping Recharge</p>
        <p>Total Amount</p>
      </div>
      <div>
        <v-data-table :headers="headers" :items="orders"></v-data-table>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'OrderDetail',
  props: {
    orders: Array
  },
  data() {
    return {
      selectedOrder: null,
      headers: [
        { text: 'USER', value: 'user' },
        { text: 'MOBILE', value: 'mobile' },
        { text: 'TOTAL AMOUNT', value: 'total_amount' },
        { text: 'ADDRESS', value: 'address' },
        { text: 'STATUS', value: 'status' }
      ]
    }
  }
}
</script>

<style scoped></style>
