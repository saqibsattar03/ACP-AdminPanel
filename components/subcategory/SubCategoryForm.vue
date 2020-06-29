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
            <v-card-title>New Sub Category</v-card-title>
          </v-col>
        </v-row>
      </template>
      <div class="span-2">
        <v-select
          :items="items"
          label="Category"
          outlined
          multiple
          dense
        ></v-select>
        <v-text-field label="Title" outlined dense></v-text-field>
        <!--        <v-text-field-->
        <!--          label="Name"-->
        <!--          hint="Write Name Here"-->
        <!--          outlined-->
        <!--          dense-->
        <!--        ></v-text-field>-->

        <!--        <v-textarea outlined label="Detail..."></v-textarea>-->
        <!--        <v-radio-group v-model="row" row>-->
        <!--          <v-radio label="Active" value="active"></v-radio>-->
        <!--          <v-radio label="Not Active" value="not active"></v-radio>-->
        <!--        </v-radio-group>-->
        <v-checkbox label="Active"></v-checkbox>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
export default {
  name: 'SubCategoryForm',
  components: { SimpleForm },
  data() {
    return {
      row: null,
      items: ['lol', 'national', 'shezan', 'volka']
    }
  }
}
</script>

<style scoped></style>
