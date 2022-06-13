<template>
  <div id="app" class="app">
    <component :is="layout">
      <!--        <transition name="fade" mode="out-in">-->
      <!--        </transition>-->
      <router-view></router-view>
    </component>
  </div>
</template>

<script>

const default_layout = "default";

export default {
  async mounted() {

  },
  computed: {
    layout() {
      return (this.$route.meta && this.$route.meta.layout || default_layout) + '-layout';
    }
  },

}
</script>

<style lang="scss">
.app {
  direction: rtl;
  background: linear-gradient(90deg, rgba(28, 39, 69, 1) 0%, rgba(191, 87, 85, 1) 44%, rgba(255, 255, 255, 1) 100%);;
  min-height: 100vh;
}
</style>
