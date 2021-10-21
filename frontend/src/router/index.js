import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HaloGuys from '../components/HaloGuys.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/haloguys',
      name: 'HaloGuys',
      component: HaloGuys
    }
  ]
})