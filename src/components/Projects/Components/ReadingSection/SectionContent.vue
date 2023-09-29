<template>
  <div :class="'subHeader ' + (isInverted ? 'inverted' : '')">
    {{ sectionName }}
  </div>
  <div :class="'sectionContent ' + (isInverted ? 'inverted' : '')">
    <div class="sectionText">{{ project.features }}</div>
    <div class="sectionIcon">
      <img :src="iconPath" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["sectionName", "project", "iconPath", "isInverted"],
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
