<template>
  <div class="sandbox-tokens text-left">
    <div class="dashboard-toolbar d-md-flex justify-content-between align-items-center mb-3">
      <p class="mb-0">
        <span class="dashboard-title-text" style="font-size: 18px;">Access Tokens</span>
        <!-- <span class="sb-desc-text ml-md-3 mt-3 mt-md-0 d-block d-md-inline-block">To access Productions Tokens, click the button to add billing info</span> -->
      </p>
      <!-- <b-btn class="custom-btn billing-info-btn gilroy-b mt-3 mt-md-0" @click="goTo('ManageAccount')">Add Billing Info</b-btn> -->
    </div>
    <div class="table-section">
      <b-table :items="recentSearches" :fields="fields" class="shrink-table sandbox-tokens-table">
        <template #cell(actions)>
          <b-icon icon="chevron-right" scale="1.1"></b-icon>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      default: 'Recent Search'
    }
  },
  data(){
    return {
      recentSearches:[
        {
          token: 'test_ad44a3d354e2c783cd70b86b0cb1994effc7a3df',
          lastUsed: '8 hours ago',
          scope: 'Read and Write',
        },
        {
          token: 'live_ad44a3d354e2c783cd70b86b0cb1994effc7a3df',
          lastUsed: '8 hours ago',
          scope: 'Read and Write',
        },
      ],
      fields:[
        { key: 'token', label: 'Token', },
        { key: 'lastUsed', label: 'Last Used' },
        { key: 'scope', label: 'Scope' },
        // { key: 'actions', label: '', tdClass: 'hide-action-header-mobile' },
      ]
    }
  },
  methods:{
    goTo(name){
      this.$router.push({name})
    },
  },
}
</script>

<style lang="sass" scoped>
.sandbox-tokens
  .sb-desc-text
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 1.71
    letter-spacing: normal
    color: #707070
  .billing-info-btn
    width: 131.4px
    height: 39.2px
    font-size: 12px
    font-stretch: normal
    font-style: normal
    line-height: 1.42
    letter-spacing: normal
    color: #ffffff
::v-deep .sandbox-tokens-table
  tbody
    td
      // @media screen and (min-width: 769px)
      //   &:last-child
      //     width: 40px
          // div
          //   min-height: 24px
          //   height: 100% !important
          //   display: flex !important
          //   align-items: center !important
          //   justify-content: center !important
</style>