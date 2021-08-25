<template>
  <div class="login-page h-100 d-flex flex-column">
    <div class="my-auto">
      <div class="auth-card pt-46-px pb-20-px text-left mx-auto w-100">
        <p class="auth-title mb-26-px">Log in to your account</p>
        <validation-observer ref="loginFormObserver" v-slot="{ handleSubmit }">
          <b-form @submit.stop.prevent="handleSubmit(login)">
            <validation-provider
              name="Email"
              rules="required|email"
              v-slot="validationContext"
            >
              <b-input
                v-model="email"
                class="text-field"
                placeholder="Company Email"
                :state="getValidationState(validationContext)"
              ></b-input>
              <b-form-invalid-feedback
                v-for="(error, eI) in validationContext.errors"
                :key="eI"
                >{{ error }}</b-form-invalid-feedback
              >
            </validation-provider>
            <validation-provider
              name="Password"
              rules="required"
              v-slot="validationContext"
            >
              <b-input-group class="mt-14-px password-input-group">
                <b-input
                  v-model="password"
                  :type="showPass ? 'text' : 'password'"
                  placeholder="Password"
                  class="password-field text-field"
                  :state="getValidationState(validationContext)"
                ></b-input>
                <b-input-group-append class="d-flex align-items-center pr-2">
                  <b-icon
                    class="cursor-pointer text-secondary hover-primary-color"
                    icon="eye-slash-fill"
                    v-if="!showPass"
                    @click="toggleShowPass"
                  ></b-icon>
                  <b-icon
                    class="cursor-pointer text-secondary hover-primary-color"
                    icon="eye-fill"
                    v-else
                    @click="toggleShowPass"
                  ></b-icon>
                </b-input-group-append>
              </b-input-group>
              <b-form-invalid-feedback
                :class="[
                  getValidationState(validationContext) ? '' : 'd-block'
                ]"
                v-for="(error, eI) in validationContext.errors"
                :key="eI"
                >{{ error }}</b-form-invalid-feedback
              >
            </validation-provider>
            <div class="my-26-px">
              <b-form-checkbox
                v-model="remember7days"
                size="sm"
                class="stay-signed"
              >
                <span class="f-14-px" style="font-size: 12px;"
                  >Stay signed in for a week</span
                >
              </b-form-checkbox>
            </div>
            <validation-provider name="Detail" v-slot="validationContext">
              <b-form-invalid-feedback
                :class="[
                  'my-1',
                  getValidationState(validationContext) ? '' : 'd-block'
                ]"
                v-for="(error, eI) in validationContext.errors"
                :key="eI"
                >{{ error }}</b-form-invalid-feedback
              >
            </validation-provider>
            <b-btn
              variant="primary"
              class="w-100 auth-btn mb-26-px h-34-px gilroy-b"
              type="submit"
              @click="login"
              :disabled="submitting"
            >
              <b-spinner
                small
                variant="light"
                class="mr-2"
                v-if="submitting"
              ></b-spinner>
              Log In
            </b-btn>
            <p class="f-14-px">
              <span
                class="auth-desc-txt text-secondary mr-2"
                style="font-size: 12px;"
                >Forgot your password?</span
              >
              <span
                class="text-primary cursor-pointer"
                @click="goTo('RequestPasswordReset')"
                style="font-size: 12px; font-family: gilroy-bold;"
                >Reset HERE</span
              >
            </p>
          </b-form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
import AuthFooter from "@/components/Auth/AuthFooter";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  components: {
    AuthFooter
  },
  data() {
    return {
      email: "",
      password: "",

      submitting: false,
      showPass: false,
      remember7days: false
    };
  },
  computed: {
    ...mapGetters("UTIL", ["dark"])
  },
  methods: {
    ...mapActions("USER", ["LOGIN"]),
    ...mapActions("ORGANIZATION", ["FETCH_ORGANIZATIONS"]),
    ...mapMutations("USER", ["SET_ORGANIZATION_INDEX"]),
    async login() {
      this.submitting = true;
      let isValid = await this.$refs.loginFormObserver.validate();
      try {
        if (isValid) {
          let payload = {
            email: this.email,
            password: this.password
          };
          let res = await this.LOGIN(payload);
          let organizations = await this.FETCH_ORGANIZATIONS();
          if (organizations.length == 1) this.SET_ORGANIZATION_INDEX(0);
          this.$router.push({ name: "Dashboard" });
          console.log(res);
        }
      } catch (e) {
        let errors = {};
        Object.keys(e).forEach(key => {
          errors[key.charAt(0).toUpperCase() + key.slice(1)] = e[key];
        });
        console.log(errors);
        this.$refs.loginFormObserver.setErrors(errors);
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
.login-page
  padding: 50px 0 20px 0
  position: relative
  .images
    position: absolute
    img
      position: absolute
      &:nth-child(1)
        width: 56px
        height: 66px
        left: 20%
      &:nth-child(2)
        width: 216px
        height: 148px
        left: -46px
        bottom: 7%
      &:nth-child(3)
        width: 197px
        height: 118px
        right: 10%
        bottom: 35%
  .auth-card
    max-width: 369px

  ::v-deep .stay-signed
    label span
      display: flex
      align-items: center
      margin-top: 1.5px
</style>
