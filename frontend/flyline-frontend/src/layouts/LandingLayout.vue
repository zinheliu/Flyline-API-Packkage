<template>
  <div class="layout d-flex">
    <div class="body-content w-100">
      <landing-header class="d-none d-lg-flex" />
      <router-view class="b-contents"></router-view>
      <!-- <div class="dash w-100"></div> -->
      <landing-footer />
    </div>
  </div>
</template>

<script>
import LandingHeader from '@/components/Header/LandingHeader'
import LandingFooter from '@/components/Footer/LandingFooter3'
export default {
  components: {
    LandingHeader,
    LandingFooter
  },
}
</script>

<style lang="sass" scoped>
// .b-contents
//   @media screen and (min-width: 1100px)
//     background-image: url("../assets/images/background.png")
//     background-size: 100% 100%
</style>