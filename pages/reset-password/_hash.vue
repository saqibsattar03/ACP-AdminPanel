<template>
  <div
    style="display: flex; align-items: center; justify-content: center; height: 100%"
  >
    <SimpleForm
      v-if="isValid"
      title="Reset Your Password"
      method="patch"
      endpoint="persons/changepassword"
      :data="parseData"
      @response="window.location.close()"
    >
      <v-text-field
        v-model="newPassword"
        type="password"
        label="New Password"
        :rules="[
          (v) => !!v || 'New password is required',
          (v) => v !== oldPassword || 'New & Old Passwords can not be same'
        ]"
        class="span-2"
        outlined
        dense
      />
      <v-text-field
        v-model="confirmPassword"
        type="password"
        label="Confirm Password"
        class="span-2"
        :rules="[
          matchPasswordRule,
          (v) => !!v || 'Fill it out..',
          (v) => !!v || 'It does not match the new password'
        ]"
        outlined
        dense
      />
    </SimpleForm>
    <p v-else>
      Your Request has been expired
    </p>
  </div>
</template>

<script>
import SimpleForm from '@/common/ui/widgets/SimpleForm'

export default {
  layout: 'none',
  auth: false,
  components: { SimpleForm },

  async asyncData({ $axios, route }) {
    return {
      isValid: await $axios.$get('persons/verify/' + route.params.hash)
    }
  },

  data: () => ({
    hash: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  }),
  computed: {
    matchPasswordRule() {
      return () =>
        this.newPassword === this.confirmPassword || 'Password Must Match'
    }
  },

  mounted() {
    this.hash = this.$route.params.hash
  },

  methods: {
    parseData() {
      return {
        hash: this.hash,
        old: this.oldPassword,
        new: this.newPassword
      }
    }
  }
}
</script>

<style scoped>
.form {
  width: 400px !important;
}
</style>
