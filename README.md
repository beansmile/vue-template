# 基于 vue-cli 的 vue项目模板

# 使用
* 需要全局安装 @vue/cli

`vue create --preset beansmile/vue-template 项目名`

* 或者使用 npx(npm 自带)

`npx @vue/cli create --preset beansmile/vue-template 项目名`

# 程序目录 (只列出比 vue 默认模板多出来的部分)
```
.
├── src                       # 前端目录
│   ├── components           # 全局组件注册
│   │   └── index.js        # 默认导出
│   ├── router               # 路由配置
│   │   ├── config.js       # 配置文件
│   │   └── index.js        # 默认导出
│   ├── store                # 状态管理
│   │   └── index.js        # 默认导出
│   ├── styles               # 全局 style
│   │   ├── colors.less     # 颜色变量表（自动引入到每个 less 文件的顶部）
│   │   ├── mixins.less     # 函数表（自动引入到每个 less 文件的顶部）
│   │   └── flex.less       # flex 布局的复用类名
│   ├── utils                # 可复用的帮助方法
│   │   ├── fly.js          # 网络请求库
│   │   ├── set-title.js    # 移动端兼容的设置 title 方法
│   │   └── index.js        # 默认导出
│   ├── shims-tsx.d.ts       # vue 类型文件 
│   └── shims-vue.d.ts       # vue 类型文件
```
