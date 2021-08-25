<template>
  <div class="unifield-platform mt-0 text-left text-md-center px-md-5">
    <div
      class="landing-max-width mx-auto pl-3 pl-md-2 d-flex flex-column justify-content-center h-100"
    >
      <p class="up-title gilroy-b mb-4-px">Ready to start integrating?</p>
      <p class="up-subtitle mt-6-px mb-10-px">
        Ready to build? Review our API documentation, then head over to our
        sign-up page to request access to our developer portal. Once you are
        granted access start shopping flights in ten minutes.
      </p>
      <div class="d-flex flex-column flex-md-row mt-5">
        <b-btn
          class="mr-md-4 read-doc-btn gilroy-b ml-0 ml-md-auto"
          @click="goTo('Pricing')"
          >Review API Documentation</b-btn
        >
        <b-btn
          class="read-doc-btn gilroy-b mt-3 mt-md-0 mr-0 mr-md-auto"
          @click="goTo('Signup')"
          >Request API Access</b-btn
        >
        <!-- <p class="sub-text-btn my-0 text-white d-flex align-items-center mt-3 mt-md-0 gilroy-b">
          <span class="mr-md-3 f-16-px mt-1">View Tutorials</span>
          <b-icon icon="arrow-right-short" class="arrow-right" scale="1.3"></b-icon>
        </p> -->
      </div>
      <!-- <div class="dash w-100 my-5"></div>
      <div class="features d-flex justify-content-center flex-wrap">
        <div class="feature">
          <img class="feature-image" src="@/assets/images/svg/search.svg" alt="">
          <p class="mb-0 feature-text gilroy-b">Search API</p>
        </div>
        <div class="feature">
          <img class="feature-image" src="@/assets/images/svg/booking.svg" alt="">
          <p class="mb-0 feature-text gilroy-b">Booking API</p>
        </div>
        <div class="feature">
          <img class="feature-image" src="@/assets/images/svg/schedules.svg" alt="">
          <p class="mb-0 feature-text gilroy-b mt-2">Historical Pricing API</p>
        </div>
        <div class="feature">
          <img class="feature-image" src="@/assets/images/svg/autopilot.svg" alt="">
          <p class="mb-0 feature-text gilroy-b">Reshop API</p>
        </div>
        <div class="feature">
          <img class="feature-image" src="@/assets/images/svg/takeoff.svg" alt="">
          <p class="mb-0 feature-text gilroy-b">Schedules API</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(name) {
      this.$router.push({ name });
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="sass" scoped>
.unifield-platform
  // background-color: #00aeee
  // height: 276px
  padding-bottom: 130px
  @media screen and (max-width: 800px)
    padding-top: 20px
    padding-bottom: 20px
  .up-txt
    font-size: 16px
    font-weight: bold
    font-stretch: normal
    font-style: normal
    line-height: 1.44
    letter-spacing: normal
    color: #ffffff
  .up-title
    font-size: 42px
    font-stretch: normal
    font-style: normal
    line-height: 1.95
    letter-spacing: normal
    color: #333333
    @media screen and (max-width: 800px)
      font-size: 30px
  .up-subtitle
    max-width: 850px
    margin: 0 auto
    // height: 40px
    font-size: 18px
    font-stretch: normal
    font-style: normal
    font-family: gilroy-medium
    line-height: 2
    letter-spacing: normal
    color: #707070
    width: 97%
    @media screen and (max-width: 800px)
      margin: 20px 0
  .up-link
    font-size: 18px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 1.44
    letter-spacing: normal
    color: #ffffff

.sub-text-btn
  font-size: 18px
  font-weight: GILROY-BOLD
  font-stretch: normal
  font-style: normal
  line-height: 1.44
  letter-spacing: normal
  color: #ffffff
  span
    margin-right: 40px
    @media screen and (max-width: 800px)
      margin-right: 20px

.read-doc-btn
  width: 263px
  height: 58px
  background-color: #00aeef
  font-size: 16px
  font-stretch: normal
  font-style: normal
  letter-spacing: normal
  color: #ffffff
  border: none
  outline: none
  box-shadow: none
  border-radius: 4px
  &:focus, &:hover, &:active
    border: none
    outline: none
    box-shadow: none
    background-color: #00aeef
    color: #ffffff

.features
  // margin-top: 80px
  // margin-bottom: 60px
  .feature
    border-radius: 10px
    border: solid 1px #e9e9e9
    background-color: #ffffff
    width: 103px
    height: 102px
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    margin-right: 24px
    &:last-child
      margin-right: 0
    @media screen and (max-width: 800px)
      margin-bottom: 20px
  .feature-image
    height: 45px
    width: 53px
  .feature-text
    font-size: 12px
    font-stretch: normal
    font-style: normal
    // line-height: 2.67
    letter-spacing: normal
    color: #8e969f
    @media screen and (max-width: 800px)
      text-align: center
</style>
