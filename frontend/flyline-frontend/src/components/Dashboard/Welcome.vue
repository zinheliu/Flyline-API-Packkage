<template>
  <div class="dashboard-welcome text-left">
    <div class="dashboard-toolbar mb-3">
      <p class="mt-2 mb-0 dashboard-title-text" style="font-size: 18px; padding-left: 18px;">Welcome to FlyLine {{fullName}}!</p>
      <p class="welcome-sub-text mt-3 mb-4">
        Welcome to our developer portal. Below check out a few of our quick start guides to jump-start your development. Once you start making API calls your API stats like response time and recently shopped flights will display here.
      </p>
    </div>
    <div class="essential-links d-flex flex-wrap mt-3">
      <div
        :class="['link-card', lI == linkCards.length - 1 ? '' : 'mb-3 mb-md-0']"
        v-for="(link, lI) in linkCards"
        :key="lI"
        @click="goTo(link)"
      >
        <p
          class="link-title gilroy-b mb-2 d-flex align-items-center justify-content-between"
        >
          <span>{{ link.title }}</span>
          <b-icon icon="arrow-right-short" scale="1.5" class=""></b-icon>
        </p>
        <p class="link-desc mb-0">{{ link.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      linkCards: [
        {
          title: "API Reference",
          desc:
            "Review our refrence to access all the information needed to start building on top of the Flyline API.",
          name: "ApiRef"
        },
        {
          title: "Resources API",
          desc:
            "Through our Airline, Airport, Airplane API we provide all the airline related data you need for you shopping app.",
          path: "/api-ref/aircraft"
        },
        {
          title: "Shopping API Guide",
          desc:
            "In this guide we will walk you through how to easily work with and integrate our Shopping API.",
          path: "/api-ref/flight-search"
        }
      ]
    };
  },
  computed:{
    ...mapGetters("USER", ["user"]),
    fullName() {
      return this.user ? this.user.first_name + " " + this.user.last_name : "";
    }
  },
  methods: {
    goTo(link) {
      if (link.name) this.$router.push({ name: link.name });
      else if (link.path) this.$router.push({ path: link.path });
    }
  }
};
</script>

<style lang="sass" scoped>
.dashboard-welcome
  .welcome-sub-text
    padding-left: 20px
    max-width: 800px
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
      margin-left: 22px
      padding: 27px 24px
      &:last-child
        margin-right: 0
      .link-title
        max-width: 193px
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
