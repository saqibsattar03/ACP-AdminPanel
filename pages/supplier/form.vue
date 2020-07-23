<template>
  <Form :suppliers="supplier" />
</template>

<script>
import Form from '../../components/supplier/Form'
export default {
  components: { Form },
  async asyncData({ $axios }) {
    return {
      supplier: await $axios.$get('/suppliers')
    }
  }
}
</script>

<style scoped></style>
