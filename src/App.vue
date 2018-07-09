<template>
  <div id="app">
    <navigation/>
    <div class="main-container">
      <!-- <center-container> -->
        <router-view/>
      <!-- </center-container> -->
    </div>
    <!-- <sqreen-footer/> -->
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import { USER_REQUEST } from './store/actions/user.js'

export default {
  components: {
    // SqreenFooter,
    Navigation
  },
  name: 'app',
  created: function () {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
