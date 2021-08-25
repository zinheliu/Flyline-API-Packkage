<template>
  <div class="landing-cover text-left">
    <div class="landing-max-width mx-auto">
      <b-row class="mx-0" align-h="between">
        <b-col
          cols="12"
          md="6"
          class="pl-md-0 pr-md-1 py-0"
          order="2"
          order-md="1"
        >
          <p class="cover-title mb-0">
            Unlimited Travel Search Flexibility
          </p>
          <p class="cover-subtitle mt-2 mb-5">
            Use our shopping API's to build advanced shopping displays with
            calendars, alternative destinations, and upsell capabilities.
          </p>
          <!-- <div class="d-flex">
            <b-btn
              variant="primary"
              class="d-flex d-md-none mr-20-px custom-btn get-start-btn align-items-center justify-content-center"
            >
              Get Access Now!
            </b-btn>
            <b-btn
              variant="primary"
              class="d-none d-md-block mr-20-px custom-btn get-start-btn"
              @click="goTo('Signup')"
              >Sign Up</b-btn
            >
            <b-btn
              variant="primary"
              class="d-none d-md-block mr-20-px custom-btn__trans get-start-btn"
              >Learn More</b-btn
            >
          </div> -->
        </b-col>
        <b-col
          cols="12"
          md="6"
          class="pl-md-1 pr-md-0 pb-0 d-none d-md-flex justify-content-end"
          order="1"
          order-md="2"
        >
          <img
            src="@/assets/images/svg/dark_mode_image_two.svg"
            alt="code_block"
            class="code_block"
            v-if="dark"
          />
          <img
            src="@/assets/images/svg/product_page_header_image.svg"
            alt="code_block"
            class="code_block"
            v-else
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("UTIL", ["dark"])
  },
  methods: {
    goTo(name) {
      if (name) this.$router.push({ name });
    }
  }
};
</script>

<style lang="sass" scoped>
.landing-cover
  padding-top: 100px
  padding-bottom: 100px
  @media screen and (max-width: 800px)
    padding-top: 95px
  // background-color: #333333
  // background-image: url(../../assets/images/svg/background_header.svg)
  .landing-max-width
    // background-image: url(../../assets/images/svg/hero_image.svg)
    // background-repeat: no-repeat
    // background-size: 100% 164%
    // margin-left: 10px
    // padding-bottom: 60px

  .code_block
    // transform: scale(1.3)
    width: 525px
    // height: 323.2px
  .cover-title
    max-width: 455px
    font-size: 42px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    line-height: 1.2
    color: #333333
    @media screen and (max-width: 800px)
      font-size: 34px
  .cover-subtitle
    max-width: 400px
    font-size: 18px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 2
    padding-top: 20px
    letter-spacing: normal
    color: #707070
    @media screen and (max-width: 800px)
      font-size: 14px
  .get-start-btn
    height: 60px
    width: 207px
  .arrow-right
    width: 30px
    height: 30px
  .features
    margin-top: 80px
    // margin-bottom: 60px
    .feature
      border-radius: 10px
      border: solid 1px #e9e9e9
      background-color: #ffffff
      width: 103px
      height: 102px
      display: flex
      flex-flow: column
      justify-content: center
      align-items: center
      margin-right: 24px
      &:last-child
        margin-right: 0
    .feature-image
      height: 45px
      width: 53px
    .feature-text
      font-size: 12px
      font-stretch: normal
      font-style: normal
      line-height: 2.67
      letter-spacing: normal
      color: #8e969f
</style>
