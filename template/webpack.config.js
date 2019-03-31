const path = require('path')
const dayjs = require('dayjs')

const NODE_ENV = process.env.NODE_ENV
const release = `${NODE_ENV} ${dayjs().format('YYYY-MM-DD HH:mm')}`
process.env.VUE_APP_RELEASE = release

module.exports = {
  watchOptions: {
    ignored: /node_modules/
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
    alias: {
      '@': path.resolve('src'),
      'mobx-multiple-store': 'mobx-multiple-store/vue',
    },
  },
}
