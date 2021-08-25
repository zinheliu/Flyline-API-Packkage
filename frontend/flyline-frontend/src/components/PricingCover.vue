<template>
  <div class="pricing-cover text-left">
    <div class="landing-max-width mx-auto">
      <b-row class="mx-0" align-h="between">
        <b-col
          cols="12"
          md="6"
          class="pl-md-0 pr-md-5 py-0 d-flex flex-column justify-content-center mb-3 mb-md-0"
        >
          <p class="cover-title pt-0">
            Industry leading pricing & shopping technology
          </p>
          <p
            class="create-acc gilroy-b d-flex align-items-center cursor-pointer"
            @click="goTo('Signup')"
          >
            Get Access
            <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
          </p>
        </b-col>
        <b-col cols="12" md="6" class="pl-md-1 pr-md-0 pb-0">
          <p class="cover-subtitle mb-2">
            FlyLine API’s are built by developers for developers, offering
            simple modern easy to use documentation, a robust testing
            environment, and easy to use dashboard
          </p>
          <p class="cover-subtitle mb-0">
            Our API’s are innovative, flexible, and deployable across all your
            applications and sales channels.
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
    }
  }
};
</script>

<style lang="sass" scoped>
.pricing-cover
  padding-bottom: 100px
  .cover-title
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
    font-size: 22px
    font-stretch: normal
    font-style: normal
    line-height: 1.41
    letter-spacing: normal
    color: #00aeef

  .learn-more
    font-size: 22px
    font-stretch: normal
    font-style: normal
    line-height: 1.41
    letter-spacing: normal
    color: #203BE7
</style>
