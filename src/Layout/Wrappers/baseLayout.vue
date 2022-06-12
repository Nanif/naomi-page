<template>
  <div>

    <naomi-header/>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import naomiHeader from "../Components/naomiHeader";

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
    naomiHeader,
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.content {
  padding: 50px;
}
</style>
