<template>
  <div class="organizations">
    <div class="d-flex justify-content-center align-items-center verifying" v-if="fetchingOrganizations">
      <span class="text-primary">Getting Info...</span>
      <b-spinner small variant="primary" class="ml-2"></b-spinner>
    </div>
    <div v-else>
      <div class="organization mb-3 d-flex cursor-pointer" v-for="(organization, oI) in organizations" :key="oI" @click="setOrganization(oI)">
        <div class="user-avatar__square-medium d-flex justify-content-center align-items-center mr-3">
          <span class="gilroy-b">F</span>
          <!-- <img src="" alt="" class="w-100 h-100"> -->
        </div>
        <div class="organization-informations d-flex flex-column justify-content-between">
          <p class="organization-name mb-0 gilroy-b">{{organization.name}}</p>
          <p class="organization-employees mb-1">{{organization.members.length}} current employees</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  props:{
    disableNavigation: Boolean
  },
  data(){
    return {
      fetchingOrganizations: true,
      organizations: []
    }
  },
  created(){
    this.fetchOrganizations()
  },
  methods:{
    ...mapActions('ORGANIZATION', ['FETCH_ORGANIZATIONS']),
    ...mapMutations('USER', ['SET_ORGANIZATION_INDEX']),
    async fetchOrganizations(){
      try{
        this.organizations = await this.FETCH_ORGANIZATIONS()
      }catch(e){
        console.log(e)
      }
      this.fetchingOrganizations = false
    },
    setOrganization(oI){
      this.SET_ORGANIZATION_INDEX(oI)
      if(!this.disableNavigation) this.$router.replace({name: 'Dashboard'})
    },
  },
}
</script>

<style lang="sass" scoped>
.organizations
  .organization
    .organization-informations
      .organization-name
        font-size: 14px
        font-stretch: normal
        font-style: normal
        line-height: 1.44
        letter-spacing: normal
        color: #333333
      .organization-employees
        font-size: 12px
        font-weight: 600
        font-stretch: normal
        font-style: normal
        line-height: 1.71
        letter-spacing: normal
        color: #707070
</style>