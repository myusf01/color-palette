import Vue from 'vue'
import Vuex from 'vuex'
import  getColors  from "../api/ApiHandler";
import 'isomorphic-fetch'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    palette: []
  },
  getters: {
    allColors: state => state.palette
  },
  mutations: {
    SET_PALETTE: (state, data) => {
      state.palette = data
    }
  },
  actions: {
    async getPalette({ commit }) {
      const getColor = await getColors()
      commit('SET_PALETTE', getColor)
    }
  },
  modules: {}
})
