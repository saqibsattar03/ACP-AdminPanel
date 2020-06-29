<template>
  <v-container>
    <data-viewer
      :columns="headers"
      :title="title"
      detail
      create
      create-route="/maincategory/form"
      remove
    ></data-viewer>
  </v-container>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
export default {
  name: 'MainCategory',
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
        { text: 'TITLE', value: 'title' },
        { text: 'STATUS', value: 'status' }
      ]
    }
  }
}
</script>

<style lang="sass"></style>
