<template>
  <div class="airline-in-the-platform py-100-px text-left px-md-5">
    <div class="landing-max-width mx-auto">
      <p class="airline-in-the-platform-txt mb-24-px ml-3 ml-md-2 ml-md-0 gilroy-b">Why FlyLine</p>
      <!-- <div class="dash mb-36-px ml-2 ml-md-0"></div> -->
      <b-row class="mx-0" align-h="between">
        <b-col cols="12" md="6" class="pl-md-0 pr-md-1 py-0">
          <div class="pb-60-px">
            <p class="aip-title mb-24-px">A fully integrated suite of travel products</p>
            <p class="aip-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <b-btn variant="primary" class="text-white d-flex align-items-center mt-5 read-doc-btn gilroy-b">Read Documentation <b-icon icon="arrow-right-short"></b-icon></b-btn>
          </div>
        </b-col>
        <b-col cols="12" md="6" class="pl-md-0 pr-md-1 py-0">
          <b-row v-for="(n, i) in 3" :key="i" align-h="between" class="mx-0 icons ml-auto mb-47-px">
            <img src="@/assets/images/svg/icon.svg" alt="">
            <img src="@/assets/images/svg/icons8-southwest-airlines-384.svg" alt="">
            <img src="@/assets/images/svg/american-airlines-3.svg" alt="">
            <img src="@/assets/images/svg/delta-airlines.svg" alt="">
          </b-row>
        </b-col>
      </b-row>
      <b-row class="mx-0">
        <b-col cols="12" md="3" :class="['statistic-data', sI == 0 ? 'pl-md-0' : '']" v-for="(statistic, sI) in statistics" :key="sI">
          <div class="d-flex">
            <div class="vertical-dash mr-17-px"></div>
            <p class="statistic-title">{{statistic.title}}</p>
          </div>
          <p class="statistic-subtitle ml-20-px">{{statistic.subtitle}}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      statistics: [
        {
          title: '250M+',
          subtitle: 'Lorem Ipsum is simply dummy text of the printing and'
        },
        {
          title: '95%',
          subtitle: 'Lorem Ipsum is simply dummy text of the printing and'
        },
        {
          title: '135+',
          subtitle: 'Lorem Ipsum is simply dummy text of the printing and'
        },
        {
          title: '45+',
          subtitle: 'Lorem Ipsum is simply dummy text of the printing and'
        },
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.airline-in-the-platform
  background-color: #0e3178
  .landing-max-width
    // background-image: url('../../assets/images/svg/map_logos.svg')
    // background-size: 100%
    // background-repeat: no-repeat
    .airline-in-the-platform-txt
      font-size: 18px
      // font-weight: bold
      font-stretch: normal
      font-style: normal
      line-height: 1.44
      letter-spacing: normal
      color: #ffffff
    .aip-title
      max-width: 500px
      font-size: 40px
      font-weight: bold
      font-stretch: normal
      font-style: normal
      line-height: 1.44
      letter-spacing: normal
      color: #ffffff
    .aip-subtitle
      max-width: 418px
      font-size: 18px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 1.89
      letter-spacing: normal
      color: #ffffff
    .statistic-data
      .statistic-title
        font-size: 28px
        font-weight: bold
        font-stretch: normal
        font-style: normal
        line-height: 1.46
        letter-spacing: normal
        color: #ffffff
      .statistic-subtitle
        max-width: 193px
        font-size: 14px
        font-weight: 500
        font-stretch: normal
        font-style: normal
        line-height: 2
        letter-spacing: normal
        color: #ffffff
      .vertical-dash
        width: 5px
        height: 41px
        background-color: #32bef2

  .read-doc-btn
    width: 206px
    height: 54px


.dash
  width: 144px
  height: 3px
  border-radius: 10px
  background-color: #ffffff

.icons
  max-width: 400px
  img
    width: 50px
    height: 50px

</style>