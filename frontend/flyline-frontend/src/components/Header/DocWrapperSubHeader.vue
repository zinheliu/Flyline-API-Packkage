<template>
  <div class="doc-wrapper-sub-header">
    <div class="landing-max-width">
      <div class="d-flex justify-content-between">
        <div class="content text-left my-auto">
          <p class="dashboard-title-text" style="margin-top: 20px; font-size: 23px;">Welcome to Flyline API Documentation</p>
          <p class="sub-text">Start shopping flights on our developer-friendly platform complete with everything you need to enrich your platform’s you need to enrich your Start shopping flights on our developer-friendly platform</p>
          <div class="d-flex mt-5">
            <b-btn class="custom-btn px-4" @click="goTo('ApiRef')" style="width: 150px; height: 40px; font-size: 12px;">API Reference</b-btn>
            <b-btn class="custom-btn px-4 ml-md-5" style="width: 150px; height: 40px; font-size: 12px;">Developer Portal</b-btn>
            <!-- <b-btn class="custom-btn px-4" style="width: 150px; height: 40px; font-size: 12px;">API Status</b-btn> -->
          </div>
        </div>
        <div class="img-sec">
          <img src="@/assets/images/svg/header_image.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goTo(name){
      if(name) this.$router.push({name})
    },
  },

}
</script>

<style lang="sass" scoped>
.doc-wrapper-sub-header
  border-bottom: solid 1px #e9e9e9
  .landing-max-width
    max-width: 100vw
    margin-left: calc((100vw - 1100px) / 2)
    .content
      max-width: 520px
    .img-sec
      max-width: 50%
      max-height: 328px
      img
        width: 100%
        height: 100%
    .sub-text
      font-size: 14px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 2
      letter-spacing: normal
      color: #707070
    .sub-links
      font-size: 16px
      font-family: GILROY-BOLD
      font-stretch: normal
      font-style: normal
      line-height: 1.44
      letter-spacing: normal
      color: #203be7
</style>