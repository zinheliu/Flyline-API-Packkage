<template>
  <div class="seat-map-key">
    <div class="seat-map-key-wrapper px-3 px-lg-4 py-5">
      <p class="c-title">Seat Mapping Key</p>
      <b-row>
        <b-col cols="12" lg="4">
          <b-form-checkbox class="c-check one" size="lg">Good Seat</b-form-checkbox>
        </b-col>
        <b-col cols="12" lg="4">
          <b-form-checkbox class="c-check two" size="lg">Bad Seat</b-form-checkbox>
        </b-col>
        <b-col cols="12" lg="4">
          <b-form-checkbox class="c-check three" size="lg">Standard Seat</b-form-checkbox>
        </b-col>
        <b-col cols="12" lg="4">
          <b-form-checkbox class="c-check four" size="lg">Be Aware</b-form-checkbox>
        </b-col>
        <b-col cols="12" lg="4">
          <b-form-checkbox class="c-check five" size="lg">Crew Seat</b-form-checkbox>
        </b-col>
        <b-col cols="12" lg="4">
          <b-form-checkbox class="c-check six" size="lg">Premium Seat</b-form-checkbox>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.seat-map-key
  .seat-map-key-wrapper
    border-radius: 4px
    border: solid 1.8px #edeef6
    background-color: #ffffff
    .c-title
      font-size: 18px
      font-family: GILROY-BOLD
      font-stretch: normal
      font-style: normal
      line-height: normal
      letter-spacing: -0.36px
      color: #000000
    ::v-deep .c-check
      font-size: 14px
      font-weight: 600
      font-stretch: normal
      font-style: normal
      line-height: 2.25
      letter-spacing: -0.28px
      color: #546d8a
      input
        &:focus
          box-shadow: unset
      &.one
        label
          &::before
            border-radius: 4px
            border: solid 2.8px #38c14d
          &:active
            background-color: #38c14d
      &.two
        label
          &::before
            border-radius: 4px
            border: solid 2.8px #ff2627
      &.three
        label
          &::before
            border-radius: 4px
            border: solid 2.8px #38a1c1
      &.four
        label
          &::before
            border-radius: 4px
            border: solid 2.8px #e3e33d
      &.five
        label
          &::before
            border-radius: 4px
            border: solid 2.8px #000000
      &.six
        label
          &::before
            border-radius: 4px
            border: solid 2.8px #3862c1
</style>