<template>
  <div id="app">
    <div id="nav">
      <div v-html="'<style>#app {text-align: center;}</style>'"></div>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <navigation>
      <router-view/>
    </navigation>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteUpdate',
    'beforeRouteLeave'
  ])

  @Component
  export default class App extends Vue {
  }
</script>

<style lang="less">
  @import '~normalize.css';

  body {
    font-size: 14px;
    line-height: 1.5;
    color: #333333;
    background-color: #f4f4f4;

    a {
      touch-action: manipulation;
    }

    a[disable=true], a[disabled=disabled] {
      cursor: not-allowed;
      pointer-events: none;
      opacity: .5;
    }

    @import '~styles/flex.less';
  }

  @supports (bottom: env(safe-area-inset-bottom)) {
    body {
      padding-bottom: env(safe-area-inset-bottom);

      .safe-fixed {
        margin-bottom: env(safe-area-inset-bottom);
      }
    }
  }
</style>
