import axios from "@/axios"

const state = {}
const getters = {}
const mutations = {}
const actions = {
  FETCH_SEAT_MAP : async (options, payload) => {
    try{
      let { data } = await axios.reqApiFToken('seat-maps/').post(payload)
      return data
    }catch(e){
      console.log('Error-store-seatmap-actions-FETCH_SEAT_MAP', e.response.data)
      return Promise.reject(e.response.data)
    }
  },
}

export default {
  namespaced: true,
  state, getters, mutations, actions
}