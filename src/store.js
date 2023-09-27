// store.js or store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    showMobileNavigation: undefined,
  },
  mutations: {
    setShowMobileNavigation(state, value) {
      state.showMobileNavigation = value;
    },
  },
  actions: {
    // your actions here
  },
  getters: {
    showMobileNavigation(state) {
      return state.showMobileNavigation;
    },
  },
  modules: {
    // your modules here
  },
});
