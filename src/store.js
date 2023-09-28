// store.js or store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    showMobileNavigation: undefined,
    navMenuEnabled: undefined,
  },
  mutations: {
    setShowMobileNavigation(state, value) {
      state.showMobileNavigation = value;
    },
    setNavMenuEnableStatus(state, value) {
      state.navMenuEnabled = value;
    },
  },
  actions: {
    // your actions here
  },
  getters: {
    showMobileNavigation(state) {
      return state.showMobileNavigation;
    },
    navMenuEnabled(state) {
      return state.navMenuEnabled;
    },
  },
  modules: {
    // your modules here
  },
});
