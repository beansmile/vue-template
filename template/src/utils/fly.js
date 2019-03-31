import fly from 'flyio'
import _ from 'lodash'

fly.config.baseURL = '/api/v1'

fly.interceptors.response.use(
  res => {
    res['isResponse'] = true
    return res
  },
  err => {
    err.message = _.get(err, 'response.data.error', err.message)
    return SentryIgnore(err)
  })

export { fly }
