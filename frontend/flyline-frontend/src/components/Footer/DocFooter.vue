<template>
  <div class="doc-footer">
    <div
      class="doc-footer-contents d-flex justify-content-between flex-column flex-md-row px-3"
    >
      <div
        class="d-flex flex-column flex-md-row w-100 align-items-md-center justify-content-md-between"
      >
        <span class="my-0 doc-footer-link hover-primary-color cursor-pointer">
          © 2021 Flyline Holdings Inc. All right reserved.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      darkMode: true
    };
  },
  created() {
    this.darkMode = this.dark;
  },
  watch: {
    darkMode(v) {
      this.SET_DARK(v);
    }
  },
  computed: {
    ...mapGetters("UTIL", ["dark"])
  },
  methods: {
    ...mapMutations("UTIL", ["SET_DARK"]),
    goTo(name) {
      if (name) this.$router.push({ name });
    }
  }
};
</script>

<style lang="sass" scoped>
.doc-footer
  // padding-left: 50px
  .doc-footer-contents
    border-top: solid 0.5px #EDEEF6
    padding: 40px 0
    .doc-footer-link
      font-family: GILROY-MEDIUM
      font-size: 14px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 1.43
      letter-spacing: normal
      color: #707070
      a
        text-decoration: none
        color: #707070
      @media screen and (max-width: 800px)
        display: block
        margin-bottom: 10px !important
  .f-c-part
    img
      height: 32px
      width: 32px
</style>
