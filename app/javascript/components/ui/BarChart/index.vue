<template>
  <div class="center__indicator">
    <div class="center__indicator-inner" :style="{ width: percent }"></div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    data () {
      return {

      }
    },
    computed: {
      percent () {
        return `${this.value}%`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .center__indicator-inner {
    height: 33px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: linear-gradient(to right, #fee07b, #a77e47);
  }
</style>
