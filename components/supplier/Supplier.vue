<template>
  <v-container>
    <data-viewer
      :columns="headers"
      :title="title"
      detail
      create
      create-route="/supplier/form"
      remove
    ></data-viewer>
  </v-container>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
export default {
  name: 'Supplier',
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
        { text: 'COMPANY NAME', value: 'company_name' },
        { text: 'SUPPLIER NAME', value: 'supplier_name' },
        { text: 'MOBILE', value: 'mobile' },
        { text: 'EMAIL', value: 'email' },
        { text: 'STATUS', value: 'status' }
      ]
    }
  }
}
</script>

<style lang="sass"></style>
