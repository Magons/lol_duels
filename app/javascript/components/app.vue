<template>
  <div id='app'>
    <header class="header">
      <div class="header__container">
        <div class="header__logo">
          <img src="./img/header-logo.jpg" alt="League of Legends" width="310" height="123" class="header__logo-img">
        </div>
        <div class="header__user-block">
          <button class="header__user-btn" type="button">Вход</button>
          <button class="header__user-btn" type="button">Регистрация</button>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="main__container">
        <div class="sidebar  sidebar--left">
          <button class="sidebar__choose-btn" type="button" @click="chooseChampion('Left')">
            Выбор чемпиона
          </button>
          <select>
            <option>Choose level</option>
            <option v-for="level in levels">{{level}}</option>
          </select>
          <h2 class="sidebar__characteristics">Характеристики:</h2>
          <ul class="sidebar__parameter-list">
            <li class="sidebar__parameter" v-for="(value, key) in leftChampion.stats">
              <p class="sidebar__param-title">{{key}}:</p>
              <p class="sidebar__param-val">
                <AnimatedNumber :value="value" :roundNumber="2"/>
              </p>
            </li>
          </ul>

          <button class="sidebar__yellow-btn" type="button" @click="changeItems('Left')">Магазин</button>
          <button class="sidebar__yellow-btn" type="button" @click="changeRunes('Left')">Руны</button>
          <button class="sidebar__yellow-btn" type="button" @click="changeTalants('Left')">Таланты</button>

          <label for="act-skills-left" class="sidebar__active-skills">
            Использовать активные способности
            <input type="checkbox" class="sidebar__checkbox" id="act-skills-left" checked>
            <i class="sidebar__empty"></i>
          </label>
          <label for="act-spell-left" class="sidebar__active-skills">
            Использовать заклинания призывателя
            <input type="checkbox" class="sidebar__checkbox" id="act-spell-left">
            <i class="sidebar__empty"></i>
          </label>
        </div> <!-- end of sidebar  sidebar--left -->

        <section class="center">

          <h1 class="center__header">Вероятность победы</h1>
          <BarChart :value="chanceRight"/>
          <div class="center__ratio">
            <div class="center__ratio-left">
              <AnimatedNumber :value="chanceLeft" :roundNumber="1"/>%
            </div>
            <div class="center__ratio-right">
              <AnimatedNumber :value="chanceRight" :roundNumber="1"/>%
            </div>
          </div>
          <div class="center__heroes">
            <div class="center__hero  center__hero--left">
              <div class="center__hero-pic">
                <img :src="championImageUrl(leftChampion)" height="100%"/>
                <p class="center__hero-name">{{leftChampion.name}}</p>
              </div>
              <ul class="center__hero-items">
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
              </ul>
            </div>
            <div class="center__vs">VS</div>
            <div class="center__hero  center__hero--right">
              <div class="center__hero-pic">
                <img :src="championImageUrl(rightChampion)" height="100%"/>
                <p class="center__hero-name">{{rightChampion.name}}</p>
              </div>
              <ul class="center__hero-items">
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
                <li class="center__hero-item"></li>
              </ul>
            </div>
          </div>
        </section>

        <div class="sidebar  sidebar--right">
          <button class="sidebar__choose-btn" type="button" @click="chooseChampion('Right')">
            Выбор чемпиона
          </button>
          <select>
            <option>Choose level</option>
            <option v-for="level in levels">{{level}}</option>
          </select>
          <h2 class="sidebar__characteristics">Характеристики:</h2>
          <ul class="sidebar__parameter-list">
            <li class="sidebar__parameter" v-for="(value, key) in rightChampion.stats">
              <p class="sidebar__param-title">{{key}}:</p>
              <p class="sidebar__param-val">
                <AnimatedNumber :value="value" :roundNumber="2"/>
              </p>
            </li>
          </ul>

           <button class="sidebar__yellow-btn" type="button" @click="changeItems('Right')">Магазин</button>
           <button class="sidebar__yellow-btn" type="button" @click="changeRunes('Right')">Руны</button>
           <button class="sidebar__yellow-btn" type="button" @click="changeTalants('Right')">Таланты</button>

           <label for="act-skills-right" class="sidebar__active-skills">
             Использовать активные способности
             <input type="checkbox" class="sidebar__checkbox" id="act-skills-right" checked>
             <i class="sidebar__empty"></i>
           </label>
           <label for="act-spell-right" class="sidebar__active-skills">
             Использовать заклинания призывателя
             <input type="checkbox" class="sidebar__checkbox" id="act-spell-right">
             <i class="sidebar__empty"></i>
           </label>

        </div><!-- end of sidebar  sidebar--right -->

      </div>
    </main>

    <footer class="footer">
      <div class="footer__container">
        <div class="footer__logo">
          <img src="./img/header-logo.jpg" alt="League of Legends" width="310" height="123" class="header__logo-img">
        </div>
        <div class="footer__copyrights">league of legens © 2017</div>
      </div>
    </footer>

    <champions :show="showChampions" @close="showChampions = false" :side="side"/>

    <talants :show="showTalants" @close="showTalants = false" :side="side"/>

    <runes :show="showRunes" @close="showRunes = false" :side="side"/>

    <itemStore :show="showItemStore" @close="showItemStore = false" :side="side"/>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import AnimatedNumber from './ui/AnimatedNumber'
  import BarChart from './ui/BarChart'
  import talants from './talants'
  import runes from './runes'
  import champions from './champions'
  import itemStore from './item_store'

  export default {
    data: function () {
      return {
        showRunes: false,
        showTalants: false,
        showItemStore: false,
        showChampions: false,
        side: 'Left',
        levels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
      }
    },
    computed: {
      ...mapGetters([
        'leftChampion',
        'rightChampion',
        'chanceLeft',
        'chanceRight'
      ])
    },
    components: {
      talants,
      runes,
      champions,
      itemStore,
      AnimatedNumber,
      BarChart
    },
    methods: {
      ...mapMutations([
        'claculate'
      ]),
      championImageUrl (champion) {
        const championName = champion.id === 'FiddleSticks' ? 'Fiddlesticks' : champion.id
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`
      },
      chooseChampion (side) {
        this.side = side
        this.showChampions = !this.showChampions
      },
      changeRunes (side) {
        this.side = side
        this.showRunes = !this.showRunes
      },
      changeTalants (side) {
        this.side = side
        this.showTalants = !this.showTalants
      },
      changeItems (side) {
        this.side = side
        this.showItemStore = !this.showItemStore
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/style.scss';
</style>
