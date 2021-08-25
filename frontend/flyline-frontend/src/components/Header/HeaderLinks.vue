<template>
  <div class="header-links d-flex flex-column flex-lg-row align-items-center">
    <!-- <b-dropdown class="d-block header-dropdown" @show="emitShowing" @hide="emitHiding">
      <template #button-content>
        <p class="mb-0 mr-3 head-link-text gilroy-b">Products</p>
        <div class="bottom-indicator"></div>
      </template>
      <div class="landing-max-width header-dropdown-menu mx-auto d-flex flex-column flex-lg-row">
        <div class="left-menu">
          <p class="mb-0 dr-head-title tsec-1 gilroy-b">Products</p>
          <p class="mb-0 dr-head-description dsec-1 mt-10-px">Learn how to make the most of our product suite Learn how to make.</p>
        </div>
        <div class="right-section d-flex flex-wrap mt-3 mt-lg-0">
          <div class="menu-details products mb-2 mb-lg-4" v-for="(menu, mI) in products.rightMenu" :key="mI">
            <p class="mb-0 dr-head-title tsec-2 gilroy-b d-flex justify-content-between align-items-center">
              {{menu.title}}
            </p>
            <p class="mb-0 dr-head-description dsec-2 mt-10-px">{{menu.desc}}</p>
          </div>
        </div>
      </div>
    </b-dropdown> -->
    <!-- <b-dropdown class="d-block header-dropdown mt-3 mt-lg-0 ml-lg-4" @show="emitShowing" @hide="emitHiding">
      <template #button-content>
        <p class="mb-0 mr-3 head-link-text gilroy-b">Developers</p>
        <div class="bottom-indicator"></div>
      </template>
      <div class="landing-max-width header-dropdown-menu mx-auto d-flex flex-column flex-lg-row">
        <div class="left-menu">
          <p class="mb-0 dr-head-title tsec-1 gilroy-b">Developers</p>
          <p class="mb-0 dr-head-description dsec-1 mt-10-px">Everything you need to integrate with FlyLine’s and learn about our API’s</p>
        </div>
        <div class="right-section d-flex flex-wrap mt-3 mt-lg-0">
          <div class="menu-details developers mb-2 mb-lg-3" v-for="(menu, mI) in developers.rightMenu" :key="mI" @click="goTo(menu.to)">
            <p class="mb-0 dr-head-title tsec-2 gilroy-b d-flex justify-content-between align-items-center">
              {{menu.title}}
              <b-icon icon="chevron-right" font-scale="0.8"></b-icon>
            </p>
            <p class="mb-0 dr-head-description dsec-2 mt-10-px">{{menu.desc}}</p>
          </div>
        </div>
      </div>
    </b-dropdown> -->
    <!-- <p
      class="mb-0 head-link-text text-center mt-3 mt-lg-0 gilroy-b"
      @click="goTo('Product')"
    >
      Product
      <span v-if="isAcctive('Product')" class="active-tab"></span>
    </p>
    <p
      class="mb-0 head-link-text text-center mt-3 mt-lg-0 gilroy-b"
      @click="goTo('Doc')"
    >
      Documentation
      <span v-if="isAcctive('Doc')" class="active-tab"></span>
    </p> -->
    <p
      class="mb-0 head-link-text text-center mt-3 mt-lg-0 gilroy-b"
      @click="goTo('Doc')"
    >
      API Documentation
      <!-- <b-icon icon="arrow-right" class="ml-2"></b-icon> -->
    </p>
    <!-- <p
      class="mb-0 head-link-text text-center mt-3 mt-lg-0 gilroy-b"
      @click="goTo('Pricing')"
    >
      Pricing
      <span v-if="isAcctive('Pricing')" class="active-tab"></span>
    </p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["sticky"],
  data() {
    return {
      products: {
        rightMenu: [
          {
            title: "Search API",
            desc:
              "Learn how to make the most of our product suite Learn how to make."
          },
          {
            title: "Schedules API",
            desc:
              "Learn how to make the most of our product suite Learn how to make."
          },
          {
            title: "Reshop API",
            desc:
              "Learn how to make the most of our product suite Learn how to make."
          }
        ]
      },
      developers: {
        rightMenu: [
          { title: "Quickstart", desc: "" },
          { title: "API Status", desc: "" },
          { title: "PreBuilt UI Kits", desc: "" },
          { title: "Documentation", desc: "", to: "Doc" },
          { title: "GitHub", desc: "" },
          { title: "Developer Blog", desc: "" },
          { title: "Resources", desc: "" },
          { title: "Roadmap", desc: "" },
          { title: "Slack Channel", desc: "" }
        ]
      }
    };
  },
  computed: {
    ...mapGetters("UTIL", ["dark"])
  },
  methods: {
    emitShowing() {
      this.$emit("showing");
    },
    emitHiding() {
      this.$emit("hiding");
    },
    goTo(name) {
      if (name) {
        this.$router.push({ name });
        this.$emit("redirection");
      }
    },
    isAcctive(name) {
      return this.$route.name == name;
    }
  }
};
</script>

<style lang="sass" scoped>
.header-links
  ::v-deep .header-dropdown
    button
      background: none
    .dr-head-title
      font-stretch: normal
      font-style: normal
      letter-spacing: normal
      color: #333333
      line-height: 2
      &.tsec-1
        font-size: 22px
      &.tsec-2
        font-size: 18px
      &.tsec-3
        font-size: 14px
      &.left-sub-title
        max-width: 130px
    .dr-head-description
      max-width: 277px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      letter-spacing: normal
      color: #8e969f
      &.dsec-1
        font-size: 14px
        line-height: 2
      &.dsec-2
        font-size: 12px
        line-height: 1.7
    .left-menu
      min-width: 450px
      @media screen and (max-width: 1100px)
        min-width: 100%
    .right-section
      width: -webkit-fill-available
      .menu-details
        width: calc( 100% / 3  )
        @media screen and (max-width: 1100px)
          width: 100%
        .dr-head-description
          max-width: 160px
        &.products
          .dr-head-title
            max-width: 180px
        &.developers
          .dr-head-title
            max-width: 150px


  .head-link-text
    font-size: 16px
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #ffffff
    display: flex
    align-items: center
    position: relative
    @media screen and (min-width: 1100px)
      padding: 0 32px
    .active-tab
      position: absolute
      bottom: -32.5px
      left: 3px
      border-radius: 2px
      height: 5px
      width: 100%
      border: solid 1px #00aeef
      background-color: #203BE7
      @media screen and (max-width: 1100px)
        display: none
</style>
