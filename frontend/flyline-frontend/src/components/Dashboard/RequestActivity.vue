<template>
  <div class="request-activity">
    <div class="dashboard-toolbar d-flex align-items-center flex-wrap justify-content-between">
      <p class="mb-3 mb-md-0 dashboard-title-text">Request Activity</p>
      <b-btn class="chart-series-btn ml-md-3 mb-2 mb-md-0"> <span class="success-indicator"></span> Success</b-btn>
      <b-btn class="chart-series-btn ml-md-3 mb-2 mb-md-0"> <span class="error-indicator"></span> Errors</b-btn>
      <b-btn class="chart-series-btn ml-md-3 mb-2 mb-md-0"> <span class="latency-indicator"></span> Latency</b-btn>
      <b-select v-model="filterBy" :options="filterOptions" class="filter-select-box ml-md-auto mb-2 mb-md-0"></b-select>
    </div>
    <div class="chart-wrapper">
      <VueApexCharts type="line" height="350" ref="chart" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts"
export default {
  components:{
    VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: "Successful",
          data: [10, 41, 35, 345, 49, 62, 230, 91, 148, 350, 253, 634]
        },
        {
          name: "Errors",
          data: [160, 430, 120, 253, 120, 400, 320, 100, 50, 290, 10, 634]
        },
        {
          name: "Latency",
          data: [10, 245, 130, 454, 62, 362, 230, 20, 190, 370, 322, 634]
        },
      ],
      chartOptions: {
        chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors:['#3abb74', '#f8617d', '#0e3178'],
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
          max: 500
        },
        legend: {
          show: false
        },
        tooltip: {
          style: {
            backgroundColor: '#334e70'
          },
          x: {
            show: false
          },
          followCursor: true
        }
      },

      filterOptions: [
        {text: 'Last 7 Days', value: '7d'}
      ],
      filterBy: '7d'
    }
  },
}
</script>

<style lang="sass" scoped>
.request-activity
  .dashboard-toolbar
    padding: 0 25px
    @media screen and (max-width: 800px)
      padding: 0 10px
    .dashboard-title-text
      min-width: 175px
      text-align: left
    .chart-series-btn
      width: 134px
      height: 40px
      border-radius: 4px
      background-color: #F2F5FA
      font-size: 14px
      font-weight: 600
      font-stretch: normal
      font-style: normal
      line-height: 1.43
      letter-spacing: normal
      color: #6e7191
      border: none
      text-align: left
      display: flex
      align-items: center
      .success-indicator , .error-indicator , .latency-indicator
        width: 14px
        height: 14px
        box-shadow: 0 3px 6px 0 rgba(17, 17, 17, 0.04)
        border: solid 2px #ffffff
        display: inline-block
        border-radius: 50%
        margin-right: 10px
      .success-indicator
        background-color: #3BB972
      .error-indicator
        background-color: #F8627D
      .latency-indicator
        background-color: #305490
    
    .filter-select-box
      min-width: 139px
      width: min-content
      height: 40px
      border-radius: 4px
      background-color: #F2F5FA
      background: #F2F5FA url('../../assets/images/svg/chevron_down.svg') no-repeat right 0.75rem center/16px 10px
      font-size: 14px
      font-weight: 600
      font-stretch: normal
      font-style: normal
      line-height: 1.43
      letter-spacing: normal
      text-align: left
      color: #546d8a
      border: none
      @media screen and (max-width: 800px)
        min-width: 134px
      &:focus
        outline: none
        box-shadow: none

  .chart-wrapper
    padding: 0 10px 0 17px
    @media screen and (max-width: 800px)
      padding: 0 10px 0 7px

::v-deep #apexchartsrealtime
  font-family: GILROY-BOLD !important
  .apexcharts-xaxis-label , .apexcharts-yaxis-label
    font-size: 16px !important
    font-family: GILROY-BOLD !important
    font-stretch: normal
    font-style: normal
    line-height: 1.19
    letter-spacing: normal
    color: #546d8a
    opacity: 0.5
  .apexcharts-tooltip
    background-color: #334e70
    border: none
    color: #ffffff
  .apexcharts-xaxistooltip
    background-color: #ffffff
    border: none
    font-size: 16px
    font-stretch: normal
    font-style: normal
    line-height: 1.19
    letter-spacing: normal
    color: #546d8a
    opacity: 1
    padding: 10px 10px
    transition: none
    z-index: 1
    &::before
      display: none
    &::after
      display: none
    .apexcharts-xaxistooltip-text
      font-size: 16px !important
      font-family: GILROY-BOLD !important
      opacity: 1
      
</style>