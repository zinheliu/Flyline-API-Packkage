<template>
  <div class="aircraft-page text-left">
    <div class="doc-page-header pb-2">
      <p class="doc-page-header-text mb-4">Cabin Class Mapping Data</p>
    </div>
    <section id="cabin-fare" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-4">
        This endpoint provides users with a listing of carriers’ RBDs(booking
        classes or fare classes) and their associated cabin (Basic Economy,
        Economy, Premium Economy, Business, First).
      </p>
    </section>
    <section id="cabin-fare-schema" class="pt-30-px doc">
      <p class="doc-title-text mb-0">Schema</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in city.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>
    <section id="get-cabin-fare" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get Cabin Class Mapping</p>
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
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import Property from "@/components/Doc/Property";
import CABIN_FARE_PROPERTIES from "@/assets/js/cabinFareProperties";
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
      city: CABIN_FARE_PROPERTIES
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
