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
            <v-card-title>Add City</v-card-title>
          </v-col>
        </v-row>
      </template>
      <div class="span-2">
        <v-text-field
          label="City"
          prepend-inner-icon="mdi-home"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          prepend-inner-icon="mdi-home"
          label="Charges"
          outlined
          dense
          type="number"
        ></v-text-field>
      </div>
    </SimpleForm>
  </v-container>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
export default {
  name: 'AddCityForm',
  components: {
    SimpleForm
  }
}
</script>

<style scoped></style>
