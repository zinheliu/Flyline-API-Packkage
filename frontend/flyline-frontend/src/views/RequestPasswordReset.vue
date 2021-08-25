<template>
  <div class="request-password-reset-page h-100 d-flex flex-column">
    <div
      class="auth-logo mb-40-px mx-auto cursor-pointer"
      @click="goTo('Landing')"
    >
    </div>
    <div class="auth-card pt-46-px pb-20-px text-left mx-auto w-100">
      <p class="auth-title mb-15-px">Password reset</p>
      <p class="f-14-px text-secondary mb-20-px pass-res-desc">
        Below, enter your email address and we’ll send you a password reset
        instructions.
      </p>
      <validation-observer ref="FPassFormObserver" v-slot="{ handleSubmit }">
        <b-form @submit.stop.prevent="handleSubmit(requestPasswordReset)">
          <validation-provider
            name="Email"
            rules="required|email"
            v-slot="validationContext"
          >
            <b-input
              v-model="email"
              class="text-field"
              placeholder="Email Address"
              :state="getValidationState(validationContext)"
            ></b-input>
            <b-form-invalid-feedback
              v-for="(error, eI) in validationContext.errors"
              :key="eI"
              >{{ error }}</b-form-invalid-feedback
            >
          </validation-provider>
          <p :class="['mt-2 f-14-px', msgType]" v-if="msgType">{{ msg }}</p>
          <b-btn
            variant="primary"
            class="w-100 auth-btn mb-26-px h-34-px gilroy-b mt-34-px"
            type="submit"
            @click="requestPasswordReset"
            :disabled="submitting"
          >
            <b-spinner
              small
              variant="light"
              class="mr-2"
              v-if="submitting"
            ></b-spinner>
            Get Reset Instructions
          </b-btn>
        </b-form>
      </validation-observer>
    </div>
    <p class="mt-40-px mx-2 mx-md-0 f-14-px">
      <span class="text-secondary mr-2 cursor-pointer" @click="goTo('Login')"
        >Back to Sign In?</span
      >
    </p>

    <auth-footer class="mt-auto px-3 px-md-0" />
  </div>
</template>

<script>
import AuthFooter from "@/components/Auth/AuthFooter";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    AuthFooter
  },
  data() {
    return {
      email: "",

      submitting: false,
      msgType: null,
      msg: null
    };
  },
  computed: {
    ...mapGetters("UTIL", ["dark"])
  },
  methods: {
    ...mapActions("USER", ["REQUEST_PASSWORD_RESET"]),
    async requestPasswordReset() {
      this.submitting = true;
      try {
        let isValid = await this.$refs.FPassFormObserver.validate();
        if (isValid) {
          let payload = {
            email: this.email
          };
          let data = await this.REQUEST_PASSWORD_RESET(payload);
          console.log(data);
          this.msgType = "text-success";
          this.msg = "Password reset instructions sent to your email.";
        }
      } catch (e) {
        console.log(e);
        let errors = {};
        Object.keys(e).forEach(key => {
          errors[key.charAt(0).toUpperCase() + key.slice(1)] = e[key];
        });
        console.log(errors);
        this.$refs.FPassFormObserver.setErrors(errors);
      }
      this.submitting = false;
    },
    toggleShowPass() {
      this.showPass = !this.showPass;
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
.request-password-reset-page
  padding: 50px 0 20px 0
  .pass-res-desc
    line-height: 1.8
  .auth-card
    max-width: 369px

  ::v-deep .stay-signed
    label span
      display: flex
      align-items: center
      margin-top: 1.5px
</style>
