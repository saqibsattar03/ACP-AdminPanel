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
            <v-card-title>New Banner</v-card-title>
          </v-col>
        </v-row>
      </template>
      <div>
        <v-file-input outlined dense label="Select Banner"></v-file-input>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
export default {
  name: 'BannerForm',
  components: { SimpleForm }
}
</script>

<style scoped></style>
