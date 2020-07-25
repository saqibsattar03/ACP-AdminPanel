<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm title="Add New Ad" endpoint="products" :data="formData" return>
      <div class="span-2">
        <v-select
          v-model="product.mainCategoryId"
          :items="mainCategories"
          item-value="_id"
          outlined
          dense
          :rules="[(_) => !!product.mainCategoryId || 'Select a Main Category']"
          label="-- Category --"
        >
          <template #item="{ item }">{{ item.name }}</template>
          <template #selection="{ item }">{{ item.name }}</template>
        </v-select>
        <v-select
          v-model="product.subCategoryId"
          :items="subCategories"
          outlined
          item-value="_id"
          dense
          :rules="[(_) => !!product.subCategoryId || 'Select a Sub Category']"
          label="-- Sub Category --"
        >
          <template #item="{ item }">{{ item.name }}</template>
          <template #selection="{ item }">{{ item.name }}</template>
        </v-select>
        <v-text-field
          v-model="product.name"
          outlined
          dense
          label="Product Name"
        ></v-text-field>
        <v-textarea
          v-model="product.description"
          outlined
          label="Description"
        ></v-textarea>
        <v-text-field
          v-model="product.price"
          type="number"
          outlined
          dense
          label="Price"
        ></v-text-field>
        <v-card style="padding: 20px;margin-bottom: 20px">
          <v-card-title style="color: #313F53">Add Variants</v-card-title>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="9" sm="9">
              <v-card-title style="color: #313F53">Variants</v-card-title>
            </v-col>
            <v-col
              cols="12"
              md="3"
              sm="3"
              style="display: flex; align-items: center"
            >
              <v-btn
                color="#FF974D"
                style="color:#ffffff"
                @click="product.variants.push({})"
                >Add Variant
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            v-for="(variant, i) of product.variants"
            :key="i"
            style="display: grid;grid-template-columns: auto auto auto auto auto 50px"
          >
            <v-col>
              <v-text-field
                v-model="variant.color"
                color="#313F53"
                outlined
                label="Color"
                dense
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="variant.ram"
                color="#313F53"
                outlined
                label="Ram"
                dense
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="variant.storage"
                color="#313F53"
                outlined
                label="Storage"
                dense
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="variant.version"
                color="#313F53"
                outlined
                label="Version"
                dense
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="variant.price"
                color="#313F53"
                outlined
                type="number"
                label="Price"
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="1" sm="1">
              <v-btn icon @click="removeVariant(i)">
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-text-field
          v-model="product.adminCommission"
          type="number"
          outlined
          dense
          label="Admin Commission"
        ></v-text-field>
        <v-text-field
          v-model="product.warrantyMonths"
          type="number"
          outlined
          dense
          label="Warranty Months"
        ></v-text-field>
        <v-checkbox v-model="product.status" label="Active"></v-checkbox>
        <v-checkbox
          v-model="product.hideWarranty"
          label="Hide Warranty"
        ></v-checkbox>
        <v-checkbox v-model="product.isFeatured" label="Featured"></v-checkbox>
        <v-checkbox
          v-model="product.isKillerDeal"
          label="Killer Deals"
        ></v-checkbox>
        <v-file-input
          v-model="product.images"
          multiple
          outlined
          dense
          label="Upload Files"
        ></v-file-input>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { Product } from '../../models/product'
import { required } from '../../common/lib/validator'

export default {
  name: 'AdForm',
  components: { SimpleForm },
  props: {
    mainCategories: {
      type: Array,
      required: true
    },
    subCategories: {
      type: Array,
      required: true
    },
    product: {
      type: Object,
      default: () => new Product()
    },
    variant: {
      type: Array,
      default: () => [new Product()]
    }
  },

  data() {
    return {
      date: null,
      items: [],
      selectedMain: null,
      selectedSub: null,
      variants: []
    }
  },
  mounted() {
    console.log(this.subCategories)
  },
  methods: {
    required,
    formData() {
      const formData = new FormData()

      formData.append('mainCategoryId', this.product.mainCategoryId)
      formData.append('subCategoryId', this.product.subCategoryId)
      formData.append('name', this.product.name)
      formData.append('description', this.product.description)
      formData.append('price', this.product.price)
      formData.append('adminCommission', this.product.adminCommission)
      formData.append('warrantyMonths', this.product.warrantyMonths)
      formData.append('status', this.product.status || false)
      formData.append('hideWarranty', this.product.hideWarranty || false)
      formData.append('featured', this.product.isFeatured || false)
      formData.append('killerDeals', this.product.isKillerDeal || false)

      for (const variant of this.product.variants) {
        formData.append('color', variant.color)
        formData.append('ram', variant.ram)
        formData.append('storage', variant.storage)
        formData.append('version', variant.version)
        formData.append('_price', variant.price)
      }

      for (const image of this.product.images) {
        formData.append('images', image)
      }

      return formData
    },
    removeVariant(i) {
      if (this.variant.length <= 1) {
        return
      }
      this.variant.splice(i, 1)
    }
  }
}
</script>

<style scoped></style>
