import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import auth from './modules/auth'
import appointment from './modules/appointment'
import createLogger from 'vuex/dist/logger.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    auth,
    appointment
  },
  /**
  * If strict mode should be used
  */
  strict: process.env.NODE_ENV !== 'production',

  /**
  * Plugins for Vuex
  */
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})
