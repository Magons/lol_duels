import 'babel-polyfill'

import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import App from '../components/app.vue'
import store from '../components/store'

Vue.use(Vuex)

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: 'app',
    template: '<App/>',
    store,
    components: {
      App
    }
  })
})

