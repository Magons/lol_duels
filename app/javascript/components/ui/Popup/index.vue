<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <slot></slot>
    </div>
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

    },
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
