<template>
  <div v-show="show">
    <div class="modal-champion">
      <button class="close-btn" @click="close()">Close</button>
      <h1 class="moodal-champion__header">Выбор чемпиона</h1>
      <div class="modal-champion__search">
        <input type="text" class="modal-campion__input" placeholder="Имя чемпиона" v-model="name">
      </div>
      <ul class="modal-champion__item-list">
        <li class="modal-champion__item" v-for="champion in champions"
          @click="setChampion(champion.data)">
          <img :src="`https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion.data.image.full}`"/>
          <p class="modal-champion__hero-name">{{champion.name}}</p>
        </li>
      </ul>
    </div>
    <div class="modal-champion__overlay"></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['show', 'side'],
    created () {
      this.getChampions()
    },
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'champions',
        'searchString'
      ]),
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
      ...mapActions([
        'getChampions',
        'calculate'
      ]),
      setChampion (champion) {
        this.$store.commit(`set${this.side}Champion`, { value: champion })
        this.$store.dispatch('calculateStats', { side: this.side })
        this.calculate()
        this.close()
      },
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/style.scss';
</style>
