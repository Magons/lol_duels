import axios from 'axios'

const state = {
  stats: {
    HPRegen: {
      show: true,
      name: 'Health Regeneration',
      left: 0,
      right: 0
    },
    ArmorPenetration: {
      show: true,
      name: 'Lethality | Armor Penetration',
      left: 0,
      right: 0
    },
    LifeSteal: {
      show: true,
      name: 'Life Steal',
      left: 0,
      right: 0
    },
    AttackRange: {
      show: true,
      name: 'Attack Range',
      left: 0,
      right: 0
    },
    MPRegeneration: {
      show: true,
      name: 'Resource Regeneration',
      left: 0,
      right: 0
    },
    MagicPenetration: {
      show: true,
      name: 'Magic Penetration',
      left: 0,
      right: 0
    },
    SpellVamp: {
      show: true,
      name: 'Spell Vamp',
      left: 0,
      right: 0
    },
    Tenacity: {
      show: true,
      name: 'Tenacity',
      left: 0,
      right: 0
    },
    PhysicalDamage: {
      show: true,
      name: 'Attack Damage',
      left: 0,
      right: 0
    },
    Armor: {
      show: true,
      name: 'Armor',
      left: 0,
      right: 0
    },
    AttackSpeed: {
      show: true,
      name: 'Attack Speed',
      left: 0,
      right: 0
    },
    CritChance: {
      show: true,
      name: 'Critical Strike',
      left: 0,
      right: 0
    },
    MagicDamage: {
      show: true,
      name: 'Ability Power',
      left: 0,
      right: 0
    },
    SpellBlock: {
      show: true,
      name: 'Magic Resistance',
      left: 0,
      right: 0
    },
    Cooldown: {
      show: true,
      name: 'Cooldown Reduction',
      left: 0,
      right: 0
    },
    MovementSpeed: {
      show: true,
      name: 'Movenment Speed',
      left: 0,
      right: 0
    },
    HPPool: {
      show: true,
      name: 'Health',
      left: 0,
      right: 0
    },
    MPPool: {
      show: true,
      name: 'Mana',
      left: 0,
      right: 0
    },
    CritDamage: {
      show: false,
      name: 'Critical strike damage',
      left: 0,
      right: 0
    },
    damageAmplification: {
      show: false,
      name: 'Damage amplification',
      left: 0,
      right: 0
    },
    HP: {
      show: false,
      name: 'Health',
      left: 0,
      right: 0
    },
    magicResistance: {
      show: false,
      name: 'Magic resistance',
      left: 0,
      right: 0
    },
    MP: {
      show: false,
      name: 'Mana',
      left: 0,
      right: 0
    },
    EnergyRegen: {
      show: false,
      name: 'EnergyRegen',
      left: 0,
      right: 0
    },
    EnergyPool: {
      show: false,
      name: 'EnergyPool',
      left: 0,
      right: 0
    },
    Dodge: {
      show: false,
      name: 'Dodge',
      left: 0,
      right: 0
    },
    Block: {
      show: false,
      name: 'Block',
      left: 0,
      right: 0
    },
    Energy: {
      show: false,
      name: 'Energy',
      left: 0,
      right: 0
    },
    GoldPer10: {
      show: false,
      name: 'GoldPer10',
      left: 0,
      right: 0
    },
    TimeDead: {
      show: false,
      name: 'TimeDead',
      left: 0,
      right: 0
    }
  },
  magicResistMeleeConst: 30.85,
  magicResistRangedConst: 29.5,
  notIncludedStats: [
    "(\\d)+% Base (Mana Regen)",
    "(\\d)+% Base (Health Regen)",
    "(\\d)+% (Cooldown Reduction)",
    "(\\d)+% Bonus (Health)"
  ],
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
      state.stats.HPPool[payload.side] = payload.stats.hp
    } else {
      const additionalHelth = payload.stats.hpperlevel * (payload.level - 1) * (0.685 + 0.0175 * payload.level)
      state.stats.HPPool[payload.side] = payload.stats.hp + additionalHelth
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
    const side = payload.side.toLowerCase()
    for (let key in stats) {
      if (key.match(/^Percent([A-z]+)ModPerLevel$/)){

      } else if (key.match(/^Flat([A-z]+)ModPerLevel$/)) {

      } else if (key.match(/^Percent([A-z]+)Mod$/)) {
        const item = key.match(/^Percent([A-z]+)Mod$/)[1]
        if (item === 'AttackSpeed') {

        } else {
          state.stats[item][side] = state.stats[item][side] + stats[key]
        }
      } else if (key.match(/^Flat([A-z]+)Mod$/)) {
        const item = key.match(/^Flat([A-z]+)Mod$/)[1]
        state.stats[item][side] = state.stats[item][side] + stats[key]
      }
      console.log(`${key}: ${stats[key]}`)
    }
    state.notIncludedStats.forEach((item) => {
      const regex = new RegExp(item)
      const coincidence = payload.item.data.description.match(regex)
      if (coincidence && coincidence[2] === 'Mana Regen') {
        let MPRegen = state.stats.MPRegeneration[side]
        if (MPRegen === 0) {
          state.stats.MPRegeneration[side] = coincidence[1] * 1
        } else {
          state.stats.MPRegeneration[side] = coincidence[1] * MPRegen
        }
      } else if (coincidence && coincidence[2] === 'Health Regen') {
        let HPRegen = state.stats.HPRegen[side]
        if (HPRegen === 0) {
          state.stats.HPRegen[side] = coincidence[1] * 1
        } else {
          state.stats.HPRegen[side] = coincidence[1] * HPRegen
        }
      } else if (coincidence && coincidence[2] === 'Cooldown Reduction') {
        let Cooldown = state.stats.Cooldown[side]
        if (Cooldown === 0) {
          state.stats.Cooldown[side] = coincidence[1] / 100
        } else {
          state.stats.Cooldown[side] = coincidence[1] / 100 + Cooldown
        }
      } else if (coincidence && coincidence[2] === 'Health') {
        let HPPool = state.stats.HPPool[side]
        HPPool = HPPool * coincidence[1]
      }
    })
  },
  removeItem (state, payload) {
    const stats = payload.item.data.stats
    for (let key in stats) {
      if (key.match(/^Percent([A-z]+)ModPerLevel$/)){

      } else if (key.match(/^Flat([A-z]+)ModPerLevel$/)) {

      } else if (key.match(/^Percent([A-z]+)Mod$/)) {
        const item = key.match(/^Percent([A-z]+)Mod$/)[1]
        if (item === 'AttackSpeed') {

        } else {
          state.stats[item][payload.side.toLowerCase()] = state.stats[item][payload.side.toLowerCase()] - stats[key]
        }
      } else if (key.match(/^Flat([A-z]+)Mod$/)) {
        const item = key.match(/^Flat([A-z]+)Mod$/)[1]
        state.stats[item][payload.side.toLowerCase()] = state.stats[item][payload.side.toLowerCase()] - stats[key]
      }
      console.log(`${key}: ${stats[key]}`)
    }
  }
}

const actions = {
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
    const sideFirstCharUp = side.charAt(0).toUpperCase() + side.slice(1)
    context.rootState.Items[`purchased${sideFirstCharUp}Items`].forEach((item) => {
      context.commit('addItem', { item, side: payload.side })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
