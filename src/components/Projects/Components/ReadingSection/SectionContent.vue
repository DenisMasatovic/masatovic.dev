<template>
  <div
    ref="firstAnimatedDiv"
    :class="'subHeader ' + (isInverted ? 'inverted' : '')"
  >
    {{ sectionName }}
  </div>
  <div
    ref="secondAnimatedDiv"
    :class="'sectionContent ' + (isInverted ? 'inverted' : '')"
  >
    <div class="sectionText">{{ project.features }}</div>
    <div class="sectionIcon">
      <img :src="iconPath" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["sectionName", "project", "iconPath", "isInverted"],

  mounted() {
    this.observeVisibility();
  },
  data() {
    return {
      observers: [],
      animationPlayed: false,
    };
  },
  methods: {
    observeVisibility() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!this.animationPlayed) {
            if (entry.isIntersecting && entry) {
              if (this.isInverted) {
                this.$refs.firstAnimatedDiv.classList.add("fade-in-right");
                this.$refs.secondAnimatedDiv.classList.add("fade-in-right");
                this.animationPlayed = true;
              } else {
                this.$refs.firstAnimatedDiv.classList.add("fade-in-left");
                this.$refs.secondAnimatedDiv.classList.add("fade-in-left");
                this.animationPlayed = true;
              }
            } else {
              this.$refs.firstAnimatedDiv.classList.remove(
                "fade-in-left",
                "fade-in-right"
              );
              this.$refs.secondAnimatedDiv.classList.remove(
                "fade-in-left",
                "fade-in-right"
              );
            }
          }
        });
      });
      observer.observe(this.$refs.firstAnimatedDiv);
      observer.observe(this.$refs.secondAnimatedDiv);
      this.observers.push(observer);
    },
  },
  beforeUnmount() {
    this.observers.forEach((observer) => observer.disconnect()); // disconnect all observers
  },
};
</script>
<style scoped lang="scss">
@import "../../../../assets/sass/style.scss";

.subHeader {
  font-size: $font-size-xl;
  text-align: start;
  font-weight: bold;
  margin-bottom: 1rem;
}
.sectionContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  gap: 2rem;

  .sectionText {
    width: 70%;
    font-size: $font-size-lg;
  }
  .sectionIcon {
    img {
      width: 5vw;
    }
  }
}

.inverted {
  text-align: end;
  flex-direction: row-reverse;
}
</style>
