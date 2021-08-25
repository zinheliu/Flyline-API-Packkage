<template>
  <div class="recent-search">
    <div
      class="dashboard-toolbar d-flex justify-content-between align-items-center mb-3"
    >
      <p class="mb-0 dashboard-title-text">{{ title }}</p>
      <!-- <p class="mb-0 text-primary view-all">
        <span class="mr-2">View All</span>
        <b-icon icon="chevron-right" scale="1.1"></b-icon>
      </p> -->
    </div>
    <div
      class="d-flex justify-content-center align-items-center"
      v-if="fetchingData"
    >
      <span class="text-primary">Fetching Data</span>
      <b-spinner small variant="primary" class="ml-2"></b-spinner>
    </div>
    <div class="table-section" v-else-if="recentSearches.length > 0">
      <b-table
        :items="recentSearches"
        :fields="fields"
        :per-page="tableSettings.perPage"
        :current-page="tableSettings.currentPage"
        class="shrink-table recent-search-table"
      >
        <template #cell(timestamp)="row">
          <span>{{ formatDateTime(row.item.timestamp) }}</span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  props: {
    title: {
      type: String,
      default: "Recent Search"
    },
    settings: {
      type: Object,
      default: {
        perPage: 4,
        currentPage: 1
      }
    }
  },
  data() {
    return {
      recentSearches: [],
      fields: [
        { key: "timestamp", label: "TIMESTAMP" },
        { key: "location_from", label: "FROM" },
        { key: "location_to", label: "TO" },
        { key: "departure_date", label: "DEPARTURE" },
        {
          key: "return_date",
          label: "RETURN",
          formatter: v => (!v || v == "" ? "null" : v)
        }
      ],
      fetchingData: true,
      tableSettings: {
        perPage: 4,
        currentPage: 1
      }
    };
  },
  created() {
    this.setTableSettings();
    this.fetchData();
  },
  watch: {
    settings: {
      handler(v) {
        this.setTableSettings();
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters("USER", ["currentOrganization"])
  },
  methods: {
    ...mapActions("DASH", ["RECENT_SEARCH"]),
    setTableSettings() {
      this.tableSettings.perPage = this.settings.perPage;
      this.tableSettings.currentPage = this.settings.currentPage;
    },
    async fetchData() {
      this.fetchingData = true;
      try {
        const res = await this.RECENT_SEARCH(
          this.currentOrganization.organization.id
        );
        this.recentSearches = res.results;
        this.$emit("total", this.recentSearches.length);
        if(this.recentSearches.length == 0) this.$emit('empty')
      } catch (e) {
        console.log(e);
      }
      this.fetchingData = false;
    },
    formatDateTime(d) {
      if (!d || !moment(d).isValid) return "";
      return moment(d).format("MMM DD, YYYY hh:mm A");
    }
  }
};
</script>

<style lang="sass" scoped>
::v-deep .recent-search-table
  td
    width: calc(100% / 5)
</style>
