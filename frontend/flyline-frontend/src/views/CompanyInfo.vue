<template>
  <div class="company-info text-left">
    <div class="position-relative">
      <div class="wrapper mx-auto">
        <div class="c-part">
          <p class="c-title">What we’re building & why</p>
          <p class="c-desc pb-20-px">
            Flyline originally began as a modern and easy-to-use consumer
            booking tool. When we started development we quickly realized that
            current technology providers were built on dated technology and were
            very difficult to integrate with. We couldn't find a solution that
            was lightweight and developer-friendly. Additionally, current
            providers were expensive and didn't offer straightforward pricing.
            Through customer discovery, we noticed we weren't alone in our
            experience with current providers.
          </p>
          <p class="c-desc">
            Armed with the feedback from customer discovery we decided to pivot
            from a consumer booking tool to build a modern technology solution
            for flight shopping data. After onboarding, our initial beta
            customers we went live with our developer platform. Our platform is
            always growing and we can't wait to see what you build with Flyline.
          </p>
        </div>
      </div>
    </div>
    <div class="w-100 dash mt-80-px"></div>
    <section class="position-relative pt-80-px" id="hiring">
      <div class="wrapper mx-auto">
        <div class="c-part mb-5">
          <p class="c-title">Join our team, we’re hiring!</p>
          <p class="c-desc">
            Our team is expanding. Take a look at our current open positions, if
            you have any questions about the positions below send us an email to
            hello@flyline.io.
          </p>
        </div>

        <p class="c-title__2 text-left">Business Development</p>
        <div class="w-100 dash mb-4"></div>
        <b-table
          :fields="bdHeaders"
          :items="bdData"
          table-class="text-left c-table"
        >
          <template #cell(actions)="row">
            <span class="cursor-pointer hover-primary-color" @click="openEmail">Apply</span>
          </template>
        </b-table>

        <p class="c-title__2 text-left mt-5">Engineering</p>
        <div class="w-100 dash mb-4"></div>
        <b-table
          :fields="engHeaders"
          :items="engData"
          table-class="text-left c-table"
        >
          <template #cell(actions)="row">
            <span class="cursor-pointer hover-primary-color" @click="openEmail">Apply</span>
          </template>
        </b-table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bdHeaders: [
        { key: "title", label: "" },
        { key: "country", label: "" },
        { key: "actions", label: "", tdClass: "text-lg-center" }
      ],
      bdData: [
        { title: "Sales / Business Development Lead", country: "New York, NY" },
        { title: "Customer Success Manager", country: "New York, NY" }
      ],
      engHeaders: [
        { key: "title", label: "" },
        { key: "country", label: "" },
        { key: "actions", label: "", tdClass: "text-lg-center" }
      ],
      engData: [
        { title: "Junior Backend Developer (Python)", country: "New York, NY" },
        {
          title: "Junior Frontend Developer (Vue.js)",
          country: "New York, NY"
        },
        { title: "Quality Assurance Lead", country: "New York, NY" }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      let sectionName = this.$route.hash;
      if (sectionName.length > 0) {
        let div = document.getElementById(sectionName.substr(1));
        if (div) {
          div.scrollIntoView();
        }
      }
    }, 100);
  },
  methods: {
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  },
};
</script>

<style lang="sass" scoped>
.company-info
  padding: 80px 0
  .wrapper
    max-width: 835px
  .c-part
    max-width: 623px
  .c-title
    font-size: 26px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    line-height: 1.67
    letter-spacing: normal
    color: #000000
    &__2
      @extend .c-title
      font-size: 16px
      line-height: normal
  .c-desc
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 2.1
    letter-spacing: normal
    color: #707070
  ::v-deep .c-table
    thead
      display: none
    td
      font-family: Gilroy-Medium
      font-size: 14px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: normal
      letter-spacing: normal
      color: #000000
      border-top: unset
      @media screen and (min-width: 1100px)
        padding-left: 0
        padding-left: 0
      &:nth-child(1)
        width: calc( 100% / 2 )
      &:nth-child(2) , &:nth-child(3)
        width: calc( 100% / 2 / 2 )

  .images
    position: absolute
    left: 0
    top: 0
    img
      position: absolute
    &__1
      @extend .images
      img
        &:nth-child(1)
          width: 178px
          height: 106px
          left: 14%
        &:nth-child(2)
          width: 139px
          height: 134px
          right: -52px
          top: -60px
        &:nth-child(3)
          width: 139px
          height: 134px
          left: -29px
          bottom: 0
    &__2
      @extend .images
      img
        &:nth-child(1)
          width: 139px
          height: 134px
          left: -29px
          top: 200px
</style>
