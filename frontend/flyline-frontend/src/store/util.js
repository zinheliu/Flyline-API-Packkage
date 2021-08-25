const state = {
  dark: false,
  testData: false
}

const getters = {
  dark : s => s.dark,
  testData: s => s.testData,
}

const mutations = {
  SET_DARK : (s, v) => s.dark = v,
  SET_TEST_DATA : (s, v) => s.testData = v,
}

const actions = {}

export default {
  namespaced: true,
  state, getters, mutations, actions
}