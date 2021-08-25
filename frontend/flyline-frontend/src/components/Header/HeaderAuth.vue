<template>
  <div class="w-100 d-flex flex-column flex-lg-row justify-content-end align-items-center h-100">
    <!-- <dropdown-menu class="ml-lg-4" :title="menus[0].title" :menus="menus[0].menus" />
    <dropdown-menu class="ml-lg-5" :title="menus[1].title" :menus="menus[1].menus" />
    <p v-if="additional" :class="['mb-0 head-link-text text-center mt-lg-0 ml-lg-5 d-flex align-items-center cursor-pointer', txtClass ]" @click="goTo('Doc')">
      API Documentation
    </p>
    <p v-if="additional" :class="['mb-0 head-link-text text-center mt-lg-0 ml-lg-5 d-flex align-items-center cursor-pointer', txtClass ]" @click="goTo('BookDemo')">
      Schedule a Demo
    </p>
    <p :class="['mb-0 head-link-text text-center mt-lg-0 ml-lg-5 d-flex align-items-center cursor-pointer', txtClass ]" @click="goTo('Pricing')">
      Pricing
    </p> -->
    <!-- <div class="h-bar ml-lg-5 d-none d-lg-block"></div> -->
    <p style="color: #000000" :class="['mb-0 head-link-text pr-2 text-center mt-3 ml-lg-auto mt-lg-0 d-flex align-items-center cursor-pointer', txtClass ]" v-if="!isLogged" @click="goTo('Login')">
      Log In
    </p>
    <p :class="['text-primary mb-0 head-link-text pr-2 text-center mt-3 ml-lg-auto mt-lg-0 d-flex align-items-center cursor-pointer', txtClass ]" @click="goTo('Dashboard')" v-else>
      Dashboard
      <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="" />
    </p>
    <p :class="['mb-0 head-link-text pr-2 text-center mt-3 ml-lg-5 mt-lg-0 d-flex align-items-center cursor-pointer text-primary', txtClass ]" @click="goTo('Signup')" v-if="!isLogged">
      Get Started
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DropdownMenu from "@/components/Header/DropdownMenu";
export default {
  components: {
    DropdownMenu
  },
  props: ["sticky", "txtClass", "additional"],
  computed: {
    ...mapGetters("USER", ["isLogged"]),
    ...mapGetters("UTIL", ["dark"]),
    menus() {
      return [
        {
          title: "Products",
          menus: [
            { title: "Air Shopping", to: "AirShopping" },
            { title: "Air In-flight Content", to: "AirInFlightContent" },
            { title: "Air Schedules", to: "AirSchedules" },
            { title: "Seating Data", to: "SeatingData" },
            { title: "Product Pricing", to: "Pricing" },
            { title: "Schedule a Demo", to: "BookDemo" }
          ]
        },
        {
          title: "Developers",
          menus: [
            { title: "API Documentation", to: "Doc" },
            { title: "Change Log", to: "ChangeLog" },
            { title: "Status Page" }
          ]
        }
      ];
    }
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "Login" });
    },
    gotoSignup() {
      this.$router.push({ name: "Signup" });
    },
    goTo(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="sass" scoped>
.head-link-text
  font-size: 14px
  font-stretch: normal
  font-style: normal
  letter-spacing: normal
  color: #333333
  // color: #ffffff
  display: flex
  align-items: center
  position: relative
  // font-weight: 500
  font-family: GILROY-BOLD
.bc-dashb
  width: auto !important
.login-btn
  width: 130px
  height: 50px
  font-size: 16px

.get-access-btn
  // width: 170px
  height: 50px
  font-size: 16px

.status-online
  width: 10px
  height: 10px
  border-radius: 100px
  background-color: #44cf57

.back-dashboard
  font-size: 16px
  font-stretch: normal
  font-style: normal
  line-height: 1.43
  letter-spacing: normal
  color: #333333
.pad
  @media screen and (min-width: 800px)
    padding-left: 25px
    padding-right: 55px
.log-btn
  width: 119px
  height: 42px
  border-radius: 4px
  // background-color: #ffffff
.b1
  font-family: GILROY-BOLD
  font-stretch: normal
  font-style: normal
  letter-spacing: normal
  color: #ffffff
  font-size: 14px
  min-width: 130px
  height: 41px
.h-bar
  width: 1px
  height: 28px
  background-color: #EDEEF6
.c-btn
  height: 44px
  line-height: 2
  min-width: 124px
</style>
