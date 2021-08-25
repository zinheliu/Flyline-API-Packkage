<template>
  <div class="bookings">
    <div class="dashboard-toolbar d-flex justify-content-between align-items-center mb-3">
      <p class="mb-0 dashboard-title-text">{{title}}</p>
      <p class="mb-0 text-primary cursor-pointer view-all" v-if="!all" @click="goTo('Bookings')">
        <span class="mr-2">View All</span>
        <b-icon icon="chevron-right" scale="1.1"></b-icon>
      </p>
    </div>
    <div class="table-section">
      <b-table :items="bookings" :fields="fields" class="shrink-table bookings-table" id="bookings-table" :per-page="bookingTableSettings.perPage" :current-page="bookingTableSettings.currentPage">
        <template #cell(airline)="row">
          <img src="@/assets/images/svg/QA_icon.svg" alt="" class="airline-image">
          <span>{{ row.item.airline }}</span>
        </template>
        <template #cell(departure)="row">
          <span v-html="formatDepartureReturn(row.item.departure)"></span>
        </template>
        <template #cell(return)="row">
          <span v-html="formatDepartureReturn(row.item.return)"></span>
        </template>
        <template #cell(status)="row">
          <span :class="['gilroy-b status-text',row.item.status]">{{ row.item.status }}</span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    all: Boolean,
    tableSettings: Object,
    title: {
      type: String,
      default: 'Bookings'
    }
  },
  data(){
    return {
      bookings:[
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
        {
          airline: 'BA',
          bookingRef: 'KWA88Z',
          familyNames: 'BURAU',
          departure: '20/01/2109:00 PM',
          from: 'CANADA',
          to: 'NEW YORK CITY',
          return: '20/01/21 09:00 PM',
          amount: 'USD 1.700',
          status: 'Confirmed'
        },
      ],
      bookingTableSettings: {
        perPage: 4,
        currentPage: 1
      },
    }
  },
  created(){
    this.setup()
  },
  watch:{
    tableSettings: {
      handler(v){
        this.setup()
      },deep: true
    },
  },
  computed:{
    fields(){
      let arr1 = [
        { key: 'airline', label: 'AIRLINE', },
        { key: 'bookingRef', label: 'BOOKING REF' },
        { key: 'familyNames', label: 'FAMILY NAMES' },
      ]
      let arr2 = [
        { key: 'amount', label: 'AMOUNT' },
        { key: 'status', label: 'STATUS' },
      ]
      let arr3 = [
        { key: 'departure', label: 'DEEPARTURE', tdClass: 'departure' },
        { key: 'from', label: 'FROM' },
        { key: 'to', label: 'TO' },
        { key: 'return', label: 'RETURN', tdClass: 'return' },
      ]
      let items = []
      if(this.all) items = arr1.concat(arr3).concat(arr2)
      else items = arr1.concat(arr2)
      return items
    },
  },
  methods:{
    setup(){
      if(this.tableSettings){
        this.bookingTableSettings = {...this.tableSettings}
      }
    },
    goTo(name){
      this.$router.push({name})
    },
    formatDepartureReturn(d){
      return d.substr(0,8) + '<br />' + d.substr(8)
    },
  },
}
</script>

<style lang="sass" scoped>
.bookings-table
  .airline-image
    width: 26px
    height: 26px
  .status-text
    font-size: 14px
    font-stretch: normal
    font-style: normal
    line-height: 1.43
    letter-spacing: normal
    &.Confirmed
      color: #44cf57
  ::v-deep .departure , ::v-deep .return
    font-family: GILROY-MEDIUM !important
</style>