import axios from 'axios'

const state = {
  leftStats: {
    abilityPower: {
      name: 'Ability power',
      value: 0
    },
    armor: {
      name: 'Armor',
      value: 0
    },
    armorPenetration: {
      name: 'Armor penetration',
      value: 0
    },
    attackDamage: {
      name: 'Attack damage',
      value: 0
    },
    cooldownReduction: {
      name: 'Cooldown reduction',
      value: 0
    },
    criticalStrikeChance: {
      name: 'Critical strike chance',
      value: 0
    },
    criticalStrikeDamage: {
      name: 'Critical strike damage',
      value: 0
    },
    damageAmplification: {
      name: 'Damage amplification',
      value: 0
    },
    health: {
      name: 'Health',
      value: 0
    },
    healthRegeneration: {
      name: 'Health regeneration',
      value: 0
    },
    lifeSteal: {
      name: 'Life steal',
      value: 0
    },
    magicPenetration: {
      name: 'Magic penetration',
      value: 0
    },
    magicResistance: {
      name: 'Magic resistance',
      value: 0
    },
    magicResistanceReduction: {
      name: 'Magic resistance reduction',
      value: 0
    },
    mana: {
      name: 'Mana',
      value: 0
    },
    manaRegeneration: {
      name: 'Mana regeneration'
    },
    spellVamp: {
      name: 'Spell vamp',
      value: 0
    },
    movenmentSpeed: {
      name: 'Movenment speed',
      value: 0
    }
  },
  rightStats: {

  }
}

const getters = {
  searchString: state => state.searchString,
  champions () {
    return Object.values(state.champions).filter(item =>
      item.name.toLowerCase().match(state.searchString.trim().toLowerCase())
    )
  },
  leftChampion: state => state.leftChampion,
  rightChampion: state => state.rightChampion
}

const mutations = {
  setChampions (state, payload) { state.champions = payload.value },
  setSearchString (state, payload) { state.searchString = payload.value },
  setLeftChampion (state, payload) { state.leftChampion = payload.value },
  setRightChampion (state, payload) { state.rightChampion = payload.value }
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
