<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm title="Send Email" return>
      <div class="span-2">
        <v-text-field outlined dense label="Subject"></v-text-field>
      </div>
      <div class="span-2">
        <v-textarea outlined dense label="Subject"></v-textarea>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
export default {
  name: 'Email',
  components: { SimpleForm }
}
</script>

<style scoped></style>
