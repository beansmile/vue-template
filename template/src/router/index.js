import Vue from 'vue'
<%_ if (options.mobile) { _%>
import Navigation from 'vue-navigation'
<%_ } _%>
import router from './config'

<%_ if (options.mobile) { _%>
Vue.use(Navigation, { router })
<%_ } _%>

export default router
