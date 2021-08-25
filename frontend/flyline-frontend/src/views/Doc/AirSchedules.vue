<template>
  <div class="schedules-page text-left">
    <div class="doc-page-header pb-5">
      <p class="doc-page-header-text mb-0">
        Flight Schedules & Status Endpoint
      </p>
    </div>

    <section id="schedules" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-0">
        Our Flight Schedules & Status endpoint provides access to scheduling and
        timetable information on upcoming and historical flights for all
        airports and airlines around the world. Our schedule data is backed and
        matched against a multitude of sources, because of this we provide
        accurate details about any flight in real-time.
      </p>
    </section>

    <section id="schedules-schema" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Air Schedules Schema</p>

      <property
        v-for="(property, pI) in properties.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>

    <section id="get-schedules-by-flight-number" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get schedules by flight number</p>
      <p class="doc-description-text mb-4">
        To retrieve a specific flight schedule by flight number you'll need to
        pass the airline code, specific date, and flight number We then check a
        multitude of sources from airlines, airports, and other data and return
        all the information on the scheduled flights.
      </p>
      <p class="doc-title-text__medium">Endpoint</p>
      <code-view
        :code="properties.listByFlightNumber.endPoint"
        class="mt-5"
        :showText="false"
      />
      <p class="doc-title-text__medium mt-70-px">Body Parameters</p>
      <property
        v-for="(property, pI) in properties.listByFlightNumber.queryParameters
          .properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="properties.listByFlightNumber.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="properties.listByFlightNumber.response"
        class="mt-5"
      />
    </section>
    <section id="get-schedules-by-route" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get schedules by route</p>
      <p class="doc-description-text mb-4">
        To retrieve a flight schedule by the route you'll need to pass an
        origin, destination, specific airline, and date. We then check a
        multitude of sources from airlines, airports, and other data and return
        all the information on the scheduled flights.
      </p>
      <p class="doc-title-text__medium">Endpoint</p>
      <code-view
        :code="properties.listByRoute.endPoint"
        class="mt-5"
        :showText="false"
      />
      <p class="doc-title-text__medium mt-70-px">Body Parameters</p>
      <property
        v-for="(property, pI) in properties.listByRoute.queryParameters
          .properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="properties.listByRoute.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="properties.listByRoute.response"
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
import AMENITIES_PROPERTIES from "@/assets/js/schedulesProperties";
export default {
  components: {
    CodeView,
    CodeWithMultipleLanguage,
    Property
  },
  mixins: [DocMixin],
  data() {
    return {
      properties: AMENITIES_PROPERTIES
    };
  }
};
</script>

<style lang="sass" scoped></style>
