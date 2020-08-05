<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm
      :title="isUpdate ? 'Edit Product' : 'Add New Product'"
      :method="isUpdate ? 'patch' : 'post'"
      endpoint="products"
      :data="formData"
      return
    >
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
        />
        <v-textarea
          v-model="product.description"
          outlined
          label="Description"
        />
        <v-text-field
          v-model="product.price"
          :rules="[(_) => !!product.price || 'Please Enter Price']"
          type="number"
          outlined
          dense
          label="Price"
        />
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
            v-for="(_variant, i) of product.variants"
            :key="i"
            style="display: grid;grid-template-columns: auto auto auto auto auto 50px"
          >
            <v-col>
              <v-text-field
                v-model="_variant.color"
                color="#313F53"
                outlined
                label="Color"
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="_variant.ram"
                color="#313F53"
                outlined
                label="Ram"
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="_variant.storage"
                color="#313F53"
                outlined
                label="Storage"
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="_variant.version"
                color="#313F53"
                outlined
                label="Version"
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="_variant.price"
                color="#313F53"
                outlined
                type="number"
                label="Price"
                dense
              />
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
          :rules="[(_) => !!product.price || 'Please Enter Admin Commission']"
          outlined
          dense
          label="Admin Commission"
        />

        <v-text-field
          v-model="product.warrantyMonths"
          type="number"
          outlined
          dense
          label="Warranty Months"
        />

        <v-checkbox v-model="product.active" label="Active" />
        <v-checkbox v-model="product.hideWarranty" label="Hide Warranty" />
        <v-checkbox v-model="product.isFeatured" label="Featured" />
        <v-checkbox v-model="product.isKillerDeal" label="Killer Deals" />

        <div v-if="isUpdate">
          <p>Uploaded Images</p>
          <div class="image-carosel">
            <div
              v-for="(image, i) of product.images"
              :key="i"
              style="width: 180px; height: 180px"
            >
              <img
                width="180"
                height="180"
                style="object-fit: cover;"
                :src="$axios.defaults.baseURL + '/uploads/' + image.name"
                alt=""
              />
              <div class="image-overlay">
                <v-btn icon outlined color="white" @click="deleteImage(i)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>

        <vue-upload-multiple-image
          :data-images="imagesData"
          @upload-success="uploadImageSuccess"
          @before-remove="beforeRemove"
          @edit-image="editImage"
        />
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { Product } from '~/models/product'
import { required } from '~/common/lib/validator'

export default {
  name: 'AdForm',
  components: { SimpleForm, VueUploadMultipleImage },
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
    },
    deletedImages: {
      type: Array,
      default: () => []
    },
    isUpdate: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      date: null,
      items: [],
      selectedMain: null,
      selectedSub: null,
      variants: [],
      images: [],
      imagesData: []
    }
  },

  mounted() {
    window.console.log(this.product)
  },
  methods: {
    required,
    formData() {
      const formData = new FormData()
      if (this.$auth.hasScope('supplier')) {
        const supplierId = this.$auth.user._id
        formData.append('supplierId', supplierId)
      }
      if (this.isUpdate) {
        formData.append('_id', this.product._id)
      }
      formData.append('name', this.product.name)
      formData.append('price', this.product.price)
      formData.append('description', this.product.description)
      formData.append('subCategoryId', this.product.subCategoryId)
      formData.append('mainCategoryId', this.product.mainCategoryId)
      formData.append('warrantyMonths', this.product.warrantyMonths)
      formData.append('adminCommission', this.product.adminCommission)

      formData.append('active', (this.product.active || false).toString())
      formData.append(
        'isFeatured',
        (this.product.isFeatured || false).toString()
      )
      formData.append(
        'hideWarranty',
        (this.product.hideWarranty || false).toString()
      )
      formData.append(
        'isKillerDeal',
        (this.product.isKillerDeal || false).toString()
      )

      for (const image of this.deletedImages) {
        formData.append('deletedImages', image.path)
      }

      for (const image of this.product.images) {
        formData.append('uploadedImageNames', image.name)
        formData.append('uploadedImagePaths', image.path)
      }

      for (const variant of this.product.variants) {
        formData.append('ram', variant.ram)
        formData.append('color', variant.color)
        formData.append('_price', variant.price)
        formData.append('storage', variant.storage)
        formData.append('version', variant.version)
      }

      for (const image of this.images) {
        formData.append('images', image)
      }

      if (this.$auth.hasScope('admin')) {
        formData.append('status', 'approved')
      }

      return formData
    },
    removeVariant(i) {
      if (this.product.variants.length > 0) {
        this.product.variants.splice(i, 1)
      }
    },
    uploadImageSuccess(formData) {
      formData.forEach((item) => this.images.push(item))
    },
    beforeRemove(index, done, fileList) {
      // const r = confirm('remove image')
      // if (r === true) {
      //   done()
      // } else {
      // }
    },
    editImage(fileList) {},

    deleteImage(index) {
      this.deletedImages.push(this.product.images[index])
      this.product.images.splice(index, 1)
    }
  }
}
</script>

<style>
.image-overlay {
  top: 0;
  left: 0;
  z-index: 5;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  border-right: 4px;
  position: absolute;
  transition: all 0.2s;
  align-items: center;
  margin: 0 !important;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
}

.image-carosel {
  padding: 10px 5px;
  height: 200px;
  display: flex;
  overflow-x: auto;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.05);
}

.image-carosel div {
  margin: 0 5px;
  position: relative;
}

.image-carosel div img {
  top: 0;
  position: absolute;
}

.image-carosel div:hover .image-overlay {
  transform: scale(1);
  opacity: 1;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
