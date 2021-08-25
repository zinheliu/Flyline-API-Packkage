<template>
  <div class="landing-cover text-left">
    <div
      class="landing-max-width mx-auto d-flex flex-column justify-content-between"
    >
      <section class="mx-2 pt-20-px mx-lg-0">
        <p class="mb-4 section-titl gilroy-b mt-0">
          Welcome to Flyline, lets dive in
          <img
            src="@/assets/images/svg/waving_emoji.svg"
            style="margin-left: 20px;"
            alt=""
          />
        </p>
        <p class="mb-4 section-desc">
          Welcome to Flyline we simplify and modernized airfare shopping data.
          Our API platform provides everything travel distributors need to
          modernize their airfare shopping experience. From accessing pricing
          and availability data on hundreds of airlines to rich content and
          product attributes on specific offers. With Flyline integrate once and
          start accessing air shopping data from hundreds of airlines in 10
          minutes.
        </p>
      </section>
      <div class="w-100 dash my-80-px"></div>
      <section class="mx-2 mx-lg-0">
        <div class="mt-4 mb-4 section-titl gilroy-b d-md-flex mt-0">
          A complete and robust product suite
        </div>
        <p class="mb-5 section-desc">
          Our Air Shopping, Air Amenities, and Air Schedules API deliver the
          necessary data that consumers and business travelers expect in today’s
          evolving travel market. Through our normalized and robust API's access
          to rich flight data has never been easier.
        </p>
        <div class="row">
          <div class="col-12 col-md-6 li-type">
            <span class="li-point"></span>
            <span>Shop one-way, round-trip, multi-city fares</span>
          </div>
          <div class="col-12 col-md-6 li-type">
            <span class="li-point"></span>
            <span>Includes all fare types and taxes</span>
          </div>
          <div class="col-12 col-md-6 li-type">
            <span class="li-point"></span>
            <span>Access to all public and private fares</span>
          </div>
          <div class="col-12 col-md-6 li-type">
            <span class="li-point"></span>
            <span>Shop every fare class and class of service</span>
          </div>
          <div class="col-12 col-md-6 li-type">
            <span class="li-point"></span>
            <span>Fare breakdown & fare rules</span>
          </div>
          <div class="col-12 col-md-6 li-type">
            <span class="li-point"></span>
            <span>Access to cabin amenities, and attributes</span>
          </div>
          <div class="col-12 col-md-6 li-type mb-md-3">
            <span class="li-point"></span>
            <span>Real-time flight status and schedules</span>
          </div>
          <div class="col-12 col-md-6 li-type">
            <span class="li-point"></span>
            <span>Historical schedules & on-time performance</span>
          </div>
        </div>
      </section>
      <div class="w-100 dash my-80-px"></div>
      <section class="mx-2 mx-lg-0">
        <div
          class="mt-4 mb-4 section-titl gilroy-b d-md-flex mt-0 justify-content-between"
        >
          Hundreds of airlines, one integration
        </div>
        <p class="mb-5 section-desc">
          Integrate once with Flyline and access a suite of shopping data and
          rich content from hundreds of airlines, no need to further normalize
          or fill in gaps, we handle the heavy lifting so you can focus on what
          matters most to your product.
        </p>
      </section>
      <div class="w-100 dash my-80-px"></div>
      <section
        class="mb-5 con-sec mx-2 mx-lg-0 d-md-flex justify-content-between align-items-center"
      >
        <div>
          <p
            class="mb-4 mt-4 section-titl__2 gilroy-b"
            style="margin-top: 10px; font-size: 34px;"
          >
            Looking for more info?
          </p>
          <p class="mb-0 section-desc" style="max-width: 500px">
            Still have some questions about our product suite or what we offer?
            No worries, reach out to our team.
          </p>
        </div>
        <div class="d-flex flex-column mt-3">
          <b-btn class="custom-btn t-btn" @click="goTo({to:'Doc'})"
            >Review API</b-btn
          >
          <b-btn class="custom-btn t-btn mt-3" @click="goTo({ to: 'Signup' })"
            >Request Access</b-btn
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prSuit: null
    };
  },
  mounted() {
    setTimeout(() => {
      if (this.$route.hash) {
        let sec = document.getElementById(this.$route.hash.substr(1));
        if (sec) sec.scrollIntoView();
      }
    }, 100);
  },
  created() {
    this.setPrSuit("shop");
  },
  methods: {
    setPrSuit(suit) {
      if (this.prSuit != suit) this.prSuit = suit;
      else this.prSuit = null;
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
    },
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  }
};
</script>

<style lang="sass" scoped>
.landing-cover
  padding-top: 60px
  .landing-max-width
    @media screen and (min-width: 1100px)
      max-width: 900px
    section
      .bg-image
        transform: scale(1.3)
    .ar-images
      img
        height: 48px
        // &:nth-child(1)
        //   width: 74px
        //   height: 20px
        // &:nth-child(2)
        //   width: 190px
        //   height: 33px
        // &:nth-child(3)
        //   width: 143px
        //   height: 27px
        // &:nth-child(4)
        //   width: 114px
        //   height: 27px
</style>
