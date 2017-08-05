<template>
  <div v-if="show">
    <div class="container">
      <button class="container-close" type="button" title="Закрыть" @click="$emit('close')"></button>
      <div class="content">
        <div class="content-left">
          <div class="search-items">
            <input type="text">
            <button type="button" class="btn-table" title="Таблицей"></button>
            <button type="button" class="btn-list" title="Списком"></button>
          </div>
          <div class="wrapper">
            <div class="wrap-all-items">
              <div class="block-1">
                <p>All items</p>
                <ul class="list"><b>Начальные предметы</b>
                  <li>
                    <label>
                      Игра в лесу
                      <input type="checkbox" value="Jungle" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                      Игра на линии
                      <input type="checkbox" value="Lane" v-model="filter"><i></i>
                    </label>
                  </li>
                </ul>
                <ul class="list"><b>Инструменты</b>
                  <li>
                    <label>
                      Расходуемые товары
                      <input type="checkbox" value="Consumable" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Золото<input type="checkbox" value="GoldPer" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Обзор и аксессуары<input type="checkbox" value="Lane" v-model="filter"><i></i>
                    </label>
                  </li>
                </ul>
                <ul class="list"><b>Защита</b>
                  <li>
                    <label>
                    Броня<input type="checkbox" value="Armor" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Здоровье<input type="checkbox" value="Health" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Восстановление здоровья<input type="checkbox" value="HealthRegen" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                      Сопротивление магии<input type="checkbox" value="ManaRegen" v-model="filter"><i></i>
                    </label>
                  </li>
                </ul>
                <ul class="list"><b>Атака</b>
                  <li>
                    <label>
                    Скорость атаки<input type="checkbox" value="AttackSpeed" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Критический удар<input type="checkbox" value="CriticalStrike" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Урон<input type="checkbox" value="Damage" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Вампиризм<input type="checkbox" value="LifeSteal" v-model="filter"><i></i>
                    </label>
                  </li>
                </ul>
                <ul class="list"><b>Магия</b>
                  <li>
                    <label>
                    Сокращение перезарядки<input type="checkbox" value="CooldownReduction" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Мана<input type="checkbox" value="Mana" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Восстановление маны<input type="checkbox" value="ManaRegen" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Сила умений<input type="checkbox" value="SpellDamage" v-model="filter"><i></i>
                    </label>
                  </li>
                </ul>
                <ul class="list"><b>Передвижение</b>
                  <li>
                    <label>
                    Ботинки<input type="checkbox" value="Boots" v-model="filter"><i></i>
                    </label>
                  </li>
                  <li>
                    <label>
                    Другое<input type="checkbox" value="Consumable" v-model="filter"><i></i>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="block-view">
                <div class="block-2">
                  <div class="row" v-for="item in filterItems(filter)" @click.stop.prevent="addItemToChampion(item)">
                    <div class="icon">
                      <div class="pic">
                        <img :src="`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.data.image.full}`" alt="pic" width="38" height="38">
                      </div>
                      <div class="price">
                        {{item.data.gold.base}}
                      </div>
                    </div>
                    <div class="name-item">
                      {{item.data.name}}
                    </div>
                    <div class="hint" v-html="item.data.description"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="block-3">
              <div class="left">
                <div class="pic" v-for="item in purchasedItems" @click.stop="removeItemFromChampion(item)">
                  <img :src="`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.data.image.full}`" v-if="item.data" alt="pic" width="38" height="38">
                </div>
                <div class="pic" v-for="item in emptySlots">
                  <img src="" alt="pic" width="38" height="38">
                </div>
              </div>
              <div class="middle">
                <div class="pic">
                  <img src="" alt="pic" width="38" height="38">
                </div>
              </div>
              <div class="right">
                <button class="btn">ПРОДАТЬ</button>
                <button class="btn">ВЕРНУТЬ</button>
              </div>
            </div>
        </div>

      </div>
    </div>
    <div class="store__overlay"></div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    props: ['show', 'side'],
    created () {
      this.getItems()
    },
    data () {
      return {
        showReccomended: false,
        filter: []
      }
    },
    computed: {
      ...mapGetters([
        'items',
        'filterItems',
        'emptyLeftSlots',
        'purchasedLeftItems',
        'emptyRightSlots',
        'purchasedRightItems',
        'searchString'
      ]),
      emptySlots () {
        return this[`empty${this.side}Slots`]
      },
      purchasedItems () {
        return this[`purchased${this.side}Items`]
      },
      name: {
        get () {
          return this.searchString
        },
        set (value) {
          this.$store.commit('setSearchString', { value })
        }
      }
    },
    methods: {
      ...mapMutations([
        'buyItem',
        'sellItem',
        'addItem',
        'removeItem'
      ]),
      ...mapActions([
        'getItems',
        'calculate'
      ]),
      close () {
        this.$emit('close')
      },
      changeFilter (string) {
        this.filter = string
      },
      addItemToChampion (item) {
        this.buyItem({ value: item, side: this.side })
        this.addItem({ item, side: this.side })
        this.calculate()
      },
      removeItemFromChampion (item) {
        this.sellItem({ value: item, side: this.side })
        this.removeItem({ item, side: this.side })
        this.calculate()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/style.scss';

  .name-item {
    display: flex;
    align-items: center;
    height: 45px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
  }
  .hint {
    position: absolute;
    top: 41px;
    left: 22px;
    display: none;
    width: 135px;
    height: auto;
    padding: 8px 10px;
    font-size: 12px;
    color: #e5c46c;
    word-wrap: break-word;
    background-color: #162a27;
    border: 2px solid #73602d;
    border-radius: 5px;
    z-index: 32;

    &::before {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      background-color: #162a27;
      border-left: 2px solid #73602d;
      border-top: 2px solid #73602d;
      transform: rotate(45deg);
      top: -7px;
      left: 72px;
    }
  }
</style>
