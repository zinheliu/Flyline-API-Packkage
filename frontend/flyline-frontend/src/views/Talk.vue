<template>
  <div class="login-page h-100 d-flex flex-column">
    <div class="auth-logo mb-40-px mx-auto cursor-pointer" @click="goTo('Landing')">
      <img src="@/assets/images/svg/flyline_logo.svg" class="h-100 w-100" />
    </div>
    <div class="my-auto">
      <div class="auth-card pt-46-px pb-20-px text-left mx-auto w-100">
        <p class="auth-title mb-26-px">Have a question? We can help</p>
        <b-form>
          <b-row>
            <b-col cols="12" md="6">
              <b-input class="text-field" placeholder="First Name"></b-input>
            </b-col>
            <b-col cols="12" md="6">
              <b-input class="text-field" placeholder="Last Name"></b-input>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <b-input class="text-field" placeholder="Company Name"></b-input>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <b-input class="text-field" placeholder="Email Address"></b-input>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <b-textarea rows="5" no-resize placeholder="How can we help"></b-textarea>
            </b-col>
          </b-row>
          <b-btn variant="primary" class="w-100 auth-btn mb-26-px h-34-px gilroy-b mt-4" type="submit" @click="save">
            Request Access
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
      submitting: false,
    };
  },
  methods: {
    async save() {},
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

  ::v-deep .stay-signed
    label span
      display: flex
      align-items: center
      margin-top: 1.5px
</style>
