<template>
  <ad-form :sub-categories="subCategories" :main-categories="mainCategories" />
</template>

<script>
import AdForm from '../../components/ad/AdForm'
export default {
  components: { AdForm },
  async asyncData({ $axios }) {
    console.log('here')
    return {
      mainCategories: await $axios.$get('/master-categories/main-categories'),
      subCategories: await $axios.$get('/sub-categories')
    }
  }
}
</script>

<style scoped></style>
