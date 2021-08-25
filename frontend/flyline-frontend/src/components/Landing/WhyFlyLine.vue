<template>
  <div class="why-fly-line text-left py-100-px">
    <div class="landing-max-width mx-auto px-3 px-md-2 px-md-0">
      <p class="mb-3 why-fly-line-txt gilroy-b">What is FlyLine</p>
      <!-- <div class="dash dash-title mb-36-px"></div> -->
      <p class="why-title gilroy-b">A technology-first approach to online travel booking</p>
      <b-row class="mx-0 mt-80-px">
        <b-col cols="12" md="3" class="pl-md-0 feature" v-for="(feature, fI) in features" :key="fI">
          <div class="image mt-25-px mb-60-px ml-3">
            <img :src="feature.image" alt="" class="w-100 h-100">
          </div>
          <!-- <div class="dash mb-40-px"></div>
          <p class="feature-title mb-16-px gilroy-b">{{feature.title}}</p>
          <p class="feature-subtitle mb-12-px">{{feature.subtitle}}</p>
          <p class="text-primary font-weight-bold">See libraries ></p> -->
          <div class="d-flex">
            <div class="vertical-dash mr-17-px"></div>
            <p class="feature-title">{{feature.title}}</p>
          </div>
          <p class="feature-subtitle ml-20-px mt-3">{{feature.subtitle}}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      features: [
        {
          title: 'Direct Integrations',
          subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          image: require('@/assets/images/svg/icon_3.svg')
        },
        {
          title: 'Fastest-imporving platform',
          subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          image: require('@/assets/images/svg/icon_four.svg')
        },
        {
          title: `A full suite of API's`,
          subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          image: require('@/assets/images/svg/icon_five.svg')
        },
        {
          title: 'Increase your revenue',
          subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          image: require('@/assets/images/svg/icon_six.svg')
        },
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.why-fly-line
  .why-fly-line-txt
    font-size: 18px
    font-stretch: normal
    font-style: normal
    line-height: 1.44
    letter-spacing: normal
    color: #00aeef
  .why-title
    max-width: 700px
    font-size: 40px
    font-stretch: normal
    font-style: normal
    line-height: 1.44
    letter-spacing: normal
    color: #1e3668

  .feature
    .image
      height: 45px
      width: 50px 
    .feature-title
      font-size: 16px
      font-weight: bold
      font-stretch: normal
      font-style: normal
      line-height: 1.45
      letter-spacing: normal
      color: #0e3178
    .feeature-subtitle
      font-size: 14px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 2
      letter-spacing: normal
      color: #1e3668
    .vertical-dash
      width: 5px
      height: 41px
      background-color: #32bef2

.dash
  width: 43px
  height: 3px
  border-radius: 10px
  background-color: #263d6d
  &.dash-title
    width: 210px

</style>