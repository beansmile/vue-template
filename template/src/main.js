import Vue from 'vue'
import App from './app.vue'
import router from './router'
import './components'
import './styles/global.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
