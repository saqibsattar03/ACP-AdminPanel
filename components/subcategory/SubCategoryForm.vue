<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm
      :method="isUpdate ? 'patch' : 'post'"
      :title="isUpdate ? 'Edit Sub Category' : 'Add New Sub Category'"
      :data="subCategory"
      endpoint="sub-categories"
      return
    >
      <div class="span-2">
        <v-select
          v-model="masterCategories"
          :items="masterCategories"
          label="-- Master Category --"
          outlined
          :rules="[
            (_) => !!subCategory.selectedMaster || 'Select a Master Category'
          ]"
          dense
        >
          <template #item="{ item }">{{ item.name }}</template>
          <template #selection="{ item }">{{ item.name }}</template>
        </v-select>

        <v-select
          v-model="subCategory.parents"
          :items="selectedMaster ? selectedMaster.mainCategories : []"
          label="-- Main Category --"
          :disabled="!selectedMaster"
          outlined
          multiple
          item-value="_id"
          item-text="name"
          :rules="[
            (_) => subCategory.parents.length > 0 || 'Select a Main Category'
          ]"
          dense
        />

        <v-text-field
          v-model="subCategory.name"
          :rules="[(v) => !!v || 'Please Provide a value']"
          label="Title"
          outlined
          dense
        />
        <v-checkbox v-model="subCategory.status" label="Active" />
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { SubCategory } from '../../models/sub-category'

export default {
  name: 'SubCategoryForm',
  components: { SimpleForm },

  props: {
    mainCategories: {
      type: Array,
      default: () => []
    },

    subCategory: {
      type: Object,
      default: () => new SubCategory()
    },
    isUpdate: {
      type: Boolean,
      default: false
    },
    masterCategories: {
      type: Array
    }
  },

  data: () => ({
    items: [],
    selectedMain: null,
    selectedMaster: null
  }),

  mounted() {
    console.log(this.subCategory)
  }
}
</script>
