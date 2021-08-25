<template>
  <div class="api-monitoring">
    <div class="d-flex justify-content-center align-items-center" v-if="fetchingData || selectedApi < 0">
      <span class="text-primary">Fetching Data</span>
      <b-spinner small variant="primary" class="ml-2"></b-spinner>
    </div>
    <div v-else>
      <div class="dashboard-toolbar d-flex justify-content-between align-items-center mb-3">
        <p class="mb-0 dashboard-title-text">API Monitoring</p>
        <div class="d-flex flex-column flex-md-row align-items-end align-items-md-center">
          <b-select class="monitoring-select-box" :options="API_TYPES" v-model="selectedApiType" />
          <date-range-picker class="custom-date-picker ml-md-3 mt-2 mt-md-0" ref="picker" minDate="2019-12-10" maxDate="2021-12-10" :timePicker="false" v-model="selectedDate">
            <template v-slot:input="picker" style="min-width: 350px;">
              <span v-if="selectedDate.startDate && selectedDate.endDate">{{ formatDateTime(picker.startDate) }} - {{ formatDateTime(picker.endDate) }}</span>
              <span v-else>This Week</span>
            </template>
          </date-range-picker>
          <!-- <b-form-datepicker class="custom-date-picker" v-model="selectedDate"></b-form-datepicker> -->
          <!-- <b-btn class="custom-btn toolbar-btn">View other Dates</b-btn> -->
          <b-select class="monitoring-select-box ml-md-3 mt-2 mt-md-0" :options="monitoringOptions" v-model="selectedMonitoringOption" />
        </div>
      </div>
      <div class="chart-header-wrapper d-flex flex-column flex-md-row px-3 py-2 align-items-md-center" v-if="selectedMonitoringOption == 'Request Time'">
        <p class="mb-0 gilroy-b chart-header-title text-left text-md-center">API Request Response Time</p>
        <div class="d-flex ml-md-5 align-items-center mt-3 mt-md-0">
          <div class="d-flex align-items-center">
            <div class="round-color-specifier__min"></div>
            <p class="mb-0 specifier-text gilroy-b ml-2">Minimum</p>
          </div>
          <div class="d-flex align-items-center ml-3">
            <div class="round-color-specifier__avg"></div>
            <p class="mb-0 specifier-text gilroy-b ml-2">Average</p>
          </div>
          <div class="d-flex align-items-center ml-3">
            <div class="round-color-specifier__max"></div>
            <p class="mb-0 specifier-text gilroy-b ml-2">Maximum</p>
          </div>
        </div>
      </div>
      <div class="chart-header-wrapper d-flex flex-column flex-md-row px-3 py-2 align-items-md-center" v-if="selectedMonitoringOption == 'API Request'">
        <p class="mb-0 gilroy-b chart-header-title text-left text-md-center">API Requests</p>
        <div class="d-flex flex-column flex-md-row ml-md-5 align-items-md-center mt-3 mt-md-0">
          <div class="d-flex align-items-center">
            <div class="round-color-specifier__suc"></div>
            <p class="mb-0 specifier-text gilroy-b ml-2">Number of Successful Requests</p>
          </div>
          <div class="d-flex align-items-center ml-md-3 mt-2 mt-md-0">
            <div class="round-color-specifier__err"></div>
            <p class="mb-0 specifier-text gilroy-b ml-2">Number of Errors</p>
          </div>
        </div>
      </div>

      <div class="mt-4 chart px-4" v-if="series.length > 0">
        <apexchart type="line" height="350" :options="chartOptions" :series="filteredSeries"></apexchart>
      </div>
      <div class="py-24-px" v-else>
        <img src="@/assets/images/svg/no_billing_info_icon.svg" alt="" />
        <p class="mb-3 card-header-text gilroy-b text-center mt-4">No data available</p>
        <p class="mb-0 card-desc-text mx-md-auto">
          Once you delete your account, you will no longer have access to FlyLine
          Apps and API's, all pending organization invitations will be revoked as
          well as organization memberships. if you'd like to delete your account,
          reach out to us at
          <span class="gilroy-b text-primary cursor-pointer" @click="openEmail">hello@flyline.io</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Apexchart from 'vue-apexcharts'
import { mapActions, mapGetters } from 'vuex'
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import moment from 'moment'
import { API_TYPES, API_TYPE } from '@/assets/js/apiType'
export default {
  components:{
    Apexchart,
    DateRangePicker
  },
  data(){
    return {
      monitoringOptions: ['API Request', 'Request Time'],
      selectedMonitoringOption: 'Request Time',
      fetchingData: true,
      selectedDate: {
        startDate: null,
        endDate: null
      },
      series: [],
      selectedApi: -1,
      selectedApiType: -1,
    }
  },
  created(){
    this.fetchData()
  },
  watch:{
    selectedDate: {
      handler(v){
        this.fetchData()
      },deep: true
    },
    selectedApiType(v){
      this.selectedApi = this.series.indexOf(this.series.find(s => s.api_type == v))
    },
  },
  computed:{
    ...mapGetters("USER", ["currentOrganization"]),
    ...mapGetters("UTIL", ["testData"]),
    API_TYPES(){
      return API_TYPES.filter(a => (this.series.find(s => s.api_type == a.value)) != null)
    },
    filteredSeries(){
      let max
      let min
      let avg
      let error
      let success
      let series = this.series[this.selectedApi].data
      max = series.map(s => (s.max_time).toFixed(2))
      min = series.map(s => (s.min_time).toFixed(2))
      avg = series.map(s => (s.avg_time).toFixed(2))
      error = series.map(s => (s.error_call).toFixed(2))
      success = series.map(s => (s.success_call).toFixed(2))
      // if(this.testData){
      //   max = series.map(s => (s.sandbox_max_time).toFixed(2))
      //   min = series.map(s => (s.sandbox_min_time).toFixed(2))
      //   avg = series.map(s => (s.sandbox_avg_time).toFixed(2))
      //   error = series.map(s => (s.error_sandbox_call).toFixed(2))
      //   success = series.map(s => (s.success_sandbox_call).toFixed(2))
      // }else {
      //   max = series.map(s => (s.live_min_time).toFixed(2))
      //   min = series.map(s => (s.live_max_time).toFixed(2))
      //   avg = series.map(s => (s.live_avg_time).toFixed(2))
      //   error = series.map(s => (s.error_live_call).toFixed(2))
      //   success = series.map(s => (s.success_live_call).toFixed(2))
      // }
      if(this.selectedMonitoringOption == 'API Request') 
        return [
          {name: 'Error', type: 'area', data: error},
          {name: 'Success', type: 'area', data: success},
        ]
      return [
        {name: 'Maximum', type: 'area', data: max},
        {name: 'Average', type: 'area', data: avg},
        {name: 'Minimum', type: 'area', data: min},
      ]
    },
    chartOptions(){
      let labels = this.series[this.selectedApi].data.map(s => s.date)
      let yaxis = this.selectedMonitoringOption == 'API Request' ? [
        { show: true, title: { text: '', } },
        { show: true, opposite: true, title: { text: '', } },
      ] : [
        { show: true, seriesName: 'Maximum', title: { text: '', }, },
        { show: false, seriesName: 'Maximum', title: { text: 'Average', }, },
        { show: false, seriesName: 'Maximum', title: { text: 'Minimum', }, },
      ]
      // let colors = this.selectedMonitoringOption == 'API Request' ? ['#F8627D', '#3DBB6F'] : ['#B3B9E5', '#818EE5', '#203BE7']
      let colors = this.selectedMonitoringOption == 'API Request' ? ['#B3B9E5', '#203BE7'] : ['#203BE7', '#818EE5', '#B3B9E5']
      return {
        legend:{
          show: false
        },
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type:'solid',
          opacity: [0.35, 1],
        },
        labels,
        markers: {
          size: 0
        },
        colors,
        yaxis,
        tooltip: {
          show: false,
        }
      }
    },
  },
  methods:{
    ...mapActions('DASH', ['FETCH_RESPONSE_TIME']),
    API_TYPE,
    setApi(index){
      if(index){
        this.selectedApi = index
      }
      else if(this.series.length > 0){
        // this.selectedApi = this.API_TYPES[0].value
        // this.selectedApi = this.series[0].api_type
        this.selectedApi = 0
      }
      console.log(this.selectedApi)
      if(this.selectedApi >= 0) this.selectedApiType = this.series[this.selectedApi].api_type
    },
    async fetchData(){
      this.fetchingData = true
      try{
        let payload = {
          id: this.currentOrganization.organization.id,
        }
        if(this.selectedDate.startDate && this.selectedDate.endDate){
          payload.data = {
            start_date: this.selectedDate.startDate.toISOString().substr(0,10),
            end_date: this.selectedDate.endDate.toISOString().substr(0,10),
          }
        }
        this.series = await this.FETCH_RESPONSE_TIME(payload)
        this.setApi()
      }catch(e){
        console.log(e)
      }
      this.fetchingData = false
    },
    formatDateTime(d) {
      if (!d || !moment(d).isValid) return "";
      return moment(d).format("MMM DD, YYYY");
    },
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  },
}
</script>

<style lang="sass" scoped>
.api-monitoring
  ::v-deep .live-api-chk
    label span
      display: flex
      align-items: center
      margin-top: 1.5px
  .card-desc-text
    max-width: 600px
  .dashboard-toolbar
    .toolbar-btn
      font-size: 14px
      font-weight: GILROY-BOLD
      font-stretch: normal
      font-style: normal
      line-height: 1.43
      letter-spacing: normal
      color: #8396ac
      border: solid 2px #e9e9e9
      height: 35px
      background-color: #ffffff
      &:hover, &:active , &:focus
        background-color: #ffffff !important
        border: solid 2px #e9e9e9 !important
        color: #8396ac !important
    .monitoring-select-box
      width: min-content
      height: 35px
      font-size: 14px
      border: solid 2px #e9e9e9
      text-align: left
      background: #fff url('../../assets/images/svg/arrow.svg') no-repeat right 0.75rem center/16px 5px
      border-radius: 4px
      background-color: #ffffff
      font-size: 14px !important
      font-family: GILROY-BOLD
      font-stretch: normal
      font-style: normal
      letter-spacing: normal
      color: #8396ac
      &:focus
        outline: none
        box-shadow: none
  .chart-header-wrapper
    background-color: #F1F4F9
    border-radius: 4px
    min-height: 42px
    .chart-header-title
      font-size: 14px
      font-stretch: normal
      font-style: normal
      line-height: 1.43
      letter-spacing: normal
      color: #546d8a
    .round-color-specifier
      width: 20px
      height: 20px
      border-radius: 20px
      border: solid 1.9px #e9e9e9
      // &__suc
      //   @extend .round-color-specifier
      //   background-color: #3DBB6F
      // &__err
      //   @extend .round-color-specifier
      //   background-color: #F8627D
      &__suc
        @extend .round-color-specifier
        background-color: #203BE7
      &__err
        @extend .round-color-specifier
        background-color: #B3B9E5
      &__min
        @extend .round-color-specifier
        background-color: #B3B9E5
      &__avg
        @extend .round-color-specifier
        background-color: #818EE5
      &__max
        @extend .round-color-specifier
        background-color: #203BE7
    .specifier-text
      font-size: 14px
      font-stretch: normal
      font-style: normal
      line-height: 1.43
      letter-spacing: normal
      color: #546d8a
  ::v-deep .chart
    .apexcharts-toolbar
      display: none
    .apexcharts-yaxis
      // &[rel="1"] , &[rel="2"] 
      //   display: none
</style>