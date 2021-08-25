<template>
  <div class="lan-cover">
    <div class="part-1">
      <div class="c-part text-lg-left">
        <header-logo :icon="true" />
        <p class="titl mt-5 mb-4">
          Travel technology built for the modern-day
        </p>
        <p class="desc">
          We provide a modern and simple product suite to access rich content,
          real-time pricing, flight availability, and much more from hundreds of
          airlines. Let's start building! Click
          <span
            class="text-primary cursor-pointer"
            style="font-family: Gilroy-Bold"
            @click="goTo({ to: 'Suit' })"
            >HERE</span
          >
          to learn more
        </p>
        <!-- <div class="dash w-100 my-5"></div> -->
        <div class="actions d-flex flex-column mt-5">
          <b-btn
            class="custom-btn c-btn"
            @click="goTo({ to: 'Signup' })"
            style="width: 140px; height: 45px; font-size: 15px;"
            >Get Access</b-btn
          >
          <b-btn
            class="custom-btn__bordered mt-3 c-btn"
            @click="goTo({ to: 'Login' })"
            style="width: 140px; height: 45px; font-size: 15px;"
            >Log In</b-btn
          >
          <!-- <span class="text-primary cursor-pointer ml-4" @click="goTo({ to: 'Login' })" style="font-size: 15px; font-family: gilroy-bold" >Log In</span> -->
        </div>
      </div>
    </div>
    <div class="part-2">
      <!-- <img class="w-100 h-100" src="@/assets/images/header_image_cropped.png" alt=""> -->
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/Header/HeaderLogo";
export default {
  components: {
    HeaderLogo
  },
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
  @media screen and (max-width: 1099px)
    min-height: calc(100vh - 272px)
    display: flex
    flex-flow: column
    justify-content: center
    .c-part
      margin: 0 20px
      padding: 40px 0
    .part-2
      display: none
  @media screen and (min-width: 1100px)
    padding-top: 50px
    height: calc(100vh - 52px)
    padding-top: 0
    display: flex
    .part-1
      width: 40%
      display: flex
      flex-flow: column
      justify-content: center
      .c-part
        max-width: 334px
        margin: 0 auto
    .part-2
      width: 60%
      background-image: url('../../assets/images/svg/header_background.svg')
  .titl
    font-size: 40px
    font-family: Gilroy-Extrabold
    font-weight: 800
    font-stretch: normal
    font-style: normal
    line-height: 1.1
    letter-spacing: normal
    color: #000000
    width: 360px
  .desc
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 2.1
    letter-spacing: normal
    color: #707070
    width: 370px
  .c-part
    .c-btn
      min-width: 250px
</style>
