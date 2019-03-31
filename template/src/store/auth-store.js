import { WebAPIStore, fetchAction } from 'mobx-multiple-store'
import { fly } from '@/utils'

export class AuthStore extends WebAPIStore {
  id = 0
  phone = ''
  created_at = ''
  isFulfilled = false

  @fetchAction.merge
  login(code) {
    return fly.post('sessions', { code })
  }

  @fetchAction.merge
  fetchData() {
    return fly.get('profile')
  }

  get cacheFullPath() {
    return localStorage.getItem('cacheFullPath') || '/'
  }

  set cacheFullPath(fullPath) {
    return localStorage.setItem('cacheFullPath', fullPath)
  }
}

export const authStore = AuthStore.create()
