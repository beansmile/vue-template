module.exports = [
  {
    type: 'list',
    name: 'mobile',
    message: '是否移动端项目',
    choices: [
      { name: '是 (添加 vue-navigation 和 px2vw 插件)', value: true },
      { name: '否', value: false }
    ],
    default: true,
  }
]
