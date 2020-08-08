<template>
  <supplier-ad :supplier-products="supplierProduct" />
</template>

<script>
import SupplierAd from '../../components/supplierad/SupplierAd'
export default {
  name: 'Index',
  components: { SupplierAd },
  async asyncData({ $axios }) {
    return {
      supplierProduct: await $axios.$get('/products/getpending')
    }
  }
}
</script>

<style scoped></style>
