<template>
  <div style="margin: 15px">
    <v-card>
      <div style="background-color: #eff0f5;height: 50px">
        <p>Order Number</p>
      </div>
      <div>
        <div
          style="display: flex;align-items: center;flex-direction: column;justify-content: center"
        >
          {{ orders }}
          <v-avatar
            ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="john"
          /></v-avatar>
          <p>
            <v-icon color="black"> fa fa-user</v-icon><strong>Name:</strong>
            {{ orders.person.name }}
          </p>
          <p>
            <v-icon color="black"> fa fa-tag</v-icon><strong>Address:</strong>
            {{ orders.address }}
          </p>
          <p>
            <v-icon color="black">fa fa-calendar</v-icon>
            <strong>
              Order Date :
            </strong>
            {{ orders.createdAt }}
          </p>
          <p>
            <v-icon color="black"> fa fa-phone</v-icon>
            <strong>
              Contact:
            </strong>
            {{ orders.contact }}
          </p>
          <p>
            <v-icon color="black">fa fa-tag</v-icon>
            <strong>
              Shipping Location:
            </strong>
            {{ orders.shipping.location }}
          </p>
          <p>
            <v-icon color="black">fa fa-tag</v-icon>
            <strong>
              Shipping Charges:
            </strong>

            {{ orders.shipping.charges }}
          </p>
          <p>
            <v-icon color="black">fa fa-money</v-icon>
            <strong>
              Total Amount:
            </strong>
            {{ orders.total }}
          </p>
        </div>
        <div>
          <v-data-table :headers="headers" :items="orders"></v-data-table>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  props: {
    orders: Object
  },
  data() {
    return {
      headers: [
        { text: 'USER', value: 'person.name' },
        { text: 'MOBILE', value: 'contact' },
        { text: 'TOTAL AMOUNT', value: 'orderAmount' },
        { text: 'ADDRESS', value: 'address' },
        { text: 'STATUS', value: 'status' }
      ]
    }
  }
}
</script>

<style scoped></style>
