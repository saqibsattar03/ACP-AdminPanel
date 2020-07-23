<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm
      :method="isUpdate ? 'patch' : 'post'"
      title="Add New Supplier"
      :data="formData"
      endpoint="/suppliers"
      return
    >
      <div class="span-2">
        <v-text-field
          v-model="suppliers.companyName"
          outlined
          dense
          label="Company Name"
        ></v-text-field>
        <v-text-field
          v-model="suppliers.person.name"
          outlined
          dense
          label="Supplier Name"
        ></v-text-field>
        <v-text-field
          v-model="suppliers.person.phone"
          outlined
          dense
          label="Mobile"
          hint="ex(XXX)XXX-XXXXX"
        ></v-text-field>
        <v-text-field
          v-model="suppliers.person.username"
          outlined
          dense
          label="Email"
          hint="Please Enter Your Email here"
        ></v-text-field>
        <v-checkbox v-model="suppliers.status" label="Active"></v-checkbox>
        <v-text-field
          v-model="suppliers.password"
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
          <v-file-input
            v-model="document1"
            outlined
            dense
            label="CR Paper"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="expiryDate1"
            label="Expiry Date"
            type="date"
            outlined
            dense
          ></v-text-field>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            v-model="document2"
            outlined
            dense
            label="Chamber Card"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="expiryDate2"
            label="Expiry Date"
            type="date"
            outlined
            dense
          ></v-text-field>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            v-model="document3"
            outlined
            dense
            label="Tharkees Baladi"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="expiryDate3"
            label="Expiry Date"
            type="date"
            outlined
            dense
          ></v-text-field>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            v-model="document4"
            outlined
            dense
            label="ID Card of Sponsor"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="expiryDate4"
            label="Expiry Date"
            type="date"
            outlined
            dense
          ></v-text-field>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            v-model="document5"
            outlined
            dense
            label="ID/Passport of Salesman"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="expiryDate5"
            label="Expiry Date"
            type="date"
            outlined
            dense
          ></v-text-field>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            v-model="document6"
            outlined
            dense
            label="Any Other legal Document"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="expiryDate6"
            label="Expiry Date"
            type="date"
            outlined
            dense
          ></v-text-field>
        </div>
        <div
          style="display: flex;flex-direction: row;justify-content: space-between"
        >
          <v-file-input
            v-model="document7"
            outlined
            dense
            label="Any other legal document"
          ></v-file-input>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="expiryDate7"
            label="Expiry Date"
            type="date"
            outlined
            dense
          ></v-text-field>
        </div>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { Supplier } from '../../models/supplier'
export default {
  name: 'SupplierForm',
  components: { SimpleForm },
  props: {
    suppliers: {
      type: Object,
      default: () => new Supplier()
    },
    isUpdate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      document1: '',
      document2: '',
      document3: '',
      document4: '',
      document5: '',
      document6: '',
      document7: '',
      expiryDate1: '',
      expiryDate2: '',
      expiryDate3: '',
      expiryDate4: '',
      expiryDate5: '',
      expiryDate6: '',
      expiryDate7: ''
      // documents: ['', '', '', '', '', '', ''],
      // expiryDates: ['', '', '', '', '', '', '']
    }
  },
  methods: {
    formData() {
      const formData = new FormData()

      // for (let i = 0; i < this.documents.length; ++i) {
      //   if (this.documents[i]) {
      //     formData.append('documents', this.documents[i])
      //     formData.append('expiryDate', this.expiryDates[i])
      //   }
      // }
      formData.append('crPaper', this.document1)
      formData.append('expiryDate', this.expiryDate1)
      formData.append('chamberCard', this.document2)
      formData.append('expiryDate', this.expiryDate2)
      formData.append('tharkeesBaladi', this.document3)
      formData.append('expiryDate', this.expiryDate3)
      formData.append('idCardOfSponsor', this.document4)
      formData.append('expiryDate', this.expiryDate4)
      formData.append('salesmanId', this.document5)
      formData.append('expiryDate', this.expiryDate5)
      formData.append('legal1', this.document6)
      formData.append('expiryDate', this.expiryDate6)
      formData.append('legal2', this.document7)
      formData.append('expiryDate', this.expiryDate7)
      formData.append('name', this.suppliers.personName)
      formData.append('companyName', this.suppliers.companyName)
      formData.append('phone', this.suppliers.mobile)
      formData.append('username', this.suppliers.email)
      formData.append('password', this.suppliers.password)
      formData.append('status', this.suppliers.status)

      return formData
    }
  }
}
</script>

<style scoped></style>
