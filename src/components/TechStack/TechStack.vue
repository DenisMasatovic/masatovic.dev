<template>
  <div class="techStackWrapper">
    <div class="topSection">
      <div class="headLine">
        <div>Tech-Stack</div>
      </div>
      <div class="subHeader">
        <div>
          Verfügbare Technologien und Frameworks, um Ihr Projekt zu realisieren.
        </div>
      </div>
    </div>
    <AvailableStack
      text="Frontend"
      :type="stackType.FRONTEND"
      :index="0"
    ></AvailableStack>
    <AvailableStack
      text="Backend"
      :type="stackType.BACKEND"
      :index="1"
    ></AvailableStack>
    <AvailableStack
      text="Datenbank"
      :type="stackType.DATABASE"
      :index="2"
    ></AvailableStack>
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
import StackType from "@/Types/StackType.js";
import MyButton from "@/shared/MyButton.vue";
import AvailableStack from "./Stacks/AvailableStack.vue";
export default {
  components: {
    AvailableStack,
    MyButton,
  },
  data() {
    return {
      stackType: StackType,
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/sass/style.scss";

.techStackWrapper {
  padding: 0rem 5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  @media (max-width: $mobile) {
    padding: 5% 1.5rem 8rem;
    gap: 2rem;
  }
  .headLine {
    margin-bottom: 2rem;
    @media (max-width: $mobile) {
      margin-bottom: 1rem;
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
  .subHeader {
    font-size: $font-size-lg;
    text-align: start;
    margin-bottom: 2rem;
    @media (max-width: $mobile) {
        font-size: $font-size-md;
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
      text-align: center;
      margin-bottom: 0rem;
      @media (max-width: $mobile) {
        font-size: $font-size-lg;
      }
    }
    .contactButton {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
