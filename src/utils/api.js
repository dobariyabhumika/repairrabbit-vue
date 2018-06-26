import axios from 'axios'

const apiCall = ({url, method, ...args}) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('api_token')}`
  return axios({ method: method, 'url': url, 'data': args.data })
    .then(response => {
      console.log(response.data, 'response.data')
      return response.data
    })
    .catch(err => {
      console.log(err)
      return err
    })
}
export default apiCall
