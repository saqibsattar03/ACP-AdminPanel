<template>
  <ad-form
    :sub-categories="subCategories"
    :main-categories="mainCategories"
    :master-categories="masterCategories"
  />
</template>

<script>
import AdForm from '../../components/ad/AdForm'
export default {
  components: { AdForm },
  async asyncData({ $axios }) {
    console.log('here')
    return {
      masterCategories: await $axios.$get('/master-categories'),
      mainCategories: await $axios.$get('/main-categories'),
      subCategories: await $axios.$get('/sub-categories')
    }
  }
}
</script>

<style scoped></style>
