<template>
  <div :class="bubbleClasses" :style="bubbleStyle"></div>
</template>

<script>
export default {
  props: ["color"],
  data() {
    return {
      isFading: true,
      floatDuration: "3s",
    };
  },
  computed: {
    bubbleClasses() {
      return {
        bubble: true,
        "fade-in-bottom": this.isFading,
        float: !this.isFading,
      };
    },
    bubbleStyle() {
      const color = this.color || "#651efe";
      return {
        background: `linear-gradient(40deg, ${color} 11.48%, rgba(137, 207, 240, 0) 94.23%)`,
        animationDuration: !this.isFading ? this.floatDuration : undefined,
      };
    },
  },
  created() {
    this.floatDuration = (Math.random() * 2 + 2).toFixed(2) + 's'; 
  },
  mounted() {
    setTimeout(() => {
      this.isFading = false;
    }, 600);
  },
};
</script>

<style scoped lang="scss">
@import "../assets/sass/style.scss";

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.bubble {
  position: absolute;
  border-radius: 360px;
}

.float {
  animation: float ease-in-out infinite;
}
</style>
