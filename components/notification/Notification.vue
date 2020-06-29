<template>
  <div>
    <div style="padding: 25px">
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
              <v-card-title>Sed New Notification</v-card-title>
            </v-col>
          </v-row>
        </template>
        <div class="span-2">
          <v-select
            :items="headers"
            outlined
            dense
            label="--Select Type--"
          ></v-select>
          <v-textarea outlined label="Notification"></v-textarea>
        </div>
      </SimpleForm>
      <data-viewer :columns="headers" remove></data-viewer>
    </div>
  </div>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
import SimpleForm from '../../common/ui/widgets/SimpleForm'
export default {
  name: 'Notification',
  components: { DataViewer, SimpleForm },
  data() {
    return {
      items: ['all', 'user', 'supply'],
      headers: [
        { text: 'Supplier', value: 'supplier' },
        { text: 'Send Date', value: 'send_date' },
        { text: 'Notification', value: 'notification' }
      ]
    }
  }
}
</script>

<style lang="sass">
/*.form*/
//width: 100%
</style>
