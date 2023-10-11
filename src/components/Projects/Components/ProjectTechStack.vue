<template>
  <div class="subHeader">Tech-Stack</div>
  <div class="techStacks">
    <div
      v-for="(stack, index) in project.techStack"
      :key="index"
      :ref="(el) => (stackObjects[index] = el)"
    >
      <div class="stackObject">
        <img :src="stack.logo" /><span>{{ stack.technology }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      stackObjects: [],
      observers: [],
      animationPlayed: [], 
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.observeVisibility();
    });
  },
  methods: {
    observeVisibility() {
      this.stackObjects.forEach((stackObject, index) => {
        stackObject.style.opacity = 0;
        this.animationPlayed[index] = false; 
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!this.animationPlayed[index]) {
              if (entry.isIntersecting) {
                stackObject.classList.add("fade-in-bottom");
                stackObject.style.animationDelay = `${index * 0.1}s`;
                this.animationPlayed[index] = true; 
              } else {
                stackObject.classList.remove("fade-in-bottom");
                stackObject.style.animationDelay = "0s";
              }
            }
          });
        });
        observer.observe(stackObject);
        this.observers.push(observer);
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

.subHeader {
  font-size: $font-size-xxl;
  font-weight: bold;
}

.techStacks {
  display: flex;
  justify-content: space-around;
  @media (max-width: $tablet) {
    display: flex;
  }
  @media (max-width: $mobile) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
  }
  .stackObject {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    img {
      height: 10vw;
      max-height: 200px;
      @media (max-width: $tablet) {
        height: 12vw;
        object-fit: contain;
      }
      @media (max-width: $mobile) {
        height: 20vw;
        object-fit: contain;
      }
    }
    span {
      font-size: $font-size-lg;
      font-weight: bold;
    }
  }
}
</style>
