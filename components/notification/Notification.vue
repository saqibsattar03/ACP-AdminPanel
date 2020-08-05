<template>
  <div>
    <div style="padding: 25px;">
      <SimpleForm
        title="Send New Notification"
        :data="notification"
        endpoint="notifications"
      >
        <div class="span-2">
          <v-select
            v-model="notification.user"
            :items="items"
            outlined
            dense
            label="-- Select Type --"
          ></v-select>
          <v-text-field
            v-model="notification.title"
            label="Title"
            outlined
            dense
          />
          <v-textarea
            v-model="notification.description"
            outlined
            label="Notification"
          ></v-textarea>
        </div>
      </SimpleForm>
      <v-data-table
        :headers="headers"
        :items="notify"
        endpoint="/notifications"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { Notification } from '../../models/notification'

export default {
  name: 'Notification',
  components: { SimpleForm },
  props: {
    notification: {
      type: Object,
      default: () => new Notification()
    },
    notify: Array
  },
  data() {
    return {
      items: ['all', 'Supplier', 'Customer'],
      selected: null,
      headers: [
        { text: 'TITLE', value: 'title' },
        { text: 'DESCRIPTION', value: 'description' }
      ]
    }
  }
}
</script>

<style lang="sass">
/*.form*/
//width: 100%
</style>
