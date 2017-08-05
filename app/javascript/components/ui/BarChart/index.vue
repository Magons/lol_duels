<template>
  <div class="center__indicator">
    <div class="center__indicator-inner" :style="{ width: percent }"></div>
  </div>
</template>

<script>
  import TWEEN from 'tween.js'

  export default {
    props: ['value'],
    data () {
      return {
        tweeningValue: 0
      }
    },
    computed: {
      percent () {
        return `${this.tweeningValue}%`
      }
    },
    watch: {
      value: function (newValue, oldValue) {
        this.tween(oldValue, newValue)
      }
    },
    mounted () {
      this.tween(0, this.value)
    },
    methods: {
      tween (startValue, endValue) {
        var vm = this
        var animationFrame
        function animate (time) {
          TWEEN.update(time)
          animationFrame = requestAnimationFrame(animate)
        }
        new TWEEN.Tween({ tweeningValue: startValue })
          .to({ tweeningValue: endValue }, 500)
          .onUpdate(function () {
            vm.tweeningValue = this.tweeningValue
          })
          .onComplete(function () {
            cancelAnimationFrame(animationFrame)
          })
          .start()
        animationFrame = requestAnimationFrame(animate)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .center__indicator-inner {
    height: 26px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: linear-gradient(to right, #fee07b, #a77e47);
  }
</style>
