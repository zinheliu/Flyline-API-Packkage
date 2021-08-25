<template>
  <div class="seatmap-page text-left">
    <div class="doc-page-header pb-2">
      <p class="doc-page-header-text mb-4">Seat Mapping Endpoint</p>
    </div>
    <section id="seatmap" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Overview</p>
      <p class="doc-description-text mb-4">
        Enrich your flight shopping experience by allowing your customers to
        view and interact with seat mapping data on a specific flight they're
        looking to travel on. Through our seat map endpoint, we return the data
        in two ways, first, we include all the data for rendering seats in the
        relevant cabins, or if you'd prefer is a simpler solution we also return
        an SVG of the seat map already configured based on the seat mapping
        data. In addition to the seat mapping data, we return images of the
        cabin to show your travelers what they can expect on their flight.
      </p>
    </section>
    <section id="seatmap-schema" class="pt-62-px doc">
      <p class="doc-title-text mb-0">Schema</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in seatmap.schema.properties"
        :key="pI"
        :property="property"
      />
    </section>
    <section id="get-seatmaps" class="pt-62-px doc">
      <p class="doc-title-text mb-0">Get seatmaps</p>
      <p class="doc-description-text mt-4">
        To retrieve seat maps of aircraft you'll need to pass a carrier(also
        known as airline), and aircraft code. In some cases, there are multiple
        layout versions for the same type of aircraft. For example, 321 aircraft
        has 2 layouts. So we return a list of seatmaps.
      </p>
      <p class="doc-title-text__medium mt-5">Endpoint</p>
      <code-view :code="seatmap.list.endPoint" class="mt-4" :showText="false" />
      <p class="doc-title-text__medium mt-5">Body parameters</p>
      <div class="dash w-100 my-4"></div>
      <property
        v-for="(property, pI) in seatmap.list.queryParameters.properties"
        :key="pI"
        :property="property"
      />
      <code-with-multiple-language
        :title="'Request Example'"
        :code="seatmap.list.request"
        class="mt-5"
      />
      <code-with-multiple-language
        :title="'Response Example'"
        :code="seatmap.list.response"
        class="mt-5"
      />
    </section>
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import Property from "@/components/Doc/Property";
import AIRCRAFT_PROPERTIES from "@/assets/js/seatMapProperties";
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
      seatmap: AIRCRAFT_PROPERTIES
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
