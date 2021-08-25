<template>
  <div class="shopping-layout d-flex">
    <div class="body-content w-100">
      <shopping-header />
      <router-view class="route-content"></router-view>
      <!-- <div class="w-100 dash my-5"></div> -->
      <shopping-terminal-footer />
    </div>
  </div>
</template>

<script>
import ShoppingHeader from '@/components/Header/ShoppingHeader'
// import ShoppingTerminalFooter from '@/components/Footer/ShoppingTerminalFooter'
import ShoppingTerminalFooter from '@/components/Footer/LandingFooter3'
export default {
  components: {
    ShoppingHeader,
    ShoppingTerminalFooter
  },
}
</script>

<style lang="sass" scoped>
.route-content
  max-width: 850px
</style>