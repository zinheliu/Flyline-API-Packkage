<template>
  <div class="making-request text-left">
    <div class="doc-page-header pb-5">
      <p class="doc-page-header-text mb-0">Making Request</p>
    </div>

    <section id="making-request-authentication" class="pt-62-px doc">
      <p class="doc-title-text mb-4">Authentication</p>
      <p class="doc-description-text mb-4">
        Within every API request you make, you will need to include your access
        token.
      </p>
      <p class="doc-description-text mb-0">
        Once your developer account is approved, log into the developer portal
        and you'll see your access tokens. Once you have your token you will
        pass it in the Authorization request header using the “FToken”
        authentication scheme:
      </p>
      <code-view :code="authenticationCode" class="mt-5" />
    </section>

    <section id="making-request-mime-types" class="pt-62-px doc">
      <p class="doc-title-text">MIME Types</p>
      <p class="doc-description-text mb-0">
        Responses from our API are in JSON format with UTF-8 encoding. An
        "Accept Header" is required with every request:
      </p>
      <code-view :code="mimeCode1" class="my-5" />
      <p class="doc-description-text mb-0">
        Request bodies sent to the API should be in JSON format. A Content-Type
        header is required whenever you’re sending a request body (i.e. for POST
        requests):
      </p>
      <code-view :code="mimeCode2" class="mt-5" />
    </section>

    <!-- <b-row align-h="between" class="my-100-px mx-0">
      <b-btn variant="primary" class="navigation-btn gilroy-b" @click="goBacck">
        <span>Key Principles</span>
      </b-btn>
      <b-btn variant="primary" class="navigation-btn gilroy-b" @click="goTo('Pagination')">
        <span>Pagination</span>
      </b-btn>
    </b-row> -->
  </div>
</template>

<script>
import DocMixin from "@/mixins/DocMixin";
import CodeView from "@/components/CodeView";
import EventBus from "@/bus/event";
export default {
  mixins: [DocMixin],
  components: {
    CodeView
  },
  data() {
    return {
      authenticationCode: `Authorization: FToken <Your Access Token>`,
      mimeCode1: `Accept: application/json`,
      mimeCode2: `Content-Type: application/json`
    };
  },
  methods: {
    goBacck() {
      this.$router.push({ name: "KeyPrinciples" });
      EventBus.$emit("scroll-to-doc-section");
    }
  }
};
</script>

<style lang="sass" scoped>
.making-request
</style>
