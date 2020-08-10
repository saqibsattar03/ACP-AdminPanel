<template>
  <v-container>
    <data-viewer
      :columns="headers"
      :title="title"
      create
      create-route="/products/form"
      remove
      remove-route="/products/$id"
      change
      change-route="/products/edit/$id"
      endpoint="products"
    >
    </data-viewer>
  </v-container>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'

export default {
  name: 'Ad',
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
        { text: 'DESCRIPTION', value: 'description' },
        { text: 'STATUS', value: 'status' },
        { text: 'PRICE', value: 'price' },
        { text: 'ADMIN COM', value: 'adminCommission' }
      ]
    }
  },
  methods: {
    getColor(status) {
      if (status === 'true') {
        return 'green'
      } else return 'red'
    }
  }
}
</script>

<style lang="sass">
.v-data-table-header
  background: #eff0f5

.status-card
  display: flex

  &__info
    display: flex
    padding-left: 25px
    flex-direction: column
</style>
