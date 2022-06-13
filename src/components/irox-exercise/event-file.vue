<template>
  <div class="load-file-wrapper">

    <div style="border-style:solid">
      <input type="file" ref="doc"/>
      <div>{{ content }}</div>
    </div>
    <b-button @click="readFile()">load</b-button>

  </div>
</template>

<script>
export default {
  name: "event-file",

  data() {
    return {
      file: '',
      content: "",
    }
  },
  methods: {
    readFile() {
      let $this = this;
      this.file = this.$refs.doc.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".txt")) {
        reader.onload = (res) => {
          this.content = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        reader.onload = (res) => {
          $this.$emit('eventsLoad', res.target.result)
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      }
    }
  }
}
</script>

<style>
.load-file-wrapper {
  display: flex;
  margin-bottom: 10px;
}
</style>
