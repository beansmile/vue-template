const path = require('path')

module.exports = {
  configureWebpack: require('./webpack.config'),
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      'patterns': [
        path.resolve('src/styles/colors.less'),
        path.resolve('src/styles/mixins.less'),
      ]
    }
  },
}
