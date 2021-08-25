<template>
  <div>
    <section class="landing-max-width mx-auto py-5">
      <div class="p-header">
        <div class="head-wrp d-flex">
          <div class="d-flex menu">
            <div class="pl-4 d-flex flex-column justify-content-between">
              <p class="section-desc__2 cursor-pointer" @click="goTo('Suit')" style="margin-top: 30px; font-size: 12px;">Back to Product Suite</p>
            </div>
          </div>
          <div class="h-cn">
            <p class="section-titl__7 mt-4 mb-2 gilroy-b" style="font-size:24px;">Air Amenities API Solution</p>
            <p class="section-desc__2 mb-5">Most recent update 5/8/21</p>
          </div>
        </div>
        <div class="w-100 dash"></div>
      </div>
      <div class="content text-left mt-5">
        <p class="section-titl__6 mb-4" style="font-size: 18px;">Overview</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">Our Air Amenities API provides travelers all the details they can expect about a specific offer from an airline. This API displays targeted information and messaging about airline fares, products, and services travelers can expect on a specific offer or a list of offers.</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">Our air amenities product contents consist of three types—UPAs, Amenities, and UTAs—these three product categories are relevant to the offer being presented and cover the full range of airline and sales channel needs.  Our Air Amenities API allows and travel distributors to differentiate offerings on in-flight shopping displays and help upsell purchasing.</p>
        <p class="section-titl__6 mb-4 mt-5" style="font-size: 18px;">Cabin Amenities & Attributes Examples</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Seat Pitch</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Seat Width</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - In-flight meal</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Beverages available</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - In-flight WIFI</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - In-flight entertainment</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Cabin Configuration</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - And many more</p>
        <p class="section-titl__6 mb-4 mt-5" style="font-size: 18px;">Ticketing Attributes Examples</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Associated Change / Cancellation Fees</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Baggage Allowance & Pricing</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Boarding Zone</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Upgrade Availablity</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Seat Selection Information</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Any many more</p>
        <p class="section-titl__6 mt-5 mb-4" style="font-size: 18px;">Seat Maps and Seating Data</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">In addition to our Cabin Amenities & Attributes and Ticketing Attributes, we returning seat maps and data regarding seats on specific aircraft, included in this data we return a seat map key, displaying further information on specific seats available on a flight, such as "good seat", "premium seat", etc.</p>
        <p class="section-titl__6 mt-5 mb-4" style="font-size: 18px;">Ready to get started?</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">Are you ready to start building on our platform? To get started request access to a developer account. Once you request access someone from our team will reach out to understand your business model and how our product suite can help. Once we approve your account you're ready to start building!</p>
      </div>
      <div class="d-flex justify-content-between mt-5" style="margin-top: 100px;">
        <div>
          <b-btn class="custom-btn" @click="goTo('Doc')" style="width: 140px; height: 40px; font-size: 12px;">Review API Docs</b-btn>
          <b-btn class="custom-btn ml-3" @click="goTo('Signup')" style="width: 140px; height: 40px; font-size: 12px;">Get Access</b-btn>
        </div>
      </div>
      <div class="w-100 dash mt-5"></div>
    </section>
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
.landing-max-width
  max-width: 787px
  .head-wrp
    .menu
      @media screen and (min-width: 1100px)
        width: 150px
    .h-cn
      @media screen and (min-width: 1100px)
        margin-left: calc(50% - 150px - (330.77px/2))
</style>