<template>
  <div class="signup-page pb-0 d-flex flex-column mx-auto auth-card">
    <div class="px-2 px-md-0 page-wrp">
      <div class="auth-logo mb-40-px mx-auto cursor-pointer" @click="goHome">
        <img
          src="@/assets/images/svg/flyline_logo_dark.svg"
          class="h-100 w-100"
          v-if="dark"
        />
        <img
          src="@/assets/images/svg/flyline_logo.svg" style="margin-top: 14px;"
          class="h-100 w-100"
          v-else
        />
      </div>
      <p class="s-title d-none d-lg-block">Travel technology, built for the modern day</p>
      <div class="success-card mb-5 text-left" v-if="success">
        <div class="auth-card mx-auto py-40-px">
          <p class="mb-3 auth-title">Welcome {{ firstName }}</p>
          <p class="mb-5 success-desc-text">
            Congrats! You’ve requested access to the FlyLine developer platform. A
            team member will reach out shortly to get you set up.
          </p>
        </div>
        <p class="mt-40-px mx-2 mx-md-0 f-14-px text-center">
          <span class="text-secondary mr-2">Back to</span>
          <span class="text-primary cursor-pointer" @click="gotoLogin"
            >Sign in</span
          >
        </p>
      </div>
      <div v-else>
        <div class="d-flex justify-content-between py-4 mb-4">
          <div class="signup-desc-card text-left pt-20-px d-none d-lg-block mx-auto">
            <p class="s-title__4">Welcome to Flyline, lets jump in</p>
            <p class="d-desc-text__2">At Flyline we provide a modern and simple product suite to access rich content, real-time pricing, flight availability, and much more from hundreds of airlines.</p>
            <p class="d-desc-text__2">We've just launched our product suite. Want to learn more? Click below!</p>
            <p class="s-title text-primary cursor-pointer" @click="learnMore" style="font-size: 12px;">
              Learn more about Flyline
              <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="" style="width: 10px;">
            </p>
          </div>
          <div class="h-line d-none d-lg-block"></div>
          <div class="signup-desc-card__2 mx-auto pt-20-px text-center text-lg-left">
            <div class="d-lg-none mt-5">
              <p class="s-title__4 text-center">Welcome to Flyline</p>
              <p class="d-desc-text__2 mb-4 text-center">At Flyline we provide a modern and simple product suite to access rich content, real-time pricing, flight availability, and much more from hundreds of airlines.</p>
              <p class="d-desc-text__2 mb-0 text-center">We've just launched our product suite. Want to learn more? Click below!</p>
              <div class="w-100 dash my-5"></div>
            </div>
            <p class="s-title__4 text-center text-lg-left">Let's start building</p>
            <div class="w-100 dash mb-3 d-none d-lg-block"></div>
            <p class="d-desc-text__2 mb-4 text-center text-lg-left">What will you build with our platform? Get started with your developer account below!</p>
            <b-btn class="custom-btn c-btn" @click="gotoSignup" style="height: 39px; font-size: 12px;">Get Access</b-btn>
            <div class="d-flex or-wrp my-3">
              <div class="dash"></div>
              <span>or</span>
              <div class="dash"></div>
            </div>
            <b-btn class="custom-btn c-btn" @click="gotoLogin" style="height: 39px; font-size: 12px;">Log In</b-btn>
          </div>
          <!-- <signup-form-card @done="showSuccess" class="mx-auto" /> -->
        </div>
      </div>
    </div>
    <!-- <LandingFooter :small="true" class="w-100 footer-wrp py-3" /> -->
  </div>
</template>

<script>
import SignupFormCard from "@/components/Auth/SignupFormCard2";
import AuthFooter from "@/components/Auth/AuthFooter";
import { mapGetters } from "vuex";
import LandingFooter from '@/components/Footer/LandingFooter5'
export default {
  components: {
    SignupFormCard,
    AuthFooter,
    LandingFooter
  },
  data() {
    return {
      success: false,
      firstName: ""
    };
  },
  computed: {
    ...mapGetters("UTIL", ["dark"]),
    emailQuery(){
      return this.$route.query.email
    },
  },
  methods: {
    learnMore(){
      this.$router.push({ name: "Suit" });
    },
    goHome() {
      this.$router.push({ name: "Landing" });
    },
    gotoLogin() {
      this.$router.push({ name: "Login" });
    },
    gotoSignup() {
      this.$router.push({ name: "Signup" });
    },
    showSuccess(firstName) {
      this.success = true;
      this.firstName = firstName;
    }
  }
};
</script>

<style lang="sass" scoped>
.auth-card
  max-width: 100% !important
  @media screen and (min-width: 1100px)
    width: 680px !important
    max-width: 680px !important
  .page-wrp
    @media screen and (max-width: 800px)
      min-height: 100vh
      display: flex
      flex-flow: column
      justify-content: center
      margin-top: -50px
  .s-title
    font-size: 14px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    line-height: 2.5
    letter-spacing: normal
    color: #333333
    &__2
      @extend .s-title
      font-size: 22px
    &__3
      @extend .s-title
      font-size: 14px
      line-height: normal
    &__4
      @extend .s-title
      font-size: 14px
      line-height: normal
      @media screen and (max-width: 800px)
        font-size: 18px
  .c-btn
    width: 100%
    border: solid 1px rgba(14, 49, 120, 0.1)
    background-color: #ffffff
    font-size: 10px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #333333
    height: 35.9px
    &:hover, &:active , &:focus
      border: solid 1px rgba(14, 49, 120, 0.1) !important
      background-color: #ffffff !important
    @media screen and (max-width: 800px)
      max-width: 220px
  .or-wrp
    align-items: center
    span
      font-family: GILROY-SEMIBOLD
      font-size: 12px
      color: #707070
      width: 30px
      text-align: center
    .dash
      width: calc((100% - 30px) / 2)
.h-line
  width: 1px
  background-color: rgba(14, 49, 120, 0.1)
.signup-page
  padding: 30px 0 20px 0
  @media screen and (min-width: 1100px)
    margin-bottom: 110px

  .accepting-invitation
    min-height: 70vh
  .signup-desc-card
    max-width: 485px
    // margin-bottom: 76px
    border: none
    @media screen and (min-width: 1100px)
      width: 250px
      &__2
        max-width: 250px
        width: 100%
    @media screen and (max-width: 800px)
      &__2
        padding: 0 20px
    .auth-btn
      margin-top: 21px
    .d-dash
      border-bottom: 3px solid #203BE7
      border-radius: 4px
    .d-title-text
      font-size: 24px
      font-family: GILROY-BOLD
      font-stretch: normal
      font-style: normal
      line-height: 1.46
      letter-spacing: normal
      color: #333333
  .d-desc-text
    font-size: 14px
    font-family: GILROY-Medium
    font-stretch: normal
    font-style: normal
    line-height: 2
    letter-spacing: normal
    color: #707070
    &__ln2
      @extend .d-desc-text
      line-height: 2.2
    &__2
      font-size: 12px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 2
      letter-spacing: normal
      color: #888888
      // max-width: 203px
    &__3
      @extend .d-desc-text
      font-size: 12px
  .success-card
    .success-desc-text
      font-size: 14px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 1.71
      letter-spacing: normal
      color: #707070
</style>
