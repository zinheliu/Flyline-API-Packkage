<template>
  <div class="flight-search-page text-left">
    <div class="doc-page-header pb-5">
      <p class="doc-page-header-text mb-0">Flight Search</p>
    </div>

    <section id="overview" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-0">
        To search for flights, you’ll need to create an offer request. An offer
        request describes the passengers and where and when they want to travel
        (in the form of a list of slices). It may also include additional
        filters (e.g. a particular cabin to travel in).
      </p>
    </section>

    <section id="offer-request-schema" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Offer Request Schema</p>
      <property
        v-for="(property, pI) in properties.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>

    <section id="create-an-offer-request" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Create an offer request</p>
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
        :code="properties.create.endPoint"
        class="mt-5"
        :showText="false"
      />

      <p class="doc-title-text__medium mt-70-px">Query Parameters</p>
      <div class="dash w-100 my-4"></div>
      <div class="parameters">
        <property
          v-for="(property, pI) in properties.create.queryParameters.properties"
          :key="pI"
          :property="property"
        />
      </div>

      <p class="doc-title-text__medium mt-70-px">Body Parameters</p>
      <property
        v-for="(property, pI) in properties.create.bodyParameters.properties"
        :key="pI"
        :property="property"
      />

      <code-with-multiple-language
        :title="'Request Example'"
        :code="properties.create.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="properties.create.response"
        class="mt-5"
      />
    </section>

    <div class="dash w-100 mt-70-px"></div>

    <section id="get-a-single-offer-request" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get a single offer request</p>
      <p class="doc-description-text mb-4">
        Retrieves an offer request by its ID
      </p>

      <p class="doc-title-text__medium">Endpoint</p>
      <code-view
        :code="properties.single.endPoint"
        class="mt-5"
        :showText="false"
      />

      <p class="doc-title-text__medium mt-70-px">URL Parameters</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in properties.single.urlParameters.properties"
        :key="pI"
        :property="property"
      />

      <code-with-multiple-language
        :title="'Request Example'"
        :code="properties.single.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="properties.single.response"
        class="mt-5"
      />
    </section>

    <div class="dash w-100 mt-70-px"></div>

    <section id="list-offer-requests" class="pt-62-px doc">
      <p class="doc-title-text mb-4">List offer requests</p>
      <p class="doc-description-text mb-4">
        Retrieves a paginated list of your offer requests. The results may be
        returned in any order.
      </p>
      <p class="doc-title-text__medium">Endpoint</p>
      <code-view
        :code="properties.list.endPoint"
        class="mt-5"
        :showText="false"
      />
      <p class="doc-title-text__medium mt-70-px">Query Parameters</p>
      <div class="dash w-100 my-4"></div>
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
    <b-row align-h="between" class="my-100-px mx-0">
      <b-btn variant="primary" class="navigation-btn gilroy-b" @click="goTo('Aircraft')">
        <span>Aircraft</span>
      </b-btn>
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goTo('FlightSearch')"
      >
        <span>Flight Search</span>
      </b-btn>
    </b-row>
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import CodeView from "@/components/CodeView";
import CodeWithMultipleLanguage from "@/components/CodeWithMultipleLanguage";
import Property from "@/components/Doc/Property";
import OFFER_REQUEST_PROPERTIES from "@/assets/js/offerRequestProperties";
export default {
  components: {
    CodeView,
    CodeWithMultipleLanguage,
    Property
  },
  mixins: [DocMixin],
  data() {
    return {
      properties: OFFER_REQUEST_PROPERTIES
    };
  }
};
</script>

<style lang="sass" scoped></style>
