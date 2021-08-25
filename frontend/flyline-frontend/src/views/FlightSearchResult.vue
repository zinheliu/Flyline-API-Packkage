<template>
  <div class="landing-max-width mx-auto py-50-px">
    <dashboard-card>
      <div class="d-flex">
        <b-table-simple class="shop-table">
          <b-thead>
            <b-tr>
              <b-th>
                <span class="menu-title">All Flight</span>
              </b-th>
              <b-th v-for="(flight, aI) in headers" :key="aI">
                <div :class="['flight-head', selectedFlight && selectedFlight.id == flight.id ? 'selected-flight':'']" @click="selectedFlight = flight">
                  <img :src="flight.photo" alt="">
                  <p class="mb-0 mt-2">{{flight.name}}{{flight.id}}</p>
                  <span class="active-tab"></span>
                </div>
              </b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <span class="menu-title">1 Stops</span>
              </b-td>
              <b-td v-for="(flight, aI) in flights" :key="aI">
                <p class="mb-0 td-text">From</p>
                <p class="mb-0 td-text">{{flight.stop1}}</p>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <span class="menu-title">2 Stops</span>
              </b-td>
              <b-td v-for="(flight, aI) in flights" :key="aI">
                <p class="mb-0 td-text">From</p>
                <p class="mb-0 td-text">{{flight.stop2}}</p>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        <div class="more-sec">
          <p class="mb-0">More</p>
        </div>
      </div>
    </dashboard-card>
    <!-- <b-table class="shrink-table" :fields="tripHeaders" :items="trips">
      <template #head(price)>
        <b-select :options="priceOptions" v-model="selPrice"></b-select>
      </template>
      <template #head(airlines)>
        <b-select :options="airlineOptions" v-model="selAirline"></b-select>
      </template>
      <template #head(depart)>
        <b-select :options="departOptions" v-model="selDepart"></b-select>
      </template>
      <template #head(arrive)>
        <b-select :options="arriveOptions" v-model="selArrive"></b-select>
      </template>
      <template #head(duration)>
        <b-select :options="durationOptions" v-model="selDuration"></b-select>
      </template>
      <template #head(fromto)>
        <b-select :options="fromtoOptions" v-model="selFromTo"></b-select>
      </template>
      <template #head(stops)>
        <b-select :options="stopsOptions" v-model="selStops"></b-select>
      </template>
      <template #head(advisory)>
        <b-select :options="advisoryOptions" v-model="selAdvisory"></b-select>
      </template>
    </b-table> -->
  </div>
</template>

<script>
import DashboardCard from '@/components/Dashboard/DashboardCard'
export default {
  components:{
    DashboardCard
  },
  data(){
    return {
      priceOptions: ['Price'],
      selPrice: 'Price',
      airlineOptions: ['Airline'],
      selAirline: 'Airline',
      departOptions: ['Depart'],
      selDepart: 'Depart',
      arriveOptions: ['Arrive'],
      selArrive: 'Arrive',
      durationOptions: ['Duration'],
      selDuration: 'Duration',
      fromtoOptions: ['From/To'],
      selFromTo: 'From/To',
      stopsOptions: ['From/To'],
      selStops: 'From/To',
      advisoryOptions: ['From/To'],
      selAdvisory: 'From/To',
      selectedFlight: null
    }
  },
  computed:{
    headers(){
      return [
        { id: '345', photo: require("@/assets/images/airlines/ANA_Airlines_Icon.svg"), name: 'Airplane' },
        { id: '346', photo: require("@/assets/images/airlines/ANA_Airlines_Icon.svg"), name: 'Airplane2' },
        { id: '347', photo: require("@/assets/images/airlines/ANA_Airlines_Icon.svg"), name: 'Airplane3' },
        { id: '348', photo: require("@/assets/images/airlines/ANA_Airlines_Icon.svg"), name: 'Airplane4' },
        { id: '349', photo: require("@/assets/images/airlines/ANA_Airlines_Icon.svg"), name: 'Airplane5' },
      ]
    },
    flights(){
      return [
        { id: '345', stop1: '345', stop2: '233' },
        { id: '346', stop1: '345', stop2: '233' },
        { id: '347', stop1: '345', stop2: '233' },
        { id: '348', stop1: '345', stop2: '233' },
        { id: '349', stop1: '345', stop2: '233' },
      ]
    },
    tripHeaders(){
      return [
        { key: 'price', label: 'Price' },
        { key: 'airlines', label: 'Airline' },
        { key: 'depart', label: 'Depart' },
        { key: 'arrive', label: 'Arrive' },
        { key: 'duration', label: 'Duration' },
        { key: 'fromto', label: 'From/To' },
        { key: 'stops', label: 'Stops' },
        { key: 'advisory', label: 'Advisory' },
      ]
    },
    trips(){
      return [
        { 
          price: 365,
          airlines: [
            { photo: require("@/assets/images/airlines/ANA_Airlines_Icon.svg"), name: 'Airplane' },
            { photo: require("@/assets/images/airlines/ANA_Airlines_Icon.svg"), name: 'Airplane2' },
            { photo: require("@/assets/images/airlines/ANA_Airlines_Icon.svg"), name: 'Airplane3' },
          ],
          depart: ['12 May 6:45 PM', '12 May 6:45 PM'],
          arrive: ['12 May 6:45 PM', '12 May 6:45 PM'],
          duration: ['16:45m', '16:45m'],
          fromto: ['ABC to CDE', 'ABC to CDE'],
          stops: ['FRA', 'FRA'],
          advisory: ['Long Layover', 'Long Layover'],
        },
      ]
    },
  },
}
</script>

<style lang="sass" scoped>
.flight-head
  img
    height: 39px
    width: 39px
  p
    font-size: 16px
    font-weight: normal
    font-stretch: normal
    font-style: normal
    // line-height: 2.38
    letter-spacing: normal
    color: #0e3178
  &.selected-flight
    position: relative
    p
      color: #00aeee
    .active-tab
      position: absolute
      bottom: -13px
      left: 3px
      border-radius: 2px
      height: 5px
      width: 100%
      border: solid 1px #00aeee
      background-color: #00aeee
      @media screen and (max-width: 1100px)
        display: none

.more-sec
  position: relative
  min-width: 100px
  padding: 0 10px
  p
    position: absolute
    top: 85px
    // @media screen and (max-width: 1100px)
    //   display: none

.menu-title
  font-size: 16px
  font-weight: normal
  font-stretch: normal
  font-style: normal
  // line-height: 2.38
  letter-spacing: normal
  color: #0e3178

.td-text
  font-size: 16px
  font-weight: normal
  font-stretch: normal
  font-style: normal
  // line-height: 2.38
  letter-spacing: normal
  color: #707070
</style>