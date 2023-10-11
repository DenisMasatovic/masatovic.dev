<template>
  <div class="card">
    <form @submit.prevent="submitForm">
      <div class="inputLine">
        <input
          type="text"
          id="name"
          v-model="formData.name"
          placeholder="Name"
          required
          @input="nameTouched = true"
          :class="{ error: !isNameValid && nameTouched }"
        />
        <div class="mandatoryInput">*</div>
      </div>
      <div class="inputLine">
        <input
          type="email"
          id="email"
          v-model="formData.email"
          placeholder="E-Mail"
          required
          @input="emailTouched = true"
          :class="{ error: !isEmailValid && emailTouched }"
        />
        <div class="mandatoryInput">*</div>
      </div>
      <div class="inputLine">
        <input
          type="tel"
          id="phone"
          v-model="formData.phone"
          placeholder="Telefon"
          required
          @input="phoneTouched = true"
          :class="{ error: !isPhoneValid && phoneTouched }"
        />
      </div>
      <div class="inputLine">
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="Nachricht"
          required
          cols="30"
          rows="5"
          @input="messageTouched = true"
          :class="{ error: !isMessageValid && messageTouched }"
        ></textarea>
        <div class="mandatoryText">*</div>
      </div>
      <MyButton
        buttonText="Senden"
        buttonClass="primary"
        :disabled="!isInputComplete"
      ></MyButton>
    </form>
  </div>
</template>

<script>
import MyButton from "@/shared/MyButton.vue";

export default {
  computed: {
    isInputComplete() {
      return (
        this.isNameValid &&
        this.isEmailValid &&
        this.isPhoneValid &&
        this.isMessageValid
      );
    },
    isNameValid() {
      return this.formData.name.trim() !== "";
    },
    isEmailValid() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(this.formData.email);
    },
    isPhoneValid() {
      const phoneRegex = /^[0-9\-+]{9,15}$/;
      return phoneRegex.test(this.formData.phone) || !this.formData.phone;
    },
    isMessageValid() {
      return this.formData.message.trim() !== "";
    },
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      nameTouched: false,
      emailTouched: false,
      phoneTouched: false,
      messageTouched: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.formData);
    },
  },
  components: { MyButton },
};
</script>
<style scoped lang="scss">
@import "../../../assets/sass/style.scss";
@keyframes scaleAnimation {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.card {
  animation: scaleAnimation 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  box-sizing: border-box;
  @media (max-width: $mobile) {
    gap: 2rem;
  }
  background-image: linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 1.06%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("https://firebasestorage.googleapis.com/v0/b/masatovic-dev.appspot.com/o/images%2FcoreAssets%2Fimages%2Ffrost.png?alt=media");
  background-repeat: repeat; 
  border: 1px solid rgba(183, 183, 183, 0.4);
  border-radius: 25px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  z-index: 10;
  position: relative;
  transition: transform 0.3s ease; 
  @media (min-width: $tablet) {
    &:hover {
      transform: scale(1.05); 
    }
  }
  padding: 2.5rem;
  height: 70vh;
  width: 100%;
  @media (max-width: $tablet) {
    height: calc(45vh + 2rem);

    width: 100%;
  }
  @media (max-width: $mobile) {
    padding: 1.5rem;
    height: calc(55vh + 3rem);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    div {
      width: 100%;
      input {
        font-size: $font-size-md;
        width: 100%;
        font-family: "Anonymous";
        box-sizing: border-box;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        border: none;
        outline: none;
      }
      textarea {
        width: 100%;
        font-size: $font-size-md;
        font-family: "Anonymous";
        box-sizing: border-box;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        outline: none;
        border: none;
        resize: none;
        height: 25vh;
        @media (max-width: $tablet) {
          height: 18vh;
        }
       
      }
      input,
      textarea {
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); 
      }
    }
  }
  .inputLine {
    position: relative;
    .mandatoryInput {
      position: absolute;
      right: -3%;
      top: -30%;
      width: auto;
      font-weight: bold;
      font-size: $font-size-lg;
    }
    .mandatoryText {
      position: absolute;
      right: -3%;
      top: -8%;
      width: auto;
      font-weight: bold;
      font-size: $font-size-lg;
    }
  }
}
.error {
  color: red;
}
.error::placeholder {
  color: red;
}

.error::-webkit-input-placeholder {
  color: red;
}
.error::-moz-placeholder {
  color: red;
}
.error:-ms-input-placeholder {
  color: red;
}
.error:-moz-placeholder {
  color: red;
}
</style>
