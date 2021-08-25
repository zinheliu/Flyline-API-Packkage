<template>

</template>

<script>
export default {
  methods: {
    goTo(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="sass" scoped>
.auth-footer
  max-width: 483.6px
  @media screen and (max-width: 800px)
    padding-left: 10px
    padding-right: 10px
  .auth-footer-link
    font-size: 14px
    font-weight: 400
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #707070
</style>
