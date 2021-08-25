<template>
  <div class="key-principles text-left">
    <div class="doc-page-header pb-5">
      <p class="doc-page-header-text mb-0">Basic Principle</p>
    </div>

    <section id="key-principles" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-4">
        To shop flights, you will make a ShopFlight request. In the ShopFlight
        request, you will pass the information on the passengers and parameters
        on where and when to travel, this is done in a list of slices. You can
        also sort or filter by cabin class, max price, permitted carriers, among
        other things.
      </p>
      <p class="doc-description-text mb-4">
        A slice represents a trip that the passengers want to take between a
        departure city or airport and an arrival city or airport. For the
        departure and arrival, you will provide the IATA code for the airport,
        for example, Dallas/Fort Worth International (DFW), or for a city, for
        example, New York (NYC). A ShopFlight request will include one or more
        slices.
      </p>
      <p class="doc-description-text mb-4">
        After making a ShopFlight request, we send your search to the airlines
        connected to our platform and return a series of offers. Each offer
        represents a group of flights you can buy from an airline at a price
        that meets your parameters. Each airline can send back multiple offers,
        so you can get back hundreds to thousands.
      </p>
      <p class="doc-description-text mb-0">
        Within the offer, you'll see your slices, but now each slice will also
        include a list of one or more specific flights that the airline is
        offering to get the passengers where they want to go. Each flight is
        known as a segment. A journey from Dallas to Los Angeles could be a
        direct flight, made up of one segment, or there could be one or more
        connections or stops in the middle, meaning multiple segments. All lists
        of slices and segments are ordered by those departing first.
      </p>
    </section>

    <section id="key-principles-one-way-direct-trip" class="pt-62-px doc">
      <p class="doc-title-text mb-4">One-way trip</p>
      <p class="doc-description-text mb-4">
        We create a ShopFlight request for one passenger who wants to travel
        from Dallas/Fort Worth International (DFW) to Los Angeles International
        (LAX) on 25th Mar.
      </p>
      <p class="doc-description-text mb-4">
        Flyline sends the search to a range of airlines and get hundreds of
        offers.We get an offer back from American Airlines, which costs $318.40.
        Within the offer, we have the slice we specified: DFW to LAX on 25th
        Mar.
      </p>
      <p class="doc-description-text mb-4">
        Inside that slice, if we have one segment: Dallas/Fort Worth
        International (DFW) to Los Angeles International(LAX), traveling on a
        American Airlines operated flight, AA 2424, departing at 09:00 on 25th
        Mar. We call this trip a One-way direct trip.
      </p>
      <p class="doc-description-text mb-0">
        If the slice contains 2 segments, Dallas/Fort Worth International (DFW)
        to Austin-bergstrom International (AUS), traveling on AA347, a flight
        marketed and operated by American Airlines, departing at 12:35 on 35th
        Mar, Austin-bergstrom International (AUS) to Los Angeles International
        (LAX), traveling on AA2709, a flight marketed and operated by American
        Airline, departing at 14:16 on 25th Mar, we call this trip a One-way
        indirect trip.
      </p>
    </section>

    <section id="key-principles-return-direct-trip" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Return direct trip</p>
      <p class="doc-description-text mb-4">
        We create a ShopFlight request, this time for one passenger who is
        looking to travel from Dallas/Fort Worth International (DFW) to Denver
        International (DEN) on 25th Mar and return 27th Mar.
      </p>
      <p class="doc-description-text mb-4">
        Flyline sends the search to a range of airlines and get hundreds of
        offers.
      </p>
      <p class="doc-description-text mb-4">
        We get an offer back from United Airline, costing $782.80. Within the
        offer, we have the two slices we specified: DFW to DEN on 25th Mar and
        DEN to DFW on 27th Mar.
      </p>
      <p class="doc-description-text mb-4">
        Inside the DFW to DEN slice, we have one segment: Dallas/Fort Worth
        International (DFW) to Denver International (DEN), traveling on a United
        Airline operated flight, UA2600, departing at 17:30 on 25th Mar.
      </p>
      <p class="doc-description-text mb-4">
        Inside the DEN to DFW slice, we also have one segment: DEN to DFW,
        traveling on a United Airline operated flight, UA1898, departing at
        10:00 on 27th Mar. We call this trip a Return direct trip.
      </p>
      <p class="doc-description-text mb-4">
        We get an offer back from United Airline, costing $977.60. Inside the
        DFW to DEN slice, we have one segment: Dallas/Fort Worth International
        (DFW) to Denver International (DEN), traveling on a United Airline
        operated flight, UA2600, departing at 17:30 on 25th Mar.
      </p>
      <p class="doc-description-text mb-4">
        But this time, inside the DEN to DFW slice, we have two segments: DFW to
        Denver International (IAH), traveling on a United Airline operated
        flight, UA699, departing at 09:50 on 27th Mar
      </p>
      <p class="doc-description-text mb-0">
        We get an offer back from United Airline, costing $977.60. Inside the
        DFW to DEN slice, we have one segment: Dallas/Fort Worth International
        (DFW) to Denver International (DEN), traveling on a United Airline
        operated flight, UA2600, departing at 17:30 on 25th Mar.
      </p>
    </section>

    <section id="key-principles-multi-city-direct-trip" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Multi-city trip</p>
      <p class="doc-description-text mb-4">
        A multi-city trip is one with more than two slices. For example, You
        might create an offer request for travel from DFW to JFK on 1st
        December, NYC to San Francisco International Airport (SFO) on 4th
        December, and SFO to LON on 8th December.
      </p>
      <p class="doc-description-text mb-4">
        Flyline sends the search to a range of airlines, and gets an offer back
        from American Airlines, costing $913. Inside, we have three slices, each
        with one segment:- DFW to JFK, traveling on an American Airlines
        operated flight, AA123, departing at 19:50 on 1st December
      </p>
      <p class="doc-description-text mb-4">
        - DFW to JFK, traveling on a Southwest operated flight, BA183, departing
        at 19:50 on 1st December
      </p>
      <p class="doc-description-text mb-4">
        - JFK to SFO, traveling on BA43, a flight marketed by British Airways
        but operated by American Airlines, departing at 07:00 on 4th December
      </p>
      <p class="doc-description-text mb-0">
        - SFO to DAL, traveling on an American Airlines operated flight, AA285,
        departing at 16:35 on 8th December
      </p>
    </section>

    <!-- <b-row align-h="between" class="my-100-px mx-0">
      <b-btn variant="primary" class="navigation-btn gilroy-b" @click="goTo('Doc')">
        <span>Welcome</span>
      </b-btn>
      <b-btn variant="primary" class="navigation-btn gilroy-b" @click="goForWard">
        <span>Making Requests</span>
      </b-btn>
    </b-row> -->
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import EventBus from "@/bus/event";
export default {
  mixins: [DocMixin],
  methods: {
    goForWard() {
      this.$router.push({
        name: "MakingRequest",
        params: { section: "authentication" }
      });
      EventBus.$emit("scroll-to-doc-section");
    }
  }
};
</script>

<style lang="sass" scoped></style>
