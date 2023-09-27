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
  padding: 0.5em 0.8em;
  cursor: pointer;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s;
  font-size: $font-size-md;
  max-width: fit-content;
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
}

.primary {
  color: black;
  background-color: white;
  border-radius: 25px;

  &:hover {
    background-color: $masatovic-purple;
    border: 2px solid $masatovic-purple;
    color: white;
    font-weight: bold;
  }
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
