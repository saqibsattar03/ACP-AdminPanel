<template>
  <div style="background-color: #607d8b;margin: 25px">
    <div>
      <v-data-table :headers="header" :items="subscribers"></v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscriber',
  props: {
    subscribers: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      header: [{ text: 'Email', value: 'email' }]
    }
  }
}
</script>

<style scoped></style>
