import axios from 'axios'

const state = {
  stats: {
    MagicDamage: {
      show: true,
      name: 'Ability power',
      left: 0,
      right: 0
    },
    Armor: {
      show: true,
      name: 'Armor',
      left: 0,
      right: 0
    },
    ArmorPenetration: {
      show: true,
      name: 'Armor penetration',
      left: 0,
      right: 0
    },
    PhysicalDamage: {
      show: true,
      name: 'Physical Damage',
      left: 0,
      right: 0
    },
    AttackSpeed: {
      show: true,
      name: 'Attack speed',
      left: 0,
      right: 0
    },
    Cooldown: {
      show: true,
      name: 'Cooldown reduction',
      left: 0,
      right: 0
    },
    CritChance: {
      show: true,
      name: 'Critical strike chance',
      left: 0,
      right: 0
    },
    CritDamage: {
      show: true,
      name: 'Critical strike damage',
      left: 0,
      right: 0
    },
    damageAmplification: {
      show: true,
      name: 'Damage amplification',
      left: 0,
      right: 0
    },
    HP: {
      show: true,
      name: 'Health',
      left: 0,
      right: 0
    },
    HPRegen: {
      show: true,
      name: 'Health regeneration',
      left: 0,
      right: 0
    },
    LifeSteal: {
      show: true,
      name: 'Life steal',
      left: 0,
      right: 0
    },
    MagicPenetration: {
      show: true,
      name: 'Magic penetration',
      left: 0,
      right: 0
    },
    magicResistance: {
      show: true,
      name: 'Magic resistance',
      left: 0,
      right: 0
    },
    SpellBlock: {
      show: true,
      name: 'Magic resistance reduction',
      left: 0,
      right: 0
    },
    MP: {
      show: true,
      name: 'Mana',
      left: 0,
      right: 0
    },
    MPRegen: {
      show: true,
      name: 'Mana regeneration',
      left: 0,
      right: 0
    },
    SpellVamp: {
      show: true,
      name: 'Spell vamp',
      left: 0,
      right: 0
    },
    MovementSpeed: {
      show: true,
      name: 'Movenment speed',
      left: 0,
      right: 0
    },
    EnergyRegen: {
      show: true,
      name: 'EnergyRegen',
      left: 0,
      right: 0
    },
    EnergyPool: {
      show: true,
      name: 'EnergyPool',
      left: 0,
      right: 0
    },
    MPPool: {
      show: true,
      name: 'MPPool',
      left: 0,
      right: 0
    },
    Dodge: {
      show: true,
      name: 'Dodge',
      left: 0,
      right: 0
    },
    Block: {
      show: true,
      name: 'Block',
      left: 0,
      right: 0
    },
    HPPool: {
      show: true,
      name: 'HPPool',
      left: 0,
      right: 0
    },
    Energy: {
      show: true,
      name: 'Energy',
      left: 0,
      right: 0
    },
    GoldPer10: {
      show: true,
      name: 'GoldPer10',
      left: 0,
      right: 0
    },
    TimeDead: {
      show: true,
      name: 'GoldPer10',
      left: 0,
      right: 0
    }
  },
  magicResistMeleeConst: 30.85,
  magicResistRangedConst: 29.5,
  itemsDto: [
    'PercentTimeDeadModPerLevel',
    'PercentArmorPenetrationModPerLevel',
    'PercentCritDamageMod',
    'PercentSpellBlockMod',
    'PercentHPRegenMod',
    'PercentMovementSpeedMod',
    'FlatSpellBlockMod',
    'FlatEnergyRegenModPerLevel',
    'FlatEnergyPoolMod',
    'FlatMagicPenetrationModPerLevel',
    'PercentLifeStealMod',
    'FlatMPPoolMod',
    'PercentCooldownMod',
    'PercentMagicPenetrationMod',
    'FlatArmorPenetrationModPerLevel',
    'FlatMovementSpeedMod',
    'FlatTimeDeadModPerLevel',
    'FlatArmorModPerLevel',
    'PercentAttackSpeedMod',
    'FlatDodgeModPerLevel',
    'PercentMagicDamageMod',
    'PercentBlockMod',
    'FlatDodgeMod',
    'FlatEnergyRegenMod',
    'FlatHPModPerLevel',
    'PercentAttackSpeedModPerLevel',
    'PercentSpellVampMod',
    'FlatMPRegenMod',
    'PercentHPPoolMod',
    'PercentDodgeMod',
    'FlatAttackSpeedMod',
    'FlatArmorMod',
    'FlatMagicDamageModPerLevel',
    'FlatHPRegenMod',
    'PercentPhysicalDamageMod',
    'FlatCritChanceModPerLevel',
    'FlatSpellBlockModPerLevel',
    'PercentTimeDeadMod',
    'FlatBlockMod',
    'PercentMPPoolMod',
    'FlatMagicDamageMod',
    'PercentMPRegenMod',
    'PercentMovementSpeedModPerLevel',
    'PercentCooldownModPerLevel',
    'FlatMPModPerLevel',
    'FlatEnergyModPerLevel',
    'FlatPhysicalDamageMod',
    'FlatHPRegenModPerLevel',
    'FlatCritDamageMod',
    'PercentArmorMod',
    'FlatMagicPenetrationMod',
    'PercentCritChanceMod',
    'FlatPhysicalDamageModPerLevel',
    'PercentArmorPenetrationMod',
    'PercentEXPBonus',
    'FlatMPRegenModPerLevel',
    'PercentMagicPenetrationModPerLevel',
    'FlatTimeDeadMod',
    'FlatMovementSpeedModPerLevel',
    'FlatGoldPer10Mod',
    'FlatArmorPenetrationMod',
    'FlatCritDamageModPerLevel',
    'FlatHPPoolMod',
    'FlatCritChanceMod',
    'FlatEXPBonus'
  ]
}

const getters = {
  stats: state => state.stats
}

const mutations = {
  setHelth (state, payload) {
    if (payload.level === 1) {
      state.stats.HP[payload.side] = payload.stats.hp
    } else {
      const additionalHelth = payload.stats.hpperlevel * (payload.level - 1) * (0.685 + 0.0175 * payload.level)
      state.stats.HP[payload.side] = payload.stats.hp + additionalHelth
    }
  },
  setPhysicalDamage (state, payload) {
    if (payload.level === 1) {
      state.stats.PhysicalDamage[payload.side] = payload.stats.attackdamage
    } else {
      const additionalAttackDamage = payload.stats.attackdamageperlevel * payload.level -
        payload.stats.attackdamageperlevel
      state.stats.PhysicalDamage[payload.side] = payload.stats.attackdamage + additionalAttackDamage
    }
  },
  setArmor (state, payload) {
    if (payload.level === 1) {
      state.stats.Armor[payload.side] = payload.stats.armor
    } else {
      const additionalArmor = payload.stats.armorperlevel * payload.level -
        payload.stats.armorperlevel
      state.stats.Armor[payload.side] = payload.stats.armor + additionalArmor
    }
  },
  setMana (state, payload) {
    if (payload.level === 1) {
      state.stats.MPPool[payload.side] = payload.stats.mp
    } else {
      const additionalMana = payload.stats.mpperlevel * payload.level -
        payload.stats.mpperlevel
      state.stats.MPPool[payload.side] = payload.stats.mp + additionalMana
    }
  },
  setHpRegen (state, payload) {
    if (payload.level === 1) {
      state.stats.HPRegen[payload.side] = payload.stats.hpregen
    } else {
      const additionalHpRegen = payload.stats.hpregenperlevel * payload.level -
        payload.stats.hpregenperlevel
      state.stats.HPRegen[payload.side] = payload.stats.hpregen + additionalHpRegen
    }
  },
  setMovenmentSpeed (state, payload) {
    state.stats.MovementSpeed[payload.side] = payload.stats.movespeed
  },
  setAttackSpeed (state, payload) {
    const attackSpped = 0.625/(1 + payload.stats.attackspeedoffset)
    const attackSppedPerLevel = attackSpped * payload.stats.attackspeedperlevel / 100
    if (payload.level === 1) {
      state.stats.AttackSpeed[payload.side] = attackSpped
    } else {
      const additionalAttackSpeed = attackSppedPerLevel * (payload.level - 1) * (0.685 + 0.0175 * payload.level)
      state.stats.AttackSpeed[payload.side] = attackSpped + additionalAttackSpeed
    }
  },
  setMagicResist (state, payload) {
    // Here we should define champion type (ranged/melee)
    state.stats.SpellBlock[payload.side] = state.magicResistMeleeConst + (1.25 * payload.level)
  },
  addItem (state, payload) {
    const stats = payload.item.data.stats
    for (let key in stats) {
      if (key.match(/^Percent([A-z]+)ModPerLevel$/)){

      } else if (key.match(/^Flat([A-z]+)ModPerLevel$/)) {

      } else if (key.match(/^Percent([A-z]+)Mod$/)) {

      } else if (key.match(/^Flat([A-z]+)Mod$/)) {
        const item = key.match(/^Flat([A-z]+)Mod$/)[1]
        state.stats[item][payload.side.toLowerCase()] = state.stats[item][payload.side.toLowerCase()] + stats[key]
      }
      console.log(stats[key])
    }
    state.asdfasf = payload
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
    context.commit('setPhysicalDamage', { side, stats, level })
    context.commit('setArmor', { side, stats, level })
    context.commit('setMana', { side, stats, level })
    context.commit('setHpRegen', { side, stats, level })
    context.commit('setMovenmentSpeed', { side, stats, level })
    context.commit('setAttackSpeed', { side, stats, level })
    context.commit('setMagicResist', { side, stats, level })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
