<template>
  <div class="bookins-page pt-32-px pb-100-px">
    <dashboard-card class="py-20-px px-2 px-md-3">
      <pay-as-you-go />
    </dashboard-card>
    <!-- <dashboard-card class="py-20-px mt-32-px">
      <request-activity />
    </dashboard-card> -->
    <dashboard-card class="py-20-px px-2 px-md-3 mt-32-px">
      <daily-request-volume />
      <b-row class="mx-0 pagination mt-27-px" align-h="center">
        <b-pagination 
          class="custom-pagination" 
          v-model="dailyReqVolTableSettings.currentPage" 
          :total-rows="1000" 
          :per-page="dailyReqVolTableSettings.perPage" 
          first-number
          last-number
          prev-class="pg-prev-btn"
        >
          <template #prev-text>
            <b-icon icon="chevron-left"></b-icon>
          </template>
          <template #next-text>
            <b-icon icon="chevron-right"></b-icon>
          </template>
          <template #ellipsis-text>
            <span class="ellipsis"> 。。。</span>
          </template>
        </b-pagination>
      </b-row>
    </dashboard-card>
    <dashboard-card class="py-20-px px-2 px-md-3 mt-32-px">
      <recent-search title="Recent Search Activity" />
      <b-row class="mx-0 pagination mt-27-px" align-h="center">
        <b-pagination 
          class="custom-pagination" 
          v-model="recentSearchTableSettings.currentPage" 
          :total-rows="1000" 
          :per-page="recentSearchTableSettings.perPage" 
          first-number
          last-number
          prev-class="pg-prev-btn"
        >
          <template #prev-text>
            <b-icon icon="chevron-left"></b-icon>
          </template>
          <template #next-text>
            <b-icon icon="chevron-right"></b-icon>
          </template>
          <template #ellipsis-text>
            <span class="ellipsis"> 。。。</span>
          </template>
        </b-pagination>
      </b-row>
    </dashboard-card>
    <dashboard-card class="py-20-px px-2 px-md-3 mt-32-px">
      <bookings title="Booking Activity" :all="true" :tableSettings="bookingTableSettings" />
      <b-row class="mx-0 pagination mt-27-px" align-h="center">
        <b-pagination 
          class="custom-pagination" 
          v-model="bookingTableSettings.currentPage" 
          :total-rows="1000" 
          :per-page="bookingTableSettings.perPage" 
          first-number
          last-number
          prev-class="pg-prev-btn"
        >
          <template #prev-text>
            <b-icon icon="chevron-left"></b-icon>
          </template>
          <template #next-text>
            <b-icon icon="chevron-right"></b-icon>
          </template>
          <template #ellipsis-text>
            <span class="ellipsis"> 。。。</span>
          </template>
        </b-pagination>
      </b-row>
    </dashboard-card>
  </div>
</template>

<script>
import Bookings from '@/components/Dashboard/Bookings'
import DashboardCard from '@/components/Dashboard/DashboardCard'
import PayAsYouGo from '@/components/Dashboard/PayAsYouGo'
import RequestActivity from '@/components/Dashboard/RequestActivity'
import DailyRequestVolume from '@/components/Dashboard/DailyRequestVolume'
import RecentSearch from '@/components/Dashboard/RecentSearch'
export default {
  components:{
    DashboardCard,
    Bookings,
    PayAsYouGo,
    RequestActivity,
    DailyRequestVolume,
    RecentSearch
  },
  data(){
    return {
      bookingTableSettings: {
        perPage: 7,
        currentPage: 1
      },
      dailyReqVolTableSettings: {
        perPage: 7,
        currentPage: 1
      },
      recentSearchTableSettings: {
        perPage: 7,
        currentPage: 1
      },
    }
  },
}
</script>

<style>

</style>