<template>
  <div class="bubble fade-in-bottom" :style="bubbleStyle"></div>
</template>
<script>
export default {
  props: ["color"],
  computed: {
    bubbleStyle() {
      // If color prop is provided, use it for the linear gradient, else use the default color
      const color = this.color || "#651efe";
      return {
        background: `linear-gradient(40deg, ${color} 11.48%, rgba(137, 207, 240, 0) 94.23%)`,
      };
    },
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
  animation: float 3s ease-in-out infinite;
}
</style>
