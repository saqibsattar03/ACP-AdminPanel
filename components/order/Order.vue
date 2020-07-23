<template>
  <v-container>
    <data-viewer
      :columns="headers"
      :title="title"
      detail
      detail-route="order/detail/$id"
      remove
      remove-route="orders/$id"
      endpoint="orders"
    ></data-viewer>
  </v-container>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
export default {
  name: 'Order',
  components: { DataViewer },
  props: {
    title: {
      type: String,
      default: 'title'
    }
  },
  data() {
    return {
      headers: [
        { text: 'USER', value: 'user' },
        { text: 'MOBILE', value: 'mobile' },
        { text: 'TOTAL AMOUNT', value: 'total_amount' },
        { text: 'ADDRESS', value: 'address' },
        { text: 'STATUS', value: 'status' },
        { text: 'CM', value: 'company' }
      ]
    }
  }
}
</script>

<style scoped></style>
