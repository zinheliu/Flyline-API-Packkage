<template>
  <div class="airline-page text-left">
    <div class="doc-page-header pb-2">
      <p class="doc-page-header-text mb-4">
        Operating & Marketing Airline Data
      </p>
    </div>
    <section id="airline" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-4">
        Airlines are used to identify the airline selling and operating a
        specifc flight.
      </p>
    </section>
    <section id="airline-schema" class="pt-30-px doc">
      <p class="doc-title-text mb-0">Schema</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in airline.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>
    <section id="get-a-single-airline" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Get a single airline</p>
      <p class="doc-description-text">Retrieves an airline by its iata_code</p>
      <p class="doc-title-text__medium mt-5">Endpoint</p>
      <code-view
        :code="airline.single.endPoint"
        class="mt-4"
        :showText="false"
      />
      <p class="doc-title-text__medium mt-5">URL parameters</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in airline.single.urlParameters.properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="airline.single.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="airline.single.response"
        class="mt-5"
      />
    </section>
    <section id="list-airline" class="pt-62-px doc">
      <p class="doc-title-text mb-0">List airlines</p>
      <p class="doc-description-text mt-4">
        Retrieves a paginated list of all airlines. The results may be returned
        in any order.
      </p>
      <p class="doc-title-text__medium mt-5">Endpoint</p>
      <code-view :code="airline.list.endPoint" class="mt-4" :showText="false" />
      <p class="doc-title-text__medium mt-5">Query parameters</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in airline.list.queryParameters.properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="airline.list.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="airline.list.response"
        class="mt-5"
      />
    </section>

    <!-- <b-row align-h="between" class="my-100-px mx-0">
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goTo('Aircraft')"
      >
        <span>Aircraft</span>
      </b-btn>
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goTo('Airport')"
      >
        <span>Airports</span>
      </b-btn>
    </b-row> -->
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import Property from "@/components/Doc/Property";
import AIRLINE_PROPERTIES from "@/assets/js/airlineProperties";
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
      airline: AIRLINE_PROPERTIES
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
