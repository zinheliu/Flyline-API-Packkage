<template>
  <div class="py-60-px text-left" style="margin-left: 20px;">
    <div class="wrapper px-3 pr-lg-0 pl-lg-4">
      <p class="c-title">Flyline Changelog</p>
      <p class="c-desc mt-3">
        This changelog tracks updates to the Flyline API, and major changes to
        the Plaid Dashboard, SDKs and libraries. The changelog is updated at
        least once per month. Updates released in the current month may not be
        reflected.
      </p>
      <p class="c-desc">
        Flyline’s officially supported libraries are updated with minor changes
        on a regular cadence to keep up to date with API changes. For details,
        see the GitHub changelog: Python, Node, Ruby, Java, Go.
      </p>
      <div class="w-100 dash my-5"></div>
      <p class="c-title__3" style="font-size: 18px;">June 2021</p>
      <p class="c-title__3">Major Updates</p>
      <p class="c-desc">- Updated Shopping Attributes Endpoint</p>
      <p class="c-desc">- Improved Carrier Coverage on Shopping Attributes</p>
      <p class="c-desc">- Seat Mapping Endpoint is now in Beta</p>
      <p class="c-title__3 mt-5">Minor Bug Fixes & Additions</p>
      <p class="c-desc">- Air Shopping Endpoint, updated Fare Class Details for United Airlines, Air Canada,</p>
      <p class="c-desc">jetBlue, Air France, British Airways, Singapore Airlines</p>
      <p class="c-desc">- Air Shopping Endpoint, updated Seating Details for United Airlines</p>
      <p class="c-desc">- Air Shopping Endpoint, updated / fix for Amenities Details for United Airlines</p>
      <p class="c-desc">
        - Fixed fare/cabin detail data issue for multiple segments
      </p>
      <p class="c-desc">- Minor API Doc Refinements</p>
      <p class="c-title__3 mt-5" style="font-size: 18px;">May 2021</p>
      <p class="c-title__3">Major Updates</p>
      <p class="c-desc">
        - Updated cabin_amenities & cabin_attributes structure in Air Shopping
        API.
      </p>
      <p class="c-desc">- Added RDB Breakdown API = Cabin Class Mapping API</p>
      <p class="c-desc">- Added Get Cabin Amenities by Route</p>
      <p class="c-title__3 mt-5">Minor Bug Fixes & Additions</p>
      <p class="c-desc">- Reduced the db connection</p>
      <p class="c-desc">
        - Fixed fare/cabin detail data issue for multiple segments
      </p>
      <p class="c-desc">- Minor API Doc Refinements</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.c-title
  font-size: 20px
  font-weight: 800
  font-stretch: normal
  font-style: normal
  font-family: Gilroy-Bold
  line-height: 2
  letter-spacing: normal
  color: #000000
  &__2
    @extend .c-title
    font-size: 18px
    font-family: GILROY-BOLD
    line-height: 2.44
  &__3
    @extend .c-title
    font-size: 14px
    font-family: GILROY-BOLD
    line-height: 3.14
.c-desc
  font-size: 14px
  font-weight: 500
  font-stretch: normal
  font-style: normal
  line-height: 2
  letter-spacing: normal
  color: #707070
  &.c-desc-m
    max-width: 540px
</style>
