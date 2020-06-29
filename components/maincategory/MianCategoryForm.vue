<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm>
      <template v-slot:header>
        <v-row>
          <v-col
            style="display: flex; align-items: center; justify-content: center"
            cols="12"
            md="1"
            sm="1"
          >
          </v-col>
          <v-col cols="12" md="11" sm="11">
            <v-card-title>New Master Category</v-card-title>
          </v-col>
        </v-row>
      </template>
      <div class="span-2">
        <!--        <v-text-field label="Name" outlined dense></v-text-field>-->
        <v-text-field label="Title" outlined dense></v-text-field>
      </div>
      <v-checkbox label="Active"></v-checkbox>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
export default {
  name: 'MainCategoryForm',
  components: { SimpleForm },
  data() {
    return {
      row: null
    }
  }
}
</script>

<style scoped></style>
