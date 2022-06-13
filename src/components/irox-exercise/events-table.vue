<template>
  <div>
    <b-table @row-clicked="setSummery" dir="ltr" striped hover :items="events"></b-table>
    <!--    הערה חשובה לחלק זה:-->
    <!--    מימשתי את זה בצורה גנרית -->
    <!--    בהוראות התרגיל הופיע שיש צורך לבנות קופוננטה עבור כל סוג של אירוע-->
    <!--    לכן יצרתי קומפוננטה דינמית-->
    <!--    שמרנדרת כל פעם לפי סוג האירוע את הקומפוננטה התואמת לו-->
    <component :is="selectedRowType" :text="selectedRowSummery"></component>
    <summery-component :eventsCount="eventsCount" :maximumDuplication="maximumDuplication"
                       :checkedEventsCount="checkedEventsCount"></summery-component>
  </div>
</template>


<script>
import summeryComponent from "@/components/irox-exercise/summeryComponent";

export default {
  name: "events-table",
  components: {summeryComponent},
  data() {
    return {
      events: [],
      selectedRowType: 'sms-component',
      selectedRowSummery: '',
    }
  },
  computed: {
    eventsCount() {
      return this.events.length
    },
    checkedEventsCount() {
      return this.events.filter(event => event && event["EventChecked"] === 'True').length

    },
    maximumDuplication() {
      let sms = 0, phone = 0, email = 0, max = 0, type;
      this.events.forEach(event => {
        event["Event Type"] === 'SMS' ? sms++ : event["Event Type"] === 'Phone' ? phone++ : event["Event Type"] === 'E-Mail' ? email++ : null
      })
      if (phone > sms && phone > email) {
        max = phone
        type = 'phone'
      } else {
        if (sms > email) {
          max = sms
          type = 'sms'
        } else {
          max = email
          type = 'email'
        }
      }
      return {type: type, max: max}
    }
  },
  watch: {
    eventsData(newData) {
      newData.forEach(event => {
        this.events.push({

          "-ID": event["-ID"],
          "Target": event["EventTarget"],
          "Event Type": event["EventType"],
          "Name": event["EventName"],
          "From": event["EventFrom"],
          "To": event["EventTo"],
          "Duration": (new Date(event["EventTo"]).getTime() - new Date(event["EventFrom"]).getTime()),
          "Additional": event["EventType"] === "Phone" ? `RecordingFile: ${event["RecordFile"]}` : event["EventType"] === "E-Mail" ? `Attachment count: ${event["AttachmentCount"]}. CC: ${event["CC"]}` : "",
          "EventChecked": event["EventChecked"]
        })
      })
    }
  },
  props: {
    eventsData: []
  },
  methods: {
    setSummery(rowData) {
      console.log(rowData);
      // debugger; // eslint-disable-line no-debugger
      this.selectedRowType = (`${rowData["Event Type"]}-component`).toLowerCase();
      // this.selectedRowType = 'sms-component'
      this.selectedRowSummery = rowData["Additional"]
    }
  }


}
</script>


<style scoped>

</style>