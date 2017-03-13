import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import ItemList from '../components/itemList/itemList.vue'
import Details from '../components/details/details.vue'
export default new Router({
  history: false,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
    path: '/itemlist',
    component: ItemList
  }, {
    path: '/details/:id',
    component: Details
  }, {
    path: '*',
    redirect: '/itemlist'
  }]
})
