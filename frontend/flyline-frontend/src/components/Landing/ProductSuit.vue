<template>
  <div class="product-suit px-3 px-md-0 landing-max-width mx-auto text-left">
    <p class="mb-0 text-md-center ps-title gilroy-b">Powerful and easy-to-use travel APIs</p>
    <p class="mb-0 mx-auto text-md-center ps-subtitle">We bring together everything that’s required to build websites and apps that allow users to search, book, and reshop flights.</p>
    <div class="mt-63-px suits d-flex flex-wrap">
      <div class="col-md-6 px-0 pr-md-3">
        <div class="suit-card mb-4 mb-md-4">
          <div class="suit-icon">
            <img src="@/assets/images/svg/dark_dot.svg" alt="">
          </div>
          <div class="suit-details">
            <p class="mb-0 suit-title gilroy-b">Search, Book, and Reshop in realtime</p>
            <p class="mb-0 suit-description mt-11-px">Enable your customers to search, book, and reshop from more than 20 airlines with real-time pricing and availability.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 px-0 pl-md-3">
        <div class="suit-card mb-4 mb-md-4">
          <div class="suit-icon">
            <img src="@/assets/images/svg/light_dot.svg" alt="">
          </div>
          <div class="suit-details">
            <p class="mb-0 suit-title gilroy-b">Built from the ground up</p>
            <p class="mb-0 suit-description mt-11-px">With direct NDC integrations with airlines and GDS platforms we operate on and optimize at every level of the travel tech stack</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 px-0 pr-md-3">
        <div class="suit-card mb-4 mb-md-0">
          <div class="suit-icon">
            <img src="@/assets/images/svg/light_dot.svg" alt="">
          </div>
          <div class="suit-details">
            <p class="mb-0 suit-title gilroy-b">Integrate what you need, fast</p>
            <p class="mb-0 suit-description mt-11-px">Happy with your current booking solution? No problem,</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 px-0 pl-md-3">
        <div class="suit-card">
          <div class="suit-icon">
            <img src="@/assets/images/svg/dark_dot.svg" alt="">
          </div>
          <div class="suit-details">
            <p class="mb-0 suit-title gilroy-b">Fastly improving and relible</p>
            <p class="mb-0 suit-description mt-11-px">We're always releasing feature updates and improvements, in addition our systems operate with 99.9%+ uptime and are highly scalable</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.product-suit
  .ps-title
    font-size: 42px
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #333333
    @media screen and (max-width: 800px)
      font-size: 34px
  .ps-subtitle
    margin-top: 20px
    max-width: 600px
    font-size: 18px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 2
    letter-spacing: normal
    color: #707070
    @media screen and (max-width: 800px)
      font-size: 14px
      margin-top: 30px
  .suits
   .suit-card
      height: 200px
      border-radius: 10px
      border: solid 1.6px #e9e9e9
      display: flex
      padding: 29px 25px
      @media screen and (max-width: 800px)
        padding: 25px 20px
        height: unset
      .suit-icon
        img
          min-height: 21px
          min-width: 21px
        margin-right: 23px
      .suit-details
        text-align: left
        .suit-title
          font-size: 18px
          font-stretch: normal
          font-style: normal
          letter-spacing: normal
          color: #333333
        .suit-description
          font-size: 16px
          font-weight: 500
          font-stretch: normal
          font-style: normal
          letter-spacing: normal
          color: #707070
          line-height: 2
          @media screen and (max-width: 800px)
            font-size: 12px
</style>