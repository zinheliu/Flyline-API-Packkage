<template>
  <div class="dashboard-page">
    <b-row class="mx-0">
      <div class="pr-md-0 py-0 pl-0 left-part order-2 order-md-1">
        <div v-if="welcome">
          <dashboard-card class="py-20-px px-2 px-md-3">
            <welcome />
          </dashboard-card>
          <dashboard-card class="py-20-px px-2 px-md-3 mt-32-px">
            <sandbox-tokens />
          </dashboard-card>
        </div>
        <div v-else>
          <dashboard-card class="py-20-px px-2 px-md-3">
            <pay-as-you-go @empty="showWelcome" />
          </dashboard-card>
          <dashboard-card class="py-20-px mt-32-px px-2 px-md-3">
            <api-monitoring />
          </dashboard-card>
          <dashboard-card class="py-20-px mt-32-px px-2 px-md-3" v-if="showRecSearch">
            <recent-search :settings="recentSearchPaginaSettings" title="Recently Shopped" @total="saveTotalRecentSearches" @empty="showRecSearch=false" />
            <b-row class="mx-0 pagination mt-24-px" align-h="center" v-if="recentSearchPaginaSettings.total>0">
              <b-pagination 
                class="custom-pagination" 
                v-model="recentSearchPaginaSettings.currentPage" 
                :total-rows="recentSearchPaginaSettings.total" 
                :per-page="recentSearchPaginaSettings.perPage" 
                first-number
                last-number
                limit="4"
                hide-goto-end-buttons
                prev-class="pg-prev-btn"
              >
                <template #prev-text>
                  <b-icon icon="chevron-left"></b-icon>
                </template>
                <template #next-text>
                  <b-icon icon="chevron-right"></b-icon>
                </template>
                <template #ellipsis-text>
                  <span class="ellipsis">。。。</span>
                </template>
              </b-pagination>
            </b-row>
          </dashboard-card>
          <!-- <dashboard-card class="py-20-px px-2 px-md-3 mt-32-px">
            <bookings />
          </dashboard-card> -->
        </div>
      </div>
      <!-- <div class="py-0 pl-md-2 notification-part order-1 order-md-2 d-none d-md-block">
        <dashboard-card class="notifications-section">
          <div class="notifications-section-content text-left">
            <dashboard-notification />
          </div>
        </dashboard-card>
      </div> -->
    </b-row>
  </div>
</template>

<script>
import DashboardCard from '@/components/Dashboard/DashboardCard'
import RequestActivity from '@/components/Dashboard/RequestActivity'
import RecentSearch from '@/components/Dashboard/RecentSearch'
import Bookings from '@/components/Dashboard/Bookings'
import DashboardNotification from '@/components/Dashboard/DashboardNotification'
import PayAsYouGo from '@/components/Dashboard/PayAsYouGo'
import DailyRequestVolume from '@/components/Dashboard/DailyRequestVolume'
import Welcome from '@/components/Dashboard/Welcome'
import SandboxTokens from '@/components/Dashboard/SandboxTokens'
import AccessTokens from '@/views/Dashboard/AccessTokens'
import ApiMonitoring from '@/components/Dashboard/ApiMonitoring'
export default {
  components:{
    DashboardCard,
    RequestActivity,
    RecentSearch,
    Bookings,
    DashboardNotification,
    PayAsYouGo,
    DailyRequestVolume,
    Welcome,
    SandboxTokens,
    ApiMonitoring,
    AccessTokens
  },
  data(){
    return {
      recentSearchPaginaSettings: {
        perPage: 4,
        currentPage: 1,
        total: 0
      },
      welcome: false,
      showRecSearch: true,
    }
  },
  methods:{
    saveTotalRecentSearches(v){
      this.recentSearchPaginaSettings.total = v
    },
    showWelcome(){
      this.welcome = true
    },
  },
}
</script>

<style lang="sass" scoped>
.dashboard-page
  padding-top: 32px
  padding-bottom: 100px
  @media screen and (max-width: 1100px)
    padding-top: 0
  .left-part
    // max-width: 900px
    width: 100%
    // margin-right: 10px

</style>