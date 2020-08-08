<template>
  <order-detail :orders="detail" />
</template>

<script>
import OrderDetail from '../../../components/order/OrderDetail'
export default {
  name: 'Index',
  components: { OrderDetail },
  async asyncData({ $axios, route }) {
    return {
      detail: [await $axios.$get('orders/' + route.params.id)]
    }
  }
}
</script>

<style scoped></style>
