<template>
  <div class="dashboard-notification">
    <div
      class="mb-0 dashboard-title-text mb-3 d-flex justify-content-between align-items-center"
      @click="toggleNotification"
    >
      <p class="mb-0 d-flex justify-content-between align-items-center w-100">
        <span>Notifications</span>
        <span class="mark-read cursor-pointer" v-if="notifications.length > 0">Mark as read</span>
      </p>
      <b-icon
        icon="chevron-up"
        class="d-block d-md-none"
        v-if="showNotification"
      ></b-icon>
      <b-icon icon="chevron-down" class="d-block d-md-none" v-else></b-icon>
    </div>
    <div class="cat-title-wrapper mb-4" v-if="notifications.length > 0">
      <p class="cat-title mb-0 gilroy-b">Developer Portal Notifications</p>
    </div>
    <div class="text-center no_notification py-3 py-md-5" v-if="notifications.length == 0">
      <img src="@/assets/images/svg/no_data_token.svg" alt="" class="mx-auto">
      <p class="mb-3 card-header-text gilroy-b text-center mt-4">No notifications</p>
      <p class="mb-0 card-desc-text mx-md-auto" style="color:#707070; font-size: 14px; line-height: 2;">
        Keep an eye out of notifications, once you've read through them hit the "Mark as Read" to hide them
      </p>
      <p class="mb-0 gilroy-b text-primary cursor-pointer f-14-px mt-3">Refresh</p>
    </div>
    <div class="notifications d-none d-md-block" ref="notifications">
      <dashboard-notification-card
        class="mb-2"
        v-for="(notification, nI) in notifications"
        :key="nI"
        :notification="notification"
      />
    </div>
  </div>
</template>

<script>
import DashboardNotificationCard from "@/components/Notification/DashboardNotificationCard"
export default {
  components: {
    DashboardNotificationCard
  },
  data() {
    return {
      notifications: [
        // {
        //   title: "Notification : Quickstart Notes",
        //   description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ,`,
        //   color: "info"
        // },
      ],
      showNotification: false
    }
  },
  methods: {
    toggleNotification() {
      if (window.innerWidth <= 768) {
        if ([...this.$refs.notifications.classList].includes("d-none")) {
          this.$refs.notifications.classList += " d-block"
          this.$refs.notifications.classList.remove("d-none")
          this.showNotification = true
        } else {
          this.$refs.notifications.classList.remove("d-block")
          this.$refs.notifications.classList += " d-none"
          this.showNotification = false
        }
      }
    },
  }
}
</script>

<style lang="sass" scoped>
.mark-read
  font-size: 12px
  font-weight: 600
  font-stretch: normal
  font-style: normal
  line-height: 1.42
  letter-spacing: normal
  color: #32bef2
.cat-title-wrapper
  border-radius: 10px
  background-color: #F1F4F9
  padding: 8px
  opacity: 0.7
  .cat-title
    // font-size: 14px
    // font-stretch: normal
    // font-style: normal
    // line-height: 1.43
    // letter-spacing: normal
    // color: #546d8a
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    line-height: 1.43
    letter-spacing: normal
    text-align: left
    font-size: 14px
    color: #707070
    padding: 2px 0
</style>
