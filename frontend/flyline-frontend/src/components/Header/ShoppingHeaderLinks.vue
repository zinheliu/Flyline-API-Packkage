<template>
  <div class="header-links d-flex flex-column flex-md-row align-items-center">
    <p class="mb-0 head-link-text text-center mt-3 mt-md-0 gilroy-b">
      Learn our APIs
      <!-- <span v-if="isAcctive('Product')" class="active-tab"></span> -->
    </p>
    <!-- <p class="mb-0 head-link-text text-center mt-3 mt-md-0 gilroy-b">
      Shopping API’s
      <b-icon icon="arrow-right" class="ml-2"></b-icon>
    </p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["sticky"],
  data() {
    return {
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
      @media screen and (max-width: 800px)
        min-width: 100%
    .right-section
      width: -webkit-fill-available
      .menu-details
        width: calc( 100% / 3  )
        @media screen and (max-width: 800px)
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
    color: #333333
    display: flex
    align-items: center
    position: relative
    @media screen and (min-width: 800px)
      padding: 0 32px
    .active-tab
      position: absolute
      bottom: -32.5px
      left: 3px
      border-radius: 2px
      height: 5px
      width: 100%
      border: solid 1px #203BE7
      background-color: #203BE7
      @media screen and (max-width: 800px)
        display: none
</style>
