<template>
  <div class="header-comp sticky-nav nav">
    <nav :class="['w-100 bottom-border']" ref="nav">
      <div class="navbar navbar--desktop pl-0 pr-md-0">
        <HeaderLogo :sticky="true" />

        <div class="navbar__links py-0">
          <dashboard-links class="d-none d-md-flex" />
          <dashboard-user-section class="" />
        </div>
      </div>
      <div class="navbar navbar--mobile">
        <HeaderLogo :sticky="true" class="ml-12-px" />
        <div class="d-flex align-items-center">
          <dashboard-user-section class="mr-3" />
          <b-icon icon="x" scale="2" :class="['menu-icon']" v-if="showMobileMenu" @click="toggleMobileMenu"></b-icon>
          <b-icon icon="list" scale="2" :class="['menu-icon']" v-else @click="toggleMobileMenu"></b-icon>
        </div>
      </div>
      <div class="nav-mobile-menu w-100 py-5" v-if="showMobileMenu">
        <dashboard-links @redirected="toggleMobileMenu" />
        <!-- <dashboard-user-section class="" /> -->
        <div class="dash mb-3"></div>
        <user-menu @redirected="toggleMobileMenu" />
      </div>
    </nav>
    <div class="w-100 sub-header my-auto d-none d-lg-block bottom-border">
      <dashboard-sub-header class="mx-auto sub-header-contents" />
    </div>
  </div>
</template>

<script>
import HeaderLogo from '@/components/Header/HeaderLogo'
import HeaderLinks from '@/components/Header/HeaderLinks'
import HeaderAuth from '@/components/Header/HeaderAuth'
import DashboardSubHeader from '@/components/Header/DashboardSubHeader'
import DashboardLinks from '@/components/Header/DashboardLinks'
import DashboardUserSection from '@/components/Header/DashboardUserSection'
import UserMenu from '@/components/Header/UserMenu'
export default {
  components:{
    HeaderLogo,
    HeaderLinks,
    HeaderAuth,
    DashboardSubHeader,
    DashboardLinks,
    DashboardUserSection,
    UserMenu
  },
  data(){
    return {
      scrollY: 0,
      showMobileMenu: false,
      mobileStickyFactor: true,
    }
  },
  mounted(){
    this.scrollY = window.scrollY
    window.onscroll = () => this.scrollY = window.scrollY
  },
  computed:{
    sticky(){
      if(this.showMobileMenu) return this.mobileStickyFactor
      return true
    },
  },
  methods:{
    toggleMobileMenu(){
      this.showMobileMenu = !this.showMobileMenu
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar--desktop{
  max-width: 1020px;
  height: 67px;
}
.bottom-border{
  border-bottom: solid 0.5px #EDEEF6;
}
.sub-header{
  .sub-header-contents{
    width: 1000px;
    padding: 40px 0
  }
}
@media screen and (max-width: 1100px) {
  .sub-header-contents{
    padding: 45px 10px !important;
    width: 100% !important;
  }
}
</style>
