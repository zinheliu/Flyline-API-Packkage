<template>
  <div class="shopping-layout d-flex">
    <div class="body-content w-100">
      <terms-header />
      <router-view></router-view>
      <!-- <div class="w-100 dash my-5"></div> -->
      <dashboard-footer />
    </div>
  </div>
</template>

<script>
import TermsHeader from '@/components/Header/LandingHeader'
import DashboardFooter from "@/components/Footer/LandingFooter3"
export default {
  components: {
    TermsHeader,
    DashboardFooter
  },
}
</script>

<style lang="sass" scoped>
</style>