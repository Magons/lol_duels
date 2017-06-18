import axios from 'axios'

const state = {
  champions: [],
  searchString: '',
  leftLevel: 18,
  leftChampion: {
    version: '6.24.1',
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    blurb: "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    image: {
      full: 'Aatrox.png',
      sprite: 'champion0.png',
      group: 'champion',
      x: 0,
      y: 0,
      w: 48,
      h: 48
    },
    tags: ['Fighter', 'Tank'],
    partype: 'BloodWell',
    stats: {
      hp: 537.8,
      hpperlevel: 85.0,
      mp: 105.6,
      mpperlevel: 45.0,
      movespeed: 345.0,
      armor: 24.384,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 150.0,
      hpregen: 6.59,
      hpregenperlevel: 0.5,
      mpregen: 0.0,
      mpregenperlevel: 0.0,
      crit: 0.0,
      critperlevel: 0.0,
      attackdamage: 60.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3.0
    }
  },
  rightLevel: 1,
  rightChampion: {
    version: '6.24.1',
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    blurb: "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    image: {
      full: 'Aatrox.png',
      sprite: 'champion0.png',
      group: 'champion',
      x: 0,
      y: 0,
      w: 48,
      h: 48
    },
    tags: ['Fighter', 'Tank'],
    partype: 'BloodWell',
    stats: {
      hp: 537.8,
      hpperlevel: 85.0,
      mp: 105.6,
      mpperlevel: 45.0,
      movespeed: 345.0,
      armor: 24.384,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 150.0,
      hpregen: 6.59,
      hpregenperlevel: 0.5,
      mpregen: 0.0,
      mpregenperlevel: 0.0,
      crit: 0.0,
      critperlevel: 0.0,
      attackdamage: 60.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3.0
    }
  },
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
  rightLevel: state => state.rightLevel
}

const mutations = {
  setChampions (state, payload) { state.champions = payload.value },
  setSearchString (state, payload) { state.searchString = payload.value },
  setLeftChampion (state, payload) {
    state.leftChampion = payload.value
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
