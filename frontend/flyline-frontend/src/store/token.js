import axios from '@/axios'

const state = {
  tokens: []
}
const getters = {
  tokens: s => s.tokens,
  testToken: s => Array.isArray(s.tokens) ? s.tokens.find(t => t.live_mode == false) : null
}
const mutations = {
  SET_TOKENS: (s, v) => s.tokens = v,
}
const actions = {
  FETCH_TOKENS : async ({commit}, id) => {
    try{
      let { data } = await axios.reqApi('flyline-token/organizations/'+ id + '/').get()
      commit('SET_TOKENS', data)
      return data
    }catch(e){
      console.log('Error-store-token-actions-FETCH_TOKENS', e.response.data)
      return Promise.reject(e.response.data)
    }
  },
}

export default {
  namespaced: true,
  state, getters, mutations, actions
}