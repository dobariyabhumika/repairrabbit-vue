<template>
  <div id="login">
    <h1>Login</h1>
    <ul v-if="loginerrors">{{loginerrors}}</ul>
    <input type="text" name="email" v-model="email" placeholder="Email" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <button v-on:click="login()">Login</button>
  </div>
</template>

<script>
import {AUTH_REQUEST} from '../store/actions/auth.js'
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: mapGetters([
    'loginerrors'
  ]),
  methods: {
    login: function () {
      const { email, password } = this
      this.$store.dispatch(AUTH_REQUEST, { email, password })
        .then(() => {
          this.$router.push('/dashboard')
        })
    }
  }
}
</script>

<style scoped>
  #login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }
</style>
