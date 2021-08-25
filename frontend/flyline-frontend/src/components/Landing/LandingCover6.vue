<template>
  <div class="landing-cover text-left">
    <div class="landing-max-width mx-auto">
      <b-row class="mx-0" align-h="between">
        <b-col
          cols="12"
          md="6"
          class="pl-md-0 pr-md-5 py-0 d-flex flex-column justify-content-center mb-3 mb-md-0"
        >
          <p class="cover-title pt-0">
            Travel solutions built for distributors
          </p>
          <p class="create-acc gilroy-b d-flex align-items-center" @click="goTo('Signup')">
            Request access
            <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
          </p>
        </b-col>
        <b-col cols="12" md="6" class="pl-md-1 pr-md-0 pb-0">
          <p class="cover-subtitle mb-0">
            Travel companies turn to FlyLine for innovative solutions to help
            provide a more complete shopping experience for their customers.
          </p>
          <p class="cover-subtitle mb-0">
            With our shopping API travel distributors can deliver the price,
            value, and user experience that consumers and business travelers
            expect in today's travel market.
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(name) {
      if (name) this.$router.push({ name });
    },
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
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
    font-size: 42px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    line-height: 1.35
    color: #333333
    @media screen and (max-width: 800px)
      font-size: 34px
  .cover-subtitle
    max-width: 585px
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
  .create-acc
    font-size: 18px
    font-stretch: normal
    font-style: normal
    line-height: 1.41
    letter-spacing: normal
    color: #00aeef
  .cover-semititle
    font-size: 22px
    font-weight: 600
    font-stretch: normal
    font-style: normal
    line-height: 2.73
    letter-spacing: normal
    color: #333333
  .rev-doc
    font-size: 22px
    font-stretch: normal
    font-style: normal
    line-height: 1.41
    letter-spacing: normal
    color: #203BE7
  .reev-doc-title
    font-size: 22px
    font-weight: 600
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    text-align: left
    color: #707070
  .coming-soon
    font-size: 22px
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #203BE7

  .learn-more
    font-size: 22px
    font-stretch: normal
    font-style: normal
    line-height: 1.41
    letter-spacing: normal
    color: #203BE7
</style>
