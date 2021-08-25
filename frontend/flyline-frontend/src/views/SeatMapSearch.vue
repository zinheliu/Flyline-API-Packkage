<template>
  <div class="py-140-px seatmap-search text-left">
    <div class="c-width__2 mx-auto pt-5">
      <div class="c-width mx-auto">
        <p class="c-title text-white">Find the seat map for your flight.</p>
      </div>
      <div class="c-width search-wrapper mx-auto py-3 px-3">
        <div class="d-flex">
          <p class="c-title__2">Search by Flight Number</p>
          <p class="c-title__2 op ml-lg-4">Search by Route</p>
        </div>
        <div class="search-form">
          <b-input v-model="carrier" class="c-input" placeholder="Select Airline , e.g Delta Airlines"></b-input>
          <b-input v-model="aircraft" class="c-input" placeholder="Enter Flight Number, e.g 1105"></b-input>
          <div class="c-input datepicker-trigger">
            <b-input type="text" id="datepicker-trigger" placeholder="Date" :value="formatDates(date_one, date_two)" />
            <AirbnbStyleDatepicker
              :trigger-element-id="'datepicker-trigger'"
              :mode="'range'"
              :fullscreen-mobile="true"
              :date-one="date_one"
              :date-two="date_two"
              @date-one-selected="val => { date_one = val }"
              @date-two-selected="val => { date_two = val }"
            />
          </div>
          <b-btn class="custom-btn search-btn" @click="search">Search</b-btn>
        </div>
      </div>
    </div>
    <div class="c-width mx-auto pt-120-px">
      <p class="c-title__3">Seat mapping data from these airlines and many more.</p>
      <div class="c-box-wrapper d-flex flex-wrap justify-content-between">
        <div v-for="(b, i) in 14" :key="i" class="px-1 mb-3">
          <div class="c-box"></div>
        </div>
      </div>
      <p class="c-title__3 mt-5">What is SeatTicker?</p>

      <p class="c-desc">Wanderu is a travel search platform that helps travelers find the best deals on bus and train tickets across North America and Europe. With just a quick search on the Wanderu website or the Wanderu app for iOS and Android, you can compare bus and train schedules and prices from hundreds of travel companies in one convenient place to find the bus or train that works best for you. Wanderu’s simple checkout process makes it easy to book your bus and train tickets hassle-free and with no additional fees.</p>
      <p class="c-desc">Wanderu is the official partner of hundreds of carriers that offer bus and train service across the United States, Canada, Mexico, and throughout Europe. By working directly with the biggest names in the ground travel industry, Wanderu is the most efficient way to compare your travel options and buy tickets online for over two million routes.</p></p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'
import format from 'date-fns/format'
Vue.use(AirbnbStyleDatepicker, {
  dateLabelFormat: 'dddd, MMMM D, YYYY',
})
export default {
  data(){
    return {
      dateFormat: 'D MMM',
      date_one: '',
      date_two: '',
      carrier: null,
      aircraft: null,
    }
  },
  methods: {
    formatDates(date_one, date_two) {
      let formattedDates = ''
      if (date_one) {
        formattedDates = format(date_one, this.dateFormat)
      }
      if (date_two) {
        formattedDates += ' - ' + format(date_two, this.dateFormat)
      }
      return formattedDates
    },
    search(){
      let query = {}
      if(this.carrier && this.carrier.length > 0) query['carrier'] = this.carrier
      if(this.aircraft && this.aircraft.length > 0) query['aircraft'] = this.aircraft
      if(this.date_one && this.date_one.length > 0) query['date_one'] = this.date_one
      if(this.date_two && this.date_two.length > 0) query['date_two'] = this.date_two
      this.$router.push({
        name: 'SeatMapSearchResult',
        query
      })
    },
  }
}
</script>

<style lang="sass" scoped>
.c-width
  max-width: 940px
  &__2
    max-width: 1000px
    border-radius: 10px
    border: solid 1.8px #edeef6
    background-color: #203be7
.c-title
  font-size: 38px
  font-weight: 800
  font-stretch: normal
  font-style: normal
  line-height: 1.89
  letter-spacing: -0.76px
  &__2
    font-size: 14px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    line-height: 5.14
    letter-spacing: -0.28px
    color: #000000
    &.op
      opacity: 0.5
  &__3
    font-size: 24px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    line-height: 3
    letter-spacing: -0.48px
    color: #000000
.c-desc
  font-size: 16px
  font-weight: 500
  font-stretch: normal
  font-style: normal
  line-height: 2.25
  letter-spacing: normal
  color: #707070
.search-wrapper
  border-radius: 10px
  border: solid 1.8px #edeef6
  background-color: #ffffff
  margin-bottom: -78px
  .search-form
    @media screen and (min-width: 1100px)
      display: flex
      justify-content: space-between
      .c-input
        height: 46px
        font-size: 14px
        font-weight: 600
        font-stretch: normal
        font-style: normal
        line-height: 1.86
        letter-spacing: normal
        color: #000000
        &::placeholder
          font-size: 14px
          font-weight: 600
          font-stretch: normal
          font-style: normal
          line-height: 1.86
          letter-spacing: normal
          color: #000000
          opacity: 0.2
        &:focus
          box-shadow: unset
        &.datepicker-trigger
          input
            font-size: 14px
            font-weight: 600
            font-stretch: normal
            font-style: normal
            line-height: 1.86
            letter-spacing: normal
            color: #000000
            height: 100%
            &::placeholder
              font-size: 14px
              font-weight: 600
              font-stretch: normal
              font-style: normal
              line-height: 1.86
              letter-spacing: normal
              color: #000000
              opacity: 0.2
        &:nth-child(1)
          width: 35%
        &:nth-child(2)
          width: 27%
        &:nth-child(3)
          width: 18%
      .search-btn
        width: 141px
        height: 46px
.c-box-wrapper
  .c-box
    width: 111px
    height: 102px
    border-radius: 10px
    border: solid 1.4px #edeef6
    background-color: #ffffff
</style>
