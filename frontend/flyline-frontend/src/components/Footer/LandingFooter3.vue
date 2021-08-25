<template>
  <div class="landing-footer mx-auto text-left px-3 px-md-0">
    <div class="w-100 dash mb-100-px"></div>
    <div class="footer-wrapper mx-auto">
      <b-row>
        <b-col cols="12" lg="5" class="mb-5 mb-lg-0">
          <p class="f-title">Simplify your travel data</p>
          <p class="f-desc__1 mb-5">
            Easily access flight data on a modern and robust developer-friendly
            platform.
          </p>
          <p class="f-desc">
            © 2021 Flyline Holdings Inc - Built in New York, NY
          </p>
        </b-col>
        <b-col cols="12" lg="7">
          <b-row>
            <b-col cols="12" lg="4" class="pl-lg-0">
              <p class="f-title">Products</p>
              <p class="f-desc cursor-pointer" @click="goTo({path: '/api-ref/flight-search'})">
                Air Shopping Solution
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({path: '/api-ref/amenities'})">
                Shopping Attributes Data
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({path: '/api-ref/schedules'})">
                Flight Schedules & Real Time
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({path: '/api-ref/seatmap'})">
                Seat Mapping Data
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({path: '/api-ref/aircraft'})">
                Supporting Resources Data
              </p>
            </b-col>
            <b-col cols="12" lg="4" class="pl-lg-4">
              <p class="f-title">Developers</p>
              <p class="f-desc cursor-pointer" @click="goTo({to: 'Doc'})">
                Quick Start Guide
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({to: 'Doc'})">
                API Documentation
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({to: 'ApiRef'})">
                API Reference
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({to: 'Libraries'})">
                Libraries & SDK’s
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({to: 'ChangelogDoc'})">
                Changelog & Release Notes
              </p>
            </b-col>
            <b-col cols="12" lg="4" class="pl-lg-5">
              <p class="f-title">About</p>
              <p class="f-desc cursor-pointer" @click="goTo({to: 'CompanyInfo'})">
                Company
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({path: '/company-info#hiring'})">
                Careers - We're Hiring!
              </p>
              <p class="f-desc cursor-pointer" @click="openEmail">Contact</p>
              <p class="f-desc cursor-pointer" @click="goTo({to: 'Terms'})">
                Terms of Service
              </p>
              <p class="f-desc cursor-pointer" @click="goTo({to: 'Privacy'})">
                Privacy Policy
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(item) {
      if (item.href) {
        window.location = item.href;
      } else if (item.to) {
        let obj = { name: item.to };
        this.$router.push(obj);
      } else if (item.path) {
        let obj = { path: item.path };
        this.$router.push(obj);
      }
    },
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/footer'
.landing-footer
  padding-bottom: 80px
  padding-top: 0px
  .footer-wrapper
    max-width: 1020px !important
    .f-title
      font-size: 14px
      font-family: GILROY-BOLD
      font-stretch: normal
      font-style: normal
      line-height: 2.14
      letter-spacing: normal
      color: #000000
    .f-desc
      font-size: 12px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 2
      letter-spacing: normal
      color: #707070
      &__1
        @extend .f-desc
        max-width: 256px
</style>
