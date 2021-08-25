<template>
  <div class="shopping-terminal-page landing-max-width mx-auto px-2 px-md-0">
    <b-row class="mx-0">
      <b-col cols="12" class="px-0">
        <dashboard-card class="px-2 px-md-4 py-4">
          <validation-observer ref="shopFormObserver" v-slot="{ handleSubmit }">
            <b-form @submit.stop.prevent="handleSubmit(fetchFlights)">
              <p class="t-title text-left">Hey there! Welcome to Flyline shopping terminal</p>
              <p class="t-sub text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s ,</p>
              <div class="dash w-100 my-5"></div>
              <b-row class="mx-0">
                <b-col cols="12" md="6" class="pl-0 pl-md-3">
                  <div class="d-flex flex-wrap">
                    <p :class="['mb-0 t-sub gilroy-b mr-4 mr-md-4', trip == 'ROUND' ? 'text-primary' : '']" @click="trip = 'ROUND'">Round Trip</p>
                    <p :class="['mb-0 t-sub gilroy-b mr-4 mr-md-4', trip == 'ONE' ? 'text-primary' : '']" @click="trip = 'ONE'">One-trip</p>
                    <p :class="['mb-0 t-sub gilroy-b', trip == 'MULTI' ? 'text-primary' : '']" @click="trip = 'MULTI'">Multy City</p>
                  </div>
                </b-col>
                <b-col cols="12" md="6" class="mt-3 mt-md-0 pl-0 pl-md-3">
                  <div class="d-flex flex-wrap">
                    <div :class="['d-flex align-items-center mr-4 text-primary']">
                      <b-icon icon="plus" class="cursor-pointer" @click="setAdult(1)"></b-icon>
                      <span class="gilroy-b t-sub ml-2 text-primary">{{adult}}</span>
                      <span class="gilroy-b t-sub mx-2 text-primary">Adult</span>
                      <b-icon icon="dash" class="cursor-pointer" @click="setAdult(-1)"></b-icon>
                    </div>
                    <div :class="['d-flex align-items-center', children > 0 ? 'text-primary':'']">
                      <b-icon icon="plus" class="cursor-pointer" @click="setChildren(1)"></b-icon>
                      <span :class="['gilroy-b t-sub ml-2', children > 0 ? 'text-primary' : '']">{{children}}</span>
                      <span :class="['gilroy-b t-sub mx-2', children > 0 ? 'text-primary' : '']">Children</span>
                      <b-icon icon="dash" class="cursor-pointer" @click="setChildren(-1)"></b-icon>
                    </div>
                  </div>
                </b-col>
                <b-col cols="12" md="6" class="mt-3 px-0 px-md-3">
                  <b-input autocomplete="on" v-model="formData.departure" class="custom-input t-input" list="city-list-1" placeholder="Departure City or Airport"></b-input>
                  <datalist id="city-list-1">
                    <option :value="airport.iata_code" v-for="(airport, aI) in airports" :key="aI">{{airport.name}}</option>
                  </datalist>
                </b-col>
                <b-col cols="12" md="6" class="mt-3 px-0 px-md-3">
                  <b-input autocomplete="on" v-model="formData.arrival" class="custom-input t-input" list="city-list-2" placeholder="Arrival City or Airport"></b-input>
                  <datalist id="city-list-2">
                    <option :value="airport.iata_code" v-for="(airport, aI) in airports" :key="aI">{{airport.name}}</option>
                  </datalist>
                </b-col>
                <b-col cols="12" md="6" class="mt-3 px-0 px-md-3">
                  <b-row class="mx-0">
                    <b-col class="px-0" cols="12" md="6">
                      <b-form-datepicker v-model="formData.departureDate" label-no-date-selected="Outbound Date" :date-format-options="dtFormat" class="custom-input t-input dt-picker__small w-100"></b-form-datepicker>
                    </b-col>
                    <b-col class="pl-md-3 px-0 pr-md-0 mt-3 mt-md-0" cols="12" md="6">
                      <b-input class="custom-input t-input" placeholder="On this day"></b-input>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="12" md="6" class="mt-3 px-0 px-md-3">
                  <b-row class="mx-0">
                    <b-col class="px-0" cols="12" md="6">
                      <b-form-datepicker v-model="formData.arrivalDate" label-no-date-selected="Return Date" :date-format-options="dtFormat" class="custom-input t-input dt-picker__small w-100"></b-form-datepicker>
                    </b-col>
                    <b-col class="pl-md-3 px-0 pr-md-0 mt-3 mt-md-0" cols="12" md="6">
                      <b-input class="custom-input t-input" placeholder="On this day"></b-input>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="12" md="4" class="text-left mt-3 px-0 px-md-3">
                  <b-select class="mod-select-box t-mod__fix w-100" :options="cabinOptions" v-model="formData.cabinClass"></b-select>
                </b-col>
                <b-col cols="12" md="8" class="mt-3 px-0 px-md-3">
                  <b-input class="custom-input t-input" placeholder="Sort by Ammenities"></b-input>
                </b-col>
                <b-col cols="12" class="mt-3 px-0 px-md-3">
                  <div class="d-flex justify-content-between">
                    <b-form-checkbox v-model="airportChanges" size="sm" class="t_check">
                      <span class="f-14-px">Shop only direct Flights</span>
                    </b-form-checkbox>
                    <span class="t-sub">Advanced Search</span>
                  </div>
                </b-col>
              </b-row>
              <div class="w-100 dash my-5"></div>
              <div class="mb-5">
                <validation-provider name="Detail" v-slot="validationContext">
                  <b-form-invalid-feedback :class="['my-1',getValidationState(validationContext) ? '' : 'd-block']" v-for="(error, eI) in validationContext.errors" :key="eI" >{{ error }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
              <b-row class="mx-0">
                <b-btn class="custom-btn search-btn" @click="fetchFlights">
                  <b-spinner small variant="light" class="mr-2" v-if="submitting" />
                  Search
                </b-btn>
              </b-row>
              <!-- <div class="tab-header position-relative d-flex px-3">
                <p :class="['tab-item mr-4', isActive(1) ? 'active-tab':'']" @click="setActiveTab(1)">
                  Round Trip
                  <span v-if="isActive(1)" class="active-tab-indicator"></span>
                </p>
                <p :class="['tab-item mr-4', isActive(2) ? 'active-tab':'']" @click="setActiveTab(2)">
                  One Way
                  <span v-if="isActive(2)" class="active-tab-indicator"></span>
                </p>
                <p :class="['tab-item', isActive(3) ? 'active-tab':'']" @click="setActiveTab(3)">
                  Multi-city
                  <span v-if="isActive(3)" class="active-tab-indicator"></span>
                </p>
              </div>
              <div class="w-100 dash"></div>
              <div class="form-part px-3 py-5">
                <b-row class="mx-0">
                  <b-col cols="12" md="4">
                    <p class="mb-0 form-title-txt">Departing from</p>
                  </b-col>
                  <b-col cols="12" md="8" class="d-flex flex-column align-items-end">
                    <b-input class="custom-input t-input"></b-input>
                    <p class="mb-0 form-title-txt__inpbt">Reverse Route</p>
                  </b-col>
                </b-row>
                <b-row class="mx-0 mt-4">
                  <b-col cols="12" md="4">
                    <p class="mb-0 form-title-txt">Destination</p>
                  </b-col>
                  <b-col cols="12" md="8">
                    <b-input class="custom-input t-input"></b-input>
                  </b-col>
                </b-row>
                <div class="w-100 dash my-5"></div>
                <b-row class="mx-0 mt-4">
                  <b-col cols="12" md="4">
                    <p class="mb-0 form-title-txt">Departing from</p>
                  </b-col>
                  <b-col cols="12" md="8" class="d-flex">
                    <b-form-datepicker v-model="depFromDt" label-no-date-selected="Date" :date-format-options="dtFormat" class="custom-input t-input dt-picker__small"></b-form-datepicker>
                    <b-select class="mod-select-box ml-3" :options="depOptions" v-model="selDepOption"></b-select>
                  </b-col>
                </b-row>
                <b-row class="mx-0 mt-4">
                  <b-col cols="12" md="4">
                    <p class="mb-0 form-title-txt">Return Date</p>
                  </b-col>
                  <b-col cols="12" md="8" class="d-flex">
                    <b-form-datepicker v-model="retFromDt" label-no-date-selected="Date" :date-format-options="dtFormat" class="custom-input t-input dt-picker__small"></b-form-datepicker>
                    <b-select class="mod-select-box ml-3" :options="depOptions" v-model="selDepOption"></b-select>
                  </b-col>
                </b-row>
                <div class="w-100 dash my-5"></div>
                <b-row class="mx-0">
                  <b-col cols="12" md="4">
                    <p class="mb-0 form-title-txt">Adults</p>
                  </b-col>
                  <b-col cols="12" md="8" class="d-flex">
                    <b-select class="mod-select-box" :options="childOptions" v-model="selChildOption"></b-select>
                    <p class="mb-0 form-title-txt__inpch ml-4">Childern, Senior</p>
                  </b-col>
                </b-row>
                <div class="w-100 dash my-5"></div>
                <b-row class="mx-0 mt-4">
                  <b-col cols="12" md="4">
                    <p class="mb-0 form-title-txt">Cabin</p>
                  </b-col>
                  <b-col cols="12" md="8" class="d-flex">
                    <b-select class="mod-select-box t-mod__fix" :options="cabinOptions" v-model="selCabinOption"></b-select>
                  </b-col>
                </b-row>
                <b-row class="mx-0 mt-4">
                  <b-col cols="12" md="4">
                    <p class="mb-0 form-title-txt">Stops</p>
                  </b-col>
                  <b-col cols="12" md="8" class="d-flex">
                    <b-select class="mod-select-box t-mod__fix" :options="stopsOptions" v-model="selStopsOption"></b-select>
                  </b-col>
                </b-row>
                <b-row class="mx-0 mt-4">
                  <b-col cols="12" md="4">
                    <p class="mb-0 form-title-txt">Extra Stops</p>
                  </b-col>
                  <b-col cols="12" md="8" class="d-flex">
                    <b-select class="mod-select-box t-mod__fix" :options="extStopsOptions" v-model="selEtsStopsOption"></b-select>
                  </b-col>
                </b-row>
                <b-row class="mx-0 mt-4">
                  <b-col cols="12" md="4">
                  </b-col>
                  <b-col cols="12" md="8" class="d-flex flex-column align-items-start">
                    <b-form-checkbox v-model="airportChanges" size="sm" class="t_check">
                      <span class="f-14-px">Allow airport changes</span>
                    </b-form-checkbox>
                    <b-form-checkbox v-model="onlShowFlPrCo" size="sm" class="t_check">
                      <span class="f-14-px">Only show flights and prices with available seets</span>
                    </b-form-checkbox>
                  </b-col>
                </b-row>
                <b-row class="mx-0 mt-4">
                  <b-col cols="12" md="4">
                    <p class="mb-0 form-title-txt">Currency Select</p>
                  </b-col>
                  <b-col cols="12" md="8">
                    <b-input class="custom-input t-input"></b-input>
                  </b-col>
                </b-row>
                <b-row class="mx-0 mt-5" align-h="end">
                  <b-btn class="custom-btn" @click="shop">
                    <b-spinner small variant="light" class="mr-2" v-if="submitting"></b-spinner>
                    Search
                  </b-btn>
                </b-row>
              </div> -->
            </b-form>
          </validation-observer>
        </dashboard-card>
      </b-col>
      <!-- <b-col cols="12" md="6" class="h-100 mt-5 mt-md-0 h-inherit d-none d-md-block">
        <dashboard-card class="text-left px-3 py-24-px h-100">
          <p class="t-title">Welcome to FlyLine Terminal 1.0</p>
          <p class="t-desc">Matrix showcases some of the freshest travel search ideas from ITA Software. Version 3.0 has been completely rebuilt to run on Google technology. </p>
          <p class="t-desc">Matrix showcases some of the freshest travel search ideas from ITA Software. Version 3.0 has been completely rebuilt to run on Google technology. Let us know what you think.</p>
          <p class="t-desc__red mt-5">Matrix showcases some of the freshest travel search </p>
          <p class="t-desc">If you find a fare you like, you can give the information from this site to your travel agent or airline when making a booking.</p>
          <p class="t-desc gilroy-b mt-5">Note for users of OnTheFly:</p>
          <p class="t-desc">
            ITA Software's mobile flight-search app OnTheFly has been discontinued as of December 2017. You can still search for flights using ITA's technology here on Matrix. Or try
            <span class="text-primary">Google Flights</span> 
            on mobile to find the best fares wherever you are.
          </p>
        </dashboard-card>
      </b-col> -->
    </b-row>
    <div class="shop-res">
      <shop-card v-for="(res, rI) in shopRes" :key="rI" :flight="res" />
    </div>
  </div>
</template>

<script>
import DashboardCard from '@/components/Dashboard/DashboardCard'
import { mapActions, mapGetters } from 'vuex'
import ShopCard from '@/components/Shop/ShopCard'
export default {
  components:{
    DashboardCard,
    ShopCard
  },
  data(){
    return {
      activeTab: 1,
      depOptions: ['Departure'],
      selDepOption: 'Departure',
      childOptions: [1,2,3,4,5,6],
      selChildOption: 1,
      cabinOptions: [
        { value: null, text: 'Cabin Class' },
        { value: 'first', text: 'First Class' },
        { value: 'business', text: 'Business Class' },
        { value: 'premium_economy', text: 'Premium Economy' },
        { value: 'economy', text: 'Economy' },
      ],
      selCabinOption: null,
      stopsOptions: ['No limit'],
      selStopsOption: 'No limit',
      extStopsOptions: ['Up to 1 extra stop'],
      selEtsStopsOption: 'Up to 1 extra stop',
      onBoundOptions: [''],

      depFromDt: '',
      retFromDt: '',
      airportChanges: true,
      onlShowFlPrCo: true,
      dtFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },

      trip: 'ROUND',
      adult: 1,
      children: 0,

      submitting: false,
      fetchingData: false,
      airports: [],

      formData: {
        departure: null,
        arrival: null,
        cabinClass: null,
        departureDate: '',
        arrivalDate: ''
      },
      shopRes: [],
      showShopRes: false,
    }
  },
  created(){
    this.fetchData()
  },
  computed:{
    ...mapGetters("USER", ["currentOrganization"]),
  },
  methods:{
    ...mapActions('SHOP', ['SHOP']),
    ...mapActions('AIRPORT', ['FETCH_AIRPORTS']),
    ...mapActions('TOKEN', ['FETCH_TOKENS']),
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    goTo(name) {
      if(name) this.$router.push({ name });
    },
    async fetchTokens(){
      try{
        await this.FETCH_TOKENS(this.currentOrganization.organization.id)
      }catch(e){
        console.log(e)
      }
    },
    async fetchData(){
      this.fetchingData = true
      try{
        await this.fetchTokens()
        await this.fetchAirports()
      }catch(e){
        console.log(e)
      }
      this.fetchingData = false
    },
    async fetchAirports(){
      try{
        let airports = await this.FETCH_AIRPORTS()
        this.airports = airports.data
        console.log('air', this.airports)
      }catch(e){
        console.log(e)
      }
    },
    async fetchFlights(){
      if(this.submitting) return
      this.submitting = true
      try{
        let payload = {
          "cabin_class": this.formData.cabinClass,
          "slices": [
            {
              "departure": {
                "code": this.formData.departure,
                "date": this.formData.departureDate
              },
              "arrival": {
                "code": this.formData.arrival,
              }
            }
          ],
        }
        if(this.trip == 'ROUND'){
          payload.slices.push({
            "departure": {
              "code": this.formData.arrival,
              "date": this.formData.arrivalDate,
            },
            "arrival": {
              "code": this.formData.departure,
            }
          })
        }
        let passengers = []
        for(let i = 1; i <= this.adult; i++){
          passengers.push({
            type: 'adult'
          })
        }
        for(let i = 1; i <= this.children; i++){
          passengers.push({
            type: 'children'
          })
        }
        payload.passengers = passengers
        let res = await this.SHOP(payload)
        this.shopRes = res.offers
        this.showShopRes = true
        console.log(res, payload)
      }catch(e){
        let errors = {};
        Object.keys(e).forEach(key => {
          errors[key.charAt(0).toUpperCase() + key.slice(1)] = e[key];
        });
        console.log(errors);
        this.$refs.shopFormObserver.setErrors(errors);
      }
      this.submitting = false
    },
    setAdult(n){
      if(this.adult + n >= 1) this.adult = this.adult + n
    },
    setChildren(n){
      if(this.children + n >= 0) this.children = this.children + n
    },
    async shop(){
      if(this.submitting) return
      this.submitting = true
      try{
        let payload = {

        }
        let res = await SHOP(payload)
      }catch(e){

      }
      this.submitting = false
    },
    isActive(num){
      return num == this.activeTab
    },
    setActiveTab(num){
      this.activeTab = num
    },
    goTo(name){
      if(name) this.$router.push({name})
    },
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/variables'
.shopping-terminal-page
  padding: 70px 0
  .search-btn
    width: 284px
  .tab-header
    .tab-item
      font-size: 16px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 2.38
      letter-spacing: normal
      text-align: left
      color: #B7B7B7
      position: relative
      margin-bottom: 11px
      padding: 0 5px
      &.active-tab
        color: #707070
        font-family: GILROY-BOLD
      .active-tab-indicator
        position: absolute
        bottom: -11px
        left: 0px
        border-radius: 2px
        height: 5px
        width: 100%
        border: solid 1px $blue
        background-color: $blue
        @media screen and (max-width: 800px)
          display: none
  .t-input
    height: 49px
    font-size: 15px
  ::v-deep .dt-picker
    &__small
      // @extend .dt-picker
      label
        display: flex
        align-items: center
        justify-content: center
      max-width: 190px
      @media screen and (max-width: 800px)
        max-width: unset
  ::v-deep .t-mod
    border: solid 1px #EDEEF6
    font-family: GILROY-MEDIUM
    color: #707070
    height: 49px
    option
      color: #707070 !important
    &__fix
      @extend .t-mod
      min-width: 232px
  .t_check
    font-size: 14px
    font-weight: normal
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    text-align: left
    color: #707070
  .form-title-txt
    font-size: 16px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 2.38
    letter-spacing: normal
    color: #707070
    text-align: left
    &__inpbt
      font-size: 10px
      font-weight: normal
      font-stretch: normal
      font-style: normal
      line-height: 3.8
      letter-spacing: normal
      color: #0e3178
    &__inpch
      font-size: 14px
      font-weight: normal
      font-stretch: normal
      font-style: normal
      line-height: 2.71
      letter-spacing: normal
      color: #0e3178
  .t-title
    font-size: 24px
    font-font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    line-height: 1.46
    letter-spacing: normal
    color: #333333
  .t-sub
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 2
    letter-spacing: normal
    color: #707070

  .t-desc
    font-size: 16px
    font-weight: normal
    font-stretch: normal
    font-style: normal
    line-height: 2.38
    letter-spacing: normal
    color: #707070
    &__red
      @extend .t-desc
      color: #e46d6d
</style>