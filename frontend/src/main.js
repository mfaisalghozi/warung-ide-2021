import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'es6-promise'

// remove production devtool
const isDebuggerMode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebuggerMode
Vue.config.devtools = isDebuggerMode
Vue.config.productionTip = isDebuggerMode

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
