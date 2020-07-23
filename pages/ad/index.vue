<template>
  <ad :products="products" />
</template>

<script>
import Ad from '../../components/ad/Ad'
export default {
  name: 'Index',
  components: { Ad },
  async asyncData({ $axios }) {
    console.log('here')
    console.log(await $axios.$get('/products'))
    return {
      products: await $axios.$get('/products')
    }
  }
}
</script>

<style scoped></style>
