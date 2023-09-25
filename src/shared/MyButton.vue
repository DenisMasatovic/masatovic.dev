<template>
  <button type="button" :class="buttonClass" :disabled="buttonDisabled">
    <span v-if="!isLoading">{{ buttonText }}</span>
    <Spinner v-else :color="spinnerColor" />
  </button>
</template>

<script>
import Spinner from "../shared/MySpinner.vue";

export default {
  components: { Spinner },
  props: ["buttonClass", "buttonText", "isLoading", "buttonDisabled"],
  computed: {
    spinnerColor() {
      return this.buttonClass === "primary" ? "white" : "black";
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/sass/style.scss";

button {
  font-family: "Anonymous";
  padding: 0.7em 1.2em;
  cursor: pointer;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s;
  font-size: $font-size-md;
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
}

.primary {
  color: black;
  background-color: white;
  border-radius: 25px;
}
.staticPrimary {
  color: black;
  background-color: white;
  border-radius: 25px;
}
.secondary {
  color: white;
  border: 2px solid white;
  border-radius: 25px;
  background-color: transparent;
}
</style>
