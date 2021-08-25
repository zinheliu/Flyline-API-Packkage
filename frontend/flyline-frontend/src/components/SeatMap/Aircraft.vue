<template>
  <div class="aircraft">
    <div class="aircraft-info-wrapper px-3 px-lg-4 py-5">
      <p class="c-title mb-2">Seat Map Configuration</p>
      <p class="c-title__2 mb-1">{{seatmap.airline_name}}</p>
      <p class="c-title__3 mb-0">View other American Airlines aircraft</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seatmap: Object
  },
}
</script>

<style lang="sass" scoped>
.aircraft
  .aircraft-info-wrapper
    border-radius: 10px
    background-color: #203be7
    .c-title
      font-size: 20px
      font-weight: 600
      font-stretch: normal
      font-style: normal
      letter-spacing: -0.4px
      color: #ffffff
      &__2
        @extend .c-title
        font-size: 30px
        font-weight: 800
        letter-spacing: -0.6px
      &__3
        @extend .c-title
        font-size: 14px
        letter-spacing: -0.28px
</style>