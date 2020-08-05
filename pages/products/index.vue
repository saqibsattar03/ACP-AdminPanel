<template>
  <ad title="Products" />
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
      product: await $axios.$get('/products')
    }
  }
}
</script>

<style scoped></style>
