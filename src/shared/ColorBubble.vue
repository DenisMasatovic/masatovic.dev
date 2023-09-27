<template>
  <div class="bubble"></div>
</template>
<script>
export default {};
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
  background: linear-gradient(
    40deg,
    $masatovic-purple 11.48%,
    rgba(137, 207, 240, 0) 94.23%
  );
  border-radius: 360px;
  @media (max-width: $tablet) {
    animation: float 3s ease-in-out infinite; // Add this line
  }
}
</style>
