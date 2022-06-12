<template>
  <div>

    <Header/>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from "../Components/Header";

import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faCog,
} from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
    faCog,
);
export default {
  name: 'app',
  components: {
    Header,
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.content {
  padding: 50px;
}
</style>
