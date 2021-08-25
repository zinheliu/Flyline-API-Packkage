<template>
  <div class="amenities-page text-left">
    <div class="doc-page-header pb-5">
      <p class="doc-page-header-text mb-0">Shopping Attributes Endpoint</p>
    </div>

    <section id="amenities" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-0">
        Our Shopping Attributes Endpoint provides content that describes the
        in-flight experience and applicable rules a traveler can expect on a
        specific flight or a list of flights that operate a specific route. A
        few examples of the data we return is below,
      </p>
      <p
        class="doc-description-text mt-4 mb-0"
        style="font-family: Gilroy-Semibold; color: #333; font-size: 14px;"
      >
        Air Attributes Response Data Examples
      </p>
      <p class="doc-description-text mt-3 mb-0">
        - Seat Pitch
      </p>
      <p class="doc-description-text mt-3 mb-0">
        - Seat Width
      </p>
      <p class="doc-description-text mt-3 mb-0">
        - In-flight Meal
      </p>
      <p class="doc-description-text mt-3 mb-0">
        - Available Beverages
      </p>
      <p class="doc-description-text mt-3 mb-0">
        - In-flight WIFI
      </p>
      <p class="doc-description-text mt-3 mb-0">
        - In-flight Entertainment
      </p>
      <p class="doc-description-text mt-3 mb-0">
        - Cabin Configuration
      </p>
      <p class="doc-description-text mt-3 mb-0">
        and much much more
      </p>
      <p class="doc-description-text mt-5 mb-0">
        The Shopping Attributes Endpoint provides travelers all the details they
        can expect about a specific offer from an airline. This endpoint
        displays targeted information and messaging about airline fares,
        products, and services travelers can expect on a specific offer or a
        list of offers.
      </p>
    </section>

    <section id="amenities-schema" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Shopping Attribute Schema</p>

      <property
        v-for="(property, pI) in properties.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>

    <section id="get-amenities" class="pt-62-px doc">
      <p class="doc-title-text mb-4">
        Get Shopping Attributes by Flight Number
      </p>
      <p class="doc-description-text mb-4">
        To return cabin attributes and amenities on a specific flight, you will
        make a call to our Air Amenities API (POST
        https://api.flyline.io/api/search/attributes/flight/), within this call you will
        need to pass the necessary flight information about the flight.
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
    <section id="get-amenities-by-route" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get Shopping Attributes by Route</p>
      <p class="doc-description-text mb-4">
        To return cabin attributes and amenities on a specific flight, you will
        make a call to our Air Amenities API (POST
        https://api.flyline.io/api/search/attributes/route/), within this call you will
        need to pass the necessary flight information about the flight.
      </p>
      <p class="doc-title-text__medium">Endpoint</p>
      <code-view
        :code="properties.byRoute.endPoint"
        class="mt-5"
        :showText="false"
      />
      <p class="doc-title-text__medium mt-70-px">Body Parameters</p>
      <property
        v-for="(property, pI) in properties.byRoute.queryParameters.properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="properties.byRoute.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="properties.byRoute.response"
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
import AMENITIES_PROPERTIES from "@/assets/js/amenitiesProperties";
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
