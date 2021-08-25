<template>
  <div class="landing-max-width mx-auto pb-5">
    <div class="d-flex justify-content-center">
      <p class="t-desc text-primary"><b-icon icon="question-circle" font-scale="0.9"></b-icon> Help</p>
      <p class="t-desc text-primary ml-md-3">Send Feedback</p>
    </div>
    <p class="text-center t-desc">
      Legal notice: Search results provided are the property of ITA Software, Inc. and may be protected by trademark, copyright, patent and other laws. Any use of the search results is governed by our
      <span class="text-primary cursor-pointer" @click="goTo('Terms')">Terms of Use Policy</span>
      and End–User License. © 1999–2019 Google, Inc.
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.t-desc
  font-size: 16px
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: 2.38
  letter-spacing: normal
  color: #707070
  &__red
    @extend .t-desc
    color: #e46d6d
</style>