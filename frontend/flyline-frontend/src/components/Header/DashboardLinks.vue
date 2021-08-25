<template>
  <div class="d-lg-flex align-items-center h-100">
    <p
      :class="['mb-3 mb-lg-0 cursor-pointer gilroy-b head-link']"
      @click="goTo(link.to)"
      v-for="(link, lI) in links"
      :key="lI"
    >
      {{ link.text }}
      <span v-if="isAcctive(link.to)" class="active-tab"></span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "Dashboard", to: "Dashboard" },
        {text: 'Manage Team', to: 'TeamMembers'},
        // { text: "Access Tokens", to: "AccessTokens" },
        { text: "Inventory Sources", to: "InventorySources" }
      ]
    };
  },
  methods: {
    goTo(name) {
      this.$router.push({ name });
      this.$emit('redirected')
    },
    isAcctive(name) {
      return this.$route.name == name;
    }
  }
};
</script>

<style lang="sass" scoped>
.head-link
  font-size: 14px
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
    bottom: -22.5px
    left: 3px
    border-radius: 2px
    height: 2.5px
    width: 100%
    border: solid 1px #203BE7
    background-color: #203BE7
    @media screen and (max-width: 1100px)
      display: none
</style>
