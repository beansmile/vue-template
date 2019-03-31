import Vue from 'vue'
import './sentry-helper'

import { fly } from './fly'
import { rte } from './runtime-env'
import setTitle from './set-title'
import sleep from './sleep'

Vue.prototype.$fly = fly
Vue.prototype.$rte = rte
Vue.prototype.$sleep = sleep
Vue.prototype.$setTitle = setTitle

export {
  fly, rte, setTitle, sleep
}
