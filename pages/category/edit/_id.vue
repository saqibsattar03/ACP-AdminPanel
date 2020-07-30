<template>
  <category-form
    :master-categories="masterCategories"
    :main-category="mainCategories"
    :is-update="true"
  />
</template>

<script>
import CategoryForm from '../../../components/category/CategoryForm'

export default {
  name: 'Id',
  components: { CategoryForm },
  async asyncData({ $axios, route }) {
    console.log(await $axios.$get('master-categories'))
    console.log(await $axios.$get('master-categories/main-categories'))
    return {
      masterCategories: await $axios.$get('/master-categories'),
      mainCategories: await $axios.$get(
        'master-categories/main-categories/' + route.params.id
      )
    }
  }
}
</script>

<style scoped></style>
