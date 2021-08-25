<template>
  <div :class="['landing-footer text-left align-items-center d-flex py-3', bgClass? bgClass:'bg-default', small ? 'small px-2':'mx-auto px-3 px-md-0']">
    <div :class="['d-lg-flex flex-wrap landing-max-width mx-auto align-items-center justify-content-lg-between']">
      <p :class="['mb-lg-0 foot-link cursor-pointer', small ? 'px-lg-2' : '']" @click="goTo({to: 'BookDemo'})">Schedule a Demo</p>
      <div class="foot-dot"></div>
      <p :class="['mb-lg-0 foot-link cursor-pointer', small ? 'px-lg-2' : '']" @click="goTo({to: 'Suit'})">Product Suite</p>
      <div class="foot-dot"></div>
      <!-- <p :class="['mb-lg-0 foot-link', small ? 'px-lg-2' : '']">API Pricing</p>
      <div class="foot-dot"></div> -->
      <p :class="['mb-lg-0 foot-link cursor-pointer', small ? 'px-lg-2' : '']" @click="goTo({to: 'Doc'})">API Documentation</p>
      <div class="foot-dot"></div>
      <p :class="['mb-lg-0 foot-link cursor-pointer', small ? 'px-lg-2' : '']" @click="goTo({to: 'Changelog'})">Changelog</p>
      <div class="foot-dot"></div>
      <p :class="['mb-lg-0 foot-link cursor-pointer', small ? 'px-lg-2' : '']" @click="goTo({to: 'Terms'})">Terms of Service</p>
      <div class="foot-dot"></div>
      <p :class="['mb-lg-0 foot-link cursor-pointer', small ? 'px-lg-2' : '']" @click="goTo({to: 'Privacy'})">Privacy Policy</p>

      <p :class="['mb-lg-0 foot-link d-lg-none', small ? 'px-lg-2' : '']">© 2021 Flyline Holdings Inc. All right reserved.</p>
    </div>
  </div>
</template>

<script>
import FooterLinks from "@/components/Footer/FooterLinks";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: {
    FooterLinks
  },
  props: ['small', 'bgClass'],
  data() {
    return {
      menuLinks: [
        {
          title: "Airline Content",
          to: 'Signup'
        },
        {
          title: "API Documentation",
          to: 'Doc'
        },
        {
          title: "Book a Demo",
          func: 'email'
        },
        // {
        //   title: "Product Offerings",
        //   to: 'Doc'
        // },
      ],
      darkMode: true
    };
  },
  created() {
    this.darkMode = this.dark;
  },
  watch: {
    darkMode(v) {
      this.SET_DARK(v);
    }
  },
  computed: {
    ...mapGetters("UTIL", ["dark"])
  },
  methods: {
    ...mapMutations("UTIL", ["SET_DARK"]),
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
      } else if (item.func && item.func == 'email'){
        window.location.href = "mailto:hello@flyline.io?subject=&body="
      }
    },
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/footer'
.landing-footer
  &.bg-default
    background-color: rgba(232, 236, 242, 0.45)
.landing-max-width
  @media screen and (min-width: 1100px)
    max-width: 900px
  width: 100%
  .footer-title-custom
    font-size: 16px
    font-weight: 400
    font-stretch: normal
    font-style: normal
    line-height: 1.75
    letter-spacing: normal
    color: #707070
  .other-links
    margin-top: 20px
    margin-bottom: 20px
  .foot-link
    font-weight: 500
    font-size: 14px
    font-stretch: normal
    font-style: normal
    line-height: 1.43
    letter-spacing: normal
    color: #707070
    @media screen and (max-width: 800px)
      font-size: 14px !important
      margin-bottom: 20px
  .foot-dot
    width: 5px
    height: 5px
    border-radius: 100px
    background-color: #203BE7
    @media screen and (max-width: 1100px)
      display: none
.small
  .foot-link
    font-size: 12px
  .foot-dot
    width: 6px
    height: 6px
  .landing-max-width
    @media screen and (min-width: 1100px)
      max-width: 580px
</style>
