import Vue from 'vue'
import { GET_ALL_DEVICE, SET_ALL_DEVICE } from './mutation-types.js'

const actions = {
  [GET_ALL_DEVICE]: ({commit, dispatch}) => {
    return Vue.http
      .get(`${process.env.API_URL}/api/v1/devices`)
      .then((response) => {
        console.log(response.data, 'response.data')
        commit(SET_ALL_DEVICE, response.data)
      }, errors => {
        console.log(errors.body, 'errors.body')
        // commit(AUTH_ERROR, errors.body)
      })
  }
}

export { actions }
