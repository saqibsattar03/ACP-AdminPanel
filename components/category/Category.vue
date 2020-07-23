<template>
  <v-container>
    <data-viewer
      :columns="headers"
      :title="title"
      detail
      create
      create-route="/category/form"
      remove
      remove-route="master-categories/main-categories/$id"
      change
      change-route="/category/edit/$id"
      endpoint="master-categories/main-categories"
    ></data-viewer>
  </v-container>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
export default {
  name: 'Category',
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
        { text: 'NAME', value: 'name' },
        { text: 'STATUS', value: 'status' }
      ]
    }
  }
}
</script>

<style lang="sass"></style>
