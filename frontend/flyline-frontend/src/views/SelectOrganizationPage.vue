<template>
  <div class="select-organization-page h-100 d-flex flex-column">
    <div class="auth-logo mb-40-px mx-auto cursor-pointer" @click="goTo('Landing')">
    </div>
    <div class="auth-card pt-46-px pb-20-px text-left mx-auto w-100">
      <p class="auth-title mb-26-px" style="font-size: 18px;">You are connected to multiple accounts</p>
      <p class="mb-40-px auth-sub-text">Welcome {{firstName}}, you are connected to multiple company accounts. Below, select which account to access</p>
      <organizations-switcher />
    </div>
    <auth-footer class="mt-auto px-3 px-md-0" />
  </div>
</template>

<script>
import OrganizationsSwitcher from '@/components/Organization/OrganizationsSwitcher'
import AuthFooter from '@/components/Auth/AuthFooter'
import { mapGetters } from 'vuex'
export default {
  components:{
    OrganizationsSwitcher,
    AuthFooter
  },
  computed:{
    ...mapGetters('USER', ['user']),
    ...mapGetters('UTIL', ['dark']),
    firstName(){
      if(this.user) return this.user.first_name
      return ''
    },
  },
  methods:{
    goTo(name){
      this.$router.push({name})
    },
  },
}
</script>

<style lang="sass" scoped>
.select-organization-page
  padding: 50px 0 20px 0
</style>