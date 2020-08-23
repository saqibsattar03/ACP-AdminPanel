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
      @response="locationReplace"
    >
      <v-text-field
        v-model="newPassword"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        label="New Password"
        :rules="[
          (v) => !!v || 'New password is required',
          (v) => v !== oldPassword || 'New & Old Passwords can not be same'
        ]"
        class="span-2"
        outlined
        dense
        @click:append="() => (show1 = !show1)"
      />
      <v-text-field
        v-model="confirmPassword"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        label="Confirm Password"
        class="span-2"
        :rules="[
          matchPasswordRule,
          (v) => !!v || 'Fill it out..',
          (v) => !!v || 'It does not match the new password'
        ]"
        outlined
        dense
        @click:append="() => (show = !show)"
      />
      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="400">
            <v-card>
              <v-card-title class="headline">Reset Password</v-card-title>
              <v-card-text>Your Password has been Reset</v-card-text>
              <v-card-text
                >Go to your app account to login into your account</v-card-text
              >
            </v-card>
          </v-dialog>
        </v-row>
      </template>
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
    confirmPassword: '',
    dialog: false,
    show: false,
    show1: false
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
    },
    locationReplace() {
      this.dialog = true
      // this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.form {
  width: 400px !important;
}
</style>
