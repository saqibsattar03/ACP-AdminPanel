<template>
  <v-container>
    <data-viewer :columns="headers" detail remove :title="title"></data-viewer>
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
        { text: '#', value: 'no' },
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
