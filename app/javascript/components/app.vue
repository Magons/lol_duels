<template>
  <div id='app'>
    <header class="header" v-if="false">
      <div class="header__container">
        <div class="header__logo">
          <img src="./img/header-logo.jpg" alt="League of Legends" width="310" height="123" class="header__logo-img">
        </div>
        <div class="header__user-block" v-if="false">
          <button class="header__user-btn" type="button">LogIn</button>
          <button class="header__user-btn" type="button">Registration</button>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="main__container">
        <div class="sidebar  sidebar--left">
          <button class="sidebar__choose-btn" type="button" @click="chooseChampion('Left')">
            Choose the champion
          </button>
          <select v-model="leftLvl" class="sidebar__select">
            <option v-for="level in 18" :value="level">{{level}}</option>
          </select>
          <h2 class="sidebar__characteristics">
            <span class="expand-stats" @click="changeExpandStats('Left')">?</span>
            Stats:
          </h2>
          <ul class="sidebar__parameter-list">
            <li class="sidebar__parameter" v-for="stat in stats" v-if="stat.show">
              <p class="sidebar__param-title">{{stat.name}}:</p>
              <p class="sidebar__param-val">
                <AnimatedNumber :value="stat.left" :roundNumber="2"/>
              </p>
            </li>
          </ul>

          <button class="sidebar__yellow-btn" type="button" @click="changeItems('Left')">Store</button>
          <!-- <button class="sidebar__yellow-btn" type="button" @click="changeRunes('Left')">Руны</button>
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
          </label> -->
        </div> <!-- end of sidebar  sidebar--left -->

        <section class="center">

          <h1 class="center__header"  v-if="false">Probability of winning</h1>
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
                <li class="center__hero-item" v-for="item in purchasedLeftItems">
                  <img :src="`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.data.image.full}`" v-if="item.data" alt="pic" width="38" height="38">
                </li>
                <li class="center__hero-item" v-for="item in emptyLeftSlots">
                </li>
              </ul>
            </div>
            <div class="center__vs">VS</div>
            <div class="center__hero  center__hero--right">
              <div class="center__hero-pic">
                <img :src="championImageUrl(rightChampion)" height="100%"/>
                <p class="center__hero-name">{{rightChampion.name}}</p>
              </div>
              <ul class="center__hero-items">
                <li class="center__hero-item" v-for="item in purchasedRightItems">
                  <img :src="`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.data.image.full}`" v-if="item.data" alt="pic" width="38" height="38">
                </li>
                <li class="center__hero-item" v-for="item in emptyRightSlots">
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div class="sidebar  sidebar--right">
          <button class="sidebar__choose-btn" type="button" @click="chooseChampion('Right')">
            Choose the champion
          </button>
          <select v-model="rightLvl"  class="sidebar__select  sidebar__select--right">
            <option v-for="level in 18" :value="level">{{level}}</option>
          </select>
          <h2 class="sidebar__characteristics">
            <span class="expand-stats" @click="changeExpandStats('Right')">?</span>
            Stats:
          </h2>
          <ul class="sidebar__parameter-list">
            <li class="sidebar__parameter" v-for="stat in stats" v-if="stat.show">
              <p class="sidebar__param-title">{{stat.name}}:</p>
              <p class="sidebar__param-val">
                <AnimatedNumber :value="stat.right" :roundNumber="2"/>
              </p>
            </li>
          </ul>

           <button class="sidebar__yellow-btn" type="button" @click="changeItems('Right')">Store</button>
           <!-- <button class="sidebar__yellow-btn" type="button" @click="changeRunes('Right')">Руны</button>
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
           </label> -->

        </div><!-- end of sidebar  sidebar--right -->

      </div>
    </main>

    <footer class="footer" v-if="false">
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

    <expandStats :show="showExpandStats" @close="showExpandStats = false" :side="side"/>
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
  import expandStats from './expand_stats'

  export default {
    data: function () {
      return {
        showRunes: false,
        showTalants: false,
        showItemStore: false,
        showChampions: false,
        showExpandStats: false,
        side: 'Left'
      }
    },
    computed: {
      ...mapGetters([
        'leftChampion',
        'rightChampion',
        'chanceLeft',
        'chanceRight',
        'leftLevel',
        'rightLevel',
        'stats',
        'emptyLeftSlots',
        'purchasedLeftItems',
        'emptyRightSlots',
        'purchasedRightItems'
      ]),
      leftLvl: {
        get () {
          return this.leftLevel
        },
        set (value) {
          this.$store.commit('setLeftLevel', { value })
          this.$store.dispatch('calculateStats', { side: 'left' })
          this.calculate()
        }
      },
      rightLvl: {
        get () {
          return this.rightLevel
        },
        set (value) {
          this.$store.commit('setRightLevel', { value })
          this.$store.dispatch('calculateStats', { side: 'right' })
          this.calculate()
        }
      }
    },
    components: {
      talants,
      runes,
      champions,
      itemStore,
      AnimatedNumber,
      BarChart,
      expandStats
    },
    methods: {
      ...mapActions([
        'calculate'
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
      },
      changeExpandStats (side) {
        this.side = side
        this.showExpandStats = !this.showItemStore
      },
      keyCodeListener (e) {
        if (e.keyCode === 27) {
          this.showRunes = false
          this.showTalants = false
          this.showItemStore = false
          this.showChampions = false
          this.showExpandStats = false
        }
      }
    },
    created () {
      document.addEventListener('keydown', this.keyCodeListener)
      this.$store.dispatch('calculateStats', { side: 'right' })
      this.$store.dispatch('calculateStats', { side: 'left' })
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.keyCodeListener)
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/style.scss';

  .expand-stats {
    cursor: pointer;
    font-weight: bold;
    color: #e5c46c;
  }
</style>
