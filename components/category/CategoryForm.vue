<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm
      :method="isUpdate ? 'patch' : 'post'"
      :title="isUpdate ? 'Edit Category' : 'Add New Category'"
      :data="parseData"
      endpoint="master-categories"
      return
    >
      <div class="span-2">
        <v-select
          v-model="selectedMaster"
          :items="masterCategories"
          :rules="[(_) => !!selectedMaster || 'Select a Master Category']"
          outlined
          dense
          label="-- Master Category --"
        >
          <template #item="{ item }">{{ item.name }}</template>
          <template #selection="{ item }">{{ item.name }}</template>
        </v-select>
        <v-text-field
          v-model="mainCategory.name"
          :rules="[(v) => !!v || 'Please Provide a value']"
          label="Title"
          outlined
          dense
        ></v-text-field>
        <v-checkbox v-model="mainCategory.status" label="Active"></v-checkbox>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { MainCategory } from '../../models/main-category'

export default {
  name: 'Form',
  components: { SimpleForm },
  props: {
    masterCategories: {
      type: Array,
      default: () => []
    },
    mainCategory: {
      type: Object,
      default: () => new MainCategory()
    },
    isUpdate: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [],
    selectedMaster: null
  }),

  methods: {
    parseData() {
      if (
        this.selectedMaster.mainCategories &&
        this.selectedMaster.mainCategories.length > 0
      ) {
        this.selectedMaster.mainCategories.push(
          Object.assign({}, this.mainCategory)
        )
      } else {
        this.selectedMaster.mainCategories = [
          Object.assign({}, this.mainCategory)
        ]
      }

      return this.selectedMaster
    }
  }
}
</script>

<style scoped></style>
