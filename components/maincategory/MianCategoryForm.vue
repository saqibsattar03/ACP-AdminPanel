<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm
      :method="isUpdate ? 'patch' : 'post'"
      :data="masterCategory"
      endpoint="/master-categories"
      title="Create new Master Category"
      return
    >
      <div class="span-2">
        <v-text-field
          v-model="masterCategory.name"
          label="Title"
          outlined
          dense
        />
      </div>
      <v-checkbox v-model="masterCategory.status" label="Active" />
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { MasterCategory } from '../../models/master-category'

export default {
  name: 'MainCategoryForm',
  components: { SimpleForm },

  props: {
    masterCategory: {
      type: Object,
      default: () => new MasterCategory()
    },
    isUpdate: {
      type: Boolean,
      default: false
    }
  }
}
</script>
