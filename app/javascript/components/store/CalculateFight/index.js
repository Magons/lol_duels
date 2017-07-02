import axios from 'axios'

const state = {
  chanceLeft: 50,
  chanceRight: 50
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
  setChanceLeft (state, payload) {
    state.chanceLeft = payload.value
    state.chanceRight = 100 - payload.value
  },
}

const actions = {
  claculate (context) {
    axios.post('/fight/calculate', {
      stats: context.rootGetters.stats
    })
      .then((response) => {
        context.commit('setChanceLeft', { value: response.data })
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
