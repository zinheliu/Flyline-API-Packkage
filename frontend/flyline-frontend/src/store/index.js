import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import USER from './user'
import ORGANIZATION from './organization'
import TOKEN from './token'
import DASH from './dash'
import API from './api'
import UTIL from './util'
import SHOP from './shop'
import AIRPORT from './airport'
import SEATMAP from './seatmap'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    USER,
    ORGANIZATION,
    TOKEN,
    DASH,
    API,
    UTIL,
    SHOP,
    AIRPORT,
    SEATMAP
  }
})
