import axios from "@/axios";

const state = {
  organizations: []
};
const getters = {
  organizations : s => s.organizations
};
const mutations = {
  SET_ORGANIZATION : (s, v) => s.organizations = v,
};
const actions = {
  SEND_INVITE: async (options, payload) => {
    try {
      let { data } = await axios.reqApi("auth/developer-invite/").post(payload);
      return data;
    } catch (e) {
      console.log(
        "Error-store-organization-actions-SEND_INVITE",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  ACCEPT_INVITE: async (options, token) => {
    try {
      let { data } = await axios
        .reqApi("auth/developer-accept-invite/" + token + "/")
        .get();
      return data;
    } catch (e) {
      console.log(
        "Error-store-organization-actions-ACCEPT_INVITE",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  FETCH_MEMBERS: async () => {
    try {
      let { data } = await axios.reqApi("auth/organizations/me/").get();
      return data;
    } catch (e) {
      console.log(
        "Error-store-organization-actions-FETCH_MEMBERS",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  FETCH_ORGANIZATIONS: async ({commit}) => {
    try {
      let { data } = await axios.reqApi("auth/organizations/").get();
      commit('SET_ORGANIZATION', data)
      return data;
    } catch (e) {
      console.log(
        "Error-store-organization-actions-FETCH_MEMBERS",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  FETCH_TRACKS: async (options, id) => {
    try {
      let { data } = await axios.reqApi("api-tracks-monthly/" + id + "/").get();
      return data;
    } catch (e) {
      console.log(
        "Error-store-organization-actions-FETCH_TRACKS",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  FETCH_ORGANIZATION_DETAILS: async (options, id) => {
    try {
      let { data } = await axios.reqApi("auth/organizations/" + id + "/").get();
      return data;
    } catch (e) {
      console.log(
        "Error-store-organization-actions-FETCH_ORGANIZATION_DETAILS",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  DELETE_MEMBER: async (options, payload) => {
    try {
      let { data } = await axios.reqApi("auth/organizations/" + payload.orgId + "/" + "members/" + payload.memberId + "/").delete();
      return data;
    } catch (e) {
      console.log(
        "Error-store-organization-actions-DELETE_MEMBER",
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
