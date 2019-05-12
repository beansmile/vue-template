const path = require('path')

module.exports = {
  configureWebpack: require('./webpack.config'),
  devServer: {
    port: process.env.PORT,
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
  <%_ if (options.mobile) { _%>
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('style-vw-loader')
      .loader('style-vw-loader')
      .options({ viewportWidth: 375 })
  },
  <%_ } _%>
}
