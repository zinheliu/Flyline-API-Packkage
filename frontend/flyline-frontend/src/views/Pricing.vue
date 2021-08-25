<template>
  <div class="pricing-page">
    <div class="wrapper mx-auto">
      <p class="p-desc text-left mb-0">Pricing Plans & Included Products</p>
      <p class="p-title text-left pt-10-px">API Product Suite Pricing Plans</p>
      <b-row class="text-left pt-60-px mt-100-px">
        <b-col cols="12" lg="4">
          <p class="p-desc p-h-a-img__1">
            Testing
            <img src="@/assets/images/head_images/12.png" alt="">
          </p>
          <div class="w-100 dash mb-4"></div>
          <p class="p-title__2" style="margin-bottom: 10px;">Free Tier</p>
          <p class="p-desc__2">Build and test using our core set of products with up to 100 live items </p>
        </b-col>
        <b-col cols="12" lg="4">
          <p class="p-desc p-h-a-img__2">
            Launch
            <img src="@/assets/images/head_images/23.png" alt="">
          </p>
          <div class="w-100 dash mb-4"></div>
          <p class="p-title__2" style="margin-bottom: 10px;">Pay as you go</p>
          <p class="p-desc__2">Build and test using our core set of products with up to 100 live items </p>
        </b-col>
        <b-col cols="12" lg="4">
          <p class="p-desc p-h-a-img__3">
            Entrprise
            <img src="@/assets/images/head_images/32.png" alt="">
          </p>
          <div class="w-100 dash mb-4"></div>
          <p class="p-title__2" style="margin-bottom: 10px;">$500+/ Per Month</p>
          <p class="p-desc__2">Build and test using our core set of products with up to 100 live items </p>
        </b-col>
      </b-row>
    </div>
    <div class="images__1 d-none d-lg-block">
      <div class="wrapper mx-auto">
        <div class="text-left mt-150-px">
          <p class="p-desc__3">Included Products</p>
          <div class="w-100 dash"></div>
          <b-row class="mt-5">
            <b-col cols="12" lg="4">
              <p class="p-desc__2">- Cabin Attributes & Amenities</p>
              <p class="p-desc__2">- Seat Mapping Data</p>
              <p class="p-desc__2">- Cabin Class Mapping Data</p>
              <p class="p-desc__2">- Airport, Aircraft & City Data</p>
              <p class="p-desc__2">- Fare Rules Data</p>
              <p class="p-desc__2">- Real Time Pricing & Availability</p>
            </b-col>
            <b-col cols="12" lg="4">
              <p class="p-desc__2">- Cabin Attributes & Amenities</p>
              <p class="p-desc__2">- Seat Mapping Data</p>
              <p class="p-desc__2">- Cabin Class Mapping Data</p>
              <p class="p-desc__2">- Airport, Aircraft & City Data</p>
              <p class="p-desc__2">- Fare Rules Data</p>
              <p class="p-desc__2">- Real Time Pricing & Availability</p>
            </b-col>
            <b-col cols="12" lg="4">
              <p class="p-desc__2">- Cabin Attributes & Amenities</p>
              <p class="p-desc__2">- Seat Mapping Data</p>
              <p class="p-desc__2">- Cabin Class Mapping Data</p>
              <p class="p-desc__2">- Airport, Aircraft & City Data</p>
              <p class="p-desc__2">- Fare Rules Data</p>
              <p class="p-desc__2">- Real Time Pricing & Availability</p>
            </b-col>
          </b-row>
        </div>
      </div>
      <img src="@/assets/images/head_images/Additional elements 4.png" alt="">
    </div>
    <div class="images__2 d-none d-lg-block">
      <div class="wrapper mx-auto">
        <div class="text-left mt-150-px mb-180-px">
          <p class="p-desc__3">Available Services</p>
          <div class="w-100 dash"></div>
          <b-row class="mt-5">
            <b-col cols="12" lg="4">
              <p class="p-desc__2">- Unlimited test credentials</p>
              <p class="p-desc__2">- Premium support</p>
              <p class="p-desc__2">- Account management</p>
              <p class="p-desc__2">- Integration assistance</p>
            </b-col>
            <b-col cols="12" lg="4">
              <p class="p-desc__2">- Unlimited test credentials</p>
              <p class="p-desc__2">- Premium support</p>
              <p class="p-desc__2">- Account management</p>
              <p class="p-desc__2">- Integration assistance</p>
            </b-col>
            <b-col cols="12" lg="4">
              <p class="p-desc__2">- Unlimited test credentials</p>
              <p class="p-desc__2">- Premium support</p>
              <p class="p-desc__2">- Account management</p>
              <p class="p-desc__2">- Integration assistance</p>
            </b-col>
          </b-row>
        </div>
      </div>
      <img src="@/assets/images/head_images/Additional elements 4.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.pricing-page
  padding: 80px 0 0 0
  @media screen and (max-width: 800px)
    padding: 100px 10px
  .wrapper
    max-width: 1000px

  .p-desc
    font-family: Gilroy-Medium
    font-size: 12px
    font-weight: 600
    font-stretch: normal
    font-style: normal
    line-height: 1.44
    letter-spacing: normal
    color: #707070
    &__2
      @extend .p-desc
      line-height: 1.8
      font-weight: 500
    &__3
      @extend .p-desc
      font-family: Gilroy-Bold
      font-size: 20px
    &.p-h-a-img
      @media screen and (max-width: 1099px)
        display: none
      position: relative
      img
        position: absolute
        bottom: -9px
      &__1
        @extend .p-h-a-img
        img
          width: 190px
          max-height: 190px
          left: 26%
          bottom: -17px
      &__2
        @extend .p-h-a-img
        img
          width: 130px
          max-height: 141px
          left: 39%
      &__3
        @extend .p-h-a-img
        img
          width: 180px
          max-height: 172px
          left: 41%
  .p-title
    font-size: 30px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    line-height: 1.43
    letter-spacing: normal
    color: #000000
    &__2
      @extend .p-title
      font-size: 22px
    &__3
      @extend .p-title
      font-size: 24px
  .c-part
    max-width: 443px

  .images
    position: relative
    img
      position: absolute
    &__1
      @extend .images
      img
        width: 218px
        height: 156px
        left: -45px
        top: -35px
    &__2
      @extend .images
      img
        width: 162px
        height: 156px
        bottom: 0
        right: -60px
  
</style>
