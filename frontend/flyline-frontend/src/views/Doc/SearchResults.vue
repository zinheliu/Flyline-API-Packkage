<template>
  <div class="search-result-doc-page text-left">
    <div class="doc-page-header pb-5">
      <p class="doc-page-header-text mb-0">Search Results</p>
    </div>

    <section id="overview" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-4">
        After you’ve searched for flights by creating an offer request, we’ll
        send your search to a range of airlines, which may return offers.
      </p>
      <p class="doc-description-text mb-4">
        Each offer represents flights you can buy from an airline at a
        particular price that meet your search criteria.
      </p>
      <p class="doc-description-text mb-0">
        You’ll see slices inside the offers. Each slice will also include a list
        of one or more specific flights (called segments) that the airline is
        offering to get the passengers where they want to go
      </p>
    </section>

    <section id="offer-request-schema" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Offer Request schema</p>

      <div class="dash w-100 mb-4"></div>

      <property
        v-for="(property, pI) in properties.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>

    <section id="get-a-single-offer-request" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get a single offer request</p>
      <p class="doc-description-text mb-4">
        You should use this API to get the complete, up-to-date information
        about an offer. This endpoint does not guarantee that the offer will be
        available at the time of booking.
      </p>
      <p class="doc-description-text mb-4">
        Due to limitations in airlines' systems, you may see changes to the
        offer (e.g a changed total_amount). Additionally, you may receive
        information that may have not been included in the original offer such
        as baggage allowances.
      </p>
      <p class="doc-description-text mb-5">
        Optionally, you can request information about additional
        available_services that you can book with this offer by specifying the
        return_available_services query parameter.
      </p>

      <p class="doc-title-text__medium">Endpoint</p>
      <code-view
        :code="properties.single.endPoint"
        class="mt-5"
        :showText="false"
      />

      <p class="doc-title-text__medium mt-70-px">URL Parameters</p>
      <div class="dash w-100 my-4"></div>
      <div class="properties">
        <property
          v-for="(property, pI) in properties.single.urlParameters.properties"
          :key="pI"
          :property="property"
        />
      </div>

      <p class="doc-title-text__medium mt-5">Query Parameters</p>
      <div class="dash w-100 my-4"></div>
      <div class="properties">
        <property
          v-for="(property, pI) in properties.single.queryParameters.properties"
          :key="pI"
          :property="property"
        />
      </div>

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

    <section id="list-offer-requests" class="pt-62-px doc">
      <p class="doc-title-text mb-4">List offer requests</p>
      <p class="doc-description-text mb-4">
        Retrieves a list of offers for a given offer request specified by its
        ID. Unless you specify a sort parameter, the results may be returned in
        any order.
      </p>
      <p class="doc-description-text mb-4">
        This endpoint does not return the complete, up-to-date information on
        each offer. The Get a single offer endpoint should be called for a given
        offer in order to get complete and up-to-date information.
      </p>
      <p class="doc-title-text__medium">Endpoint</p>
      <code-view
        :code="properties.list.endPoint"
        class="mt-5"
        :showText="false"
      />
      <p class="doc-title-text__medium mt-70-px">Query Parameters</p>
      <div class="dash w-100 my-4"></div>

      <div class="parameters">
        <property
          v-for="(property, pI) in properties.list.queryParameters.properties"
          :key="pI"
          :property="property"
        />
      </div>

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
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goTo('OfferRequest')"
      >
        <span>Flight Search</span>
      </b-btn>
      <b-btn variant="primary" class="navigation-btn gilroy-b">
        <span>Search Results</span>
      </b-btn>
    </b-row>
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import CodeView from "@/components/CodeView";
import CodeWithMultipleLanguage from "@/components/CodeWithMultipleLanguage";
import SEARCH_RESULT_PROPERTIES from "@/assets/js/searchResultProperties";
import Property from "@/components/Doc/Property";
export default {
  components: {
    CodeView,
    CodeWithMultipleLanguage,
    Property
  },
  mixins: [DocMixin],
  data() {
    return {
      properties: SEARCH_RESULT_PROPERTIES
    };
  }
};
</script>

<style></style>
