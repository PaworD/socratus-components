// Socratus Core 2021

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * @author Javlon Khalimjonov<khalimajonov.code@gmail.com>
 */

// Import Directives
import './shared/directives/ripple'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
