import Vue from 'vue'
import { StoreHelper } from 'mobx-multiple-store'
import App from './app.vue'
import router from './router'
import './components'

Vue.config.productionTip = false

new Vue({
  data: {
    instanceListGroup: StoreHelper.instanceListGroup
  },
  router,
  render: h => h(App)
}).$mount('#app')
