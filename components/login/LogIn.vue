<template>
  <div class="main-container">
    <v-form ref="form">
      <img src="~/assets/acp_logo.png" width="540" />
      <v-card class="login-container">
        <v-text-field v-model="login.username" outlined label="Email" />
        <v-text-field
          v-model="login.password"
          outlined
          label="Password"
          type="password"
        />

        <div
          style="display: flex; justify-content: space-between; align-items: center"
        >
          <v-checkbox label="Remember Me" />
          <p style="color: #F9610C;">Forgotten Password?</p>
        </div>

        <v-btn
          elevation="0"
          width="100%"
          height="50px"
          color="#F9610C"
          style="color: white"
          :disabled="disable"
          to="/"
          @click.prevent="userLogin"
          >Sign in</v-btn
        >
      </v-card>
    </v-form>
    <v-snackbar
      v-model="snackbar"
      bottom
      color="red"
      :timeout="1500"
      height="200"
      rounded="pill"
      dark
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
    return {
      snackbar: false,
      snackbarColor: 'red',
      login: {
        username: '',
        password: ''
      },
      disable: false
    }
  },
  methods: {
    async userLogin() {
      if (this.$refs.form.validate()) {
        try {
          this.disable = true

          if (this.$auth.loggedIn) return
          await this.$auth.loginWith('local', {
            data: this.login
          })

          if (this.$auth.hasScope('customer')) {
            this.snackbar = true
            this.snackbarText = "Customer can't login to Admin Panel"
            await this.$auth.logout()
            this.disable = false
            return
          } else if (this.$auth.hasScope('supplier')) {
            const supplierId = this.$auth.user._id
            const supplier = await this.$axios.$get(
              'suppliers/getbyperson/' + supplierId
            )
            if (!supplier.status) {
              this.snackbar = true
              this.snackbarText = 'Your Account has been disabled by admin'
              await this.$auth.logout()
              return
            }

            this.disable = false
          }

          await this.$router.push('/')
          this.disable = false
        } catch (err) {
          this.disable = false
          this.snackbar = true
          this.snackbarText = 'User name or Password is incorrect'
          console.log('user name and password is incorrect ')
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.main-container
  width: 100%
  height: 100vh
  display: flex
  align-items: center
  background: #343a40
  flex-direction: column
  justify-content: center

.login-container
  width: 560px
  padding: 30px
</style>
