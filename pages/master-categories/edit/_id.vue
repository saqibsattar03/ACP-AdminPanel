<template>
  <main-category-form :master-category="master" is-update="true" />
</template>

<script>
import MainCategoryForm from '../../../components/maincategory/MianCategoryForm'
export default {
  name: 'Id',
  components: { MainCategoryForm },
  async asyncData({ $axios, route }) {
    return {
      mainCategory: await $axios.$get(
        'master-categories/main-categories' + route.params.id
      ),

      masterCategories: await $axios.$get('master-categories')
    }
  }
}
</script>

<style scoped></style>
