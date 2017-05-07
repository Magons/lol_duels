<template>
  <div class="modal-champion" v-if="show">
    <h1 class="moodal-champion__header">Выбор чемпиона</h1>
    <button @click="close()">Close</button>
    <div class="modal-champion__search">
      <input type="text" class="modal-campion__input" placeholder="Имя чемпиона" v-model="name">
    </div>
    <ul class="modal-champion__item-list">
      <li class="modal-champion__item" v-for="champion in champions"
        @click="setLeftChampion(champion)">
        <img :src="`https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion.image.full}`"/>
        <p class="modal-champion__hero-name">{{champion.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['show'],
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
        'getChampions'
      ]),
      setLeftChampion (champion) {
        this.$store.commit('setLeftChampion', { value: champion })
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
