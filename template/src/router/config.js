import Vue from 'vue'
import Router from 'vue-router'
import qs from 'qs'
import { decoder } from '@/utils'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  parseQuery: str => qs.parse(str, { decoder }),
  stringifyQuery(query) {
    const result = qs.stringify(query)
    return result ? '?' + result : ''
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/home.vue').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/views/about.vue').default
    }
  ]
})
