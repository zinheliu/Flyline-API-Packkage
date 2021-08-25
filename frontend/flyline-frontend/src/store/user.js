import axios from "@/axios";

const state = {
  user: null,
  token: null,
  organizationIndex: -1
};

const getters = {
  user: s => s.user,
  token: s => s.token,
  currentOrganization: s =>
    s.organizationIndex >= 0 &&
    s.user &&
    s.user.organizations &&
    s.user.organizations.length > s.organizationIndex
      ? s.user.organizations[s.organizationIndex]
      : null,
  isLogged: s => s.token != null && s.user != null
};

const mutations = {
  SET_USER: (s, v) => (s.user = v),
  SET_TOKEN: (s, v) => (s.token = v),
  SET_ORGANIZATION_INDEX: (s, v) => (s.organizationIndex = v),
  CLEAR_USER: (s, v) => {
    s.user = null;
    s.token = null;
    s.organizationIndex = -1;
  }
};

const actions = {
  SIGNUP: async (options, payload) => {
    try {
      let { data } = await axios.reqApi("auth/developer-signup/").post(payload);
      return data;
    } catch (e) {
      console.log("Error-store-user-actions-SIGNUP", e.response.data);
      return Promise.reject(e.response.data);
    }
  },
  REQUEST_ACCESS: async (options, payload) => {
    try {
      let { data } = await axios.reqApi("auth/access-requests/").post(payload);
      return data;
    } catch (e) {
      console.log("Error-store-user-actions-REQUEST_ACCESS", e.response.data);
      return Promise.reject(e.response.data);
    }
  },
  LOGIN: async ({ commit, dispatch }, payload) => {
    try {
      let { data } = await axios
        .reqApi("auth/login/")
        .postWithCustomHeader(payload, {
          headers: {
            Authorization:
              "Basic " + btoa(payload.email + ":" + payload.password)
          }
        });
      commit("SET_TOKEN", data);
      await dispatch("DEVELOPER_PROFILE");
      return data;
    } catch (e) {
      console.log("Error-store-user-actions-LOGIN", e.response.data);
      return Promise.reject(e.response.data);
    }
  },
  REQUEST_PASSWORD_RESET: async (options, payload) => {
    try {
      let { data } = await axios.reqApi("password_reset/").post(payload);
      return data;
    } catch (e) {
      console.log(
        "Error-store-user-actions-REQUEST_PASSWORD_RESET",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  PASSWORD_RESET: async (options, payload) => {
    try {
      let { data } = await axios
        .reqApi("password_reset/confirm/")
        .post(payload);
      return data;
    } catch (e) {
      console.log("Error-store-user-actions-PASSWORD_RESET", e.response.data);
      return Promise.reject(e.response.data);
    }
  },
  DEVELOPER_ACTIVATE: async (options, payload) => {
    try {
      let { data } = await axios
        .reqApi("auth/verify-email/" + payload.uid + "/" + payload.token + "/")
        .get();
      return data;
    } catch (e) {
      console.log(
        "Error-store-user-actions-DEVELOPER_ACTIVATE",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  DEVELOPER_PROFILE: async ({ commit }, token) => {
    try {
      let { data } = await axios.reqApi("auth/developer-profile/").get();
      commit("SET_USER", data);
      return data;
    } catch (e) {
      console.log(
        "Error-store-user-actions-DEVELOPER_PROFILE",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  UPDATE_PROFILE: async ({ dispatch }, payload) => {
    try {
      let { data } = await axios
        .reqApi("auth/developer-profile/")
        .post(payload);
      await dispatch("DEVELOPER_PROFILE");
      return data;
    } catch (e) {
      console.log(
        "Error-store-user-actions-DEVELOPER_PROFILE",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  },
  UPDATE_COMPANY_INFO: async ({ dispatch }, payload) => {
    try {
      const organizationId = payload.id;
      delete payload.id;
      let { data } = await axios
        .reqApi("auth/organizations/" + organizationId + "/")
        .put(payload);
      await dispatch("DEVELOPER_PROFILE");
      return data;
    } catch (e) {
      console.log(
        "Error-store-user-actions-DEVELOPER_PROFILE",
        e.response.data
      );
      return Promise.reject(e.response.data);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
