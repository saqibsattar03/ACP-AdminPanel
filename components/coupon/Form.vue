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
            <v-card-title>New Coupon</v-card-title>
          </v-col>
        </v-row>
      </template>
      <div class="span-2">
        <v-text-field outlined dense label="Name"></v-text-field>
        <v-text-field
          outlined
          dense
          type="number"
          label="Percentage"
          hint=" Write Discount in %age here"
        ></v-text-field>
        <v-checkbox label="One time use"></v-checkbox>
        <!--        <v-checkbox label="Status"></v-checkbox>-->

        <!--        <v-radio-group v-model="row" row>-->
        <!--          <v-radio label="More than one" value="radio-1"></v-radio>-->
        <!--          <v-radio label="One time use" value="radio-2"></v-radio>-->
        <!--        </v-radio-group>-->
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Starting Date"
              readonly
              v-bind="attrs"
              outlined
              dense
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-menu>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="End Date"
              readonly
              v-bind="attrs"
              outlined
              dense
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-menu>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
export default {
  name: 'Form',
  components: { SimpleForm },
  data() {
    return {
      row: null,
      date: new Date().toISOString().substr(0, 10),
      menu: false
    }
  }
}
</script>

<style scoped></style>
