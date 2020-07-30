<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm
      :method="isUpdate ? 'patch' : 'post'"
      title="Create New Coupon"
      :data="coupons"
      endpoint="/coupons"
      return
    >
      <div class="span-2">
        <v-text-field
          v-model="coupons.name"
          outlined
          dense
          label="Name"
        ></v-text-field>
        <v-text-field
          v-model="coupons.discount"
          :rules="[maxNumber]"
          outlined
          dense
          type="number"
          label="Percentage"
          hint=" Write Discount in %age here"
        ></v-text-field>
        <v-checkbox
          v-model="coupons.oneTimeUse"
          label="One time use"
        ></v-checkbox>
        <v-text-field
          v-model="coupons.startDate"
          type="date"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="coupons.endDate"
          type="date"
          outlined
          dense
        ></v-text-field>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import * as moment from 'moment'
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { Coupon } from '../../models/coupon'
import { maxNumber } from '@/common/utils/validators'

export default {
  name: 'Form',
  components: { SimpleForm },

  props: {
    coupons: {
      type: Object,
      default: () => new Coupon()
    },
    isUpdate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      date: null,
      toMeun: false,
      toDateText: '',
      rules: {
        max: [
          function(v) {
            if (v > 100) {
              return 'discount cant exceed 100'
            }
          }
        ]
      }
    }
  },
  computed: {
    toDatePicker: {
      get() {
        if (this.toDateText === '') {
          return null
        }
        return moment(this.toDateText, 'DD-MM-YYYY').format('YYYY-MM-DD')
      },
      set(value) {
        this.toDateText = moment(value, 'YYYY-MM-DD').format('DD-MM-YYYY')
      }
    }
  },
  mounted() {
    this.coupons.date = new Date(this.coupons.date)
    this.coupons.startDate = new Date(this.coupons.startDate)
    this.coupons.endDate = new Date(this.coupons.endDate)
  },
  methods: {
    maxNumber
  }
}
</script>

<style scoped></style>
