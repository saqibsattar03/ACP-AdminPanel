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
            <v-card-title>New Supplier</v-card-title>
          </v-col>
        </v-row>
      </template>
      <div class="span-2">
        <v-text-field outlined dense label="Company Name"></v-text-field>
        <v-text-field outlined dense label="Supplier Name"></v-text-field>
        <v-text-field
          outlined
          dense
          label="Mobile"
          hint="ex(XXX)XXX-XXXXX"
        ></v-text-field>
        <v-text-field
          outlined
          dense
          label="Email"
          hint="Please Enter Your Email here"
        ></v-text-field>
        <!--        <v-radio-group v-model="row" row>-->
        <!--          <v-radio label="Active" value="radio-1"></v-radio>-->
        <!--          <v-radio label="Not Active" value="radio-2"></v-radio>-->
        <!--        </v-radio-group>-->
        <v-checkbox label="Active"></v-checkbox>
        <v-text-field
          outlined
          dense
          label="Password"
          type="password"
          hint="Please Enter Complex Password here"
        ></v-text-field>
      </div>
      <div class="span-2">
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input outlined dense label="CR Paper"></v-file-input>
          <v-spacer></v-spacer>
          <v-menu
            ref="modal"
            v-model="modal1"
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
              <v-btn text color="primary" @click="modal1 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input outlined dense label="Chamber Card"></v-file-input>
          <v-spacer></v-spacer>
          <v-menu
            ref="modal"
            v-model="modal2"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Expiry Date"
                readonly
                v-bind="attrs"
                outlined
                dense
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input outlined dense label="Tharkees Baladi"></v-file-input>
          <v-spacer></v-spacer>
          <v-menu
            ref="modal"
            v-model="modal3"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Expiry Date"
                readonly
                v-bind="attrs"
                outlined
                dense
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal3 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            outlined
            dense
            label="ID Card of Sponsor"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-menu
            ref="modal"
            v-model="modal4"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Expiry Date"
                readonly
                v-bind="attrs"
                outlined
                dense
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal4 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            outlined
            dense
            label="ID/Passport of Salesman"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-menu
            ref="modal"
            v-model="modal5"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Expiry Date"
                readonly
                v-bind="attrs"
                outlined
                dense
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal5 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            outlined
            dense
            label="Any Other legal Document"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-menu
            ref="modal"
            v-model="modal6"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Expiry Date"
                readonly
                v-bind="attrs"
                outlined
                dense
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal6 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            outlined
            dense
            label="Any other legal document"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-menu
            ref="modal"
            v-model="modal7"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Expiry Date"
                readonly
                v-bind="attrs"
                outlined
                dense
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal7 = false">Cancel</v-btn>
              <v-btn text color="primary">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </div>
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
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false
    }
  }
}
</script>

<style scoped></style>
