<template>
  <div class="doc-page py-60-px text-left">
    <div class="wrapper px-3 pr-lg-0 pl-lg-4">
      <p class="c-title" style="margin-bottom: 4px;">
        Welcome to our API Documentation
      </p>
      <p class="c-desc">
        Here you'll find quick start guides, supporting resources, and
        references to build with Flyline.
      </p>
    </div>
    <div class="my-5 position-relative h-img-wrapper">
      <div class="w-100 dash"></div>
    </div>
    <div class="wrapper px-3 pr-lg-0 pl-lg-4">
      <b-row class="mobile-margin-zero">
        <b-col cols="12" lg="4" class="px-0 px-lg-3 mt-3 mt-lg-0">
          <div class="c-card cursor-pointer" @click="goTo({ to: 'ApiRef' })">
            <div
              class="t-sec d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="c-title__2 f-14-px mb-4-px">API Reference</span>
              <b-icon icon="arrow-right"></b-icon>
            </div>
            <p class="c-desc__2 mb-0" style="line-height: 1.8">
              Explore our product suite and learn how to easily integrate and
              work with our endpoints.
            </p>
          </div>
        </b-col>
        <b-col cols="12" lg="4" class="px-0 px-lg-3 mt-3 mt-lg-0">
          <div
            class="c-card cursor-pointer"
            @click="goTo({ to: 'ChangelogDoc' })"
          >
            <div
              class="t-sec d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="c-title__2 f-14-px mb-4-px">Changelog & Notes</span>
              <b-icon icon="arrow-right"></b-icon>
            </div>
            <p class="c-desc__2 mb-0" style="line-height: 1.8">
              Never miss a beat, stay up to date with our release notes and
              updates in our changelog.
            </p>
          </div>
        </b-col>
        <b-col cols="12" lg="4" class="px-0 px-lg-3 mt-3 mt-lg-0">
          <div
            class="c-card cursor-pointer"
            @click="
              goTo({
                href: 'https://github.com/FlyLine-Development/flyline-postman'
              })
            "
          >
            <div
              class="t-sec d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="c-title__2 f-14-px mb-4-px">Postman Collection</span>
              <b-icon icon="arrow-right"></b-icon>
            </div>
            <p class="c-desc__2 mb-0" style="line-height: 1.8">
              If you're looking for an easy way to get started with the Flyline
              API with no additional code. Start here!
            </p>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="wrapper px-3 pr-lg-0 pl-lg-4 mt-5">
      <p class="c-title">Product Suite</p>
      <b-row class="mobile-margin-zero">
        <b-col cols="12" lg="6" class="px-0 px-lg-3">
          <div
            class="c-card cursor-pointer"
            @click="goTo({ path: '/api-ref/amenities' })"
          >
            <div
              class="t-sec d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="c-title__2 f-14-px mb-4-px"
                >Shopping Attributes</span
              >
              <b-icon icon="arrow-right"></b-icon>
            </div>
            <p class="c-desc__2 mb-0" style="line-height: 1.8">
              Retrive all the data included in a ticket corresponding to the
              class of service, ie, in-flight WIFI, Baggage Allowance, etc. You can return this data on a specific flight
              our list it by a route.
            </p>
          </div>
        </b-col>
        <b-col cols="12" lg="6" class="px-0 px-lg-3 mt-3 mt-lg-0">
          <div class="c-card cursor-pointer" @click="goTo({ path: '/api-ref/seatmap' })">
            <div
              class="t-sec d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="c-title__2 f-14-px mb-4-px">Seat Mapping Data</span>
              <b-icon icon="arrow-right"></b-icon>
            </div>
            <p class="c-desc__2 mb-0" style="line-height: 1.8">
              Access seat mapping data on a specific flight. We return this data
              in two ways, via a list of the rows and collums of the seat map,
              or via an image of the seat map.
            </p>
          </div>
        </b-col>
        <b-col
          cols="12"
          lg="6"
          class="mt-lg-3 px-0 px-lg-3 mt-3 mt-lg-0"
          style="padding-top:20px;"
        >
          <div
            class="c-card cursor-pointer"
            @click="goTo({ path: '/api-ref/schedules' })"
          >
            <div
              class="t-sec d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="c-title__2 f-14-px mb-4-px"
                >Flight Schedules & Status</span
              >
              <b-icon icon="arrow-right"></b-icon>
            </div>
            <p class="c-desc__2 mb-0" style="line-height: 1.8">
              Return live and real time flight schedules data, Within this data
              we return the Planning Departure/Arrival Time, Estimated
              Departure/Arrival Time, Actual Departure/Arrival Time.
            </p>
          </div>
        </b-col>
        <b-col
          cols="12"
          lg="6"
          class="mt-lg-3 px-0 px-lg-3 mt-3 mt-lg-0"
          style="padding-top:20px;"
        >
          <div
            class="c-card cursor-pointer"
            @click="goTo({ path: '/api-ref/flight-search' })"
          >
            <div
              class="t-sec d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="c-title__2 f-14-px mb-4-px">Airfare Shopping</span>
              <b-icon icon="arrow-right"></b-icon>
            </div>
            <p class="c-desc__2 mb-0" style="line-height: 1.8">
              Shop flights from all the top airlines and access real time
              pricing and availability. Retrive content from legacy airlines,
              low cost and ultra low cost airlines.
            </p>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(item) {
      if (item.to) this.$router.push({ name: item.to });
      else if (item.path) this.$router.push({ path: item.path });
      else if (item.href) window.location = item.href;
    }
  }
};
</script>

<style lang="sass" scoped>
.mobile-margin-zero
  @media screen and (max-width: 1100px)
    margin-left: 0
    margin-right: 0
.c-title
  font-family: Gilroy-Bold
  font-size: 20px
  font-weight: 800
  font-stretch: normal
  font-style: normal
  line-height: 1.3
  letter-spacing: normal
  color: #333333
  &__2
    @extend .c-title
    font-size: 16px
    font-family: GILROY-BOLD
    line-height: 1.88
    color: #333333
.c-desc
  font-size: 14px
  font-weight: 500
  font-stretch: normal
  font-style: normal
  line-height: 1.8
  letter-spacing: normal
  color: #707070
  &__2
    @extend .c-desc
    font-size: 10px
    line-height: 2

.c-card
  padding: 25px
  border-radius: 4px
  border: solid 1.9px #e9e9e9

.h-img-wrapper
  img
    position: absolute
    right: 0
    bottom: -76px
    @media screen and (max-width: 1099px)
      display: none
</style>
