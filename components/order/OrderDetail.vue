<template>
  <div style="margin: 15px">
    <v-card>
      <div style="background-color: #eff0f5;height: 30px">
        <div>
          <p>Order # {{ orders[0].orderNo }}</p>
        </div>
      </div>
      <div>
        <div
          style="display: flex;align-items: center;flex-direction: column;justify-content: center;margin-top: 25px"
        >
          <v-avatar size="100px"
            ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="john"
          /></v-avatar>
          <p>
            <v-icon color="black"> fa fa-user</v-icon
            ><strong style="margin-right: 10px;margin-left: 10px">Name:</strong>
            {{ orders[0].person.name }}
          </p>
          <p>
            <v-icon color="black"> fa fa-tag</v-icon
            ><strong style="margin-right: 10px;margin-left: 10px"
              >Address:</strong
            >
            {{ orders[0].address }}
          </p>
          <p>
            <v-icon color="black">fa fa-calendar</v-icon>
            <strong style="margin-right: 10px;margin-left: 10px">
              Order Date :
            </strong>
            {{ orders[0].createdAt }}
          </p>
          <p>
            <v-icon color="black"> fa fa-phone</v-icon>
            <strong style="margin-right: 10px;margin-left: 10px">
              Contact:
            </strong>
            {{ orders[0].contact }}
          </p>
          <p v-if="orders[0].shipping">
            <v-icon color="black">fa fa-tag</v-icon>
            <strong style="margin-right: 10px;margin-left: 10px">
              Shipping Location:
            </strong>
            {{ orders[0].shipping.location }}
          </p>
          <p v-if="orders[0].shipping">
            <v-icon color="black">fa fa-tag</v-icon>
            <strong style="margin-right: 10px;margin-left: 10px">
              Shipping Charges:
            </strong>

            {{ orders[0].shipping.charges }}
          </p>
          <p>
            <v-icon color="black">fa fa-money</v-icon>
            <strong style="margin-right: 10px;margin-left: 10px">
              Total Amount:
            </strong>
            {{ orders[0].total }}
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
    orders: {
      type: Array,
      default: () => []
    }
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
