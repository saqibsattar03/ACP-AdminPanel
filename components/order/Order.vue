<template>
  <v-container>
    <data-viewer
      :columns="headers"
      :title="title"
      detail
      detail-route="order/detail/$id"
      remove
      remove-route="orders/$id"
      endpoint="/orders"
    >
      <template #status="{ item }">
        <v-select
          v-model="item.status"
          style="margin-top: 15px;width: 160px"
          :items="items"
          label="status"
          dense
          outlined
          @change="sendStatus(item)"
        />
      </template>
      <template #remarks="{ item }">
        <v-text-field
          v-model="item.remarks"
          style="margin-top: 15px;width: 160px"
          label="Remarks"
          outlined
          dense
          ><template slot="append-outer"
            ><v-icon color="red" small @click="sendRemarks(item)"
              >fa fa-paper-plane remarks-button</v-icon
            >
          </template>
        </v-text-field>
      </template>
    </data-viewer>
  </v-container>
</template>

<script>
import DataViewer from '../../common/ui/widgets/DataViewer'
export default {
  name: 'Order',
  components: { DataViewer },
  props: {
    title: {
      type: String,
      default: 'title'
    }
  },
  data() {
    return {
      status: '',
      remarks: '',
      headers: [
        { text: 'ORDER #', value: 'orderNo' },
        { text: 'USER', value: 'person.name' },
        { text: 'MOBILE', value: 'contact' },
        { text: 'PRODUCT', value: 'items[0].product.name' },
        { text: 'ORDER AMOUNT', value: 'orderAmount' },
        { text: 'TOTAL AMOUNT', value: 'total' },
        { text: 'TYPE', value: 'orderType' },
        { text: 'STATUS', value: 'status' },
        { text: 'REMARKS', value: 'remarks' }
      ],
      items: ['pending', 'on hold', 'processing', 'delivered', 'cancelled']
    }
  },
  methods: {
    sendStatus(item) {
      const res = this.$axios.patch('/orders/updatebystatus', {
        status: item.status,
        id: item._id
      })
      return res
    },
    sendRemarks(item) {
      const res = this.$axios.patch('/orders/remarks', {
        remarks: item.remarks,
        id: item._id
      })
      return res
    }
  }
}
</script>

<style scoped></style>
