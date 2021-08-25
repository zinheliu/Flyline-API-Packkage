<template>
  <div class="lan-cover position-relative">
    <div class="c-width mx-auto w-100 text-left">
      <p class="c-title mt-5 mb-3">Travel Tech</p>
      <p class="c-title__2 mb-3 pb-10-px">Simplifed & Modernized.</p>
      <p class="c-desc pb-30-px" style="max-width: 650px">
        We provide a modern and simple product suite to access rich content,
        real-time pricing, flight availability, and much more from all major
        airlines. Let’s start building!
      </p>
      <div class="d-flex mb-5">
        <b-btn class="custom-btn c-btn mr-4" style="font-size: 14px;" @click="goTo({to: 'Signup'})">Get Started</b-btn>
        <b-btn class="custom-btn__bordered text-primary c-btn" style="font-size: 14px;" @click="goTo({to: 'Doc'})">Developer Hub</b-btn>
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
  padding-top: 120px
  padding-bottom: 120px
  .c-width
    max-width: 1000px
  .c-title
    font-size: 46px
    font-weight: 600
    font-stretch: normal
    font-style: normal
    line-height: 0.59
    letter-spacing: -1.22px
    color: #000D5C
    font-family: Gilroy-Bold
    &__2
      font-family: Gilroy-Extrabold
      font-size: 55px
      font-weight: 800
      font-stretch: normal
      font-style: normal
      line-height: 1.03
      letter-spacing: -1.4px
      color: #203be7
  .c-desc
    font-size: 16px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 1.9
    letter-spacing: normal
    color: #040404
    opacity: 0.5
  .c-btn
    width: 140px
    height: 45px
  .images
    position: absolute
    img
      position: absolute
      &:nth-child(1)
        width: 163px
        height: 133px
        right: 14%
      &:nth-child(2)
        width: 195px
        height: 157px
        right: -73px
        top: -87px
      &:nth-child(3)
        width: 140px
        height: 85px
        right: 0
        bottom: 39%
</style>
