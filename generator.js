const fs = require('fs')

module.exports = (api, opts) => {
  api.extendPackage({
    dependencies: {
      'dayjs': '^1.8.11',
      'flyio': '^0.6.14',
      'lodash': '^4.17.11',
      'mobx-multiple-store': '^1.1.9',
      'normalize.css': '^8.0.1',
      'vue-property-decorator': '^8.0.0',
    },
    devDependencies: {
      '@babel/plugin-proposal-do-expressions': '^7.2.0',
      '@babel/plugin-proposal-export-default-from': '^7.2.0',
      'babel-plugin-lodash': '^3.3.4',
      'eslint-config-beansmile': 'https://github.com/beansmile/eslint-config-beansmile.git',
      'style-resources-loader': '^1.2.1',
      'vue-cli-plugin-style-resources-loader': '^0.1.3'
    }
  })

  if (opts.mobile) {
    api.extendPackage({
      dependencies: {
        'vue-navigation': '^1.1.4',
      },
      devDependencies: {
        "postcss-px-to-relative-unit": "^1.0.1",
      }
    })
  }

  api.render('./template')
  api.render({
    './.editorconfig': './template/.editorconfig',
    './.eslintrc.js': './template/.eslintrc.js',
    './.npmrc': './template/.npmrc',
  })

  api.onCreateComplete(() => {
    fs.unlinkSync(api.resolve('src/router.js'))
    fs.renameSync(api.resolve('src/App.vue'), api.resolve('src/app.vue'))
    fs.renameSync(api.resolve('src/views/Home.vue'), api.resolve('src/views/home.vue'))
    fs.renameSync(api.resolve('src/views/About.vue'), api.resolve('src/views/about.vue'))
  })
}
