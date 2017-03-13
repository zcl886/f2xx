import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/api'
import {sync} from 'vuex-router-sync'
import * as filters from './filters'

sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  render: h => h(App)
})

