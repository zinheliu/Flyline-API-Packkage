<template>
  <div class="flight-search-page text-left">
    <div class="doc-page-header pb-5">
      <p class="doc-page-header-text mb-0">Air Shopping Endpoint</p>
    </div>

    <section id="flight-search" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-0">
        Through our Air Shopping endpoint, you can access real-time ticket
        pricing and availability from all the top airlines. Additionally, we
        return fare class detail, fare breakdown, ticket time limit, in-flight
        amenities & attributes, and all the information needed to book the
        ticket.
      </p>
      <p class="doc-description-text mt-4 mb-0">
        To shop flights, you will make an offer request. In the offer request,
        you will pass the information on the passengers and parameters on where
        and when to travel, this is done in a list of slices. You can also sort
        or filter by cabin class, max price, permitted carriers, among other
        things.
      </p>
    </section>

    <section id="flight-search" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Trip Types Explained</p>
      <p class="doc-description-text mb-0">
        When working with our air shopping endpoint you'll want to understand
        the different trip types a traveler could take. Below we explain
        "one-way" ,"return-direct" , "multi-city". If you have any questions on
        these trip types reach out to us.
      </p>
    </section>

    <section id="flight-search-one-way-direct-trip" class="pt-62-px doc">
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

    <section id="flight-search-return-direct-trip" class="pt-62-px doc">
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
        But at this time, inside the DEN to DFW slice, we have two segments: DFW
        to Denver International (IAH), traveling on a United Airline operated
        flight, UA699, departing at 09:50 on 27th Mar
      </p>
      <p class="doc-description-text mb-0">
        We get an offer back from United Airline, costing $977.60. Inside the
        DFW to DEN slice, we have one segment: Dallas/Fort Worth International
        (DFW) to Denver International (DEN), traveling on a United Airline
        operated flight, UA2600, departing at 17:30 on 25th Mar.
      </p>
    </section>

    <section id="flight-search-multi-city-direct-trip" class="pt-62-px doc">
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

    <section id="flight-search-schema" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Flight Search Schema</p>

      <property
        v-for="(property, pI) in properties.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>

    <section id="get-flight-offers" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get flight offers</p>
      <p class="doc-description-text mb-4">
        To search for flights, you’ll need to create an offer request. An offer
        request describes the passengers and where and when they want to travel
        (in the form of a list of slices). It may also include additional
        filters (e.g. a particular cabin to travel in).
      </p>
      <p class="doc-description-text mb-4">
        We’ll send your search to a range of airlines, and return your offer
        request back to you with a series of offers.
      </p>
      <p class="doc-description-text mb-4">
        Each offer represents a set of flights you can buy from an airline at a
        particular price that meet your search criteria.
      </p>
      <p class="doc-description-text mb-4">
        Inside the offers, you’ll see your slices, but now each slice will also
        include a list of one or more specific flights (called segments) that
        the airline is offering to get the passengers where they want to go.
      </p>
      <p class="doc-description-text mb-4">
        When presenting offers to your customers, you should always show the
        full name of the operating carrier of each segment
        (slices[].segments[].operating_carrier.name). This must be displayed
        prominently on the first screen where the offer is presented in order to
        comply with US regulations.
      </p>
      <p class="doc-title-text__medium">Endpoint</p>
      <code-view
        :code="properties.list.endPoint"
        class="mt-5"
        :showText="false"
      />
      <p class="doc-title-text__medium mt-70-px">Body Parameters</p>
      <property
        v-for="(property, pI) in properties.list.queryParameters.properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="properties.list.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="properties.list.response"
        class="mt-5"
      />
    </section>

    <!-- <b-row align-h="between" class="my-100-px mx-0">
      <b-btn variant="primary" class="navigation-btn gilroy-b" @click="goTo('OfferRequest')">
        <span>Offer Requests</span>
      </b-btn>
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goTo('SearchResults')"
      >
        <span>Offers</span>
      </b-btn>
    </b-row> -->
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import CodeView from "@/components/CodeView";
import CodeWithMultipleLanguage from "@/components/CodeWithMultipleLanguage";
import Property from "@/components/Doc/Property";
import FLIGHT_SEARCH_PROPERTIES from "@/assets/js/flightSearchProperties";
export default {
  components: {
    CodeView,
    CodeWithMultipleLanguage,
    Property
  },
  mixins: [DocMixin],
  data() {
    return {
      properties: FLIGHT_SEARCH_PROPERTIES
    };
  }
};
</script>

<style lang="sass" scoped></style>
