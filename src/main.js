import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store'
import router from './router'

Vue.config.productionTip = false

// $httpプロパティを追加
Vue.prototype.$http = (url, opts) => fetch(url, opts)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
