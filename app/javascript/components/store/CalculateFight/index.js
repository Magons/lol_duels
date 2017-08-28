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
  },
  setChanceLeft (state, payload) {
    state.chanceLeft = payload.value
  },
}

const actions = {
  calculate (context) {
    axios.post('/fight/calculate', {
      stats: context.rootGetters.stats,
      left_id: context.rootGetters.leftChampionId,
      right_id: context.rootGetters.rightChampionId
    })
      .then((response) => {
        context.commit('setChanceLeft', { value: response.data.left.percent })
        context.commit('setChanceRight', { value: response.data.right.percent })
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
