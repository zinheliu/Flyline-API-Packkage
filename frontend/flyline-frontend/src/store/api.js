import axios from "@/axios"

const state = {}
const getters = {}
const mutations = {}
const actions = {
  FETCH_DURATIONS : async () => {
    try{
      let { data } = await axios.reqApi('durations/').get()
      return data
    }catch(e){
      console.log('Error-store-api-actions-FETCH_DURATIONS', e.response.data)
      return Promise.reject(e.response.data)
    }
  },
}

export default {
  namespaced: true,
  state, getters, mutations, actions
}