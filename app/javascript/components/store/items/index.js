import axios from 'axios'

const state = {
  items: [],
  purchasedLeftItems: [],
  purchasedRightItems: [],
  emptyLeftSlots: [
    {}, {}, {}, {}, {}, {}
  ],
  emptyRightSlots: [
    {}, {}, {}, {}, {}, {}
  ],
  tags: {
    health: 'Health',
    armor: 'Armor',
    spellBlock: 'SpellBlock',
    damage: 'Damage',
    lane: 'Lane',
    jungl: 'Jungle',
    lifeSteal: 'LifeSteal',
    manaRegen: 'ManaRegen',
    onHit: 'OnHit',
    criticalStrike: 'CriticalStrike',
    spellDamage: 'SpellDamage',
    mana: 'Mana',
    boots: 'Boots',
    healthRegen: 'HealthRegen',
    attackSpeed: 'AttackSpeed',
    consumable: 'Consumable',
    active: 'Active',
    vision: 'Vision',
    stealth: 'Stealth',
    magincPenetration: 'MagicPenetration',
    nonbootsMovement: 'NonbootsMovement',
    tenacity: 'Tenacity',
    cooldownReduction: 'CooldownReduction',
    spellVamp: 'SpellVamp',
    goldPer: 'GoldPer',
    aura: 'Aura',
    slow: 'Slow',
    armorPenetration: 'ArmorPenetration',
    trinket: 'Trinket',
    bilgewater: 'Bilgewater'
  }
}

const getters = {
  items: state => state.items,
  filterItems (state) {
    return tag => state.items.filter(item => {
      return tag === '' ? true : item.data.tags.includes(tag)
    })
  },
  purchasedLeftItems: state => state.purchasedLeftItems,
  emptyLeftSlots: state => state.emptyLeftSlots,
  purchasedRightItems: state => state.purchasedRightItems,
  emptyRightSlots: state => state.emptyRightSlots
}

const mutations = {
  setItems (state, payload) {
    state.items = payload.value
  },
  buyItem (state, payload) {
    if (state[`purchased${payload.side}Items`].length < 6) {
      state[`empty${payload.side}Slots`].splice(state[`empty${payload.side}Slots`].length - 1, 1)
      state[`purchased${payload.side}Items`].push(payload.value)
    }
  },
  sellItem (state, payload) {
    const index = state[`purchased${payload.side}Items`].indexOf(payload.value)
    if (index > -1) {
      state[`purchased${payload.side}Items`].splice(index, 1)
      state[`empty${payload.side}Slots`].push({})
    }
  }
}

const actions = {
  getItems (context) {
    axios.get('/items/all')
      .then((response) => {
        context.commit('setItems', { value: response.data })
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
