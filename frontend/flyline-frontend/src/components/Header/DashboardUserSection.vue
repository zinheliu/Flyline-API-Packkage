<template>
  <div class="dashboard-user-section d-flex align-items-center h-100">
    <div class="user-info d-flex align-items-center">
      <b-dropdown right class="user-menu ml-md-3" ref="drp" >
        <template #button-content>
          <div class="d-flex align-content-center">
            <div
              class="user-avatar d-flex justify-content-center align-items-center"
            >
              <img
                v-if="user.avatar"
                :src="user.avatar"
                alt=""
                class="w-100 h-100"
              />
              <span v-else class="gilroy-b">{{ user.first_name[0] }}</span>
            </div>
            <span class="d-none d-lg-flex align-items-center ml-3 user-name">{{
              fullName
            }}</span>
          </div>
        </template>
        <user-menu @redirected="close" />
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import NotificationBell from "@/components/Header/NotificationBell";
import DashboardLinks from "@/components/Header/DashboardLinks";
import UserMenu from "@/components/Header/UserMenu";
import { mapGetters } from "vuex";
export default {
  components: {
    NotificationBell,
    DashboardLinks,
    UserMenu
  },
  computed: {
    ...mapGetters("USER", ["user"]),
    fullName() {
      return this.user ? this.user.first_name + " " + this.user.last_name : "";
    }
  },
  methods:{
    close(){
      console.log('asd', this.$refs.drp)
      this.$refs.drp.hide()
    },
  },
};
</script>

<style lang="sass" scoped>
.dashboard-user-section
  ::v-deep .user-menu
    button
      background-color: transparent
      // max-width: 180px
      width: 100%
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      font-size: 14px
      font-stretch: normal
      font-style: normal
      font-family: GILROY-BOLD
      letter-spacing: normal
      color: #333333
      outline: none
      box-shadow: none
      border: none
      padding: 0
      padding-right: 28px
      background: transparent url('../../assets/images/svg/arrow.svg') no-repeat right -2px center/25px 6px
      @media screen and (max-width: 1100px)
        padding-right: 0px
      &::after
        display: none
      &:focus , &:hover , &:active
        outline: none
        box-shadow: none !important
        border: none
        background: transparent url('../../assets/images/svg/arrow.svg') no-repeat right -2px center/25px 6px
        color: #333333

    ul
      @media screen and (max-width: 800px)
        display: none
    .dropdown-menu
      margin-top: 25px
      border-radius: 10px
      box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1)
      background-color: #ffffff
      width: 234px
      border: none
      padding: 35px 20px 25px 47px
      @media screen and (min-width: 800px)
        left: 10% !important
        right: -120px
      .user-menu-item
        font-size: 14px
        font-stretch: normal
        font-style: normal
        line-height: 1.43
        letter-spacing: normal
        color: #333333
        margin-bottom: 30px
        &.logout
          color: #EA4D44
</style>
