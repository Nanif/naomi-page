<template>
<div>
  <div>Events count: {{eventsCount}}</div>
  <div>Checked events count: {{checkedEventsCount}}</div>
  <div>Maximum duplication: {{maximumDuplication.type}} exists {{maximumDuplication.max}} times</div>
</div>
</template>

<script>
export default {
  name: "summeryComponent",
  props: {
    eventsCount: Number,
    checkedEventsCount: Number,
    maximumDuplication: {}
  }
}
</script>

<style scoped>

</style>