<template>
  <div id="app">
    <component :is="layout">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </component>
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  const default_layout = "default";

  export default {
    async mounted() {
      let token = new URLSearchParams(window.location.search).get('token')
      if(token){
        await this.validateToken(token)
      }
    },
    computed: {
      layout() {
        return (this.$route.meta && this.$route.meta.layout || default_layout) + '-layout';
      }
    },
    methods:{
      ...mapActions('account', ['validateToken','login']),
    }
  }
</script>

<style lang="scss">
  @import "assets/base.scss";
</style>
