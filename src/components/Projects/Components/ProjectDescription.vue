<template>
  <div class="projectDescriptionWrapper">
    <div class="projectDescription">
      <TextCard
        cardTitle="Projektbeschreibung"
        :cardText="project.description"
      ></TextCard>
      <ColorBubble
        v-for="i in 3"
        :key="i"
        :class="'bubble' + i"
        :color="project.colorCode"
      ></ColorBubble>
    </div>
  </div>
</template>
<script>
import TextCard from "@/shared/cards/TextCard.vue";
import ColorBubble from "@/shared/ColorBubble.vue";

export default {
  props: ["project"],

  components: {
    TextCard,
    ColorBubble,
  },
};
</script>
<style scoped lang="scss">
@import "../../../assets/sass/style.scss";

@keyframes scaleAnimation {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.projectDescriptionWrapper {
  display: flex;
  justify-content: center;
  position: relative;
  animation: scaleAnimation 0.5s ease-out;

  .bubble1 {
    width: 6rem;
    height: 6rem;
    top: 25%;
    left: 24%;
    @media (max-width: $tablet) {
      width: 8rem;
      height: 8rem;
      left: -5%;
      top: 10%;
    }
    @media (max-width: $mobile) {
      width: 5.5rem;
      height: 5.5rem;
      top: 22%;
      left: -15%;
    }
  }
  .bubble2 {
    width: 7rem;
    height: 7rem;
    top: -30%;
    right: 30%;
    @media (max-width: $tablet) {
      width: 8rem;
      height: 8rem;
    }
    @media (max-width: $mobile) {
      width: 7.5rem;
      height: 7.5rem;
      top: -15%;
      left: auto;
      right: 0%;
    }
  }
  .bubble3 {
    width: 5rem;
    height: 5rem;
    bottom: -15%;
    right: 25%;
    @media (max-width: $tablet) {
      width: 6rem;
      height: 6rem;
      right: -5%;
    }
    @media (max-width: $mobile) {
      width: 4.5rem;
      height: 4.5rem;
      right: -5%;
      bottom: -10%;
    }
  }
}
</style>
