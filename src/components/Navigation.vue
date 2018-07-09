/**
* Created by vouill on 11/13/17.
*/

<template>
  <div class="navigation">
    <ul>
      <li>
        <router-link class="brand" to="/">
          <!-- <img src="../../assets/logo.png" width="40px"/><strong>DOGEBOOK</strong> -->
        </router-link>
      </li>
    </ul>
    <ul>
      <li v-if="isProfileLoaded">
        <router-link to="/dashboard">{{name}}</router-link>
      </li>
      <li v-if="isAuthenticated" @click="logout">
        <span class="logout">Logout</span>
      </li>
      <li v-if="!isAuthenticated && !authLoading">
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { AUTH_LOGOUT } from '../store/actions/auth.js'

export default {
  name: 'navigation',
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
    }
  },
  computed: {
    ...mapGetters(['getProfile', 'isAuthenticated', 'isProfileLoaded']),
    ...mapState({
      authLoading: state => state.auth.status === 'loading',
      name: state => `${state.user.profile.name}`
    })
  }
}
</script>

<style src="../assets/css/navigation.css"></style>
