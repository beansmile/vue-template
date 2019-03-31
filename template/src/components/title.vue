<script>
  import { Component, Vue, Watch, Prop } from 'vue-property-decorator'

  @Component
  class Title extends Vue {
    @Prop(String) value

    created() {
      this.value && this.$setTitle(this.value)
    }

    @Watch('value')
    onValueChanged(value) {
      value && this.$setTitle(this.value)
    }

    render() {
      return null
    }
  }

  export default {
    install: Vue => Vue.component('Title', Title)
  }
</script>
