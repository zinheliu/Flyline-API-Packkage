<template>
  <div class="access-tokens-page pt-32-px pb-20-px">
    <div
      class="d-flex justify-content-center align-items-center"
      v-if="fetchingData"
    >
      <span class="text-primary">Fetching Data</span>
      <b-spinner small variant="primary" class="ml-2"></b-spinner>
    </div>
    <div class="contents">
      <!-- <dashboard-card
        class="py-24-px px-2 px-md-3 no-sandbox"
        v-if="!fetchingData && activeTokens.length == 0"
      >
        <img src="@/assets/images/svg/no_data_token.svg" alt="" />
        <p
          class="mb-3 card-header-text gilroy-b text-center mt-4"
          style="color: #333333;"
        >
          Get your production tokens
        </p>
        <p
          class="mb-0 card-desc-text mx-md-auto"
          style="color:#707070; font-size: 14px; line-height: 2;"
        >
          Once you are ready for production head over to the
          <span
            class="gilroy-b text-primary cursor-pointer"
            @click="goTo('ManageAccount')"
            >account page</span
          >
          , once you add your billing information we will issue Production
          Tokens
        </p>
      </dashboard-card>
      <dashboard-card class="py-24-px px-2 px-md-3" v-else>
        <p class="mb-4 table-title gilroy-b text-left">
          Live Tokens ({{ activeTokens.length }})
        </p>
        <div class="table-section" v-if="activeTokens.length > 0">
          <b-table
            class="shrink-table"
            :fields="tokenTableFields"
            :items="activeTokens"
          >
            <template #head(actions)>
              <span></span>
            </template>
            <template #cell(created)="row">
              <span>
                {{ formatDateTime(row.item.created) }}
              </span>
            </template>
            <template #cell(actions)="row">
              <b-icon icon="chevron-right" scale="1.1"></b-icon>
            </template>
          </b-table>
        </div>
      </dashboard-card> -->
      <!-- <dashboard-card class="py-24-px mt-5 px-2 px-md-3" >
        <p class="mb-4 table-title gilroy-b text-left">
          Sandbox Tokens ({{ sandBoxTokens.length }})
        </p>
        <div class="table-section">
          <b-table
            class="shrink-table"
            :fields="tokenTableFields"
            :items="sandBoxTokens"
          >
            <template #head(actions)>
              <span></span>
            </template>
            <template #cell(created)="row">
              <span>
                {{ formatDateTime(row.item.created) }}
              </span>
            </template>
            <template #cell(actions)="row">
              <b-icon
                icon="chevron-right"
                scale="1.1"
                class="cursor-pointer"
                @click="tokenDetailsModal = true"
              ></b-icon>
            </template>
          </b-table>
        </div>
      </dashboard-card> -->
      <!-- <dashboard-card class="py-24-px mt-5 px-2 px-md-3" > -->
        <p class="mb-4 table-title gilroy-b text-left">
          Tokens ({{ tokens.length }})
        </p>
        <div class="table-section">
          <b-table class="shrink-table" :fields="tokenTableFields" :items="tokens">
            <template #cell(created)="row">
              <span>{{ formatDateTime(row.item.created) }}</span>
            </template>
            <template #cell(actions)="row">
              <b-icon icon="chevron-right" scale="1.1" class="cursor-pointer" @click="tokenDetailsModal = true" />
            </template>
          </b-table>
        </div>
      <!-- </dashboard-card> -->
    </div>
    <modal
      size="lg"
      :modal="tokenDetailsModal"
      @change="toggleTokenDetailsModal"
    >
      <access-token-details />
    </modal>
  </div>
</template>

<script>
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import Modal from "@/components/Modals/Modal";
import AccessTokenDetails from "@/components/Tokens/AccessTokenDetails";
export default {
  components: {
    DashboardCard,
    Modal,
    AccessTokenDetails
  },
  data() {
    return {
      // tokenTableFields: [
      //   { key: "key", label: "Key" },
      //   { key: "created", label: "Last Used" }
      // ],
      tokenTableFields: [
        { key: "key", label: "Key" },
        { key: "created", label: "Creation" }
      ],

      tokens: [],
      fetchingData: true,
      tokenDetailsModal: false
    };
  },
  created() {
    this.fetchTokens();
  },
  computed: {
    ...mapGetters("USER", ["user", "currentOrganization"]),
    activeTokens() {
      return this.tokens.filter(t => t.live_mode);
    },
    sandBoxTokens() {
      return this.tokens.filter(t => !t.live_mode);
    }
  },
  methods: {
    ...mapActions("TOKEN", ["FETCH_TOKENS"]),
    async fetchTokens() {
      this.fetchingData = true;
      try {
        this.tokens = await this.FETCH_TOKENS(this.currentOrganization.organization.id);
      } catch (e) {
        console.log(e);
      }
      this.fetchingData = false;
    },
    formatDateTime(d) {
      if (!d || !moment(d).isValid) return "";
      return moment(d).fromNow();
    },
    toggleTokenDetailsModal(v) {
      if (v != this.tokenDetailsModal) this.tokenDetailsModal = false;
    },
    goTo(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="sass" scoped>
.contents
  @media screen and (max-width: 800px)
    margin-top: 40px
    margin-bottom: 40px
.table-title
  font-size: 18px
  font-weight: 800
  font-stretch: normal
  font-style: normal
  line-height: 1.22
  letter-spacing: normal
  color: #333333
::v-deep .shrink-table
  tbody
    td
      // @media screen and (min-width: 769px)
      //   &:last-child
      //     width: 15px
.no-sandbox
  .card-desc-text
    max-width: 500px
</style>
