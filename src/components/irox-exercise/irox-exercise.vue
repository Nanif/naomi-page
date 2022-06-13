<template>
  <div class="wrapper">
    <events-table :eventsData="eventsData"></events-table>
    <event-file @eventsLoad="setEvents"></event-file>

  </div>
</template>

<script>
import EventsTable from "@/components/irox-exercise/events-table";
import EventFile from "@/components/irox-exercise/event-file";

export default {
  name: "irox-exercise",
  data() {
    return {eventsData: []}
  },
  methods: {
    setEvents(data) {
      this.eventsData = JSON.parse(data).Events.Event
    }
  },
  components: {EventFile, EventsTable}
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: start;
}
</style>