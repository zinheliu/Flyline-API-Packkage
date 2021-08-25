<template>
  <div class="short-desc pt-90-px pb-75-px">
    <div class="landing-max-width mx-auto">
      <b-row class="mx-0">
        <b-col cols="12" md="6" class="pl-md-0 pr-md-5">
          <div class="desc-image my-auto">
            <img src="@/assets/images/svg/landing_image_one.svg" alt="" class="w-100 h-100">
          </div>
        </b-col>
        <b-col cols="12" md="6" class="text-left pl-md-5 pr-md-0">
          <p class="desc-title">A suite of developer tools for travel companies</p>
          <p class="desc-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <b-btn variant="primary" class="mt-4">Start with payment</b-btn>
          <b-row class="mx-0 integrations">
            <b-col cols="12" md="6" class="integration">
              <div class="integration-image my-45-px mx-auto">
                <img src="@/assets/images/svg/icon_one.svg" alt="" class="w-100 h-100">
              </div>
              <div class="integration-title d-flex">
                <div class="left-indicator mr-17-px"></div>
                <p class="my-0">Simple integration</p>
              </div>
              <div class="integration-subtitle pl-20-px mt-1">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p class="text-primary cursor-pointer font-weight-bold mb-0">See libraries ></p>
              </div>
            </b-col>
            <b-col cols="12" md="6" class="integration">
              <div class="integration-image my-45-px mx-auto">
                <img src="@/assets/images/svg/icon_two.svg" alt="" class="w-100 h-100">
              </div>
              <div class="integration-title d-flex">
                <div class="left-indicator mr-17-px"></div>
                <p class="my-0">Simple integration</p>
              </div>
              <div class="integration-subtitle pl-20-px mt-1">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p class="text-primary cursor-pointer font-weight-bold mb-0">See libraries ></p>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.short-desc
  background-color: #F9FCFF
  .desc-image
    max-width: 600px
    max-height: 500px
  .desc-title
    max-width: 383px
    font-size: 32px
    font-weight: bold
    font-stretch: normal
    font-style: normal
    line-height: 1.44
    letter-spacing: normal
    color: #1e3668
  .desc-subtitle
    width: 474px
    font-size: 16px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 1.88
    letter-spacing: normal
    color: #1e3668
  
  .integrations
    .integration
      padding: 0 80px 0 0
      .integration-image
        height: 60px
        width: 50px
      .integration-title
        .left-indicator
          width: 3px
          height: 40px
          border-radius: 10px
          background-color: #263d6d

        p
          font-size: 16px
          font-weight: bold
          font-stretch: normal
          font-style: normal
          line-height: 1.44
          letter-spacing: normal
          color: #1e3668

      .integration-subtitle
        font-size: 14px
        font-weight: 500
        font-stretch: normal
        font-style: normal
        line-height: 2
        letter-spacing: normal
        color: #1e3668

</style>