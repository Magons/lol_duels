import axios from 'axios'

const state = {
  champions: []
}

const getters = {
  champions: state => state.champions
}

const mutations = {
  setChampions (state, payload) { state.champions = payload.value }
}

const actions = {
  getChampions (context) {
    axios.get('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
      .then((response) => {
        context.commit('setChampions', { value: response.data.data })
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
