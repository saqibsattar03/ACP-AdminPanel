<template>
  <sub-category-form :sub-category="sub" is-update="true" />
</template>

<script>
import SubCategoryForm from '../../../components/subcategory/SubCategoryForm'
export default {
  name: 'Id',
  components: { SubCategoryForm },
  async asyncData({ $axios, route }) {
    return {
      sub: await $axios.$get('sub-categories/' + route.params.id)
    }
  }
}
</script>

<style scoped></style>
