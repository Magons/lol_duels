import axios from 'axios'
import championData from '../config/championData'

const state = {
  champions: [],
  searchString: '',
  leftLevel: 18,
  leftChampionId: '',
  leftChampion: championData,
  rightLevel: 18,
  rightChampionId: '',
  rightChampion: championData
}

const getters = {
  searchString: state => state.searchString,
  champions () {
    return Object.values(state.champions).filter(item =>
      item.name.toLowerCase().match(state.searchString.trim().toLowerCase())
    )
  },
  leftChampion: state => state.leftChampion,
  rightChampion: state => state.rightChampion,
  leftLevel: state => state.leftLevel,
  rightLevel: state => state.rightLevel,
  leftChampionId: state => state.leftChampionId,
  rightChampionId: state => state.rightChampionId
}

const mutations = {
  setChampions (state, payload) { state.champions = payload.value },
  setSearchString (state, payload) { state.searchString = payload.value },
  setLeftChampion (state, payload) {
    state.leftChampion = payload.value
  },
  setLeftChampionId (state, payload) {
    state.leftChampionId = payload.value
  },
  setRightChampionId (state, payload) {
    state.rightChampionId = payload.value
  },
  setRightChampion (state, payload) {
    state.rightChampion = payload.value
  },
  setLeftLevel (state, payload) {
    state.leftLevel = payload.value
  },
  setRightLevel (state, payload) {
    state.rightLevel = payload.value
  }
}

const actions = {
  getChampions (context) {
    axios.get('/champions/all')
      .then((response) => {
        context.commit('setChampions', { value: response.data })
        const Aatrox = response.data.find(item => item.name === 'Aatrox')
        context.commit('setLeftChampionId', { value: Aatrox.id })
        context.commit('setRightChampionId', { value: Aatrox.id })
      })
  },
  getChampion (context, payload) {
    axios.get(`/champions/${payload.id}`)
      .then((response) => {
        context.commit(`set${payload.side}ChampionId`, { value: response.data.id })
        context.commit(`set${payload.side}Champion`, { value: response.data.data })
        context.dispatch('calculateStats', { side: payload.side })
        context.dispatch('calculate')
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
