<template>
  <div class="header-comp nav">
    <nav :class="['w-100 bottom-border']" ref="nav">
      <div class="navbar navbar--desktop pl-0 pr-md-0">
        <div class="d-flex w-100">
          <HeaderLogo :alt="false" />
          <doc-wrapper-links class="ml-3 d-none d-lg-flex" />
        </div>

        <!-- <div class="navbar__links">
          <doc-wrapper-links class="d-none d-md-flex" />
        </div> -->
      </div>
      <div class="navbar navbar--mobile">
        <HeaderLogo :sticky="true" class="ml-12-px" />
        <div class="d-flex align-items-center">
          <b-icon icon="x" scale="2" :class="['menu-icon']" v-if="showMobileMenu" @click="toggleMobileMenu"></b-icon>
          <b-icon icon="list" scale="2" :class="['menu-icon']" v-else @click="toggleMobileMenu"></b-icon>
        </div>
      </div>
      <div class="nav-mobile-menu w-100 py-5" v-if="showMobileMenu">
        <doc-wrapper-links @redirected="toggleMobileMenu" />
      </div>
    </nav>
  </div>
</template>

<script>
import HeaderLogo from '@/components/Header/HeaderLogo'
import HeaderLinks from '@/components/Header/HeaderLinks'
import HeaderAuth from '@/components/Header/HeaderAuth'
import DashboardSubHeader from '@/components/Header/DashboardSubHeader'
import DocWrapperLinks from '@/components/Header/DocWrapperLinks'
import DashboardUserSection from '@/components/Header/DashboardUserSection'
import UserMenu from '@/components/Header/UserMenu'
export default {
  components:{
    HeaderLogo,
    HeaderLinks,
    HeaderAuth,
    DashboardSubHeader,
    DocWrapperLinks,
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
  max-width: 1100px;
}
.bottom-border{
  border-bottom: solid 0.5px #EDEEF6;
}
.sub-header{
  .sub-header-contents{
    width: 1100px;
    padding: 45px 0
  }
}
@media screen and (max-width: 800px) {
  .sub-header-contents{
    padding: 0;
    width: 100% !important;
  }
}
</style>
