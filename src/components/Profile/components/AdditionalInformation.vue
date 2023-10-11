<template>
  <div class="additionalInformationWrapper">
    <div
      v-for="(chapter, index) in chapters"
      :key="chapter.header"
      :ref="(el) => (chapterElements[index] = el)"
      :class="'chapter ' + (isDesktopSize ? 'fade-in-bottom ' : '')"
      :style="`--animation-delay: ${index * 0.1}s`"
    >
      <div :class="'header ' + (index % 2 !== 0 ? 'reversed' : '')">
        {{ chapter.header }}
      </div>
      <div :class="'text ' + (index % 2 !== 0 ? 'reversed' : '')">
        {{ chapter.text }}
      </div>
    </div>
  </div>
</template>

<script>
import ProfileChapters from "@/data/ProfileChapters";

export default {
  computed: {
    isDesktopSize() {
      return window.innerWidth > 1024;
    },
  },
  data() {
    return {
      chapters: ProfileChapters,
      chapterElements: [],
      observers: [],
      animationPlayed: [],
    };
  },
  mounted() {
    this.observeVisibility();
  },
  methods: {
    observeVisibility() {
      this.$nextTick(() => {
        this.chapterElements.forEach((chapterElement, index) => {
          chapterElement.style.opacity = 0;
          this.animationPlayed[index] = false; 
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (!this.animationPlayed[index] && !this.isDesktopSize) {
                if (entry.isIntersecting) {
                  chapterElement.classList.add("fade-in-bottom");
                  chapterElement.style.animationDelay = `${index * 0.1}s`;
                  this.animationPlayed[index] = true; 
                } else {
                  chapterElement.classList.remove("fade-in-bottom");
                  chapterElement.style.animationDelay = "0s";
                }
              }
            });
          });
          observer.observe(chapterElement);
          this.observers.push(observer);
        });
      });
    },
  },
  beforeUnmount() {
    this.observers.forEach((observer) => observer.disconnect());
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/sass/style.scss";
.additionalInformationWrapper {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .chapter {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation-delay: var(--animation-delay, 0s);
    animation-fill-mode: both;
    .header {
      font-size: $font-size-xl;
      font-weight: bold;
      text-align: start;
    }
    .text {
      font-size: $font-size-lg;
      text-align: start;
      @media (max-width: $mobile) {
        font-size: $font-size-md;
      }
    }
  }
}
.reversed {
  text-align: end !important;
}
</style>
