<template>
  <div class="login-page h-100 d-flex flex-column">
    <!-- <div
      class="auth-logo mb-40-px mx-auto cursor-pointer"
      @click="goTo('Landing')"
    >
      <img src="@/assets/images/svg/flyline_logo.svg" class="h-100 w-100" />
    </div> -->
    <div class="my-auto">
      <div class="auth-card pt-46-px pb-20-px text-left mx-auto w-100">
        <p class="auth-title" style="font-size: 22px;">Schedule a Product Demo</p>
        <div class="w-100 dash my-26-px"></div>
        <p class="auth-sub-text mb-26-px" style="line-height: 2.2">
          Hey! We’re so happy you’re interested in our platform. At Flyline we
          pride ourselves on how easy it is to integrate into our platform.
          Click the button below to schedule your product demo.
        </p>
        <b-form>
          <b-btn variant="primary" class="w-100 auth-btn mb-26-px h-34-px gilroy-b mt-4" @click="save">
            Schedule a Demo
          </b-btn>
        </b-form>
      </div>
    </div>

    <auth-footer class="mt-auto px-3 px-md-0" />
  </div>
</template>

<script>
import AuthFooter from "@/components/Auth/AuthFooter";
export default {
  components: {
    AuthFooter
  },
  data() {
    return {
      submitting: false
    };
  },
  methods: {
    async save() {
      window.location = "https://calendly.com/zach-234/flyline-product-demo"
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    goTo(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="sass" scoped>
.login-page
  padding: 50px 0 20px 0
  .auth-card
    border: none
    .dash
      border-bottom: solid 1px #EDEEF6

  ::v-deep .stay-signed
    label span
      display: flex
      align-items: center
      margin-top: 1.5px
</style>
