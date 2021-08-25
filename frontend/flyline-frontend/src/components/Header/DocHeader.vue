<template>
  <nav :class="['nav bottom-border', sticky ? 'sticky-nav' : '',]" ref="nav">
    <div class="navbar navbar--desktop pl-0 pr-md-0">
      <div class="d-flex logo-and-t-wrapper">
        <div class="logo-wrapper d-flex">
          <HeaderLogo :sticky="true" />
        </div>
        <!-- <span class="api-reference gilroy-b cursor-pointer" @click="goTo('Doc')">Back to API Documentation</span> -->
      </div>

      <div class="navbar__links d-flex">
        <!-- <p class="my-0 d-flex align-items-center justify-content-center mr-md-5" v-if="isLogged">
          <span class="status-online mr-3"></span>
          <span :class="['head-link-text text-center gilroy-b']">Status</span>
        </p> -->
        <HeaderAuth :sticky="true" class="" />
      </div>
    </div>
    <div class="navbar navbar--mobile">
      <HeaderLogo :sticky="true" class="ml-12-px" />
      <b-icon icon="x" scale="2" :class="['menu-icon']" v-if="showMobileMenu" @click="toggleMobileMenu"></b-icon>
      <b-icon icon="list" scale="2" :class="['menu-icon']" v-else @click="toggleMobileMenu"></b-icon>
    </div>
    <div class="nav-mobile-menu w-100 py-5" v-if="showMobileMenu">
      <HeaderAuth :sticky="true" class="mt-3" />
    </div>
  </nav>
</template>

<script>
import HeaderLogo from '@/components/Header/HeaderLogo'
import HeaderSearch from '@/components/Header/HeaderSearch'
import HeaderAuth from '@/components/Header/HeaderAuth'
import { mapGetters } from 'vuex'
export default {
  components:{
    HeaderLogo,
    HeaderSearch,
    HeaderAuth
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
    ...mapGetters('USER', ['isLogged']),
    sticky(){
      if(this.showMobileMenu) return this.mobileStickyFactor
      return true
    },
  },
  methods:{
    toggleMobileMenu(){
      this.showMobileMenu = !this.showMobileMenu
    },
    goTo(name){
      if(name) this.$router.push({name})
    },
  },
}
</script>

<style lang="sass" scoped>
.navbar--desktop
  max-width: 1111px
  width: 100%
  height: 67px
.logo-wrapper
  // @media screen and (min-width: 800px)
    // width: 320px
.head-link-text
  font-size: 16px
  font-stretch: normal
  font-style: normal
  letter-spacing: normal
  color: #333333
  display: flex
  align-items: center
  position: relative
.api-reference
  font-size: 16px
  font-stretch: normal
  font-style: normal
  line-height: 1.44
  letter-spacing: normal
  color: #333333
  @media screen and (min-width: 800px)
    padding-left: 50px
.status-online
  width: 10px
  height: 10px
  border-radius: 100px
  background-color: #44cf57
</style>
