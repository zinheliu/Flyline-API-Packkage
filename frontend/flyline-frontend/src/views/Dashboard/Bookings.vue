<template>
  <div class="bookins-page pt-32-px pb-100-px">
    <dashboard-card class="py-20-px px-2 px-md-3">
      <bookings :all="true" :tableSettings="bookingTableSettings" />
    </dashboard-card>
    <b-row class="mx-0 pagination mt-24-px" align-h="center">
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
  </div>
</template>

<script>
import Bookings from '@/components/Dashboard/Bookings'
import DashboardCard from '@/components/Dashboard/DashboardCard'
export default {
  components:{
    DashboardCard,
    Bookings
  },
  data(){
    return {
      bookingTableSettings: {
        perPage: 7,
        currentPage: 1
      },
    }
  },
}
</script>

<style>

</style>