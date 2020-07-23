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
          dark
          to="/"
          @click.prevent="userLogin"
          >Sign in</v-btn
        >
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      if (this.$refs.form.validate()) {
        try {
          await this.$auth.loginWith('local', {
            data: this.login
          })

          await this.$router.push('/')
        } catch (err) {
          console.log(err)
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
