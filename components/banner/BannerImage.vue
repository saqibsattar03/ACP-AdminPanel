<template>
  <v-container>
    <data-viewer
      :columns="headers"
      :title="title"
      detail
      create
      create-route="/banner/form"
      remove
    ></data-viewer>
  </v-container>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
export default {
  name: 'BannerImage',
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
        { text: 'BANNER', value: 'banner' },
        { text: 'NAME', value: 'name' }
      ]
    }
  }
}
</script>

<style scoped></style>
