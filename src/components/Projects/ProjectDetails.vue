<template>
  <div class="projectDetailsWrapper">
    <div class="headLine">
      <div>{{ project.name }}</div>
    </div>
    <FrontendImages :project="project"></FrontendImages>
    <ProjectDescription :project="project"></ProjectDescription>
    <ProjectScreenshots :project="project"></ProjectScreenshots>
    <ReadingSection :project="project"></ReadingSection>
    <ProjectTechStack :project="project"></ProjectTechStack>
    <div class="callToAction">
      <div class="subHeader">Interresiert an ähnlichen Projekten?</div>
      <div class="contactButton">
        <MyButton
          buttonClass="secondary"
          buttonText="Kontakt"
          @click="$router.push('/kontakt')"
        ></MyButton>
      </div>
    </div>
  </div>
</template>
<script>
import Projects from "../../data/Projects.js";

import FrontendImages from "./Components/FrontendImages.vue";
import ProjectDescription from "./Components/ProjectDescription.vue";
import ProjectScreenshots from "./Components/ProjectScreenshots.vue";
import ReadingSection from "./Components/ReadingSection/ReadingSection.vue";
import ProjectTechStack from "./Components/ProjectTechStack.vue";
import MyButton from "@/shared/MyButton.vue";
export default {
  components: {
    FrontendImages,
    ProjectDescription,
    ProjectScreenshots,
    ReadingSection,
    ProjectTechStack,
    MyButton,
  },
  data() {
    return {
      project: {},
    };
  },
  mounted() {
    this.fetchProjectData();
  },
  methods: {
    fetchProjectData() {
      const projectId = this.$route.params.id;
      this.project = Projects.find((project) => project.id === projectId);
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";

.projectDetailsWrapper {
  padding: 0rem 5rem 4rem;
  @media (min-width: $big-desktop) {
    padding: 0rem 20rem 4rem;
  }
  @media (min-width: $default-desktop) {
    padding: 0rem 10rem 4rem;
  }
  display: flex;
  flex-direction: column;
  gap: 5rem;
  @media (max-width: $mobile) {
    padding: 5% 1.5rem 8rem;
    gap: 3rem;
  }
  .headLine {
    margin-bottom: -2rem;
    @media (max-width: $mobile) {
      margin-bottom: 0rem;
    }
    div {
      font-size: $font-size-xxl;
      @media (max-width: $mobile) {
        font-size: $font-size-lg;
      }
      font-weight: bold;
      width: 100%;
      text-align: left;
    }
  }
}

.callToAction {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  .subHeader {
    font-size: $font-size-xl;
    font-weight: bold;
  }
  .contactButton {
    display: flex;
    justify-content: center;
  }
}
</style>
