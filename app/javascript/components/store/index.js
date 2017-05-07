import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import Сhampions from './champions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Сhampions
  }
})
