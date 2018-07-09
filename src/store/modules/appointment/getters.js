import Vue from 'vue'

const getters = {
  alldevice: state => {
    let alldevices = state.alldevice
    let displayedDevice = []
    if (alldevices) {
      alldevices.forEach((device, index) => {
        let devices = {
          label: null,
          value: null
        }
        if (device.isActive === 1) {
          devices.label = device.name
          devices.value = device.id
          Vue.set(displayedDevice, index, devices)
        }
      })
    }
    return displayedDevice
  }
}

export { getters }
