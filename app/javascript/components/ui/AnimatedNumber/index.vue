<template>
  <span>{{ tweeningValue }}</span>
</template>

<script>
  import TWEEN from 'tween.js'

  export default {
    props: {
      value: {
        type: Number,
        required: true
      },
      roundNumber: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        tweeningValue: 0
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
            vm.tweeningValue = this.tweeningValue.toFixed(vm.roundNumber)
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

<style>

</style>
