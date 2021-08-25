<template>
  <div>
    <section class="landing-max-width mx-auto py-5">
      <div class="p-header">
        <div class="head-wrp d-lg-flex">
          <div class="d-flex menu">
            <div class="pl-4 d-flex flex-column justify-content-between">
              <p class="section-desc__2 cursor-pointer" @click="goTo('Doc')" style="margin-top: 30px; font-size: 12px;">Back to Product Suite</p>
            </div>
          </div>
          <div class="h-cn">
            <p class="section-titl__7 mt-4 mb-2 gilroy-b" style="font-size:24px;">Air Shopping API Solution</p>
            <p class="section-desc__2 mb-5">Most recent update 5/9/21</p>
          </div>
        </div>
        <div class="w-100 dash"></div>
      </div>
      <div class="content text-left" style="margin-top: 60px;">
        <p class="section-titl__6 mb-4" style="font-size: 18px;">Overview</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">Flyline’s Air Shopping API is a complete pricing, shopping, and availability solution. Travel companies rely on our on-air shopping API to deliver the data they need to their consumers/travelers. Our Air Shopping product searches — millions of combinations per query. With our modern, robust, and normalized API, integrating air shopping to your product has never been easier.</p>
        <p class="section-titl__6 mb-4 mt-5" style="font-size: 18px;">Handle Complex Search Criteria</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - One-way, round trip, multi-city, and open-jaw itineraries</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Multiple origins and/or destinations by radius</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Highly flexible date and calendar shopping</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Every class of service</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Multiple passengers and any passenger type</p>
        <p class="section-desc__3 gilroy-b mb-4 mt-5" style="font-size: 18px; color: #333333;">Calculate pricing, monitor availability, and return all possible itinerary options</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Query results that include all fare bases, all taxes and charges, the horizontal fare calculation</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Single or multi-carrier itineraries with full cross-shopping capability</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Accurate application and clear display of ATPCO-filed baggage charges</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Pricing solutions tailored by market segment, point-of-sale, channel, and even user</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Return public and private fares, including, percent off, net fares, and flat-rate fares</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - IATA checks and tax calculations for all countries</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Any combination of single or multiple currencies</p>
        <p class="section-titl__6 mt-5 mb-4" style="font-size: 18px;">Access to all airline content types</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">We provide air content from all different types of airlines, whether it be legacy/flag carriers (ie, American Airlines, Delta Airlines, British Airways), low-cost carriers (ie, , jetBlue, RyanAir), and ultra low-cost carriers (ie, Frontier, Spirit, Easyjet).</p>
        <p class="section-titl__6 mt-5 mb-4" style="font-size: 18px;">Why integrate with Flyline</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">Our Air Shopping API is built on a modern technology stack, with a robust normalization layer. Through this approach, developers have limitless options when looking to add our data to their platform. </p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Scales without limit to support any number of concurrent users</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - We deliver all the information necessary to book and ticket any itinerary directly in your booking tool</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - Easily integrate with you existing booking or shopping tools</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;"> - 24x7 support via our dedicated slack channel</p>
        <p class="section-titl__6 mt-5 mb-4" style="font-size: 18px;">Ready to get started?</p>
        <p class="section-desc__3" style="font-size: 14px; line-height: 28px;">Are you ready to start building on our platform? To get started request access to a developer account. Once you request access someone from our team will reach out to understand your business model and how our product suite can help. Once we approve your account you're ready to start building!</p>

      </div>
      <div class="d-flex flex-column flex-lg-row justify-content-between mb-4 align-items-lg-center" style="margin-top: 100px;">
        <div class="d-flex justify-content-between order-2 order-lg-1">
          <b-btn class="custom-btn" @click="goTo('Doc')" style="width: 140px; height: 40px; font-size: 12px;">Review API Docs</b-btn>
          <b-btn class="custom-btn ml-lg-3" @click="goTo('Signup')" style="width: 140px; height: 40px; font-size: 12px;">Get Access</b-btn>
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