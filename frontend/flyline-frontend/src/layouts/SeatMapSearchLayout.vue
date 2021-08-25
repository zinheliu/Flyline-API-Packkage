<template>
  <div class="layout d-flex">
    <div class="body-content w-100">
      <landing-header />
      <router-view class="b-contents"></router-view>
      <!-- <div class="dash w-100"></div> -->
      <landing-footer class="mt-50-px" />
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

</style>