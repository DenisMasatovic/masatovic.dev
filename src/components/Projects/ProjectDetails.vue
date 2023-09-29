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
    <div ref="animatedDiv" class="callToAction">
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
      //observers: [],
    };
  },
  mounted() {
    this.fetchProjectData();
    this.$nextTick(() => {
      //this.observeCTAVisibility();
    });
  },
  methods: {
    fetchProjectData() {
      const projectId = this.$route.params.id;
      this.project = Projects.find((project) => project.id === projectId);
    },
    /* observeCTAVisibility() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.style.opacity = 0;

          if (entry.isIntersecting && entry) {
            if (this.isInverted) {
              this.$refs.animatedDiv.classList.add("fade-in-bottom");
            } else {
              this.$refs.animatedDiv.classList.add("fade-in-bottom");
            }
          } else {
            this.$refs.animatedDiv.classList.remove("fade-in-bottom");
          }
        });
      });
      observer.observe(this.$refs.animatedDiv);
      this.observers.push(observer);
    }, */
  },
 /*  beforeUnmount() {
    this.observers.forEach((observer) => observer.disconnect()); // disconnect all observers
  }, */
};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";

.projectDetailsWrapper {
  padding: 0rem 5rem 4rem;
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
