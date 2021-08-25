<template>
  <div class="py-140-px seatmap-search text-left">
    <div class="c-width mx-auto">
      <p class="c-title__2 mb-0">Your inflight comfort matters</p>
      <p class="c-title">Find the seat map for your flight.</p>
      <div class="d-flex search-box align-items-center mt-70-px pl-lg-5">
        <b-input class="c-input" placeholder="Type the Airline Name"></b-input>
        <div class="h-bar mx-lg-5"></div>
        <b-input
          class="c-input"
          placeholder="Enter your Flight Number"
        ></b-input>
        <div class="h-bar mx-lg-5"></div>
        <b-input
          class="c-input"
          placeholder="Select a Trip Date (Optional)"
        ></b-input>
        <div class="search-btn cursor-pointer ml-lg-5">
          <b-icon icon="search" scale="1"></b-icon>
        </div>
      </div>
      <p class="c-desc text-right mt-4" style="font-size: 12px;">
        Don’t know your flight number?
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.c-width
  max-width: 1000px
.c-title
  font-size: 55px
  font-weight: 800
  font-stretch: normal
  font-style: normal
  font-family: Gilroy-Extrabold
  line-height: .2
  letter-spacing: -1px
  color: #203be7
  &__2
    font-size: 46px
    font-family: GILROY-Bold
    font-stretch: normal
    font-style: normal
    line-height: 2.12
    letter-spacing: -0.68px
    color: #000d5c
.c-desc
  opacity: 0.2
  font-size: 14px
  font-weight: 600
  font-stretch: normal
  font-style: normal
  line-height: 1.86
  letter-spacing: normal
  color: #000000
.c-input
  border: none
  font-size: 14px
  font-weight: 600
  font-stretch: normal
  font-style: normal
  line-height: 1.86
  letter-spacing: normal
  color: #000000
  &::placeholder
    font-size: 14px
    font-weight: 600
    font-stretch: normal
    font-style: normal
    line-height: 1.86
    letter-spacing: normal
    color: #000000
    opacity: 0.2
  &:focus
    box-shadow: unset
.h-bar
  min-width: 1px
  height: 43px
  background-color: #edeef6
.search-box
  height: 70px
  border: solid 1px #edeef6
  border-right: none
  border-bottom-left-radius: 35px
  .search-btn
    height: 70px
    min-width: 70px
    border-radius: 50%
    border: solid 1px #edeef6
    margin-right: -35px
    display: flex
    align-items: center
    justify-content: center
</style>
