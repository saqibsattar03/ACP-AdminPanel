<template>
  <order title="Order" :orders="orders" />
</template>

<script>
import Order from '../../components/order/Order'
export default {
  name: 'Index',
  components: { Order },
  async asyncData({ $axios }) {
    return {
      orders: await $axios.$get('/orders')
    }
  }
}
</script>

<style scoped></style>
