<template>
  <div class="align-items-start h-100 w-100">
    <p
      :class="[
        'mb-3 mb-lg-0 cursor-pointer gilroy-b head-link',
        lI == links.length - 1 ? 'mr-0' : ''
      ]"
      @click="goTo(link.to)"
      v-for="(link, lI) in links"
      :key="lI"
    >
      {{ link.text }}
      <span v-if="isAcctive(link.to)" class="active-tab"></span>
    </p>
    <div
      class="d-flex flex-column flex-lg-row align-items-center h-100 ml-lg-auto"
    >
      <p
        :class="['mb-3 mb-lg-0 cursor-pointer gilroy-b head-link']"
        @click="goTo('Login')"
        v-if="!isLogged"
      >
        Log In
      </p>
      <p
        :class="['mb-3 mb-lg-0 cursor-pointer gilroy-b head-link mr-0 d-flex align-items-center']"
        @click="goTo('Signup')"
        v-if="!isLogged"
      >
        Get Access
        <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
      </p>
      <p
        :class="['mb-3 mb-lg-0 cursor-pointer gilroy-b head-link mr-0 d-flex align-items-center']"
        @click="goTo('Dashboard')"
        v-if="isLogged"
      >
        Dashboard
        <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      links: [
        { text: "API Doc Home", to: "Doc" },
        { text: "API Reference", to: "ApiRef" },
        { text: "API Status" }
      ]
    };
  },
  computed:{
    ...mapGetters('USER', ['isLogged']),
  },
  methods: {
    goTo(name) {
      this.$router.push({ name });
      this.$emit("redirected");
    },
    isAcctive(name) {
      return this.$route.name == name;
    }
  }
};
</script>

<style lang="sass" scoped>
.head-link
  font-size: 16px
  font-stretch: normal
  font-style: normal
  line-height: 1.43
  letter-spacing: normal
  color: #333333
  position: relative
  @media screen and (min-width: 1100px)
    width: max-content
    padding: 0 20px
    margin-right: 15px
    &:last-child
      margin-right: 30px
  .active-tab
    position: absolute
    bottom: -35.5px
    left: 3px
    border-radius: 2px
    height: 5px
    width: 100%
    border: solid 1px #203BE7
    background-color: #203BE7
    @media screen and (max-width: 1100px)
      display: none
</style>
