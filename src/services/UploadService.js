import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api-pod7.colab.proneer.co/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  srcUpload(event) {
    return apiClient.post('/swap/upload_src', event)
  },
  tgtUpload(event) {
    return apiClient.post('/swap/upload_tgt', event)
  }
}
