<template>
  <div>
    <div style="display: grid;grid-template-columns: 2fr 1fr;margin-top: 30px">
      <div class="my-card" style="padding: 0">
        <p style="padding-top: 15px;padding-left: 15px">Orders</p>
        <div style="width: 100%">
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="orders"
            height="100%"
          >
            <template v-slot:item.status="{ item }">
              <v-btn :color="getColor(item.status)" small depressed dark>{{
                item.status
              }}</v-btn>
            </template>
          </v-data-table>
        </div>
      </div>
      <div>
        <div
          class="my-card"
          style="height: 220px;width: 95%;margin-left: 25px;"
        ></div>
        <div
          class="my-card"
          style="height: 220px;width: 95%;margin-left: 25px;margin-top: 35px;background-color: #4aa8e4;color:white"
        >
          {{ date }}
        </div>
      </div>
    </div>
    <div class="my-card" style="height: 100px;margin-top: 35px;display: flex">
      <p>Copyright 2019 ACP</p>
      <v-spacer />
      <p>XYZ</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'SupplierHomeScreen',
  data() {
    return {
      headers: [
        { text: '#', value: 'no' },
        { text: 'NAME', value: 'name' },
        { text: 'PRODUCT', value: 'product' },
        { text: 'QUANTITY', value: 'quantity' },
        { text: 'STATUS', value: 'status' }
      ],
      date: moment(Date.now()).format('dddd MMM DD, YYYY')
    }
  },
  methods: {
    getColor(status) {
      if (status === 'delivered') return 'green'
      else if (status === 'processing') return 'blue'
      else return 'red'
    }
  }
}
</script>

<style scoped></style>
