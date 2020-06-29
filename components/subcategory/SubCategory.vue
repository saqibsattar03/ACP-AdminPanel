<template>
  <v-container>
    <data-viewer
      :columns="headers"
      :title="title"
      detail
      create
      create-route="/subcategory/form"
      remove
    ></data-viewer>
  </v-container>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
export default {
  name: 'SubCategory',
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
        { text: 'MOBILE', value: 'mobile' },
        { text: 'EMAIL', value: 'email' },
        { text: 'WALLET', value: 'wallet' },
        { text: 'STATUS', value: 'status' },
        { text: 'ROLE', value: 'wallet' }
      ]
    }
  }
}
</script>

<style lang="sass"></style>
