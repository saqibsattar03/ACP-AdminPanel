<template>
  <sub-category-form
    :master-categories="masterCategories"
    :sub-category="subCategories"
    :is-update="true"
  />
</template>

<script>
import SubCategoryForm from '../../../components/subcategory/SubCategoryForm'
export default {
  name: 'Id',
  components: { SubCategoryForm },
  async asyncData({ $axios, route }) {
    console.log(await $axios.$get('/master-categories'))
    return {
      masterCategories: await $axios.$get('/master-categories'),
      subCategories: await $axios.$get('sub-categories/' + route.params.id)
    }
  }
}
</script>

<style scoped></style>
