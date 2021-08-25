<template>
  <div class="pagination-page text-left">
    <div class="doc-page-header pb-5">
      <p class="doc-page-header-text mb-0">Pagination</p>
    </div>

    <section id="pagination" class="pt-62-px doc">
      <p class="doc-description-text mb-4">
        Our list APIs (i.e “List aircraft” or “List airlines”) will only return
        a limited number of results at a time. By default, we return 50 results
        per page, but you can set this to any number between 1 and 200 with the
        limit query string parameter (for example by requesting
        https://api.flyline.io/api/aircraft?limit=200).
      </p>
      <p class="doc-description-text mb-4">
        At the end of every list response, you’ll see a meta-object:
      </p>
      <code-view :code="paginationCode" class="my-5" />
      <p class="doc-description-text mb-4">
        If meta after is null, then there are no more results.
      </p>
      <p class="doc-description-text mb-4">
        But if meta after isn’t null, then that means there are more results
        “over the page”. To look beyond the first page of results, you’ll need
        to use cursor-based pagination functionality. To see the next page, make
        a request to the same URL, but this time, add ?cursor=${meta.after} to
        the URL - so in this case, we’d add
        ?cursor=cD0yMDIwLTEyLTE3KzE4JTNBMTklM0EzNy4wNzkyNjMlMkIwMCUzQTAw. You’ll
        then see the next 50 results.
      </p>
      <p class="doc-description-text mb-0">
        To see all of the results, repeat this process until meta after is null.
      </p>
    </section>

    <!-- <b-row align-h="between" class="my-100-px mx-0">
      <b-btn variant="primary" class="navigation-btn gilroy-b" @click="goTo('MakingRequest')">
        <span>Making Request</span>
      </b-btn>
      <b-btn variant="primary" class="navigation-btn gilroy-b" @click="goTo('Aircraft')">
        <span>Aircraft</span>
      </b-btn>
    </b-row> -->
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
  }
};
</script>

<style lang="sass" scoped>
.pagination-page
</style>
