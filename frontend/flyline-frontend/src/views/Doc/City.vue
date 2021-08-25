<template>
  <div class="aircraft-page text-left">
    <div class="doc-page-header pb-2">
      <p class="doc-page-header-text mb-4">City Data</p>
    </div>
    <section id="city" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-4">
        City is used to describe a city has at least one airport.
      </p>
    </section>
    <section id="city-schema" class="pt-30-px doc">
      <p class="doc-title-text mb-0">Schema</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in city.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>
    <section id="get-a-single-city" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get a single city</p>
      <p class="doc-description-text">Retrieves a city by its iata_code</p>
      <p class="doc-title-text__medium mt-5">Endpoint</p>
      <code-view :code="city.single.endPoint" class="mt-4" :showText="false" />
      <p class="doc-title-text__medium mt-5">URL parameters</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in city.single.urlParameters.properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="city.single.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="city.single.response"
        class="mt-5"
      />
    </section>
    <section id="list-city" class="pt-62-px doc">
      <p class="doc-title-text mb-0">List cities</p>
      <p class="doc-description-text mt-4">
        Retrieves a paginated list of all aircraft. The results may be returned
        in any order.
      </p>
      <p class="doc-title-text__medium mt-5">Endpoint</p>
      <code-view :code="city.list.endPoint" class="mt-4" :showText="false" />
      <p class="doc-title-text__medium mt-5">Query parameters</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in city.list.queryParameters.properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="city.list.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="city.list.response"
        class="mt-5"
      />
    </section>

    <!-- <b-row align-h="between" class="my-100-px mx-0">
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goTo('Airport')"
      >
        <span>Airports</span>
      </b-btn>
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goTo('OfferRequest')"
      >
        <span>Flight Search</span>
      </b-btn>
    </b-row> -->
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import Property from "@/components/Doc/Property";
import CITY_PROPERTIES from "@/assets/js/cityProperties";
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
      city: CITY_PROPERTIES
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
