<template>
  <div class="pagination-page text-left">
    <div class="doc-page-header pb-5">
      <p class="doc-page-header-text mb-0">Postman Collection</p>
    </div>
    <section id="postman-collection" class="pt-62-px doc">
      <p class="doc-description-text mb-0">
        Our Postman collection is a convenient tool for exploring Flyline API
        endpoints without writing code. The Postman collection provides
        pre-formatted requests for all of Flyline's API endpoints. All you have
        to do is fill in your API keys and any arguments. To get started, check
        out the Flyline Postman Collection Quickstart on GitHub below.
      </p>
    </section>
    <b-row class="my-50-px mx-0">
      <b-btn
        variant="primary"
        class="navigation-btn gilroy-b"
        @click="goToPostmanC"
      >
        <span>Postman Collection</span>
      </b-btn>
    </b-row>
  </div>
</template>

<script>
import CodeView from "@/components/CodeView";
import DocMixin from "@/mixins/DocMixin";
export default {
  components: {
    CodeView
  },
  mixins: [DocMixin],
  data() {
    return {
      paginationCode: `{
  “meta”: {
    “after”: “cD0yMDIwLTEyLTE3KzE4JTNBMTklM0EzNy4wNzkyNjMlMkIwMCUzQTAw“,
    “before”: null,
    “limit”: 50
  }
}`
    };
  },
  methods: {
    goToPostmanC() {
      window.location =
        "https://github.com/FlyLine-Development/flyline-postman";
    }
  }
};
</script>

<style lang="sass" scoped>
.pagination-page
</style>
