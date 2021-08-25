<template>
  <div class="airport-page text-left">
    <div class="doc-page-header pb-2">
      <p class="doc-page-header-text mb-4">Airport Data</p>
    </div>
    <section id="airport" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-4">
        Airports are used to identify origins and destinations in journey
        slices.
      </p>
    </section>
    <section id="airport-schema" class="pt-30-px doc">
      <p class="doc-title-text mb-0">Schema</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in airport.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>
    <section id="get-a-single-airport" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get a single airport</p>
      <p class="doc-description-text">Retrieves an airport by its iata_code</p>
      <p class="doc-title-text__medium mt-5">Endpoint</p>
      <code-view
        :code="airport.single.endPoint"
        class="mt-4"
        :showText="false"
      />
      <p class="doc-title-text__medium mt-5">URL parameters</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in airport.single.urlParameters.properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="airport.single.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="airport.single.response"
        class="mt-5"
      />
    </section>
    <section id="list-airport" class="pt-62-px doc">
      <p class="doc-title-text mb-0">List airports</p>
      <p class="doc-description-text mt-4">
        Retrieves a paginated list of all airports. The results may be returned
        in any order.
      </p>
      <p class="doc-title-text__medium mt-5">Endpoint</p>
      <code-view :code="airport.list.endPoint" class="mt-4" :showText="false" />
      <p class="doc-title-text__medium mt-5">Query parameters</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in airport.list.queryParameters.properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="airport.list.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="airport.list.response"
        class="mt-5"
      />
    </section>

    <!-- <b-row align-h="between" class="my-100-px mx-0">
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goTo('Airline')"
      >
        <span>Airlines</span>
      </b-btn>
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goTo('City')"
      >
        <span>City</span>
      </b-btn>
    </b-row> -->
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import Property from "@/components/Doc/Property";
import AIRPORT_PROPERTIES from "@/assets/js/airportProperties";
import CodeView from "@/components/CodeView";
import CodeWithMultipleLanguage from "@/components/CodeWithMultipleLanguage";
import EventBus from "@/bus/event";
export default {
  components: {
    Property,
    CodeView,
    CodeWithMultipleLanguage
  },
  mixins: [DocMixin],
  data() {
    return {
      airport: AIRPORT_PROPERTIES
    };
  },
  methods: {
    scrollTo(id) {
      let section = document.querySelector("section#" + id);
      if (section) section.scrollIntoView();
    }
  }
};
</script>

<style></style>
