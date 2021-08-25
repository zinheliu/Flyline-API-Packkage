<template>
  <div class="user-menus">
    <!-- <p class="user-menu-item test-data-check gilroy-b cursor-pointer d-flex align-items-center justify-content-between">
      <span @click="viewTestData = !viewTestData">View Test Data</span>
      <b-checkbox v-model="viewTestData" class="custom-check-box" switch></b-checkbox>
    </p> -->
    <p class="user-menu-item gilroy-b cursor-pointer" @click="goTo('ManageAccount')">Manage Account</p>
    <p class="user-menu-item gilroy-b cursor-pointer" @click="goTo('AccessTokens')">Access Tokens</p>
    <p class="user-menu-item gilroy-b cursor-pointer" @click="goTo('Doc')">Documentation</p>
    <p class="user-menu-item gilroy-b cursor-pointer" v-if="organizations.length>1" @click="openCompanySwitcher">Switch Company</p>
    <p class="user-menu-item gilroy-b cursor-pointer logout mb-2" @click="logout">Log Out</p>
    <modal size="lg" :modal="companySwitcher" @change="toggleCompanySwitcherModal">
      <div>
        <p class="company-switch-title mb-26-px">You are connected to multiple accounts</p>
        <p class="mb-40-px company-switch-subtitle">Welcome, you are connected to multiple company accounts. Below, select which account to access</p>
        <organizations-switcher :disableNavigation="true" />
      </div>
    </modal>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Modal from '@/components/Modals/Modal'
import OrganizationsSwitcher from '@/components/Organization/OrganizationsSwitcher'
export default {
  components:{
    Modal,
    OrganizationsSwitcher
  },
  data(){
    return {
      viewTestData: false,
      companySwitcher: false,
    }
  },
  created(){
    this.viewTestData = this.testData
  },
  watch:{
    viewTestData(v){
      this.SET_TEST_DATA(v)
    }
  },
  computed:{
    ...mapGetters('ORGANIZATION', ['organizations']),
    ...mapGetters('UTIL', ['testData']),
  },
  methods:{
    ...mapMutations('USER', ['CLEAR_USER']),
    ...mapMutations('UTIL', ['SET_TEST_DATA']),
    goTo(name){
      this.$router.push({name})
      this.$emit('redirected')
    },
    logout(){
      this.CLEAR_USER()
      this.goTo('Landing')
    },
    openCompanySwitcher(){
      this.companySwitcher = true
    },
    toggleCompanySwitcherModal(v){
      if(v != this.companySwitcher)
        this.companySwitcher = false
    },
  },
}
</script>

<style lang="sass" scoped>
.test-data-check
  @media screen and (max-width: 1100px)
    max-width: 150px
    margin-left: auto
    margin-right: auto
.company-switch-title
  font-size: 20px
  font-family: GILROY-BOLD
  font-stretch: normal
  font-style: normal
  line-height: 1.45
  letter-spacing: normal
  color: #333333
.company-switch-subtitle
  font-size: 14px
  font-stretch: normal
  font-style: normal
  line-height: 1.71
  letter-spacing: normal
  color: #707070
</style>