<template>
  <div class="asile d-inline-flex justify-content-center align-items-center">
    <span class="asile-num">{{seat.designator}}</span>
  </div>
</template>

<script>
export default {
  props: {
    seat: Object
  }
}
</script>

<style lang="sass" scoped>
.asile
  height: 46px
  width: 25px
  .asile-num
    font-size: 14px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #000000


</style>