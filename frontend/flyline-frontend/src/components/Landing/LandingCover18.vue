<template>
  <div class="lan-cover">
    <div class="images">
      <img src="@/assets/images/head_images/32.png" alt="">
      <img src="@/assets/images/head_images/23.png" alt="">
      <img src="@/assets/images/head_images/32.png" alt="">
      <img src="@/assets/images/head_images/12.png" alt="">
      <img src="@/assets/images/head_images/Additional elements 3 copy 4.png" alt="">
      <img src="@/assets/images/head_images/Additional elements 5.png" alt="">
      <img src="@/assets/images/head_images/Additional elements 5 copy.png" alt="">
      <img src="@/assets/images/head_images/Additional elements 4.png" alt="">
      <img src="@/assets/images/head_images/Additional elements 4.png" alt="">
    </div>
    <div class="c-width mx-auto">
      <div class="c3 mb-5 mx-auto">
        <p class="c-title mb-4">Travel technology built for the modern day</p>
        <p class="c-desc">
          We provide a modern and simple product suite to access rich content,
          real-time pricing, flight availability, and much more from hundreds of
          airlines. Lets start building! Click
          <span class="cursor pointer text-primary gilroy-b" @click="goTo({ to: 'Suit' })">HERE</span>
          to learn more
        </p>
      </div>
      <div class="d-flex flex-column flex-lg-row justify-content-center mb-100-px">
        <b-btn class="custom-btn b1">Get API Keys</b-btn>
        <b-btn class="custom-btn__bordered text-primary b1 ml-lg-4" @click="goTo({to:'ContactSales'})">Contact Sales</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    },
    goTo(item) {
      if (item.href) {
        window.location = item.href;
      } else if (item.to) {
        let obj = { name: item.to };
        this.$router.push(obj);
        window.scrollTo(0, 0);
      } else if (item.path) {
        let obj = { path: item.path };
        this.$router.push(obj);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.lan-cover
  padding-top: 100px
  @media screen and (min-width: 1100px)
    padding-top: 0
    min-height: calc(100vh - 100px)
    display: flex
    flex-flow: column
    justify-content: center
    // background: url("../../assets/images/Group 16196.png") no-repeat center center fixed
    // background-size: cover
    max-width: 960px
    margin: 0 auto
    position: relative
  .images
    position: absolute
    z-index: 1
    height: 100%
    width: 100%
    bottom: -22px
    img
      position: absolute
      &:nth-child(1)
        height: 172px
        width: 172px
        bottom: 0
        right: 0
      &:nth-child(2)
        height: 141px
        width: 141px
        bottom: 0
        right: 137px
      &:nth-child(3)
        height: 172px
        width: 172px
        bottom: 0
        left: 19px
      &:nth-child(4)
        height: 172px
        width: 172px
        bottom: 0
        left: 145px
      &:nth-child(5)
        height: 66px
        width: 56px
        top: 0
        left: 250px
      &:nth-child(6)
        height: 77px
        width: 129px
        top: 50%
        right: 0px
      &:nth-child(7)
        height: 89px
        width: 73px
        top: 12%
        left: 45px
      &:nth-child(8)
        height: 65px
        width: 162px
        top: 8%
        right: 0px
      &:nth-child(9)
        height: 65px
        width: 162px
        top: 50%
        left: 24px
  .c-width
    max-width: 1000px
    position: relative
    z-index: 2
  .c-title
    font-family: gilroy-bold
    font-size: 42px
    font-weight: 800
    font-stretch: normal
    font-style: normal
    line-height: 1.15
    letter-spacing: normal
    text-align: center
    color: #000000
    &__2
      font-size: 36px
      font-weight: 800
      font-stretch: normal
      font-style: normal
      line-height: 1.39
      letter-spacing: normal
      text-align: left
      color: #ffffff
  .c-desc
    font-size: 16px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 1.9
    letter-spacing: normal
    text-align: center
    color: #707070
  .c3
    max-width: 550px
  .b1
    width: 140px
    height: 45px
    font-size: 12px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #ffffff
</style>
