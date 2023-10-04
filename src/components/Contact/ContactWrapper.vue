<template>
  <div class="contactWrapper">
    <div class="quoteWrapper fade-in-bottom">
      <MotivationQuote></MotivationQuote>
    </div>
    <div class="contactCardWrapper">
      <ContactCard></ContactCard>
      <ColorBubble v-for="i in 3" :key="i" :class="'bubble' + i"></ColorBubble>
    </div>
  </div>
</template>
<script>
import ContactCard from "./components/ContactCard.vue";
import MotivationQuote from "./components/MotivationQuote.vue";
import ColorBubble from "@/shared/ColorBubble.vue";
export default {
  components: {
    MotivationQuote,
    ContactCard,
    ColorBubble,
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";
.contactWrapper {
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  overflow: hidden;
  @media (max-width: $tablet) {
    flex-direction: column-reverse;
    padding: 2rem 7rem;
  align-items: center;

  }
  @media (max-width: $mobile) {
    padding: 1rem 1.5rem;
  }
  .quoteWrapper {
    width: 45%;
    margin-top: 15rem;
    min-height: 20vh;
    @media (max-width: $tablet) {
      width: 100%;
      margin-top: 5rem;
    }
    @media (max-width: $mobile) {
      margin-top: 2rem;
    }
  }
  .contactCardWrapper {
    width: 40%;
    position: relative;
    max-width: 500px;

    @media (max-width: $tablet) {
      width: 100%;
    }
    .bubble1 {
      width: 13rem;
      height: 13rem;
      top: -5%;
      right: -10%;
      @media (max-width: $tablet) {
        width: 11rem;
        height: 11rem;
        top: -5%;
        right: -10%;
      }
      @media (max-width: $mobile) {
        width: 9rem;
        height: 9rem;
        top: -3%;
      }
    }
    .bubble2 {
      width: 9rem;
      height: 9rem;
      top: 30%;
      left: -10%;
      @media (max-width: $tablet) {
        width: 8rem;
        height: 8rem;
        left: -10%;
      }
      @media (max-width: $mobile) {
        width: 7rem;
        height: 7rem;
      }
    }
    .bubble3 {
      width: 8rem;
      height: 8rem;
      bottom: -5%;
      right: -10%;
      @media (max-width: $tablet) {
        width: 7rem;
        height: 7rem;
      }
      @media (max-width: $mobile) {
        width: 5rem;
        height: 5rem;
      }
    }
  }
}
</style>
