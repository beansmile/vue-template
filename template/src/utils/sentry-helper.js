import _ from 'lodash'

function SentryIgnore(target, sentry_ignore = true) {
  if (_.isObject(target)) {
    target.sentry_ignore = sentry_ignore
    return target
  } else {
    const error = new Error(target)
    error.sentry_ignore = sentry_ignore
    return error
  }
}

window.SentryIgnore = SentryIgnore
