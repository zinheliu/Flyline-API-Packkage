<template>
  <nav :class="['nav', sticky ? 'sticky-nav' : '']" ref="nav">
    <div class="navbar__landing navbar--desktop d-none d-lg-flex pl-0 pr-lg-0">
      <div class="d-flex align-items-center">
        <HeaderLogo :sticky="true" />
      </div>

      <div class="navbar__links py-0">
        <HeaderAuth />
      </div>
    </div>
    <div class="navbar navbar--mobile d-flex d-lg-none">
      <HeaderLogo class="ml-12-px" />
      <b-icon icon="x" scale="2" :class="['menu-icon']" v-if="showMobileMenu" @click="toggleMobileMenu"></b-icon>
      <b-icon icon="list" scale="2" :class="['menu-icon']" v-else @click="toggleMobileMenu"></b-icon>
    </div>
    <div class="nav-mobile-menu w-100 pt-4 pb-5 py-md-5" v-if="showMobileMenu">
      <HeaderAuth :sticky="true" class="mt-3" />
    </div>
  </nav>
</template>

<script>
import HeaderLogo from "@/components/Header/HeaderLogo";
import HeaderLinks from "@/components/Header/HeaderLinks";
import HeaderAuth from "@/components/Header/HeaderAuth";
export default {
  components: {
    HeaderLogo,
    HeaderLinks,
    HeaderAuth
  },
  data() {
    return {
      scrollY: 0,
      showMobileMenu: false,
      mobileStickyFactor: true
    };
  },
  mounted() {
    this.scrollY = window.scrollY;
    window.onscroll = () => (this.scrollY = window.scrollY);
  },
  computed: {
    sticky() {
      if (this.showMobileMenu) return this.mobileStickyFactor;
      return true;
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    goTo(item) {
      if (item.href) {
        window.location = item.href;
      } else if (item.to) {
        let obj = { name: item.to };
        this.$router.push(obj);
        window.scrollTo(0, 0);
      } else if (item.path) {
        let obj = { path: item.path };
        this.$router.push(obj);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.nav
  // background-color: transparent !important
  // @media screen and (max-width: 800px)
  // background-color: #203be7 !important
  border-bottom: solid 1px #e9e9e9
::v-deep .navbar__landing
  max-width: 1020px !important
  width: 100% !important
  height: 67px
  @media screen and (min-width: 1100px)
    margin: 0 50px
.nav-top
  background-color: #000d5c
  p
    font-size: 16px
    font-stretch: normal
    font-style: normal
    line-height: 3.7
    letter-spacing: normal
    color: #ffffff
.search
  width: 334px
  // height: 53px
  .input-group-prepend
    align-items: center
    border: 1px solid #ced4da
    border-top-left-radius: 4px
    border-bottom-left-radius: 4px
    padding: 0 10px
  input
    border-left: 0
    &::placeholder
      font-size: 16px
      font-stretch: normal
      font-style: normal
      letter-spacing: normal
      color: #333333
      opacity: 0.5
      line-height: 1.8
    &:focus
      box-shadow: none
      border-color: #ced4da
</style>
