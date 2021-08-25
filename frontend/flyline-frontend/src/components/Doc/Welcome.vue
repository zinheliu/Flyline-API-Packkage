<template>
  <div class="dashboard-welcome text-left">
    <div class="dashboard-toolbar mb-3">
      <p
        class="mb-0 mt-2 dashboard-title-text"
        style="font-size: 18px; padding-left: 20px;"
      >
        Quick Start Guides, and API Product Suite
      </p>
      <p class="welcome-sub-text mb-4 mt-2">
        Use our all of the tools in our API documentation to build great
        shopping applications.
      </p>
    </div>
    <div class="essential-links d-flex flex-wrap mt-3">
      <div
        :class="['link-card', lI == linkCards.length - 1 ? '' : 'mb-3 mb-lg-0']"
        v-for="(link, lI) in linkCards"
        :key="lI"
        @click="goTo(link.to)"
      >
        <p
          class="link-title gilroy-b mb-2 d-flex align-items-center justify-content-between"
        >
          <span>{{ link.title }}</span>
          <img class="arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
        </p>
        <p class="link-desc mb-0">{{ link.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkCards: [
        {
          title: "API Reference",
          desc:
            "Review our refrence to access all the information needed to start building on top of the Flyline API.",
          to: "ApiRef"
        },
        {
          title: "Developer Portal",
          desc:
            "Use the developer portal to keep an eye on various API stats, airline content, and billing info",
          to: "Signup"
        },
        {
          title: "API Status Page",
          desc:
            "Take a look at our status page to view historical updates on our API and performance.",
          to: "ApiRef"
        }
      ]
    };
  },
  methods: {
    goTo(name) {
      if (name) this.$router.push({ name });
    }
  }
};
</script>

<style lang="sass" scoped>
.dashboard-welcome
  .welcome-sub-text
    padding-left: 20px
    max-width: 747px
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 2
    letter-spacing: normal
    color: #707070
  .essential-links
    .link-card
      width: 258.6px
      border-radius: 4px
      border: solid 1.9px #e9e9e9
      background-color: #ffffff
      margin-left: 22px;
      padding: 27px 24px
      &:last-child
        margin-right: 0
      .link-title
        // max-width: 193px
        width: 100%
        font-size: 16px
        font-stretch: normal
        font-style: normal
        line-height: 1.88
        letter-spacing: normal
        color: #203BE7
      .link-desc
        font-size: 12px
        font-weight: 500
        font-stretch: normal
        font-style: normal
        line-height: 2
        letter-spacing: normal
        color: #707070
</style>
