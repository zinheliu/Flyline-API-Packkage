<template>
  <div class="auth-layout h-100">

    <div class="body-content w-100">
      <landing-header />
      <router-view class="b-contents"></router-view>
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
.b-contents
  min-height: calc(100vh - 69px - 49px)
</style>