<template>
  <div class="dashboard-page">
    <b-row class="mx-0">
      <div class="pr-md-2 py-0 pl-0 left-part order-2 order-md-1">
        <dashboard-card class="py-20-px px-2 px-md-3">
          <personal-info-form class="mb-3" />
        </dashboard-card>
        <dashboard-card class="py-20-px px-2 px-md-3 mt-32-px" v-if="role != 2">
          <company-info-form class="mb-3" />
        </dashboard-card>
        <dashboard-card class="py-20-px px-2 px-md-3 px-md-4 mt-32-px" v-if="role == 0">
          <img src="@/assets/images/svg/no_billing_info_icon.svg" alt="" />
          <p
            class="mb-3 card-header-text gilroy-b text-center mt-4"
            style="color:#333333;"
          >
            Add Billing Information
          </p>
          <p
            class="mb-0 card-desc-text mx-auto"
            style="color: rgb(112, 112, 112); font-size: 14px;line-height: 2;"
          >
            Feel stuck in free tier? No problem, click
            <span
              class="gilroy-b cursor-pointer text-rimary"
              style="color: #203BE7;"
              >HERE</span
            >
            on the button in the top right to add banking or credit card
            details. If you have any questions send us an email
            <span
              class="gilroy-b text-primary cursor-pointer"
              @click="openEmail"
              >hello@flyline.io</span
            >
          </p>
        </dashboard-card>
        <!-- <dashboard-card class="py-20-px mt-32-px">
          <payment-methods />
        </dashboard-card>
        <dashboard-card class="py-20-px mt-32-px">
          <monthly-invoice />
        </dashboard-card> -->
        <dashboard-card class="py-20-px px-2 px-md-3 px-md-4 mt-32-px" v-if="role == 0">
          <account-deletion />
        </dashboard-card>
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
import DashboardCard from "@/components/Dashboard/DashboardCard";
import PersonalInfoForm from "@/components/Account/PersonalInfoForm";
import CompanyInfoForm from "@/components/Account/CompanyInfoForm";
import PaymentMethods from "@/components/Account/PaymentMethods";
import MonthlyInvoice from "@/components/Account/MonthlyInvoice";
import AccountDeletion from "@/components/Account/AccountDeletion";
import DashboardNotification from "@/components/Dashboard/DashboardNotification";
import { mapGetters } from 'vuex'
export default {
  components: {
    DashboardCard,
    PersonalInfoForm,
    CompanyInfoForm,
    PaymentMethods,
    MonthlyInvoice,
    AccountDeletion,
    DashboardNotification
  },
  computed:{
    ...mapGetters('USER', ['currentOrganization']),
    role(){
      return this.currentOrganization.role
    },
  },
  methods: {
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  }
};
</script>

<style lang="sass" scoped>
.dashboard-page
  padding-top: 32px
  padding-bottom: 100px
  .left-part
    // max-width: 900px
    width: 100%
    // margin-right: 10px
    @media screen and (max-width: 800px)
      margin-top: 32px
      margin-right: 0px
  .card-desc-text
    max-width: 600px
</style>
