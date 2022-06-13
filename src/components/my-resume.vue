<template>

  <div class="resume-wrapper"  @click="downloadResume">
    <b-card
        :img-src="require('../../public/code.jpeg')"
        img-alt="Image"
        img-top
        no-body
        style="max-width: 20rem;"
    >
      <template #header>
        <h4 class="mb-0">כמה מילים על איך בניתי את האפליקציה הזו</h4>
      </template>

      <b-list-group flush>
        <b-list-group-item>
          <b-card-sub-title class="mb-2">שפות:</b-card-sub-title>
          <b-card-text>
            Vuejs כולל שימוש ב Vue-router
          </b-card-text>
        </b-list-group-item>
        <b-list-group-item>
          <b-card-sub-title class="mb-2">ניהול גירסאות:</b-card-sub-title>
          <b-card-text>
            הקבצים יושבים ב Github
          </b-card-text>
        </b-list-group-item>
        <b-list-group-item>
          <b-card-sub-title class="mb-2">שרת:</b-card-sub-title>
          <b-card-text>
            Netlify - שרת שמריץ את האפליקציה בפרודקשן
          </b-card-text>
        </b-list-group-item>
      </b-list-group>

      <b-card-body>

        <a class="card-link" href="https://www.netlify.com/">Netlify</a>
        <a class="card-link" href="https://github.com/Nanif/naomi-page">Github</a>
      </b-card-body>

      <b-button class="resume-btn">קורות החיים שלי</b-button>
    </b-card>
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
      window.open(this.downloadUrl, "_blank");
    },
  }
}
</script>

<style lang="scss" scoped>
.card {
  text-align: start;

}

.resume-wrapper {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .resume-btn {
    background: #1c2745;

  }
}
</style>
