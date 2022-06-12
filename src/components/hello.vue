<template>
  <div>
    <div class="hi-wrapper">
      <div class="hi-text">
        <div class="title">שלום, נעים מאוד!</div>
        <br>
        <div>שמי נעמי מסינג</div>
        <div>מפתחת Fullstuck חובבת טכנולוגיה</div>
        <div> אוהבת קוד Client</div>
        <div>מחוברת לעולמות ה UI UX</div>
        <br>
        <div>הצד החזק שלי הוא</div>
        <div>היכולת לקלוט את צד הביזנס של המוצר</div>
        <div>ולעסוק בפיתוח מתוך אחריות להבאת ערך משמעותי ללקוח</div>
        <br>
        <div>הקמתי את האפליקציה הקטנה הזו</div>
        <div>במסגרת מבחן ב irox ב 13/06/2022</div>
        <div>אפשר לראות ב navbar למעלה את התרגיל</div>
        <div>וגם לקרוא קצת עלי בשאר העמודים</div>
        <div>בטוחה שאחרי זה כבר נכיר הרבה יותר טוב</div>
        <div>בהנאה:)</div>
      </div>
      <img class="image" src="../../public/code.jpeg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  mounted() {
    // eslint-disable-next-line no-console
    console.log('hello');
  }
}
</script>

<style lang="scss" scoped>
.hi-wrapper {
  padding: 50px 0 50px 0;
  //background: #1c2745;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .image {

    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
    width: 550px;
    height: 550px;
  }

  .hi-text {
    .title {
      font-weight: bold;
      font-size: 22px;
    }

    color: white;
    color: #1c2745;
    font-size: 20px;
  }
}

</style>