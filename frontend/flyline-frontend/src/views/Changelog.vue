<template>
  <div class="changelog-page">
    <div class="c-part text-lg-left">
      <p class="titl">Release Notes & Change Log</p>
      <p class="desc">Welcome to Flyline's release notes, get accurate and up-to-date info regarding our releases and updates. If you have any questions reach out to our team at 
        <span class="cursor-pointer text-primary gilroy-b" @click="openEmail">hello@flyline.io</span>
      </p>
      
      <div class="w-100 dash my-5"></div>
      <p class="titl__2">v0.1.7 Release Notes (5-12-21)</p>
      <p class="titl__3 mt-5">Major Changes</p>
      <p class="desc__2">- Completed Support for (DL) Fare Breakdown & Fare Class Detail</p>
      <p class="desc__2">- Completed Support for (WN) Fare Breakdown & Fare Class Detail</p>
      <p class="titl__3 mt-5">Minor Fix & Additions</p>
      <p class="desc__2">- Minor API Doc Tweak & Improvements</p>
      <p class="desc__2">- Minor API Doc Tweak & Improvements</p>
      <p class="desc__2">- Fixed fare/cabin detail data issue for multiple segements</p>
      <p class="titl__3 mt-5">Known Issues</p>
      <p class="desc__2">- DL & WN response time might be a little slower at times</p>

      <div class="w-100 dash my-5"></div>
      <p class="titl__2">v0.1.6 Release Notes (5-3-21)</p>
      <p class="titl__3 mt-5">Minor Fix & Additions</p>
      <p class="desc__2">- Fare Breakdown , Fare Class Detail Fix - Frontier Airlines, Spirit Airlines, Alaska Airlines</p>
      <p class="desc__2">- Updated cabin_amenities & cabin_attributes structure in airshopping.</p>
      <p class="desc__2">- Comepleted classification normalization ('Basic' , 'Standard' classification)</p>
      <p class="desc__2">- Added RDB Breakdown API = Cabin Class Mapping API</p>
      <p class="desc__2">- Minor API Doc Refinements</p>
      <p class="desc__2">- Added Get Cabin Amenities by Route</p>
      <p class="titl__3 mt-5">Coming Soon</p>
      <p class="desc__2">- Delta Airlines Fix for Fare Breakdown / Fare Class Detail</p>
      <p class="desc__2">- Southwest Airlines Fix for Fare Breakdown / Fare Class Detail</p>

      <div class="w-100 dash my-5"></div>
      <p class="titl__2 mt-5">v0.1.5 Release Notes (4-22-21)</p>
      <p class="titl__3 mt-5">Minor Fix & Additions</p>
      <p class="desc__2">- Added United Ticket Timelimit</p>
      <p class="desc__2">- Singapore Airlines, Fixed Missing Baggage Allowance and Seats</p>
      <p class="desc__2">- British Airways, Fixed Missing Amenities</p>
      <p class="desc__2">- jetBlue, Fixed Missing Baggage Allowance and Seats</p>
      
      <div class="w-100 dash my-5"></div>
      <p class="titl__2 mt-5">v0.1.4 Release Notes (4-18-21)</p>
      <p class="titl__3 mt-5">Major Changes</p>
      <p class="desc__2">- Baggae Allowance :  Delta Airlines, Southwest Airlines, Air Canada, jetBlue, Air France, British Airways, Singapore Airlines</p>
      <p class="desc__2">- Fare Breakdown : Delta Airlines, Southwest Airlines, Air Canada, jetBlue, Air France, British Airways, Singapore Airlines</p>
      <p class="desc__2">- Fare Class Detail : Air Canda and British Airways</p>
      <p class="desc__2">- Seats : Delta Airlines, Air France, British Airways, Singapore Airlines</p>
      <p class="desc__2">- Cabin Amenities : Delta Airlines, Air Canada, Air France, British Airways, Singapore Airlines</p>
      <p class="desc__2">- Cabin Amenities - Display for code shares on airlines outside of original acceptance</p>
      <p class="desc__2">- Air Amenities API - Added</p>
      <p class="titl__3 mt-5">Known Issues</p>
      <p class="desc__2">- Known Issues</p>
      
      <div class="w-100 dash my-5"></div>
      <p class="titl__2 mt-5">v0.1.3 Release Notes (4-12-21)</p>

      <p class="titl__3 mt-5">Major Changes</p>
      <p class="desc__2">- Added Singapore Airlines (SQ) (Routes to test : SIN->EWR)</p>
      <p class="desc__2">- Added Air France (AF) (Routes to test : CDG->JFK)</p>
      <p class="desc__2">- Updated API Doc</p>
      <p class="titl__3 mt-5">Known Issues</p>
      <p class="desc__2">- Aware that these airlines are missing items in acceptance, we wanted to get the these other airlines on, we are completing remaining normalization (High Priority)</p>
      <p class="desc__2">- AC Corporate Fare, we are getting things set with Sabrina at AC for running Microsoft test, will do test mid-week</p>

      <div class="w-100 dash my-5"></div>
      <p class="titl__2 mt-5">v0.1.2 Release Notes (4-8-21)</p>
      <p class="titl__3 mt-5">Major Changes</p>
      <p class="desc__2">- Added Southwest Airlines</p>
      <p class="desc__2">- Added Delta Airlines</p>
      <p class="titl__3 mt-5">Minor Changes</p>
      <p class="desc__2">- Add more error handling when AA response is inconsistent</p>
      <p class="titl__3 mt-5">Known Issues</p>
      <p class="desc__2">- Our main goal was to push fully ready to go, but we still have a few small items to normalize, we will be finishing this up shortly</p>
      <p class="desc__2">- Delta Ammenties and Attributes missing, will be added in the next push (Normalization taking longer than expected)</p>
      
      <div class="w-100 dash my-5"></div>
      <p class="titl__2 mt-5">v0.1.1 Release Notes (4-2-21)</p>
      <p class="titl__3 mt-5">Major Changes</p>
      <p class="desc__2">- None on this build</p>
      <p class="titl__3 mt-5">Minor Changes</p>
      <p class="desc__2">- Expand cabin mapping to five (Basic Economy, Economy, Premium Economy, Business, Fist)</p>
      <p class="desc__2">- Expand Fare Rules for Alaska Airlines, Frontier Airlines, Spirit Airlines, JetBlue, Air Canada (ie, Seating, Boarding Group, and more)</p>
      <p class="desc__2">- Updated Cabin Amenities and Attributes Frontier, Spirit, and jetBlue</p>
      <p class="titl__3 mt-5">Coming Soon (Upcoming release Monday - and next week)</p>
      <p class="desc__2">- Southwest (WN)</p>
      <p class="desc__2">- Complete Normalization on Air Canada expanded fare rules</p>
      <p class="desc__2">- Complete Normalization on British Airway, for expanded fare rules, cabin amenities, and attributes</p>
      <p class="titl__3 mt-5">Known Issues</p>
      <p class="desc__2">- Minor issue with jetBlue on multiple stops (Handling, should be set shortly)</p>
      
      <div class="w-100 dash my-5"></div>
      <p class="titl__2 mt-5">v0.1.0 Release Notes (3-31-21)</p>
      <p class="titl__3 mt-5">Major Changes</p>
      <p class="desc__2">- Added JetBlue (B6)</p>
      <p class="titl__3 mt-5">Minor Changes</p>
      <p class="desc__2">- Expand Fare Rules (ie, Seating, Boarding Group, and more) for AA, UA</p>
      <p class="desc__2">- Completed Cabin Amenities for UA</p>
      <p class="titl__3 mt-5">Coming Soon (Upcoming release tomorrow - Friday)</p>
      <p class="desc__2">- Normalize Fare Rules for all other airlines</p>
      <p class="desc__2">- Normalize Cabin Amenities for all other airlines</p>
      <p class="desc__2">- Expand Cabin Class to 5. Basic Economy, Economy, Premium Economy, Business, First</p>
      <p class="titl__3 mt-5">Known Issues</p>
      <p class="desc__2">- For JetBlue, we are still normalizing fare_class, cabin_class. We will be finishing this up shortly</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  }
}
</script>

<style lang="sass" scoped>
.changelog-page
  .c-part
    max-width: 562px
    margin: 0 auto
    padding: 80px 0
    .titl
      font-size: 24px;
      font-family: GILROY-BOLD
      font-stretch: normal;
      font-style: normal;
      line-height: 1.46;
      letter-spacing: normal;
      color: #333333;
      &__2
        font-size: 22px;
        font-family: GILROY-BOLD
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #333333;
      &__3
        font-family: GILROY-BOLD
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #333333;

    .desc
      font-size: 16px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.25;
      letter-spacing: normal;
      color: #707070;
      &__2
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.14;
        letter-spacing: normal;
        color: #888888;
</style>