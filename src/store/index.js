import Vue from 'vue'
import Vuex from 'vuex'
import  getColors  from "../api/ApiHandler";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // states to store data comes from api
    palette: [],
    models: [],
    activeModel: null
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
    // fetch data from api according model and mutate to state
    async getPalette({ commit }) {
      const getColor = await getColors()
      commit('SET_PALETTE', getColor)
    },
    //  fetch all model list that can be used 
    async getModels({ commit }) {
      const allModels = await getColors()
      commit('SET_MODEL', allModels)
    },
    // set active model to generate colors from same model
    setModel({ commit }, data) {
      commit('SET_ACTIVE_MODEL', data)
    }
  },
  modules: {}
})
