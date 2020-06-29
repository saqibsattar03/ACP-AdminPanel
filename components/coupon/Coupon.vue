<template>
  <v-container>
    <data-viewer
      :columns="headers"
      :title="title"
      detail
      create
      create-route="/coupon/form"
      remove
    ></data-viewer>
  </v-container>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
export default {
  name: 'Coupon',
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
        { text: 'NAME', value: 'name' },
        { text: 'PERCENTAGE', value: 'product' },
        { text: 'START DATE', value: 'quantity' },
        { text: 'END DATE', value: 'status' }
      ]
    }
  }
}
</script>

<style lang="sass"></style>
