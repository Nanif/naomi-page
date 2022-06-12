<template>
  <div>



    <b-button variant="primary" @click="downloadResume">קורות החיים שלי</b-button>
  </div>

</template>

<script>
export default {
  name: "my-resume",
  data() {
    return {
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1oRwRhDeBYFGkDs7EShFNIOJGI4SzUhoz'
    }
  },
  methods: {
    downloadResume() {
      window.console.log(this.downloadUrl)
      window.open(this.downloadUrl, "_blank");
    },
  }
}
</script>

<style scoped>

</style>