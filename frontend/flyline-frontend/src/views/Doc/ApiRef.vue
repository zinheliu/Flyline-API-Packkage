<template>
  <b-container class="developer-documentation text-left mx-auto px-0">
    <section id="api-suit" v-if="apiSuit" class="mb-100-px mt-5">
      <p class="intro-title gilroy-b">
        Flyline API Suit, Time to Start Building
      </p>
      <p class="intro-sub-text gilroy-m">
        Whenever we make changes to the API, we’ll post them to our changelog
        and to @flyline_api on Twitter. If you have any questions, spot any
        mistakes reach out to support
      </p>
      <b-btn
        size="sm"
        class="custom-btn get-start my-3"
        @click="replacePath('/api-ref/flight-search')"
      >
        <span>Get Started with Air Shopping</span>
      </b-btn>
      <div class="w-100 dash my-4"></div>
      <div class="section-contents d-md-flex">
        <p class="mb-md-0">Section Contents :</p>
        <p
          class="mb-md-0 ml-md-4 cursor-pointer"
          @click="replacePath('/api-ref/flight-search')"
        >
          Air Shopping
          <img
            class="ml-2 arrow-right-img"
            src="@/assets/images/svg/arrow_2.svg"
            alt=""
          />
        </p>
        <p
          class="mb-md-0 ml-md-4 cursor-pointer"
          @click="replacePath('/api-ref/amenities')"
        >
          Air Amenities
          <img
            class="ml-2 arrow-right-img"
            src="@/assets/images/svg/arrow_2.svg"
            alt=""
          />
        </p>
        <p
          class="mb-md-0 ml-md-4 cursor-pointer"
          @click="replacePath('/api-ref/schedules')"
        >
          Air Schedules
          <img
            class="ml-2 arrow-right-img"
            src="@/assets/images/svg/arrow_2.svg"
            alt=""
          />
        </p>
      </div>
    </section>
    <section
      id="supporting-apis"
      v-else-if="supportingApis"
      class="mb-100-px mt-5"
    >
      <p class="intro-title gilroy-b">Supporting APIs</p>
      <p class="intro-sub-text gilroy-m">
        Whenever we make changes to the API, we’ll post them to our changelog
        and to @flyline_api on Twitter. If you have any questions, spot any
        mistakes reach out to support
      </p>
      <b-btn
        size="sm"
        class="custom-btn get-start my-3"
        @click="replacePath('/api-ref/aircraft')"
      >
        <span>Get Started with Aircraft Data</span>
      </b-btn>
      <div class="w-100 dash my-4"></div>
      <div class="section-contents d-md-flex">
        <p class="mb-md-0">Section Contents :</p>
        <p
          class="mb-md-0 ml-md-3 cursor-pointer"
          @click="replacePath('/api-ref/aircraft')"
        >
          Aircraft Data
          <img
            class="ml-2 arrow-right-img"
            src="@/assets/images/svg/arrow_2.svg"
            alt=""
          />
        </p>
        <p
          class="mb-md-0 ml-md-3 cursor-pointer"
          @click="replacePath('/api-ref/airline')"
        >
          Airline Data
          <img
            class="ml-2 arrow-right-img"
            src="@/assets/images/svg/arrow_2.svg"
            alt=""
          />
        </p>
        <p
          class="mb-md-0 ml-md-3 cursor-pointer"
          @click="replacePath('/api-ref/airport')"
        >
          Airport Data
          <img
            class="ml-2 arrow-right-img"
            src="@/assets/images/svg/arrow_2.svg"
            alt=""
          />
        </p>
        <p
          class="mb-md-0 ml-md-3 cursor-pointer"
          @click="replacePath('/api-ref/city')"
        >
          Cities Data
          <img
            class="ml-2 arrow-right-img"
            src="@/assets/images/svg/arrow_2.svg"
            alt=""
          />
        </p>
      </div>
    </section>
    <section id="welcome" v-else-if="showWelcome" class="mb-100-px mt-5">
      <!-- <p class="intro-title gilroy-b">Welcome to the FlyLine API reference</p>
      <p class="intro-sub-text gilroy-m">
        Whenever we make changes to the API, we’ll post them to our changelog and to @flyline_api on Twitter. If you have any questions, spot any mistakes reach out to support
      </p>
      <b-btn size="sm" class="custom-btn get-start my-3" @click="getStarted">
        <span>Get Started with Basic Principles</span>
      </b-btn>
      <div class="w-100 dash my-4"></div>
      <div class="section-contents d-md-flex">
        <p class="mb-md-0">Section Contents : </p>
        <p class="mb-md-0 ml-md-4 cursor-pointer" @click="replacePath('/api-ref/key-principles')">
          Basic Principles
          <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
        </p>
        <p class="mb-md-0 ml-md-4 cursor-pointer" @click="replacePath('/api-ref/making-request-authentication')">
          Making Requests
          <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
        </p>
        <p class="mb-md-0 ml-md-4 cursor-pointer" @click="replacePath('/api-ref/pagination')">
          Pagination
          <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
        </p>
      </div> -->
      <p class="welcome-text gilroy-m">API Reference Introduction</p>
      <p class="intro-title gilroy-b">Welcome to our API reference</p>
      <p class="intro-sub-text gilroy-m">
        Hey there! Welcome to our API reference. Our goal is to make travel APIs
        simple. If you see an error, have suggestions or even a simple question
        feel free to reach out to our team at hello@flyline.io.
      </p>
      <p class="intro-sub-text gilroy-m">
        If we do make changes or updates take a look at our changelog and
        release notes in our API Documentation. If you think there might be a
        service disruption check out our status page. If you're ready to start
        building click the button below to get started!
      </p>
      <b-btn size="sm" class="custom-btn get-start my-3" @click="getStarted">
        <span style="font-size: 12px;">Get Started</span>
      </b-btn>
    </section>
    <div v-else>
      <!-- <key-principles /> -->
      <div v-if="section == 'welcome'">
        <making-request />
        <pagination class="mt-100-px" />
        <postman-collection class="mt-100-px" />
        <b-row align-h="between" class="mt-100-px mx-0">
          <b-btn
            variant="primary"
            class="navigation-btn gilroy-b"
            @click="setSection('product-endpoints', '/api-ref/flight-search')"
          >
            <span>Proceed to Product Endpoints</span>
          </b-btn>
        </b-row>
      </div>
      <div v-else-if="section == 'product-endpoints'">
        <flight-search class="" />
        <amenities class="mt-100-px" />
        <air-schedules class="mt-100-px" />
        <seat-map class="mt-100-px" />
        <b-row align-h="between" class="mt-100-px mx-0">
          <b-btn
            variant="primary"
            class="navigation-btn gilroy-b"
            @click="setSection('supporting-resources', '/api-ref/aircraft')"
          >
            <span>Proceed to Supporting Resources</span>
          </b-btn>
          <b-btn
            variant="primary"
            class="navigation-btn gilroy-b"
            @click="
              setSection('welcome', '/api-ref/making-request-authentication')
            "
          >
            <span>Back to Making Request</span>
          </b-btn>
        </b-row>
      </div>
      <div v-else>
        <aircraft class="" />
        <airline class="mt-100-px" />
        <airport class="mt-100-px" />
        <city class="mt-100-px" />
        <cabin-fare class="mt-100-px" />
        <b-row align-h="between" class="mt-100-px mx-0">
          <b-btn
            variant="primary"
            class="navigation-btn gilroy-b"
            @click="setSection('product-endpoints', '/api-ref/aircraft')"
          >
            <span>Back to Product Endpoints</span>
          </b-btn>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
import SIDEBAR from "@/assets/js/sidebar";
import GuideCard from "@/components/Doc/GuideCard";
import EventBus from "@/bus/event";
import KeyPrinciples from "@/views/Doc/KeyPrinciples";
import MakingRequest from "@/views/Doc/MakingRequest";
import Pagination from "@/views/Doc/Pagination";
import FlightSearch from "@/views/Doc/FlightSearch";
import OfferRequest from "@/views/Doc/OfferRequest";
import SearchResults from "@/views/Doc/SearchResults";
import Aircraft from "@/views/Doc/Aircraft";
import SeatMap from "@/views/Doc/SeatMap";
import City from "@/views/Doc/City";
import CabinFare from "@/views/Doc/CabinFare";
import Airline from "@/views/Doc/Airline";
import Airport from "@/views/Doc/Airport";
import Amenities from "@/views/Doc/Amenities";
import AirSchedules from "@/views/Doc/AirSchedules";
import PostmanCollection from "@/views/Doc/PostmanCollection";
import DocMixin from "@/mixins/DocMixin";
export default {
  mixins: [DocMixin],
  components: {
    GuideCard,
    KeyPrinciples,
    MakingRequest,
    Pagination,
    FlightSearch,
    OfferRequest,
    SearchResults,
    Aircraft,
    City,
    CabinFare,
    Airline,
    Airport,
    Amenities,
    AirSchedules,
    PostmanCollection,
    SeatMap
  },
  data() {
    return {
      guides: [
        {
          title: "Search for Flights",
          subtitle: "Add flight search to your app with a few lines of code",
          to: "OfferRequest"
        },
        {
          title: "Airline Schedules",
          subtitle:
            "Coming soon, add the ability to view airline schedules in your app"
        }
      ],
      showWelcome: true,
      apiSuit: false,
      supportingApis: false,
      section: "welcome"
    };
  },
  created() {
    this.welcomeSec();
  },
  watch: {
    $route(v) {
      this.welcomeSec();
    }
  },
  methods: {
    setSection(sec, path) {
      this.section = sec;
      if (path) this.$router.push(path);
    },
    welcomeSec() {
      let sectionName = this.$route.params.section;
      this.showWelcome = false;
      this.apiSuit = false;
      this.supportingApis = false;
      if (sectionName && sectionName == "api-suit") this.apiSuit = true;
      else if (sectionName && sectionName == "supporting-apis")
        this.supportingApis = true;
      else if (sectionName && sectionName != "welcome")
        this.showWelcome = false;
      else this.showWelcome = true;
      if (sectionName) {
        let p = 0;
        for (let i = 0; i < SIDEBAR.length; i++) {
          if (SIDEBAR[i].to && this.$route.path.includes(SIDEBAR[i].to)) {
            p = i;
            break;
          }
          if (SIDEBAR[i].menuItems)
            for (let j = 0; j < SIDEBAR[i].menuItems.length; j++) {
              if (
                SIDEBAR[i].menuItems[j].to &&
                this.$route.path.includes(SIDEBAR[i].menuItems[j].to)
              ) {
                p = i;
                break;
              }
              if (SIDEBAR[i].menuItems[j].menuItems)
                for (
                  let k = 0;
                  k < SIDEBAR[i].menuItems[j].menuItems.length;
                  k++
                ) {
                  if (
                    SIDEBAR[i].menuItems[j].menuItems[k].to &&
                    this.$route.path.includes(
                      SIDEBAR[i].menuItems[j].menuItems[k].to
                    )
                  ) {
                    p = i;
                    break;
                  }
                }
            }
        }
        if (p == 0) this.section = "welcome";
        else if (p == 1) this.section = "product-endpoints";
        else this.section = "supporting-resources";
      }
    },
    replacePath(path) {
      this.$router.replace({
        path
      });
    },
    getStarted() {
      this.$router.push({ path: "/api-ref/key-principles" });
      EventBus.$emit("scroll-to-doc-section");
    },
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  }
};
</script>

<style lang="sass" scoped>
.developer-documentation
  // max-width: 1044px
  // padding-left: 50px
  // min-height: 90vh
  // display: flex
  // align-items: center
  .welcome-text
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    line-height: 1.8
    color: #a7a7a7

  .intro-title
    font-size: 23px
    line-height: 1.8
    color: #333333
  .intro-sub-text
    font-size: 14px
    font-stretch: normal
    font-style: normal
    line-height: 2.2
    letter-spacing: normal
    color: #707070
    // max-width: 700px
    @media screen and (max-width: 800px)
      max-width: unset
  .guide-description
    max-width: 448px
  .get-start
    height: 40px
    width: 130px
    font-size: 16px

.developer-doc-bottom-border
  border-bottom: solid 0.5px #EDEEF6
  img
    height: 200px
    width: 350px
    position: absolute
    right: 0
    bottom: -17px
    z-index: -1
    @media screen and (max-width: 800px)
      position: unset
.section-contents
  p
    font-size: 16px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    line-height: 1.44
    letter-spacing: normal
    color: #333333
</style>
