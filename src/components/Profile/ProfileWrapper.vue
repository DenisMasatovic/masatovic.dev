<template>
  <div class="profileWrapper">
    <div class="profileCardWrapper">
      <ProfileCard class="profileCard"></ProfileCard>
      <ColorBubble v-for="i in 3" :key="i" :class="'bubble' + i"></ColorBubble>
    </div>
    <AdditionalInformation
      class="additionalInformation"
    ></AdditionalInformation>
  </div>
</template>
<script>
import ProfileCard from "./components/ProfileCard.vue";
import AdditionalInformation from "./components/AdditionalInformation.vue";
import ColorBubble from "@/shared/ColorBubble.vue";
export default {
  components: {
    ProfileCard,
    AdditionalInformation,
    ColorBubble,
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";

.profileWrapper {
  display: flex;
  padding: 2rem 5rem;
  justify-content: space-between;
  overflow: hidden;
  @media (min-width: $big-desktop) {
    padding: 2rem 20rem;
  }
  @media (min-width: $default-desktop) {
    padding: 2rem 10rem;
  }
  @media (max-width: $tablet) {
    flex-direction: column;
    padding: 2rem 7rem;
  }
  @media (max-width: $mobile) {
    padding: 1rem 1.5rem;
    padding-bottom: 8rem;
  }
  .profileCardWrapper {
    position: relative;
    width: 45%;
    @media (max-width: $tablet) {
      width: 100%;
    }
    .profileCard {
      box-sizing: border-box;
    }
    .bubble1 {
      width: 13rem;
      height: 13rem;
      top: -3%;
      left: -15%;
      @media (min-width: $big-desktop) {
        left: -10%;
      }
      @media (min-width: $default-desktop) {
        left: -10%;
      }
      @media (max-width: $tablet) {
        width: 11rem;
        height: 11rem;
        top: -3%;
        left: -10%;
      }
      @media (max-width: $mobile) {
        width: 9rem;
        height: 9rem;
        top: -1%;
      }
    }
    .bubble2 {
      width: 9rem;
      height: 9rem;
      top: 30%;
      right: -15%;
      @media (min-width: $big-desktop) {
        right: 10%;
      }
      @media (min-width: $default-desktop) {
        right: -8%;
      }
      @media (max-width: $tablet) {
        width: 8rem;
        height: 8rem;
        right: -10%;
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
      left: -10%;
      @media (min-width: $big-desktop) {
        left: -5%;
        bottom: -2%;
      }
      @media (min-width: $default-desktop) {
        left: -5%;
        bottom: -3%;
      }
      @media (max-width: $tablet) {
        width: 7rem;
        height: 7rem;
        left: -5%;
      }
      @media (max-width: $mobile) {
        width: 5rem;
        height: 5rem;
      }
    }
  }
  .additionalInformation {
    width: 45%;
    @media (max-width: $tablet) {
      margin-top: 4rem;
      width: 100%;
    }
    @media (max-width: $mobile) {
      margin-top: 2rem;
      width: 100%;
    }
  }
}
</style>
