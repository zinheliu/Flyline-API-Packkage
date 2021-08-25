<template>
  <div class="lan-cover position-relative">
    <div class="c-width mx-auto w-100 text-left">
      <p class="c-title mb-2 pb-4-pz">
        Simplified & Modernized Air Travel Tech
      </p>
      <p class="c-desc mb-5" style="max-width: 497px; opacity: 0.5">
        We provide a modern and simple product suite to access rich content,
        real-time pricing, flight availability, and much more from hundreds of
        airlines. Let’s start building! Click HERE
      </p>
      <div class="d-flex align-items-lg-center">
        <b-btn class="custom-btn c-btn mr-4" @click="goTo({to: 'Signup'})">Get Access</b-btn>
        <p class="c-desc__ln text-primary cursor-pointer mb-0 gilroy-b" @click="goTo({to: 'Doc'})">
          Review Developer Hub
        </p>
      </div>
    </div>
    <div class="sec-2 py-5 mt-80-px">
      <div class="c-width mx-auto d-flex align-items-lg-center">
        <p class="c-title__2 mb-lg-0 text-white">
          Ready to jump in, Or need more info?
        </p>
        <b-btn class="custom-btn c-btn__2 ml-auto">Review API Docs</b-btn>
        <b-btn class="custom-btn c-btn__2 ml-3">Schedule a Demo</b-btn>
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
  .c-width
    max-width: 1000px
  .c-title
    font-size: 34px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.25;
    letter-spacing: -0.64px;
    color: #000000;
    font-family: Gilroy-Bold
    &__2
      font-size: 28px
      font-weight: 800
      line-height: normal
      letter-spacing: -0.56px;
  .c-desc
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    color: #040404;
    &__ln
      @extend .c-desc
      line-height: normal

  .c-btn
    min-width: 154px
    min-height: 50px
    &__2
      min-width: 182px
      min-height: 50px
  .sec-2
    background-color: #000d5c
</style>
