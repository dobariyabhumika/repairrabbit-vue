import { SET_ALL_DEVICE } from './mutation-types.js'

const mutations = {
  [SET_ALL_DEVICE] (state, payload) {
    state.alldevice = payload.devices.data
  }
}

export { mutations }
