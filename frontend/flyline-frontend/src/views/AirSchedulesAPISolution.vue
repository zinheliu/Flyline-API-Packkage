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
            <p class="section-titl__7 mt-4 mb-2 gilroy-b" style="font-size:24px;">Air Schedules API Solution</p>
            <p class="section-desc__2 mb-5">Most recent update : 5/6/21</p>
          </div>
        </div>
        <div class="w-100 dash"></div>
      </div>
      <div class="content text-left mt-5">
        <p class="section-titl__6 mb-4" style="font-size: 18px;">Overview</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">Our Air Schedules API is built to provide a simple and modern way of accessing global flight data for real-time and historical flights. Our schedules product is fed by multiple data sources. Because of this, our customers are confident knowing the data we return is always up to date and accurate.</p>
        <p class="section-titl__6 mb-4 mt-5" style="font-size: 18px;">Return schedules by Route or Specific Flight</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">When working with our air shopping solution you can return the data in two ways, return by route, or return by specific flight. Through both of these endpoints, we return the data below.</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Flight Status</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Flight Number</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Aircraft Type</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Travel Distance</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Departure City and Airport Code</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Departure Terminal</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Planned Departure Time</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Estimated Departure Time</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Actual Departure Time</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Arrival City and Airport Code</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Arrival Terminal</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Planned Arrival Time</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Estimated Arrival Time</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Actual Arrival Time</p>
        <p class="section-titl__6 mt-5 mb-4" style="font-size: 20px;">How do we get our data?</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">When using either endpoint in our air schedules API, you are able to return a flight schedule from every operating airline. Our data comes from a multitude of sources whether it be directly from Airlines, or flight stat data providers, we take all this data and aggregate it to provide the most accurate and up-to-date flight information to our customers.</p>
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