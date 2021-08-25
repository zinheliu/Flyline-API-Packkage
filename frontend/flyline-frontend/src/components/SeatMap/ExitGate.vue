<template>
  <div class="exit-gate">
    <b-icon icon="chevron-left" class="gilroy-b" v-if="iconPosition=='left'"></b-icon>
    <span>Emergency Exit</span>
    <b-icon icon="chevron-right" class="gilroy-b" v-if="iconPosition == 'right'"></b-icon>
  </div>
</template>

<script>
export default {
  props: {
    iconPosition: {
      type: String,
      default: 'left'
    }
  },
}
</script>

<style lang="sass" scoped>
.exit-gate
  font-size: 10px
  font-family: GILROY-BOLD
  font-stretch: normal
  font-style: normal
  line-height: 2.6
  letter-spacing: normal
  color: #ff2626
</style>