<template>
  <div>
    <p class="mod-title gilroy-b mb-3">You have removed an invite</p>
    <p class="mod-subtitle gilroy-b mb-0">
      An invite has been removed, this invite is no longer active. If you wish to send another invite click
      <span class="gilroy-b cursor-pointer text-primary" @click="openInviteModal">HERE</span>
    </p>
    <b-btn class="custom-btn w-100 mt-5" @click="close">Close Popup</b-btn>
  </div>
</template>

<script>
export default {
  methods:{
    close(){
      this.$emit('close')
    },
    openInviteModal(){
      this.$emit('open-inv')
    },
  },
}
</script>

<style lang="sass" scoped>
.mod-title
  font-size: 20px
  font-stretch: normal
  font-style: normal
  line-height: 1.45
  letter-spacing: normal
  color: #333333
.mod-subtitle
  font-size: 14px
  font-weight: 500
  font-stretch: normal
  font-style: normal
  line-height: 2
  letter-spacing: normal
  color: #707070
</style>