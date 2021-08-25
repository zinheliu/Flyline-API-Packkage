<template>
  <div class="construction-page">
    <div class="contents my-auto">
      <header-logo />
      <p class="const-text mb-0 gilroy-b mx-auto mt-5">
        We’re making some updates,check back soon.
      </p>
    </div>
    <div class="landing-max-width mx-auto w-100 d-flex justify-content-end">
      <b-icon
        icon="arrow-right-short"
        class="gilroy-b"
        font-scale="1.5"
      ></b-icon>
    </div>
    <div class="dash w-100 mt-auto"></div>
    <footer-links class="mb-40-px" />
  </div>
</template>

<script>
import FooterLinks from "@/components/Footer/FooterLinks";
import HeaderLogo from "@/components/Header/HeaderLogo";
export default {
  components: {
    FooterLinks,
    HeaderLogo
  }
};
</script>

<style lang="sass" scoped>
.construction-page
  min-height: 100vh
  display: flex
  flex-flow: column
  .const-text
    max-width: 322px
    font-size: 24px
    font-stretch: normal
    font-style: normal
    line-height: 1.5
    letter-spacing: normal
    color: #333333
</style>
