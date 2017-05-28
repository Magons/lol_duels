import axios from 'axios'

const state = {
  stats: {
    abilityPower: {
      name: 'Ability power',
      left: 0,
      right: 0
    },
    armor: {
      name: 'Armor',
      left: 0,
      right: 0
    },
    armorPenetration: {
      name: 'Armor penetration',
      left: 0,
      right: 0
    },
    attackDamage: {
      name: 'Attack damage',
      left: 0,
      right: 0
    },
    cooldownReduction: {
      name: 'Cooldown reduction',
      left: 0,
      right: 0
    },
    criticalStrikeChance: {
      name: 'Critical strike chance',
      left: 0,
      right: 0
    },
    criticalStrikeDamage: {
      name: 'Critical strike damage',
      left: 0,
      right: 0
    },
    damageAmplification: {
      name: 'Damage amplification',
      left: 0,
      right: 0
    },
    health: {
      name: 'Health',
      left: 0,
      right: 0
    },
    healthRegeneration: {
      name: 'Health regeneration',
      left: 0,
      right: 0
    },
    lifeSteal: {
      name: 'Life steal',
      left: 0,
      right: 0
    },
    magicPenetration: {
      name: 'Magic penetration',
      left: 0,
      right: 0
    },
    magicResistance: {
      name: 'Magic resistance',
      left: 0,
      right: 0
    },
    magicResistanceReduction: {
      name: 'Magic resistance reduction',
      left: 0,
      right: 0
    },
    mana: {
      name: 'Mana',
      left: 0,
      right: 0
    },
    manaRegeneration: {
      name: 'Mana regeneration',
      left: 0,
      right: 0
    },
    spellVamp: {
      name: 'Spell vamp',
      left: 0,
      right: 0
    },
    movenmentSpeed: {
      name: 'Movenment speed',
      left: 0,
      right: 0
    }
  }
}

const getters = {
  stats: state => state.stats
}

const mutations = {
  setHelth (state, payload) {
    if (payload.level === 1) {
      state.stats.health[payload.side] = payload.stats.hp
    } else {
      const additionalHelth = payload.stats.hpperlevel * payload.level - payload.stats.hpperlevel
      state.stats.health[payload.side] = payload.stats.hp + additionalHelth
    }

  }
}

const actions = {
  getChampions (context) {
    axios.get('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
      .then((response) => {
        context.commit('setChampions', { value: response.data.data })
      })
  },
  calculateStats (context, payload) {
    const side = payload.side.toLowerCase()
    const stats = context.rootGetters[`${side}Champion`].stats
    const level = context.rootGetters[`${side}Level`]
    context.commit('setHelth', { side, stats, level })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
