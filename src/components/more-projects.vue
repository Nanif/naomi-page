<template>
  <div>
    <div>
      <b-card-group deck>
        <b-card :img-src="require('../../public/stackoverflow.png')" img-alt="Image" img-top title="שותפות בקהילה">
          <b-card-text>
            אני אוהבת לענות תשובות לאנשים ב StackOverflow <br>

            תחושת הסיפוק של התרומה והנתינה ממלאת את כל כולי <br>
            והחידוד שזה תורם לי אישית כל פעם מחדש, מדהים!
            <br>


            <a href="https://stackoverflow.com/users/8889661/nan-fish">אפשר לראות את הפרופיל המלא שלי פה
            </a>
          </b-card-text>
          <template #footer>
            <small class="text-muted">Stackoverflow</small>
          </template>
        </b-card>

        <b-card :img-src="require('../../public/github.png')" img-alt="חשבון Github שלי" img-top
                title="חשבון Github שלי">
          <b-card-text>
            חשבון ה Github שלי מלא בפרויקטים שונים.
            <br>

            אני אוהבת לכתוב אפליקציות ותמיד מעלה אותם ל Github.
            <br>

            ניסיתי גם להצטרף לספרית קוד פתוח, אולי יום אחד זה עוד יקרה:)
            <br>
            <a href="https://github.com/Nanif?tab=repositories">אפשר לראות את הפרופיל המלא שלי פה
            </a>
          </b-card-text>
          <template #footer>
            <small class="text-muted">Github</small>
          </template>
        </b-card>

        <b-card img-alt="Image" :img-src="require('../../public/smarket.png')" img-top title="הסטרטאפ שלי">
          <b-card-text>

            טעימה מאפליקצית הניהול של הסטרטאפ שלי.
            <br>
            את הסטרטאפ הקמתי ב 10 אצבעות עם שותפה שהיא גם אחות:)
            <br>
            חבל שא''א להראות את כל הפרטויקטים המדהימים שבנינו
            <br>
            הם פשוט Private ב Github


          </b-card-text>
          <template #footer>
            <small class="text-muted">My startup</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import stackoverflowImage from '../../public/code.jpeg'

export default {
  name: "more-projects",
  data() {
    return stackoverflowImage;
  },
  mounted() {
    this.stackoverflowImage = stackoverflowImage;
  }
}
</script>

<style scoped>
img {
  height: 350px;
  width: auto;
  object-fit: contain;}
</style>