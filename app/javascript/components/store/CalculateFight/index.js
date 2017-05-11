import axios from 'axios'

const state = {
  chanceLeft: 80,
  chanceRight: 20
}

const getters = {
  chanceLeft: state => state.chanceLeft,
  chanceRight: state => state.chanceRight
}

const mutations = {
  setChanceRight (state, payload) {
    state.chanceRight = payload.value
    state.chanceLeft = 100 - payload.value
  },
}

const actions = {
  claculate (context) {
    debugger
    const hpLeft = context.rootGetters.leftChampion.stats.hp
    const hpRight = context.rootGetters.rightChampion.stats.hp
    context.commit('setChanceRight', { value: (hpLeft * 100) / hpRight })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
