import Vue from 'vue'
import Router from 'vue-router'

// Components
import HelloWorld from '../components/HelloWorld.vue'
import HaloGuys from '../components/HaloGuys.vue'

// Views
import LandingPage from '../views/LandingPage.vue'
import AboutUsPage from '../views/AboutUsPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/aboutus',
      name: 'AboutUsPage',
      component: AboutUsPage,
    },
    {
      path: '/haloguys',
      name: 'HaloGuys',
      component: HaloGuys,
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    }
  ]
})