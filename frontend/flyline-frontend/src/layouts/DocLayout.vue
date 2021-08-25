<template>
  <div class="dashboard-layout d-flex flex-column">
    <doc-wrapper-header />
    <doc-wrapper-sub-header />
    <div class="body-content">
      <router-view
        class="max-content-width mx-auto main-contents w-100"
      ></router-view>
      <doc-wrapper-footer
        class="w-100 dashboard-footer mt-auto"
        style="background-color: #ffffff"
      />
    </div>
  </div>
</template>

<script>
import DocWrapperHeader from "@/components/Header/LandingHeader";
import DocWrapperSubHeader from "@/components/Header/DocWrapperSubHeader";
import DocWrapperFooter from "@/components/Footer/DocWrapperFooter";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    DocWrapperHeader,
    DocWrapperFooter,
    DashboardCard,
    DocWrapperSubHeader
  },
  computed: {
    ...mapGetters("USER", ["currentOrganization"])
  },
  created() {
    // if (!this.currentOrganization)
    //   this.$router.replace({ name: "ChooseOrganization" });
    // this.FETCH_ORGANIZATIONS();
  },
  methods: {
    ...mapActions("ORGANIZATION", ["FETCH_ORGANIZATIONS"])
  }
};
</script>

<style lang="sass" scoped>
.body-content
  @media screen and (max-width: 1100px)
    padding: 0 10px
.max-content-width
  max-width: 1100px

.dashboard-footer
  // background-color: #ffffff
</style>
