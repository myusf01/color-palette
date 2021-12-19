import Vue from 'vue'
import Vuex from 'vuex'
import getColors from '../api/ApiHandler'
import getModel from '../api/ApiHandler'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    palette: [],
    models: []
  },
  getters: {
    allColors: state => state.palette,
    allModels: state => state.models
  },
  mutations: {
    SET_PALETTE: (state, data) => {
      state.palette = data
    },
    SET_MODEL: (state, data) => {
      state.palette = data
    }
  },
  actions: {
    async getPalette({ commit }) {
      const getColor = await getColors()
      commit('SET_PALETTE', getColor)
    },
    async getModels({ commit }) {
      const allModels = await getModel()
      console.log(allModels)
      commit('SET_MODEL',allModels)
    }
  },
  modules: {}
})
