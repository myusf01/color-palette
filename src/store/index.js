import Vue from 'vue'
import Vuex from 'vuex'
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
    async getModel() {
      const modelList = (
        await fetch('http://colormind.io/list/').then(res => res.json())
      ).result

      const randomModel =
        modelList[Math.floor(Math.random() * (modelList.length - 1))]
      return randomModel
    },
    async getPalette({ commit }) {
      function convertRGBtoHEX(colorArray) {
        // const [r,g,b] = colorArray
        // console.log(colorArray);
        const r = colorArray[0]
        const g = colorArray[1]
        const b = colorArray[2]
        return (
          '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
        )
      }
      const model = await this.dispatch('getModel')
      const getColors = (
        await fetch('http://colormind.io/api/', {
          method: 'POST',
          body: JSON.stringify({
            model
          })
        }).then(res => res.json())
      ).result

      const result = getColors.map(array => {
        return convertRGBtoHEX(array)
      })
      console.log(result)
      commit('SET_PALETTE', result)
    }
  },
  modules: {}
})
