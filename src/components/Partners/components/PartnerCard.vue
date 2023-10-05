<template>
  <div class="card">
    <div class="partnerMemoji">
      <img :src="partner.memojiUrl" />
    </div>
    <div class="partnerInformation">
      <div class="partnerName">{{ partner.name }}</div>
      <div class="partnerLink">
        <a class="partnerCompany" :href="partner.companyUrl"
          >{{ partner.companyName }}
        </a>
        <img :src="linkIcon" alt="" />
      </div>
      <div class="partnerProfession">{{ partner.profession }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["partner"],

  computed: {
    linkIcon() {
      return "https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Ficons%2Ficon_link.png?alt=media";
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../../assets/sass/style.scss";

.card {
  display: flex;
  gap: 2rem;
  background-image: linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 1.06%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Fimages%2Ffrost.png?alt=media");
  //background-size: cover; /* This will scale the image to cover the entire element */
  background-repeat: repeat; /* This will prevent the image from repeating */
  border: 1px solid rgba(183, 183, 183, 0.4);
  border-radius: 25px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  z-index: 10;
  position: relative;
  transition: transform 0.3s ease; /* Add transition effect for smooth scaling */
  cursor: pointer;
  @media (min-width: $tablet) {
    &:hover {
      transform: scale(1.05); /* Scale the size of the card by 20% on hover */
    }
  }
  padding: 1.5rem;
  width: 40vw;
  box-sizing: border-box;
  @media (max-width: $tablet) {
    width: 100%;
  }
  @media (max-width: $mobile) {
    padding: 1rem;
  }

  .partnerMemoji {
    display: flex;
    align-items: center;
    @media (max-width: $mobile) {
      height: 100%;

      img {
        height: 10vh;
      }
    }
  }

  .partnerInformation {
    display: flex;
    flex-direction: column;
    font-size: $font-size-lg;
    text-align: start;
    justify-content: center;
    gap: 1rem;
    .partnerName {
      font-weight: bold;
    }

    .partnerLink {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      @media (max-width: $mobile) {
        font-size: $font-size-md;
      }
      .partnerCompany {
        color: white;
      }
      img {
        height: 2vh;
        @media (max-width: $mobile) {
          height: 1.5vh;
        }
      }
    }

    .partnerProfession {
      @media (max-width: $mobile) {
        font-size: $font-size-md;
      }
    }
  }
}
</style>
