<template>
  <order-detail :orders="detail" />
</template>

<script>
import OrderDetail from '../../components/order/OrderDetail'
export default {
  name: 'Index',
  components: { OrderDetail },
  async asyncData({ $axios }) {
    return {
      detail: await $axios.$get('orders/')
    }
  }
}
</script>

<style scoped></style>
