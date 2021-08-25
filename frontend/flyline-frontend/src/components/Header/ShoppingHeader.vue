<template>
  <nav :class="['nav bottom-border', sticky ? 'sticky-nav' : '']" ref="nav">
    <div class="navbar__landing navbar--desktop d-none d-md-flex pl-0 pr-md-0 w-100">
      <div class="d-flex">
        <HeaderLogo :sticky="true" />
        <div class="head-label px-3">
          <p class="mb-0 gilroy-b">Flyline’s air shopping terminal</p>
        </div>
      </div>

      <div class="navbar__links">
        <ShoppingHeaderLinks @redirection="toggleMobileMenu" :sticky="true" />
      </div>
    </div>
    <div class="navbar navbar--mobile d-flex d-md-none">
      <HeaderLogo :sticky="true" class="ml-12-px" />
      <b-icon
        icon="x"
        scale="2"
        :class="['menu-icon']"
        v-if="showMobileMenu"
        @click="toggleMobileMenu"
      ></b-icon>
      <b-icon
        icon="list"
        scale="2"
        :class="['menu-icon']"
        v-else
        @click="toggleMobileMenu"
      ></b-icon>
    </div>
    <div class="nav-mobile-menu w-100 py-5" v-if="showMobileMenu">
      <ShoppingHeaderLinks 
        :sticky="true"
        class="w-100"
        @showing="mobileStickyFactor = false"
        @hiding="mobileStickyFactor = true"
        @redirection="toggleMobileMenu"
      />
    </div>
  </nav>
</template>

<script>
import HeaderLogo from "@/components/Header/HeaderLogo";
import ShoppingHeaderLinks from "@/components/Header/ShoppingHeaderLinks";
export default {
  components: {
    HeaderLogo,
    ShoppingHeaderLinks,
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
      if(window.innerWidth <= 768)
        this.showMobileMenu = !this.showMobileMenu;
    }
  }
};
</script>

<style lang="sass" scoped>
::v-deep .navbar__landing
  max-width: 850px !important
.head-label
  border-radius: 4px
  background-color: #D2D7FA
  height: 40px
  display: flex
  align-items: center
  p
    font-size: 16px
    font-stretch: normal
    font-style: normal
    // line-height: 1.44
    letter-spacing: normal
    color: #203be7
</style>
