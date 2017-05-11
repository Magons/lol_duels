import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import Сhampions from './champions'
import CalculateFight from './CalculateFight'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Сhampions,
    CalculateFight
  }
})
