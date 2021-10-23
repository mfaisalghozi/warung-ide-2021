import Vue from 'vue'
import Router from 'vue-router'

// Components
import HelloWorld from '../components/HelloWorld.vue'
import HaloGuys from '../components/HaloGuys.vue'

// Views
import LandingPage from '../views/LandingPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/haloguys',
      name: 'HaloGuys',
      component: HaloGuys
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    }
  ]
})