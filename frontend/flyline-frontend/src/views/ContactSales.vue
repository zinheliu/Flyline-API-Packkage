<template>
  <div class="signup-page pb-0 h-100 d-flex flex-column position-relative">
    <div class="images d-none d-lg-block h-100 w-100">
      <img src="@/assets/images/head_images/Additional elements 4.png" alt="">
      <img src="@/assets/images/head_images/Additional elements 4.png" alt="">
    </div>
    <div class="landing-max-width mx-auto my-auto">
      <div class="d-flex">
        <div class="signup-desc-card auth-card text-left mr-md-5 py-40-px d-none d-md-block">
          <div>
            <img src="@/assets/images/head_images/Additional elements 5.png" alt="" class="l-i-1 d-none d-lg-block">
            <p class="d-title-text__2">Join travel innovators building on Flyline</p>
            <div class="v-bar mb-4"></div>
            <p class="d-desc-text">Drop a line to our sales team and we’ll get back to you ASAP to answer any questions you may have.</p>
            <p class="d-title-text__2 mt-4">Questions?</p>
            <p class="d-desc-text mb-1">
              <span>Have a question on pricing?</span> &nbsp;
              <u class="cursor-pointer hover-primary-color" @click="goTo('ContactSales')">Contact our sales team</u>
            </p>
            <p class="d-desc-text">
              <span>Questions on integration?</span> &nbsp;
              <u class="cursor-pointer hover-primary-color" @click="goTo('Doc')">Review our API Documentation</u>
            </p>
          </div>
        </div>
        <contact-sales-form-card />
      </div>
    </div>
  </div>
</template>

<script>
import ContactSalesFormCard from "@/components/Auth/ContactSalesFormCard";
import { mapGetters } from "vuex";
export default {
  components: {
    ContactSalesFormCard,
  },
  methods: {
    goTo(name){
      if(name) this.$router.push({name})
    },
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
        bottom: 50px
        left: -59px
      &:nth-child(2)
        width: 194px
        height: 156px
        right: -73px
  .l-i-1
    width: 122px
    height: 73px
    margin-top: -80px
    margin-bottom: 50px
</style>
