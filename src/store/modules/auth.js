/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'
// import apiCall from '../../utils/api'
import Vue from 'vue'

const state = { token: localStorage.getItem('api_token') || '', status: '', hasLoadedOnce: false, errors: null }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  loginerrors: state => state.errors
}

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    commit(AUTH_REQUEST)
    return Vue.http
      .post(`${process.env.API_URL}/api/v1/login`, user)
      .then((response) => {
        if (response.data.role === 4) {
          localStorage.setItem('api_token', response.data.token)
          Vue.http.headers.common.Authorization = `Bearer ${response.data.token}`
          commit(AUTH_SUCCESS, response.data)
          dispatch(USER_REQUEST)
        } else {
          let loginerrors = {
            messages: ''
          }
          loginerrors.messages = ['Your credentials are invalid.']
          commit(AUTH_ERROR, loginerrors)
          localStorage.removeItem('api_token')
        }
      }, errors => {
        commit(AUTH_ERROR, errors.body)
        localStorage.removeItem('api_token')
      })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem('api_token')
      resolve()
    })
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp.token
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state, errors) => {
    state.status = 'error'
    state.errors = errors.messages
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
