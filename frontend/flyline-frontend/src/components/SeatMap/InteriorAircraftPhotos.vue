<template>
  <div class="interior-aircraft-photos">
    <div class="interior-aircraft-photos-wrapper px-3 px-lg-4 py-5">
      <p class="c-title">Interior Aircraft Photos</p>
      <div class="slider-wrapper ml-4 position-relative">
        <slick :options="slickOptions" v-if="showSlider">
          <div class="int-image-wrapper" v-for="(photo, pI) in seatmap.traveler_photos" :key="pI">
            <img :src="photo" alt="" class="w-100 h-100" />
          </div>
        </slick>
        <div class="next-btn cursor-pointer" ref="nxtBtn">
          <b-icon icon="chevron-right" font-scale="2" class="text-primary gilroy-b"></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
export default {
  props: {
    seatmap: Object
  },
  components: {
    Slick,
  },
  data(){
    return {
      showSlider: false,
    }
  },
  computed:{
    slickOptions(){
      return {
        slidesToShow: 2,
        // centerMode: true,
        focusOnSelect: true,
        // variableWidth: true,
        nextArrow: this.$refs.nxtBtn,
        prevArrow: false,
      }
    },
  },
  mounted(){
    this.showSlider = true
  },
}
</script>

<style lang="sass" scoped>
.interior-aircraft-photos
  .interior-aircraft-photos-wrapper
    border-radius: 4px
    border: solid 1.8px #edeef6
    background-color: #ffffff
    .c-title
      font-size: 18px
      font-family: GILROY-BOLD
      font-stretch: normal
      font-style: normal
      line-height: 4
      letter-spacing: -0.36px
      color: #000000
    .slider-wrapper
      .int-image-wrapper
        width: 210px !important
        height: 138px
        border-radius: 4px
        border: solid 1.4px #edeef6
        background-color: #ffffff
      .next-btn
        position: absolute
        right: -20px
        top: 40%
</style>