import Vue from 'vue'
import Vuex from 'vuex'
import { getColors, getAllModels } from '../api/ApiHandler'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // states to store data comes from api
    palette: [],
    models: [],
    activeModel: null
  },
  getters: {
    allColors: state => state.palette,
    allModels: state => state.models,
    activeModel: state => state.activeModel
  },
  mutations: {
    SET_PALETTE: (state, data) => {
      state.palette = data
    },
    SET_MODEL: (state, data) => {
      state.models = data
    },
    SET_ACTIVE_MODEL: (state, data) => {
      state.activeModel = data
    }
  },
  actions: {
    // fetch data from api according model and mutate to state
    async getPalette({ commit }) {
      const activeModel = this.getters.activeModel
      const getColor = await getColors(activeModel)
      commit('SET_PALETTE', getColor)
    },
    //  fetch all model list that can be used 
    async getModels({ commit }) {
      const allModels = await getAllModels()
      commit('SET_MODEL', allModels)
    },
    // set active model to generate colors from same model
    setModel({ commit }, data) {
      commit('SET_ACTIVE_MODEL', data)
    }
  },
  modules: {}
})
