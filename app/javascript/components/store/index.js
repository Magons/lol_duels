import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import Сhampions from './champions'
import CalculateFight from './CalculateFight'
import Stats from './stats'
import Items from './items'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Сhampions,
    CalculateFight,
    Stats,
    Items
  }
})
