import Vue from 'vue'
import Router from 'vue-router'

// Components
import HelloWorld from '../components/HelloWorld.vue'
import HaloGuys from '../components/HaloGuys.vue'

// Views
import LandingPage from '../views/LandingPage.vue'
import HomePage from '../views/HomePage.vue'
import AboutUsPage from '../views/AboutUsPage.vue'
import DiscoveryPage from '../views/DiscoveryPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/aboutus',
      name: 'AboutUsPage',
      component: AboutUsPage,
    },
    {
      path: '/discover',
      name: 'DiscoveryPage',
      component: DiscoveryPage,
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