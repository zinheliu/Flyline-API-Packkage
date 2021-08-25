<template>
  <div class="product-page text-left">
    <div class="c1 py-3">
      <div
        class="wrapper mx-auto d-flex align-items-center justify-content-between"
      >
        <div class="c1-c-part">
          <p class="c1-title">AirShopping</p>
          <p class="c1-desc mb-0">
            We provide a modern and simple product suite to access rich content,
            real-time pricing, flight availability, and
          </p>
        </div>
        <div class="c1-img d-none d-lg-block">
          <img src="@/assets/images/svg/schopping_image.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="wrapper mx-auto pt-80-px">
      <p class="c-title mb-4">Overview</p>
      <p class="c-desc mb-4">
        Flyline’s Air Shopping API is a complete pricing, shopping, and
        availability solution. Travel companies rely on our on-air shopping API
        to deliver the data they need to their consumers/travelers. Our Air
        Shopping product searches — millions of combinations per query. With our
        modern, robust, and normalized API, integrating air shopping to your
        product has never been easier.
      </p>

      <p class="c-title mb-4 mt-80-px">Handle Complex Search Criteria</p>
      <p class="c-desc mb-3">
        - One-way, round trip, multi-city, and open-jaw itineraries
      </p>
      <p class="c-desc mb-3">
        - Multiple origins and/or destinations by radius
      </p>
      <p class="c-desc mb-3">- Highly flexible date and calendar shopping</p>
      <p class="c-desc mb-3">- Every class of service</p>
      <p class="c-desc mb-3">- Multiple passengers and any passenger type</p>

      <p class="c-title mt-80-px mb-4" style="width: 600px;">
        Calculate pricing, monitor availability, and return all possible
        itinerary options
      </p>

      <p class="c-desc mb-3">
        - Query results that include all fare bases, all taxes and charges, the
        horizontal fare calculation
      </p>
      <p class="c-desc mb-3">
        - Single or multi-carrier itineraries with full cross-shopping
        capability
      </p>
      <p class="c-desc mb-3">
        - Accurate application and clear display of ATPCO-filed baggage charges
      </p>
      <p class="c-desc mb-3">
        - Pricing solutions tailored by market segment, point-of-sale, channel,
        and even user
      </p>
      <p class="c-desc mb-3">
        - Return public and private fares, including, percent off, net fares,
        and flat-rate fares
      </p>
      <p class="c-desc mb-3">
        - IATA checks and tax calculations for all countries
      </p>
      <p class="c-desc mb-3">
        - Any combination of single or multiple currencies
      </p>

      <p class="c-title mt-80-px mb-4" style="width: 600px;">
        Access to all airline content types
      </p>

      <p class="c-desc mb-3">
        We provide air content from all different types of airlines, whether it
        be legacy/flag carriers (ie, American Airlines, Delta Airlines, British
        Airways), low-cost carriers (ie, , jetBlue, RyanAir), and ultra low-cost
        carriers (ie, Frontier, Spirit, Easyjet).
      </p>

      <p class="c-title mt-80-px mb-4" style="width: 600px;">
        Why integrate with Flyline
      </p>

      <p class="c-desc mb-2">
        Our Air Shopping API is built on a modern technology stack, with a
        robust normalization layer. Through this approach, developers have
        limitless options when looking to add our data to their platform.
      </p>

      <p class="c-desc mb-3">
        - Scales without limit to support any number of concurrent users
      </p>
      <p class="c-desc mb-3">
        - We deliver all the information necessary to book and ticket any
        itinerary directly in your booking tool
      </p>
      <p class="c-desc mb-3">
        - Easily integrate with you existing booking or shopping tools
      </p>
      <p class="c-desc mb-3">- 24x7 support via our dedicated slack channel</p>

      <div class="mt-100-px"></div>
      <div class="d-flex justify-content-between my-5">
        <div>
          <b-btn
            class="custom-btn"
            @click="goTo('Doc')"
            style="width: 140px; height: 40px; font-size: 12px;"
            >Review API Docs</b-btn
          >
          <b-btn
            class="custom-btn ml-3"
            @click="goTo('Signup')"
            style="width: 140px; height: 40px; font-size: 12px;"
            >Get Access</b-btn
          >
        </div>
      </div>
      <div class="mb-80-px"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(name) {
      if (name) {
        this.$router.push({ name });
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.product-page
  .wrapper
    max-width: 787px
  .c1
    border-bottom: solid 0.5px #EDEEF6
    .c1-title
      font-family: Gilroy-Bold
      font-size: 24px
      font-weight: 800
      font-stretch: normal
      font-style: normal
      width: 350px
      line-height: 1.1
      letter-spacing: normal
      color: #000000
    .c1-desc
      font-size: 14px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 2.1
      letter-spacing: normal
      color: #707070
    .c1-c-part
      max-width: 419px
  .c-desc
    font-size: 14px
    font-weight: normal
    font-stretch: normal
    font-style: normal
    line-height: 2.1
    letter-spacing: normal
    color: #707070
  .c-title
    font-size: 22px
    font-family: GILROY-BOLD
    font-weight: normal
    font-stretch: normal
    font-style: normal
    line-height: 1.6
    letter-spacing: normal
    color: #333333
    &__2
      @extend .c-title
      font-size: 14px
      line-height: normal
  .f-c-part
    img
      height: 32px
      width: 32px
</style>
