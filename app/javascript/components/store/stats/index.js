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
    attackSpeed: {
      name: 'Attack speed',
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
      const additionalHelth = payload.stats.hpperlevel * (payload.level - 1) * (0.685 + 0.0175 * payload.level)
      state.stats.health[payload.side] = payload.stats.hp + additionalHelth
    }
  },
  setAttackDamage (state, payload) {
    if (payload.level === 1) {
      state.stats.attackDamage[payload.side] = payload.stats.attackdamage
    } else {
      const additionalAttackDamage = payload.stats.attackdamageperlevel * payload.level -
        payload.stats.attackdamageperlevel
      state.stats.attackDamage[payload.side] = payload.stats.attackdamage + additionalAttackDamage
    }
  },
  setArmor (state, payload) {
    if (payload.level === 1) {
      state.stats.armor[payload.side] = payload.stats.armor
    } else {
      const additionalArmor = payload.stats.armorperlevel * payload.level -
        payload.stats.armorperlevel
      state.stats.armor[payload.side] = payload.stats.armor + additionalArmor
    }
  },
  setMana (state, payload) {
    if (payload.level === 1) {
      state.stats.mana[payload.side] = payload.stats.mp
    } else {
      const additionalMana = payload.stats.mpperlevel * payload.level -
        payload.stats.mpperlevel
      state.stats.mana[payload.side] = payload.stats.mp + additionalMana
    }
  },
  setHpRegen (state, payload) {
    if (payload.level === 1) {
      state.stats.healthRegeneration[payload.side] = payload.stats.hpregen
    } else {
      const additionalHpRegen = payload.stats.hpregenperlevel * payload.level -
        payload.stats.hpregenperlevel
      state.stats.healthRegeneration[payload.side] = payload.stats.hpregen + additionalHpRegen
    }
  },
  setMovenmentSpeed (state, payload) {
    state.stats.movenmentSpeed[payload.side] = payload.stats.movespeed
  },
  setAttackSpeed (state, payload) {
    const attackSpped = 0.625/(1 + payload.stats.attackspeedoffset)
    const attackSppedPerLevel = attackSpped * payload.stats.attackspeedperlevel/100
    if (payload.level === 1) {
      state.stats.attackSpeed[payload.side] = attackSpped
    } else {
      const additionalAttackSpeed = attackSppedPerLevel * (payload.level - 1) * (0.685 + 0.0175 * payload.level)
      state.stats.attackSpeed[payload.side] = attackSpped + additionalAttackSpeed
    }
  },
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
    context.commit('setAttackDamage', { side, stats, level })
    context.commit('setArmor', { side, stats, level })
    context.commit('setMana', { side, stats, level })
    context.commit('setHpRegen', { side, stats, level })
    context.commit('setMovenmentSpeed', { side, stats, level })
    context.commit('setAttackSpeed', { side, stats, level })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
