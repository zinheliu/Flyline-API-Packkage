<template>
  <div class="dashboard-layout d-flex flex-column">
    <dashboard-header />
    <div class="body-content">
      <dashboard-card class="sub-header-card d-block d-md-none mt-md-4">
        <dashboard-sub-header />
      </dashboard-card>
      <router-view
        class="max-content-width mx-auto main-contents w-100"
      ></router-view>
      <dashboard-footer
        class="w-100 dashboard-footer mt-auto"
        style="background-color: #ffffff"
      />
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Header/DashboardHeader";
import DashboardSubHeader from "@/components/Header/DashboardSubHeader";
import DashboardFooter from "@/components/Footer/DashboardFooter";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    DashboardHeader,
    DashboardSubHeader,
    DashboardFooter,
    DashboardCard
  },
  computed: {
    ...mapGetters("USER", ["currentOrganization", "isLogged"])
  },
  created() {
    if (!this.currentOrganization){
      if(this.isLogged) this.$router.replace({ name: "ChooseOrganization" });
    }
    this.FETCH_ORGANIZATIONS();
  },
  methods: {
    ...mapActions("ORGANIZATION", ["FETCH_ORGANIZATIONS"])
  }
};
</script>

<style lang="sass" scoped>
.body-content
  // background-color: #ffffff
  // margin-top: 250px
  @media screen and (min-width: 800px)
    min-height: calc( 100vh - 223px )
    display: flex
    flex-flow: column
  @media screen and (max-width: 800px)
    // margin-top: 60px
    padding: 0
  .sub-header-card
    padding: 20px 8px
    @media screen and (max-width: 800px)
      border-radius: 0
      border-top: none
  .main-contents
    @media screen and (max-width: 1100px)
      padding: 50px 7px 50px 7px
.max-content-width
  max-width: 1000px

.dashboard-footer
  // background-color: #ffffff
</style>
