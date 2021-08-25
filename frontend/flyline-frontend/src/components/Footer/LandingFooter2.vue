<template>
  <div class="landing-footer mx-auto text-left px-3 px-md-0 pt-5">
    <div class="mb-5 dash w-100"></div>
    <div class="foot-wrp landing-max-width mx-auto">
      <div class="mx-0 d-flex flex-column flex-md-row justify-content-between">
        <div class="logo">
          <img
            src="@/assets/images/svg/flyline_logo_dark.svg"
            alt=""
            class="w-100 h-100"
            v-if="dark"
          />
          <img
            src="@/assets/images/svg/flyline_logo.svg"
            alt=""
            class="w-100 h-100"
            v-else
          />
        </div>
        <div class="d-flex flex-column flex-md-row mt-5 mt-md-0">
          <div v-for="(menuLink, mnI) in menuLinks" :key="mnI" class="px-0 pl-md-5 cursor-pointer" @click="goTo(menuLink)">
            <p class="footer-title mb-4">{{ menuLink.title }}</p>
          </div>
        </div>
      </div>
    </div>
      <!-- <div class="line mt-5"></div> -->
    <div class="mt-4 mb-5 dash w-100"></div>
    <div class="foot-wrp landing-max-width mx-auto">
      <div class="other-links d-flex flex-column flex-md-row">
        <p class="footer-title order-2 order-md-1 mt-3 mt-md-0">© 2021 Flyline Holdings Inc. All right reserved.</p>
        <div class="ml-md-auto order-1 order-md-2 d-flex flex-column flex-md-row">
          <p class="footer-title px-0 px-md-5 cursor-pointer" @click="goTo({to:'Terms'})">Terms of Use</p>
          <p class="footer-title cursor-pointer" @click="goTo({to:'Privacy'})">Privacy Policy</p>
        </div>
      </div>
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
  data() {
    return {
      menuLinks: [
        // {
        //   title: "Airline Content",
        //   to: 'Signup'
        // },
        {
          title: "API Documentation",
          to: 'Doc'
        },
        {
          title: "Schedule a Demo",
          path: '/book-demo'
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
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/footer'
.landing-max-width
  max-width: 1100px
  width: 100%
</style>
