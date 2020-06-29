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
            <v-card-title>New Ad</v-card-title>
          </v-col>
        </v-row>
      </template>
      <div class="span-2">
        <v-select outlined dense :items="items" label="--Category--"></v-select>
        <v-select
          outlined
          dense
          :items="items"
          label="--Sub Category--"
        ></v-select>
        <v-textarea outlined label="Description"></v-textarea>
        <v-text-field type="number" outlined dense label="Price"></v-text-field>
        <v-text-field
          type="number"
          outlined
          dense
          label="Admin Commission"
        ></v-text-field>
        <v-text-field outlined dense label="Supplier Name"></v-text-field>
        <v-text-field
          type="number"
          outlined
          dense
          label="Purchase Price"
        ></v-text-field>
        <!--        <v-text-field-->
        <!--          type="number"-->
        <!--          outlined-->
        <!--          dense-->
        <!--          label="IMEI N0#"-->
        <!--        ></v-text-field>-->
        <v-text-field
          type="number"
          outlined
          dense
          label="Warranty Months"
        ></v-text-field>
        <v-radio-group v-model="row" row>
          <v-radio label="Active" value="active"></v-radio>
          <v-radio label="Not Active" value="not active"></v-radio>
        </v-radio-group>
        <v-switch label="Hide Warranty"></v-switch>
        <v-switch label="Featured"></v-switch>
        <v-switch label="Killer Deals"></v-switch>
        <v-file-input
          multiple
          outlined
          dense
          label="Upload Files"
        ></v-file-input>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
export default {
  name: 'AdForm',
  components: { SimpleForm },
  data() {
    return {
      row: null,
      items: ['pakistan', 'india', 'abc', 'xyz']
    }
  }
}
</script>

<style scoped></style>
