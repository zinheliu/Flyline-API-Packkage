import axios from "@/axios"

const state = {}
const getters = {}
const mutations = {}
const actions = {
  SHOP: async (options, payload) => {
    try {
      let { data } = await axios.reqApiFToken("flights/shop/").post(payload)
      return data
    } catch (e) {
      console.log("Error-store-shop-actions-SHOP", e.response.data)
      return Promise.reject(e.response.data)
    }
  },
}

export default {
  namespaced: true,
  state, getters, mutations, actions
}