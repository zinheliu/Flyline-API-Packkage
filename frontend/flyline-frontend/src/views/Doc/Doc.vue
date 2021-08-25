<template>
  <div class="doc-page py-50-px">
    <dashboard-card class="py-20-px px-2 px-md-3">
      <welcome />
    </dashboard-card>
    <div class="w-100 dash my-5"></div>
    <dashboard-card class="py-20-px px-2 px-md-3">
      <dev-res />
    </dashboard-card>
    <div class="w-100 dash my-5"></div>
    <div class="wrp-cov p-4">
      <p class="mb-2 mt-2 wrp-title text-left gilroy-b">
        Still have some questions? Need some help?
      </p>
      <p class="mb-2 wrp-desc text-left">
        We all do sometimes; code is hard. Our team is always happy to provide
        support
        <span
          class="titl-color d-inline-flex align-items-center"
          style="color: #203be7 !important; font-weight: 700;"
          @click="openEmail"
          >Click here to talk with our Team
          <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import DashboardCard from "@/components/Dashboard/DashboardCard";
import Welcome from "@/components/Doc/Welcome";
import DevRes from "@/components/Doc/DevRes";
export default {
  components: {
    Welcome,
    DashboardCard,
    DevRes
  },
  methods:{
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  },
};
</script>

<style lang="sass" scoped>
.wrp-cov
  border-radius: 10px
  border: solid 1.9px #e9e9e9
  background-color: #ffffff
  .wrp-title
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 20px
    font-stretch: normal
    font-style: normal
    line-height: 1.46
    letter-spacing: normal
    color: #333333
  .wrp-desc
    padding-left: 20px;
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 1.45
    letter-spacing: normal
    color: #707070
</style>
