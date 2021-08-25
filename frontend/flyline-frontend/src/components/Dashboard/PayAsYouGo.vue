<template>
  <div class="pay-as-you-go">
    <div
      class="dashboard-toolbar d-flex justify-content-between align-items-md-center mb-3"
    >
      <p class="mb-0 dashboard-title-text">Pay as you go</p>
      <div
        class="d-flex flex-wrap flex-column flex-md-row align-items-start align-items-md-center"
      >
        <p
          class="mb-0 text-primary view-all cursor-pointer"
          @click="goTo('Doc')"
        >
          <span class="mr-2">Add other API’s</span>
          <b-icon icon="chevron-right" scale="1.1"></b-icon>
        </p>
      </div>
    </div>
    <div class="table-section">
      <b-table
        :items="items"
        :fields="fields"
        class="shrink-table pay-as-you-go-table"
      >
        <template #cell(usage)="row">
          <div class="d-flex flex-column flex-md-row">
            <p class="mb-0">
              <span>{{totalCall(row.item)}}</span>
              <!-- <span>{{ calculatePercentageOfUsage(row.item) }}%</span>
              <span>
                ({{ totalCall(row.item) }} / {{ row.item.tier.limit }})
              </span> -->
            </p>
            <!-- <div class="percentage-wrapper ml-md-3">
              <div
                class="percentage-indicator"
                :style="{ width: calculatePercentageOfUsage(row.item) + '%' }"
              >
                <span class="percent-text"
                  >{{ calculatePercentageOfUsage(row.item) }}%</span
                >
              </div>
            </div> -->
          </div>
        </template>
        <template #cell(tier)="row">
          <span>{{
            row.item.tier.price
          }}</span>
        </template>
        <template #cell(totalMonthlyCost)="row">
          <div class="d-flex flex-column flex-md-row">
            <span>${{ totalCall(row.item) * row.item.tier.price }}</span>
            <span class="view-invoice-action cursor-pointer ml-md-4"
              >View Invoice</span
            >
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [
        // {
        //   apiName: 'Flight Search API',
        //   usage: {
        //     limit: 500,
        //     used: 25
        //   },
        //   tierPricingPerCall: 'Free',
        //   totalMonthlyCost: '0.00'
        // },
      ],
      fields: [
        { key: "api_type", label: "API Name" },
        { key: "usage", label: "API Usage this Month" },
        { key: "tier", label: "Tier Pricing Per Call" },
        { key: "totalMonthlyCost", label: "Total Monthly Cost" }
      ],
      fetchingTracks: true,
    };
  },
  created() {
    this.fetchTracks();
  },
  computed: {
    ...mapGetters("USER", ["user", "currentOrganization"]),
    ...mapGetters("UTIL", ["testData"]),
    organizationId() {
      return this.currentOrganization.organization.id;
    },
  },
  methods: {
    ...mapActions("ORGANIZATION", ["FETCH_TRACKS"]),
    async fetchTracks() {
      this.fetchingTracks = true;
      try {
        let res = await this.FETCH_TRACKS(this.organizationId)
        this.items = res;
        if(res.length == 0) this.$emit('empty')
      } catch (e) {
        console.log(e);
      }
      this.fetchingTracks = false;
    },
    calculatePercentageOfUsage(item) {
      let tc = item.total_call
      // let tc = item.total_live_call
      if (tc == 0) return 0;
      return (tc / item.tier.limit).toFixed(2);
    },
    totalCall(item){
      let tc = item.total_call
      // let tc = item.total_live_call
      return tc
    },
    goTo(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="sass" scoped>
.pay-as-you-go
  ::v-deep .pay-as-you-go-table
    td
      width: calc( 100% / 4  )
    .percentage-wrapper
      width: 187px
      height: 22px
      border-radius: 20px
      border: solid 1.9px #e9e9e9
      background-color: #ffffff
      @media screen and (max-width: 800px)
        width: 100%
        margin-top: 10px
      .percentage-indicator
        border-radius: 20px
        background-color: #3cbc6f
        height: 99%
        min-width: 50px
        display: flex
        justify-content: center
        align-items: center
        margin: 0 1px
        .percent-text
          font-size: 10px
          font-stretch: normal
          font-style: normal
          letter-spacing: normal
          color: #ffffff
</style>
