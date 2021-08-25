import axios from "@/axios";

const state = {};
const getters = {};
const mutations = {};
const actions = {
  RECENT_SEARCH: async (options, id) => {
    try {
      let { data } = await axios.reqApi("recent-search/" + id + "/").get();
      return data;
    } catch (e) {
      console.log("Error-store-dash-actions-RECENT_SEARCH", e.response.data);
      return Promise.reject(e.response.data);
    }
  },
  FETCH_RESPONSE_TIME: async (options, payload) => {
    try {
      let { data } = await axios.reqApi("api-tracks/" + payload.id + "/").post(payload.data);
      return data;
    } catch (e) {
      console.log(
        "Error-store-dash-actions-FETCH_RESPONSE_TIME",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
