// import axios from 'axios'
import Vue from 'vue'

const apiCall = ({url, method, ...args}) => {
  // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('api_token')}`
  // return axios({ method: method, 'url': url, 'data': args.data })
  //   .then(response => {
  //     console.log(response.data, 'response.data')
  //     return response.data
  //   })
  //   .catch(error => {
  //     console.log(error.response, '---=-=-=-=-')
  //     return error.response
  //   })
  return Vue.http
    .post(url, args.data)
    .then((response) => {
      console.log(response.data, 'response.data')
      return response.data
    }, errors => {
      console.log(errors, '---=-=-=-=-')
      return errors
    })
}
export default apiCall
