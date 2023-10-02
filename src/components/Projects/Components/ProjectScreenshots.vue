<template>
  <div class="projectScreenshots">
    <div class="subHeader">Screenshots</div>
    <div class="screenshotModes">
      <span
        :class="
          'screenshotModeOption ' +
          (screenshotMode === allScreenshotModes.DESKTOP
            ? 'selectedScreenshotMode'
            : '')
        "
        @click="screenshotMode = allScreenshotModes.DESKTOP"
        >Desktop</span
      >
      <span
        :class="
          'screenshotModeOption ' +
          (screenshotMode === allScreenshotModes.TABLET
            ? 'selectedScreenshotMode'
            : '')
        "
        @click="screenshotMode = allScreenshotModes.TABLET"
        >Tablet</span
      >
      <span
        :class="
          'screenshotModeOption ' +
          (screenshotMode === allScreenshotModes.MOBILE
            ? 'selectedScreenshotMode'
            : '')
        "
        @click="screenshotMode = allScreenshotModes.MOBILE"
        >Mobile</span
      >
    </div>
    <div class="screenshotCarousel" v-viewer="{ movable: false, title: false }">
      <div
        v-for="(image, index) in screenshotMode === allScreenshotModes.DESKTOP
          ? project.screenshotsDesktop
          : screenshotMode === allScreenshotModes.TABLET
          ? project.screenshotsTablet
          : project.screenshotsMobile"
        :key="index"
      >
        <img :src="image" class="screenshot" />
      </div>
    </div>
  </div>
</template>
<script>
import ScreenshotMode from "@/Types/ScreenshotMode.js";
export default {
  props: ["project"],
  data() {
    return {
      allScreenshotModes: ScreenshotMode,
      screenshotMode: ScreenshotMode.DESKTOP,
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../../assets/sass/style.scss";

.projectScreenshots {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .subHeader {
    font-size: $font-size-xl;
    text-align: start;
    font-weight: bold;
  }
  .screenshotModes {
    display: flex;
    justify-content: flex-start;
    gap: 3rem;

    .screenshotModeOption {
      cursor: pointer;
    }
  }
  .screenshotCarousel {
    display: flex;
    gap: 3rem;
    overflow-x: scroll;
    scrollbar-width: none; /* For Firefox */
    &::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Opera */
    }
    @media (max-width: $mobile) {
      gap: 2rem;
    }
    .screenshot {
      border-radius: 25px;
      height: 10vw;
      cursor: pointer;
      @media (max-width: $tablet) {
        height: 15vw;
      }
      @media (max-width: $mobile) {
        height: 25vw;
      }
    }
  }
  .selectedScreenshotMode {
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>
