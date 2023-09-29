<template>
  <div class="readingSection">
    <div class="featuresSection">
      <SectionContent
        sectionName="Features"
        :project="project"
        :iconPath="starIconPath"
        :isInverted="false"
      ></SectionContent>
    </div>
    <div class="implementationSection">
      <SectionContent
        sectionName="Umsetzung"
        :project="project"
        :iconPath="wrenchIconPath"
        :isInverted="true"
      ></SectionContent>
    </div>
    <div class="learningsSection">
      <SectionContent
        sectionName="Learnings"
        :project="project"
        :iconPath="eyeIconPath"
        :isInverted="false"
      ></SectionContent>
    </div>
  </div>
</template>
<script>
import SectionContent from "./SectionContent.vue";
export default {
  props: ["project"],

  components: {
    SectionContent,
  },

  data() {
    return {
      starIconPath:
        "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Ficons%2Ficon_star.png?alt=media",
      wrenchIconPath:
        "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Ficons%2Ficon_wrench.png?alt=media",
      eyeIconPath:
        "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Ficons%2Ficon_eye.png?alt=media",
    };
  },
};
</script>
<style lang="scss">
.readingSection {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
