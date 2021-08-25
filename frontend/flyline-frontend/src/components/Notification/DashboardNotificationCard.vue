<template>
  <div :class="['dashboard-notification-card', notification.color + '-card']">
    <div class="ml-2 mb-2 notification-title-wrapper">
      <p class="mb-0 notification-title gilroy-b">{{ notification.title }}</p>
    </div>
    <p class="ml-2 mb-3 notification-description">
      {{ notification.description }}
    </p>
    <!-- <p class="mb-0 try-it gilroy-b d-flex align-items-center">
      <span class="mt-2-px">Mark as Read</span>
      <b-icon icon="chevron-right" scale="0.8"></b-icon>
    </p> -->
    <div class="dash w-100 mb-4"></div>
  </div>
</template>

<script>
export default {
  props: {
    notification: Object
  }
};
</script>

<style lang="sass" scoped>
.dashboard-notification-card
  border-radius: 10px
  width: 100%
  max-width: 300px
  // padding: 24px
  // background-color: #F2F4F8
  // &.info-card
  //   background-color: #daf4fd
  //   .notification-title , .try-it
  //     color: #546d8a
  // &.danger-card
  //   background-color: #fdf2f4
  //   .notification-title , .try-it
  //     color: #f8617d
  // &.success-card
  //   background-color: #ddf4ef
    // .notification-title , .try-it
    //   color: #3cbc6f
  .notification-title-wrapper
    // border-radius: 4px
    // background-color: #F1F4F9
    // padding: 8px
  .notification-title
    font-size: 14px
    font-stretch: normal
    font-style: normal
    line-height: 1.44
    letter-spacing: normal
    color: #333333
  .notification-description
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 1.8
    letter-spacing: normal
    color: #707070
  .try-it
    font-size: 16px
    font-stretch: normal
    font-style: normal
    line-height: 1
    letter-spacing: normal
    color: #707070
</style>
