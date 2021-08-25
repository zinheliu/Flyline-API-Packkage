<template>
  <div class="shop-card px-3 py-5">
    <div class="d-flex flex-wrap">
      <div class="price-wrapper mr-md-3">
        <div class="price-sec d-flex align-items-center justify-content-center">
          ${{flight.total_amount}}
        </div>
      </div>
      <div class="dep-arr">
        <table class="w-100">
          <tr class="dep" v-for="(slice , sI) in flight.slices" :key="sI">
            <td>
              <p class="mb-0 title-t__1">
                <img v-if="sI == 0" class="ml-2" src="@/assets/images/svg/arrow_2.svg" alt="">
                <b-icon v-else icon="arrow-left" class="text-primary gilroy-b mr-2"></b-icon>
                <span v-if="sI == 0">Departure</span>
                <span v-else>Return</span>
              </p>
            </td>
            <td>
              <p class="mb-0 title-t__1">{{slice.origin.name}}</p>
            </td>
            <td>
              <p class="mb-0 title-t__1">
                {{formatTime(slice.segments[0].departing_at)}} - {{formatTime(slice.segments[slice.segments.length - 1].arriving_at)}}
              </p>
            </td>
            <td>
              <p class="mb-0 title-t__1">{{formatDuration(slice.duration)}}</p>
            </td>
            <td>
              <p class="mb-0 title-t__1">
                {{slice.segments[0].origin.iata_code}} - {{slice.segments[slice.segments.length - 1].origin.iata_code}}
              </p>
            </td>
          </tr>
        </table>
        <div class="d-md-flex justify-content-between w-100 mt-3">
          <p class="mb-0 title-t__2">Fare Information : Main Cabin , Y , Published Fare , Non Refundable Fare</p>
          <p class="mb-0 title-t__2 cursor-pointer" @click="showDetails = !showDetails">
            <span v-if="!showDetails">View Details</span>
            <span v-else>Hide Details</span>
            <b-icon v-if="!showDetails" icon="arrow-down" class="text-primary ml-2"></b-icon>
            <b-icon v-else icon="arrow-up" class="text-primary ml-2"></b-icon>
          </p>
        </div>
      </div>
    </div>
    <div v-if="showDetails">
      <div v-for="(slice, sI) in flight.slices" :key="sI">
        <div class="w-100 dash my-4"></div>
        <div class="details d-flex flex-wrap">
          <div class="airline-image-wrapper mr-md-3">
            <div class="airline-image">
              <img src="" alt="">
            </div>
          </div>
          <div class="d-md-flex justify-content-between det-place-cabin">
            <div class="place">
              <p class="mb-0 title-t__1">Dallas/Fort Worth (DFW) to New York (EWR) — Tue, Apr 20</p>
              <p class="mb-0 d-flex justify-content-between title-t__2">
                <span>ANA Airlines Flight 3496</span>
                <span>Airbus A319</span>
                <span>Airbus A319</span>
              </p>
            </div>
            <div class="vertical-dash"></div>
            <div class="cabin-att">
              <p class="mb-0 title-t__2">Cabin Attributes : Seat Pitch : 30” , 3-3 Layout</p>
              <p class="mb-0 title-t__2">Cabin Amenities : WIFI , Power Outlets , Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props:{
    flight: Object
  },
  data(){
    return {
      showDetails: false
    }
  },
  methods:{
    formatTime(d){
      if (!d || !moment(d).isValid) return ""
      return moment(d).format("hh:mm A")
    },
    formatDuration(d){
      if (!d || !moment({}).seconds(d).isValid) return ""
      let h = parseInt(moment({}).seconds(d).format("h"))
      let m = parseInt(moment({}).seconds(d).format("m"))
      let str = ''
      if(h != 0) str += `${h}h `
      str += `${m}m`
      return str
    },
  },
}
</script>

<style lang="sass" scoped>
.shop-card
  border-radius: 4px
  border: solid 1px #e9e9e9
  .price-wrapper , .airline-image-wrapper
    width: 100px
    .price-sec
      border-radius: 4px
      background-color: #EBFBED
      height: 46px
      min-width: 84px
      font-size: 20px
      font-stretch: normal
      font-style: normal
      line-height: 0.9
      letter-spacing: 1px
      color: #40ce53
  .dep-arr , .det-place-cabin
    width: calc( 100% - 100px - 1rem )
  .place
  .cabin-att
  .vertical-dash
    min-width: 1px
    border-radius: 4px
    background-color: #e9e9e9


  .title-t
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    text-align: left
    color: #3a3f5c
    &__1
      @extend .title-t
      font-size: 14px
      font-family: GILROY-BOLD
    &__2
      @extend .title-t
      font-size: 12px
      font-weight: 600
</style>