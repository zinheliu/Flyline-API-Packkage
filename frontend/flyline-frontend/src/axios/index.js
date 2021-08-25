import axios from 'axios'
import store from '@/store'

const baseUrl = process.env.VUE_APP_API_ENDPOINT

const axiosInstance = axios.create({
  headers:{
    'Content-Type': 'application/json'
  }
})
const axiosInstanceFToken = axios.create({
  headers:{
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  config => {
    let token = store.getters['USER/token']
    if(token) config.headers["Authorization"] = 'Token ' + token.token
    return config
  },
  error => Promise.reject(error)
)
axiosInstanceFToken.interceptors.request.use(
  config => {
    let token = store.getters['TOKEN/testToken']
    if(token) config.headers["Authorization"] = 'FToken ' + token.key
    return config
  },
  error => Promise.reject(error)
)

export default {
  reqApi: url => ({
    post: data => axiosInstance.post(baseUrl + url, data),
    postWithCustomHeader: (data, options) => axiosInstance.post(baseUrl + url, data, options),
    get: () => axiosInstance.get(baseUrl + url),
    put: data => axiosInstance.put(baseUrl + url, data),
    patch: data => axiosInstance.patch(baseUrl + url, data),
    delete: data => axiosInstance.delete(baseUrl + url, data),
  }),
  reqApiFToken: url => ({
    post: data => axiosInstanceFToken.post(baseUrl + url, data),
    postWithCustomHeader: (data, options) => axiosInstanceFToken.post(baseUrl + url, data, options),
    get: () => axiosInstanceFToken.get(baseUrl + url),
    put: data => axiosInstanceFToken.put(baseUrl + url, data),
    patch: data => axiosInstanceFToken.patch(baseUrl + url, data),
    delete: data => axiosInstanceFToken.delete(baseUrl + url, data),
  }),
}