<template>
  <b-row class="mx-0 dashboard-sub-header" align-h="between" align-v="center">
    <div class="team-info">
      <team-info-in-sub-header />
    </div>
    <div class="d-none d-md-flex align-items-center team-info-right justify-content-center mt-3 mt-md-0">
      <div class="d-flex align-items-center flex-column flex-md-row justify-content-center">
        <!-- <p class="mb-0 team-text cursor-pointer mr-3 gilroy-b" @click="goTo('TeamMembers')">Achme Teal</p> -->
        <p class="mb-0 team-text cursor-pointer mr-3 gilroy-b" @click="goTo('TeamMembers')">Add Team Members</p>
        <div class="team-images mr-3" v-if="!fetchingData">
          <b-btn v-for="(member, tI) in activeTeamMembers" :key="tI" variant="primary" class="user-avatar__team team-member-btn custom-btn plus-rounded__member position-relative z-2">
            <img v-if="member.user.avatar" :src="member.user.avatar" alt="">
            <span v-else>{{member.user.first_name[0]}}</span>
          </b-btn>
          <b-btn variant="primary" class="custom-btn plus-rounded position-relative z-1" v-b-tooltip.hover title="Help">?</b-btn>
          <b-btn variant="primary" class="custom-btn plus-rounded z-0" v-b-tooltip.hover title="Invite Member" @click="openInvModal" v-if="currentOrganization.role != 2">+</b-btn>
        </div>
        <div class="d-flex mr-3" v-else>
          <b-spinner small variant="primary"></b-spinner>
        </div>
      </div>
      <div class="d-flex align-items-center flex-column flex-md-row">
        <!-- <b-btn class="sub-head-btn gilroy-b mr-md-2 mb-2 mb-md-0" @click="goTo('Doc')">Explore API's</b-btn> -->
        <b-btn class="custom-btn sub-head-btn gilroy-b" @click="openEmail">Get Support</b-btn>
      </div>
    </div>
    <modal :modal="inviteModal" @change="toggleInviteModal">
      <invite-team-member-form @done="toggleInviteModal" />
    </modal>
  </b-row>
</template>

<script>
import TeamInfoInSubHeader from '@/components/Team/TeamInfoInSubHeader'
import InviteTeamMemberForm from '@/components/Team/InviteTeamMemberForm'
import Modal from '@/components/Modals/Modal'
import { mapActions, mapGetters } from 'vuex'
import BUS from '@/bus/event'
export default {
  components: {
    TeamInfoInSubHeader,
    Modal,
    InviteTeamMemberForm
  },
  data(){
    return {
      inviteModal: false,
      members: [],
      fetchingData: true,
    }
  },
  created(){
    this.fetchMembers()
    BUS.$on('fetch-organization-details', this.fetchMembers)
  },
  computed:{
    ...mapGetters('USER', ['currentOrganization', 'user']),
    activeTeamMembers: {
      set : v => {},
      get() {
        let temp = [...this.members]
        let ownI = temp.findIndex(m => m.user && m.user.id == this.user.id)
        let arr = []
        if(ownI >= 0) {
          arr.push(temp[ownI])
          temp.splice(ownI,1)
        }
        arr = arr.concat(temp.filter(m => m.user && m.invite_status == "Invite Approved").slice(0,2))
        return arr
      }
    },
  },
  methods:{
    ...mapActions('ORGANIZATION', ['FETCH_ORGANIZATION_DETAILS']),
    async fetchMembers(){
      this.fetchingData = true
      try{
        let res = await this.FETCH_ORGANIZATION_DETAILS(this.currentOrganization.organization.id)
        this.members = res.members
      }catch(e){
        console.log(e)
      }
      this.fetchingData = false
    },
    goTo(name){
      this.$router.push({name})
    },
    toggleInviteModal(v){
      if(v != this.inviteModal)
        this.inviteModal = false
    },
    openEmail(){
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    },
    openInvModal(){
      if(this.currentOrganization.role != 2)
        this.inviteModal = true
    },
  },
}
</script>

<style lang="sass" scoped>
.dashboard-sub-header
  .team-text
    font-size: 16px
    font-stretch: normal
    font-style: normal
    line-height: 1.44
    letter-spacing: normal
    color: #333333

  .sub-head-btn
    width: 140px
    height: 40px
    border: none
    // background-color: #00aeef
    font-size: 14px
    font-stretch: normal
    font-style: normal
    line-height: 1.43
    letter-spacing: normal
    color: #ffffff
  .team-images
    position: relative
    width: 150px
    overflow: hidden
    display: flex
    justify-content: center
    .plus-rounded
      height: 34px !important
      width: 34px !important
      border-radius: 50% !important
      margin-left: -10px !important
      padding: 2px 0px 0px 1px !important
      border: solid 3px #fff !important
      &__member
        @extend .plus-rounded
        padding: 0 !important
    .team-member-btn
      &:hover , &:focus , &:active
        background-color: #D6F1FD !important
    span.user-avatar__team
      border: solid 3px #ffffff
      margin-left: -15px
      display: inline-flex
      justify-content: center
      align-items: center
      span
        font-family: GILROY-BOLD

  @media screen and (max-width: 800px)
    .team-info
      width: 100%
    .team-info-right
      width: 100%
      
      
</style>