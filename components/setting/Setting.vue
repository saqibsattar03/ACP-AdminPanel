<template>
  <div style="display: flex;justify-content: center">
    <SimpleForm
      title="Change Password"
      method="patch"
      :data="settings"
      endpoint="/persons/changepassword"
    >
      <div class="span-2">
        <v-text-field
          v-model="settings.old"
          label="Old Password"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="settings.new"
          label="New Password"
          outlined
          dense
        ></v-text-field>
      </div>
    </SimpleForm>
  </div>
</template>

<script>
import SimpleForm from '../../common/ui/widgets/SimpleForm'
import { Setting } from '@/models/setting'
export default {
  name: 'Setting',
  components: { SimpleForm },
  props: {
    settings: {
      type: Object,
      default: () => new Setting()
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.getID()
  },
  methods: {
    getID() {
      this.settings.id = this.$auth.user._id
    }
  }
}
</script>

<style scoped></style>
