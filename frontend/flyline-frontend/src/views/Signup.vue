<template>
  <div class="signup-page pb-0 h-100 d-flex flex-column position-relative">
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
    <div class="landing-max-width mx-auto my-auto" v-else>
      <div class="d-flex align-items-lg-center">
        <!-- <div class="signup-desc-card auth-card text-left mr-md-5 py-40-px d-none d-md-block">
          <div>
            <p class="d-title-text__2">Request Access to Flyline</p>
            <div class="w-100 dash mb-4"></div>
            <p class="d-desc-text mb-1">
              New developers must apply for a developer account to access the FlyLine developer platform. Once approved, you can begin to use all we have to offer.
            </p>
          </div>
        </div> -->
        <div class="signup-desc-card auth-card text-left mr-md-5 py-40-px d-none d-md-block">
          <div>
            <p class="mb-3 d-title-text">
              <span v-if="emailQuery">Create your developer account</span>
              <span v-else>Request Access to Flyline</span>
            </p>
            <div class="mb-4 w-100 dash d-dash"></div>
            <p class="mb-5 d-desc-text__ln2">
              <span v-if="emailQuery">Welcome to Flyline! You have been invited to a company account. Enter the details to the right and start building with Flyline.</span>
              <span v-else>New developers must apply for a developer account to access the
              FlyLine developer platform. Once approved, you can begin to use
              all we have to offer.</span>
            </p>
          </div>
          <b-btn class="custom-btn auth-btn w-100 text-center" @click="goTo('Doc')">Learn More about our API’s</b-btn>
        </div>
        <signup-form-card @done="showSuccess" class="form-card" />
      </div>
    </div>
  </div>
</template>

<script>
import SignupFormCard from "@/components/Auth/SignupFormCard";
import AuthFooter from "@/components/Auth/AuthFooter";
import { mapGetters } from "vuex";
export default {
  components: {
    SignupFormCard,
    AuthFooter
  },
  data() {
    return {
      success: false,
      firstName: ""
    };
  },
  computed: {
    ...mapGetters("UTIL", ["dark"]),
    emailQuery() {
      return this.$route.query.email;
    }
  },
  methods: {
    learnMore() {
      this.$router.push({ name: "Suit" });
    },
    goHome() {
      this.$router.push({ name: "Landing" });
    },
    gotoLogin() {
      this.$router.push({ name: "Login" });
    },
    goTo(name) {
      if (name) this.$router.push({ name });
    },
    showSuccess(firstName) {
      this.success = true;
      this.firstName = firstName;
    }
  }
};
</script>

<style lang="sass" scoped>
.landing-max-width
  @media screen and (min-width: 1100px)
    max-width: 1100px
.signup-page
  padding: 50px 0 20px 0
  .accepting-invitation
    min-height: 70vh
  .form-card
    max-width: 420px
  .signup-desc-card
    max-width: 485px
    margin-bottom: 76px
    border: none
    .auth-btn
      margin-top: 21px
    .d-dash
      border-bottom: 1px solid #EDEEF6
      border-radius: 4px
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
    .d-title-text
      font-size: 22px
      font-family: GILROY-BOLD
      font-stretch: normal
      font-style: normal
      line-height: 1.46
      letter-spacing: normal
      color: #333333
      &__2
        @extend .d-title-text
        font-size: 18px
        line-height: normal
        color: #000000
    .v-bar
      height: 3px
      border-radius: 4px
      background-color: #203be7
  .success-card
    .success-desc-text
      font-size: 14px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 1.71
      letter-spacing: normal
      color: #707070

  .images
    position: absolute
    img
      position: absolute
      &:nth-child(1)
        width: 280px
        height: 156px
        bottom: 80px
        left: -59px
      &:nth-child(2)
        width: 194px
        height: 156px
        right: -73px
  .l-i-1
    width: 38px
    height: 44px
    margin-top: -50px
    margin-bottom: 50px
    margin-left: auto
</style>
