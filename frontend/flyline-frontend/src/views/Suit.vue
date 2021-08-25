<template>
  <div class="">
    <!-- <landing-cover7_3 class="mt-5 mt-md-0" /> -->
    <section class="landing-max-width mx-auto pt-80-px pb-80-px">
      <p class="section-titl__7 gilroy-b mt-0" style="font-size: 28px;">Meet our Product Suite</p>
      <div class="w-100 dash my-5"></div>
      <div class="d-lg-flex align-items-center cursor-pointer" @click="goTo('AirShoppingAPISolution')">
        <div class="cn-image-section">
          <img src="@/assets/images/Air_Shopping.png" alt="">
        </div>
        <div class="content-section text-left pl-lg-5">
          <p class="cn-dt mb-2" style="font-size: 14px;">Most recent update : 5/9/21</p>
          <p class="section-titl__6" style="font-size: 22px;">Air Shopping API Solution</p>
          <p class="section-desc__2" style="font-size: 14px;">Our Air Shopping API Solution allows developers to shop flights from many airlines through one simple and easy integration. We return all the data that describes a flight offer and deliver all the necessary data to book a ticket.</p>
        </div>
      </div>
      <div class="w-100 dash my-5"></div>
      <div class="d-lg-flex align-items-center cursor-pointer" @click="goTo('AirAmenitiesAPISolution')">
        <div class="cn-image-section">
          <img src="@/assets/images/Air_Amenities.png" alt="">
        </div>
        <div class="content-section text-left pl-lg-5">
          <p class="cn-dt mb-2" style="font-size: 14px;">Most recent update : 5/8/21</p>
          <p class="section-titl__6" style="font-size: 22px;">Air Amenities API Solution</p>
          <p class="section-desc__2">Through our Amenities API, we deliver two types of data; Cabin Amenities, and Ticketing Attributes, with this data, your travelers know exactly what they can expect when purchasing a ticket.</p>
        </div>
      </div>
      <div class="w-100 dash my-5"></div>
      <div class="d-lg-flex align-items-center cursor-pointer" @click="goTo('AirSchedulesAPISolution')">
        <div class="cn-image-section">
          <img src="@/assets/images/Air_Schedules.png" alt="">
        </div>
        <div class="content-section text-left pl-lg-5">
          <p class="cn-dt mb-2" style="font-size: 14px;">Most recent update : 5/6/21</p>
          <p class="section-titl__6" style="font-size: 22px;">Air Schedules API Solution</p>
          <p class="section-desc__2">Use our Air Schedules API solution to instantly connect to global flight data. Through this API access real-time and historical flight schedules from all the major airlines. Get started today!</p>
        </div>
      </div>
      <!-- <div class="w-100 dash my-5"></div> -->
    </section>
  </div>
</template>

<script>
// import LandingCover7_3 from "@/components/Landing/LandingCover7_3";
export default {
  components: {
    // LandingCover7_3,
  },
  methods:{
    goTo(name){
      if(name) this.$router.push({name})
    },
  },
};
</script>

<style lang="sass" scoped>
.landing-max-width
  max-width: 821px
.cn-dt
  font-size: 14px
  font-weight: 500
  font-stretch: normal
  font-style: normal
  letter-spacing: normal
  color: #333333
.section-desc__2
  max-width: 458px
.cn-image-section
  text-align: left
  img
    max-height: 194px
    max-width: 228px
    height: 100%
    width: 100%
    @media screen and (max-width: 800px)
      max-width: 100%
      object-fit: cover
.content-section
  @media screen and (max-width: 1100px)
    margin-top: 30px
</style>
