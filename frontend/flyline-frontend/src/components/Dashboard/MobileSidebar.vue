<template>
  <b-sidebar :visible="sidebar" no-header no-header-close width="250px" @change="toggle" backdrop shadow sidebar-class="text-left pt-25-px pb-50-px px-2">
    <header-logo :sticky="true" class="mb-4 head-logo" />
    <dashboard-links />
  </b-sidebar>
</template>

<script>
import DashboardLinks from '@/components/Header/DashboardLinks'
import HeaderLogo from '@/components/Header/HeaderLogo'
export default {
  components:{
    DashboardLinks,
    HeaderLogo
  },
  props:{
    sidebar: Boolean
  },
  methods:{
    toggle(v){
      this.$emit('change',v)
    },
  },
}
</script>

<style lang="sass" scoped>
.head-logo
  @media screen and (max-width: 800px)
    margin-left: 45px
    margin-top: 12px
</style>