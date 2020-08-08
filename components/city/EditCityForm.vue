<template>
  <v-container style="display: flex;justify-content: center">
    <SimpleForm title="Edit City Form">
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
  name: 'EditCityForm',
  components: {
    SimpleForm
  }
}
</script>

<style scoped></style>
