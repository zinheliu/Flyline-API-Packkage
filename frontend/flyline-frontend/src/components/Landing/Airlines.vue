<template>
  <div class="airlines mx-auto px-3 px-md-0">
    <p class="mb-0 text-left text-md-center air-title gilroy-b">
      Access to the top airlines
    </p>
    <p class="mb-0 mx-auto text-left text-md-center air-description mt-4">
      With our easy-to-use shopping API’s you will gain access to our entire
      offering of carriers. As we continue to add more carriers they will be
      available to your teams instantly.
    </p>
    <div class="dash w-100 mt-57-px"></div>
    <div
      class="api-companies mt-65-px d-flex flex-wrap justify-content-between"
    >
      <div class="api-company py-0 px-2 mb-3">
        <img
          src="@/assets/images/airlines/Group 14758.svg"
          alt=""
          v-if="dark"
        />
        <img
          src="@/assets/images/airlines/delta_airlines_logo_landing.svg"
          alt=""
          v-else
        />
      </div>
      <div class="api-company py-0 px-2 mb-3">
        <img
          src="@/assets/images/airlines/Group 14759.svg"
          alt=""
          v-if="dark"
        />
        <img
          src="@/assets/images/airlines/frontier_airline_logo_landing.svg"
          alt=""
          v-else
        />
      </div>
      <div class="api-company py-0 px-2 mb-3">
        <img
          src="@/assets/images/airlines/Group 14760.svg"
          alt=""
          v-if="dark"
        />
        <img
          src="@/assets/images/airlines/latam_airlines_logo_landing.svg"
          alt=""
          v-else
        />
      </div>
      <div class="api-company py-0 px-2 mb-3">
        <img
          src="@/assets/images/airlines/Group 14761.svg"
          alt=""
          v-if="dark"
        />
        <img
          src="@/assets/images/airlines/finn_airlines_logo_landing.svg"
          alt=""
          v-else
        />
      </div>
      <div class="api-company py-0 px-2 mb-3">
        <img
          src="@/assets/images/airlines/Group 14762.svg"
          alt=""
          v-if="dark"
        />
        <img
          src="@/assets/images/airlines/japan_airlines_logo_landing.svg"
          alt=""
          v-else
        />
      </div>
      <div class="api-company py-0 px-2 mb-3">
        <img
          src="@/assets/images/airlines/Group 14763.svg"
          alt=""
          v-if="dark"
        />
        <img
          src="@/assets/images/airlines/west_jet_airlines_logo_landing.svg"
          alt=""
          v-else
        />
      </div>
      <div class="api-company py-0 px-2 mb-3">
        <img
          src="@/assets/images/airlines/Group 14764.svg"
          alt=""
          v-if="dark"
        />
        <img
          src="@/assets/images/airlines/qatar_airlines_logo_landing.svg"
          alt=""
          v-else
        />
      </div>
      <div class="api-company py-0 px-2 mb-3">
        <img
          src="@/assets/images/airlines/Group 14765.svg"
          alt=""
          v-if="dark"
        />
        <img
          src="@/assets/images/airlines/aer_lingus_logo_landing.svg"
          alt=""
          v-else
        />
      </div>
      <div class="api-company py-0 px-2 mb-3">
        <img
          src="@/assets/images/airlines/Group 14771.svg"
          alt=""
          v-if="dark"
        />
        <img
          src="@/assets/images/airlines/ana_airlines_logo_landing.svg"
          alt=""
          v-else
        />
      </div>
      <div class="api-company py-0 px-2 mb-3">
        <p class="text-99 gilroy-b mb-0">68+</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("UTIL", ["dark"])
  }
};
</script>

<style lang="sass" scoped>
.airlines
  max-width: 950px
  padding-top: 100px
  padding-bottom: 100px
  .air-title
    font-size: 42px
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #333333
    @media screen and (max-width: 800px)
      font-size: 34px
  .air-description
    max-width: 750px
    opacity: 0.9
    font-size: 18px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #707070
    line-height: 2
    @media screen and (max-width: 800px)
      font-size: 14px
  .api-companies
    .api-company
      width: calc( (100% / 5) - 30px )
      height: 92px
      border-radius: 10px
      border: solid 1.6px #e9e9e9
      background-color: #ffffff
      display: flex
      align-items: center
      justify-content: center
      img
        height: 45px
        width: 45px
      @media screen and (max-width: 800px)
        width: calc( (100% / 2) - 20px )
      .text-99
        font-size: 32px
        font-weight: bold
        font-stretch: normal
        font-style: normal
        letter-spacing: normal
        color: #8e969f
</style>
