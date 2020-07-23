<template>
  <category-form :main-category="main" is-update="true" />
</template>

<script>
import CategoryForm from '../../../components/category/CategoryForm'

export default {
  name: 'Id',
  components: { CategoryForm },
  async asyncData({ $axios, route }) {
    return {
      main: await $axios.$get(
        'master-categories/main-categories/' + route.params.id
      )
    }
  }
}
</script>

<style scoped></style>
