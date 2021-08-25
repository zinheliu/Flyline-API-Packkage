<template>
  <div :class="['navbar__logo pl-0', {'mini': mini}]">
    <router-link to="/">
      <!-- <img v-if="sticky" src="@/assets/images/svg/FlylineSVG_Logotype_alt.svg" alt="Flyline Logo" />
      <img v-else src="@/assets/images/svg/flyline_logo_white.svg" alt="Flyline Logo" /> -->
      <img v-if="icon" src="@/assets/images/svg/logo_icon.svg" alt="Flyline Logo" style="margin-left: 11px; width: 22px !important;" />
      <img v-else-if="dark || alt" src="@/assets/images/svg/flyline_alt_white.svg" alt="Flyline Logo" />
      <img v-else src="@/assets/images/svg/flyline_logo.svg" alt="Flyline Logo" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['sticky', 'alt', 'mini', 'icon'],
  computed:{
    ...mapGetters('UTIL', ['dark']),
  },
};
</script>

<style lang="scss">
.navbar__logo {
  padding-right: 40px;


  img {
    width: 75px !important;
    height: 22px !important;
    object-fit: contain;
    transform: scale(1.8);
    @media screen and (min-width: 800px){
      margin-left: 11px
    }
  }
  &.mini{
    img{
      transform: scale(2);
    }
  }
}
</style>
