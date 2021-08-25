<template>
  <div class="seat d-inline-flex justify-content-center align-items-center">
    <span class="seat-num">{{designator}}</span>
  </div>
</template>

<script>
export default {
  props: {
    seat: Object
  },
  computed: {
    designator(){
      return this.seat.designator.split(' ')[1]
    },
  },
}
</script>

<style lang="sass" scoped>
.seat
  width: 50px
  height: 46px
  border-radius: 4px
  border: solid 1.8px #203be7
  background-color: rgba(0, 0, 0, 0)
  .seat-num
    font-size: 14px
    font-family: GILROY-BOLD
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #203be7

</style>