<template>
  <div>
    <div style="padding: 25px">
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
          <v-textarea
            v-model="notification.title"
            outlined
            label="Notification"
          ></v-textarea>
        </div>
      </SimpleForm>
      <data-viewer
        :columns="headers"
        remove
        endpoint="/notifications"
      ></data-viewer>
    </div>
  </div>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { Notification } from '../../models/notification'

export default {
  name: 'Notification',
  components: { DataViewer, SimpleForm },
  props: {
    notification: {
      type: Object,
      default: () => new Notification()
    }
  },
  data() {
    return {
      items: ['all', 'Supplier', 'Customer'],
      selected: null,
      headers: [{ text: 'TITLE', value: 'title' }]
    }
  }
}
</script>

<style lang="sass">
/*.form*/
//width: 100%
</style>
