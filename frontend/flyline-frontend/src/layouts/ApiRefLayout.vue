<template>
  <div class="doc-wrapper">
    <doc-header />
    <div class="doc-layout d-flex mx-auto">
      <sidebar :sidebar="true" class="d-none d-lg-block" />
      <div class="body-content ml-auto pt-5">
        <div :class="['d-flex d-lg-none mobile-menu px-3 justify-content-between align-items-center', mobileSidebar ? 'bg-primary text-white' : '']" @click="toggleMobileSidebar">
          <p class="menu-title mb-0 d-flex align-items-center">
            <b-icon icon="list" scale="1.8" class="mr-4"></b-icon>
            <span>View contents</span>
          </p>
          <b-icon icon="chevron-expand" v-if="!mobileSidebar"></b-icon>
          <b-icon icon="chevron-contract" v-else></b-icon>
        </div>
        <sidebar :sidebar="true" class="d-block d-lg-none mt-4 px-3" v-if="mobileSidebar" />
        <div class="w-100 dash d-lg-none"></div>
        <router-view class="content-wrapper mt-5 mt-lg-0"></router-view>
        <doc-footer class="mt-5" />
      </div>
    </div>
  </div>
</template>

<script>
import DocHeader from '@/components/Header/DocHeader'
import Sidebar from '@/components/Doc/Sidebar'
import DocFooter from '@/components/Footer/DocFooter'
export default {
  components: {
    DocHeader,
    Sidebar,
    DocFooter
  },
  data(){
    return {
      mobileSidebar: false
    }
  },
  methods:{
    toggleMobileSidebar(){
      this.mobileSidebar = !this.mobileSidebar
    },
  },
}
</script>

<style lang="sass" scoped>
.doc-layout
  @media screen and (min-width: 1105px)
    max-width: 1100px
  ::v-deep .b-sidebar-outer
    position: unset !important
    width: unset !important
    z-index: 0
    @media screen and (max-width: 1100px)
      height: auto
      width: 100% !important
  .body-content
    padding-left: 50px
    // margin-top: 96px
    width: calc(100% - 270px)
    @media screen and (max-width: 1100px)
      width: 100%
      padding-left: 10px
      padding-right: 10px
      word-break: break-word
    @media screen and (min-width: 800px)
      padding-right: 100px
    
    .mobile-menu
      height: 48px
      border-radius: 5px
      color: #8C8CA1
      // box-shadow: 0 0 0 1px rgba(35,20,35,0.06), 0 2px 8px 0 rgba(35,20,35,0.18)
      border: solid 1px #EDEEF6
      .menu-title
        span
          font-size: 16px
</style>