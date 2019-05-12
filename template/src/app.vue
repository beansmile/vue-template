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
