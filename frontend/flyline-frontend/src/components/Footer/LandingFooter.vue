<template>
  <div class="landing-footer mx-auto text-left px-3 px-md-0">
    <div class="dash w-100"></div>
    <div class="footer-wrapper footer-copyright-and-links mx-auto d-flex flex-column flex-md-row justify-content-between align-items-lg-center my-4">
      <p class="footer-subtitle mb-0 mt-2 mt-md-0">
        <header-logo />
      </p>
      <div class="mt-5 mt-lg-0 d-flex flex-column flex-lg-row">
        <span class="footer-subtitle hover-primary-color cursor-pointer mr-4 mr-md-5" @click="goTo('Suit')">
          Product Suite
        </span>
        <span class="footer-subtitle hover-primary-color cursor-pointer mt-3 mt-lg-0 mr-4 mr-md-5" @click="goTo('Doc')">
          Developer Hub
        </span>
        <span class="footer-subtitle hover-primary-color cursor-pointer mt-3 mt-lg-0 mr-4 mr-md-5" @click="goTo('CompanyInfo')">
          Company Info
        </span>
        <span class="footer-subtitle hover-primary-color cursor-pointer mt-3 mt-lg-0 mr-4 mr-md-0" @click="goTo('Privacy')">
          Seating Hub
        </span>
      </div>
    </div>
    <div class="dash w-100"></div>
    <div class="footer-wrapper footer-copyright-and-links mx-auto d-flex flex-column flex-md-row justify-content-between align-items-lg-center mt-4">
      <p class="footer-subtitle mb-0 order-2 order-lg-1 mt-3 mt-lg-0">
        © 2021 Flyline Holdings Inc. All right reserved.
      </p>
      <div class="order-1 order-lg-2 d-flex flex-column flex-lg-row">
        <span class="footer-subtitle hover-primary-color cursor-pointer mr-4 mr-md-5" @click="goTo('Terms')">
          Terms of Use
        </span>
        <span class="footer-subtitle hover-primary-color cursor-pointer mt-3 mt-lg-0 mr-4 mr-md-0" @click="goTo('Privacy')">
          Privacy Policy
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/Header/HeaderLogo"
export default {
  components:{
    HeaderLogo,
  },
  methods: {
    goTo(name) {
      if (name) this.$router.push({ name });
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/footer'
.landing-footer
  padding-bottom: 20px
  padding-top: 0px
  .footer-wrapper
    max-width: 1020px !important
  .footer-copyright-and-links
    max-width: 1244px
  .logo
    width: 136px
    height: 23px
    img
      transform: scale(2)
      margin-left: -17px
  .footer-title
    font-size: 17px
    font-weight: bold
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #3a3f5c
  .footer-subtitle
    font-size: 14px
    font-weight: 400
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #707070
    &.cursor-pointer
      &:hover
        opacity: 1
    &.under-logo
      max-width: 286px

  .line
    height: 2px
    opacity: 0.5
    background-color: #263d6d
</style>
