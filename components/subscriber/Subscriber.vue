<template>
  <div style="background-color: #607d8b;margin: 25px">
    <div>
      <v-data-table :headers="header" :items="item"></v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscriber',
  data() {
    return {
      header: [{ text: 'Email', value: 'email' }],
      item: [
        { email: 'abc@gmail.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' },
        { email: 'xyz@yahoo.com' }
      ]
    }
  }
}
</script>

<style scoped></style>
