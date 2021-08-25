import axios from "@/axios"

const state = {}
const getters = {}
const mutations = {}
const actions = {
  FETCH_AIRPORTS : async () => {
    try{
      let { data } = await axios.reqApiFToken('airports/').get()
      return data
    }catch(e){
      console.log('Error-store-airport-actions-FETCH_AIRPORTS', e.response.data)
      return Promise.reject(e.response.data)
    }
  },
}

export default {
  namespaced: true,
  state, getters, mutations, actions
}