export default {
   namespaced: true,
   state: { sidebar_state: true },
   mutations: {
      stateAct(state) {
       state.sidebar_state = !state.sidebar_state;
     },
   },
   actions: {
     async stateAction({ commit }) {
       commit("stateAct");
     },
   },
 };