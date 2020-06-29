<template>
  <v-container style="display: flex;justify-content: center">
    <SimpleForm>
      <template v-slot:header>
        <v-row>
          <v-col
            style="display: flex ; align-items: center; justify-content: center"
            cols="12"
            md="1"
            sm="1"
          >
          </v-col>
          <v-col cols="12" md="11" sm="11">
            <v-card-title>Add Product Form</v-card-title>
          </v-col>
        </v-row>
      </template>
      <div class="span-2">
        <v-row>
          <v-col>
            <span>Main Category</span>
            <v-select outlined dense :items="mainItems"></v-select>
          </v-col>
          <v-col>
            <span>Sub Category</span>
            <v-select outlined dense :items="subItems"></v-select>
          </v-col>
        </v-row>
      </div>
      <div class="span-2">
        <v-text-field
          prepend-inner-icon="mdi-home"
          label="Commision"
          dense
          type="number"
          outlined
        ></v-text-field>
      </div>
      <div class="span-2">
        <v-text-field
          prepend-inner-icon="mdi-home"
          label="Title"
          dense
          type="number"
          outlined
        ></v-text-field>
      </div>
      <div class="span-2">
        <v-textarea outlined label="Description..."></v-textarea>
      </div>
      <div class="span-2">
        <v-text-field
          prepend-inner-icon="mdi-home"
          label="Price"
          dense
          type="number"
          outlined
        ></v-text-field>
      </div>
      <div class="span-2">
        <v-file-input outlined label="Pick Image"></v-file-input>
      </div>
      <div class="span-2">
        <span>Category</span>
        <v-select outlined dense></v-select>
      </div>
      <div class="span-2">
        <v-text-field
          prepend-inner-icon="mdi-home"
          label="Warranty Months"
          dense
          type="number"
          outlined
        ></v-text-field>
      </div>
      <div>
        <v-switch
          v-model="status"
          loading
          :label="`Status:${status.toString()}`"
        ></v-switch>
      </div>
    </SimpleForm>
  </v-container>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
export default {
  name: 'AddProductForm',
  components: {
    SimpleForm
  },
  data: () => ({
    mainItems: ['Main Item'],
    subItems: ['Sub Item'],
    status: true
  })
}
</script>

<style scoped></style>
