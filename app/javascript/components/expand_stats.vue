<template>
  <div v-show="show">
    <div class="modal-champion">
      <button class="close-btn" @click="close()">Close</button>
      <h1 class="moodal-champion__header">Expand Stats</h1>
      <div class="column-2">
        <ul class="">
          <li class="" v-for="stat in stats">
            <span class="sidebar__param-title">{{stat.name}}: </span>
            <span class="sidebar__param-val">
              {{stat[side.toLowerCase()]}}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="modal-champion__overlay"></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['show', 'side'],
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'stats'
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

  .column-2 {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
</style>
