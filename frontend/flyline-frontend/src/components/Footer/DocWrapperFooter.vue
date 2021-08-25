<template>
  <div class="landing-footer mx-auto text-left px-3 px-lg-0">
    <!-- <div class="line mt-5"></div> -->
    <div class="dash w-100"></div>
    <div
      class="footer-wrapper footer-copyright-and-links mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center mt-4"
    >
      <p class="footer-subtitle mb-0 order-2 order-md-1 mt-2 mt-md-0">
        © 2021 Flyline Holdings Inc. All right reserved.
      </p>
      <div class="order-1 order-md-2">
        <span
          class="footer-subtitle hover-primary-color cursor-pointer mr-4 mr-md-5"
        >
          Terms of use
        </span>
        <span
          class="footer-subtitle hover-primary-color cursor-pointer mr-4 mr-md-5"
        >
          Privacy Policy
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '@/styles/footer'
.landing-footer
  padding-bottom: 20px
  padding-top: 0px
  .footer-wrapper
    max-width: 1100px !important
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
