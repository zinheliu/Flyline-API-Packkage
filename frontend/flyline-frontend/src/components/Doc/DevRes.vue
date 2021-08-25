<template>
  <div class="dashboard-welcome text-left">
    <div class="dashboard-toolbar mb-3">
      <p
        class="mb-0 mt-2 dashboard-title-text"
        style="font-size: 18px; padding-left: 20px;"
      >
        Supporting Resourses & Helpful Links
      </p>
      <p class="welcome-sub-text mb-4 mt-2">
        Use our quick start guides and developer resouces to make your
        integration as smooth as possible.
      </p>
    </div>
    <div class="essential-links d-flex flex-wrap mt-3 mb-4">
      <div
        :class="['link-card', lI == linkCards.length - 1 ? '' : 'mb-3 mb-md-0']"
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
          title: "Air Shopping Guide",
          desc:
            "Get a jump start on our Air Shopping API. Through this API, return real-time pricing and availability from the airlines on our platform.",
          to: "/api-ref/flight-search"
        },
        {
          title: "Air Amenities Guide",
          desc:
            "Start integrating our new Air Amenities API. Through this API, return the available amenities on a specific flight.",
          to: "/api-ref/amenities"
        },
        {
          title: "Air Schedules Guide",
          desc:
            "Start integrating our new Air Schedules API. Through this API, return the real-time status of a specific flight or number of routes.",
          to: "/api-ref/schedules"
        }
      ]
    };
  },
  methods: {
    goTo(path) {
      if (path) this.$router.push({ path });
    }
  }
};
</script>

<style lang="sass" scoped>
.dashboard-welcome
  .welcome-sub-text
    padding-left: 20px;
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
