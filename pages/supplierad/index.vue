<template>
  <supplier-ad :supplier-products="supplierProduct" />
</template>

<script>
import SupplierAd from '../../components/supplierad/SupplierAd'
export default {
  name: 'Index',
  components: { SupplierAd },
  async asyncData({ $axios }) {
    console.log(await $axios.$get('/products/getpending'))
    return {
      supplierProduct: await $axios.$get('/products/getpending')
    }
  }
}
</script>

<style scoped></style>
