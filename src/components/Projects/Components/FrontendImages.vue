<template>
  <div class="frontendImagesWrapper" v-if="project.includesFrontend">
    <div class="frontendImages">
      <div
        v-for="(image, index) in project.detailAssets"
        :key="index"
        :style="`--animation-delay: ${index * 0.1}s`"
      >
        <img
          :src="image"
          :class="index === 0 || index === 2 ? 'top-margin' : ''"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["project"],
};
</script>
<style scoped lang="scss">
@import "../../../assets/sass/style.scss";

@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
.frontendImagesWrapper {
  display: flex;
  justify-content: center;
  .frontendImages {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    @media (max-width: $mobile) {
      gap: 0rem;
    }
    img {
      height: 12vw;
      @media (max-width: $tablet) {
        height: 20vw;
      }
      @media (max-width: $mobile) {
        height: 30vw;
      }
      animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation-delay: var(--animation-delay, 0s);
    }
  }
}
.top-margin {
  margin-top: 5vw;

  @media (max-width: $tablet) {
    margin-top: 10vw;
  }
  @media (max-width: $mobile) {
    margin-top: 15vw;
  }
}
</style>
