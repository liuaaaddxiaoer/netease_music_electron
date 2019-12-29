import axios from 'axios'
import { BASE_URL } from './url'

axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = 15000

export default {
  get(url, params = {}, config = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params,
        ...config
      }).then(res => {
        if (res.status == 200) {
          resolve(res.data)
        } else {
          reject(res.statusText)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },

  post(url, params = {}, config = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        ...config
      }).then(res => {
        if (res.status == 200) {
          resolve(res.data)
        } else {
          reject(res.statusText)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}