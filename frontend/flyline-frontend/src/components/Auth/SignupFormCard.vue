<template>
  <div class="signup-form-card w-100">
    <div class="auth-card w-100 pt-40-px pb-20-px text-left">
      <p class="auth-title mb-32-px">
        <span v-if="emailQuery">Get Started</span>
        <span v-else>Tells us a little about you</span>
      </p>
      <validation-observer ref="signupFormObserver" v-slot="{ handleSubmit }">
        <b-form @submit.stop.prevent="handleSubmit(signup)">
          <b-row class="mx-0" align-h="between">
            <b-col cols="12" md="6" class="px-0 pr-md-2">
              <validation-provider name="First Name" rules="required" v-slot="validationContext" :custom-messages="{ required: 'Required' }">
                <b-input v-model="firstName" placeholder="First Name" class="text-field" :state="getValidationState(validationContext)"></b-input>
                <b-form-invalid-feedback v-for="(error, eI) in validationContext.errors" :key="eI" >{{ error }}</b-form-invalid-feedback>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="6" class="px-0 pl-md-2 mt-14-px mt-md-0">
              <validation-provider name="Last Name" rules="required" v-slot="validationContext" :custom-messages="{ required: 'Required' }">
                <b-input v-model="lastName" placeholder="Last Name" class="text-field" :state="getValidationState(validationContext)"></b-input>
                <b-form-invalid-feedback v-for="(error, eI) in validationContext.errors" :key="eI" >{{ error }}</b-form-invalid-feedback>
              </validation-provider>
            </b-col>
          </b-row>
          <validation-provider name="Email" rules="required|email" v-slot="validationContext">
            <b-input v-model="email" placeholder="Email" class="text-field mt-14-px" :state="getValidationState(validationContext)" :disabled="emailQuery && emailQuery.length > 0"></b-input>
            <b-form-invalid-feedback v-for="(error, eI) in validationContext.errors" :key="eI" >{{ error }}</b-form-invalid-feedback>
          </validation-provider>
          <validation-provider name="Password" rules="required" v-slot="validationContext" v-if="invitedCompanyName">
            <b-input-group class="mt-14-px password-input-group">
              <b-input v-model="password" :type="showPass?'text':'password'" placeholder="Password" class="password-field text-field" :state="getValidationState(validationContext)" />
              <b-input-group-append class="d-flex align-items-center pr-2">
                <b-icon class="cursor-pointer text-secondary hover-primary-color" icon="eye-slash-fill" v-if="!showPass" @click="toggleShowPass"></b-icon>
                <b-icon class="cursor-pointer text-secondary hover-primary-color" icon="eye-fill" v-else @click="toggleShowPass"></b-icon>
              </b-input-group-append>
            </b-input-group>
            <b-form-invalid-feedback :class="[getValidationState(validationContext)?'':'d-block']" v-for="(error, eI) in validationContext.errors" :key="eI">{{error}}</b-form-invalid-feedback>
          </validation-provider>
          <validation-provider name="Company Name" rules="required" v-slot="validationContext">
            <b-input v-model="companyName" :disabled="invitedCompanyName && invitedCompanyName.length > 0" placeholder="Company Name" class="text-field mt-14-px"  :state="getValidationState(validationContext)"></b-input>
            <b-form-invalid-feedback v-for="(error, eI) in validationContext.errors" :key="eI" >{{ error }}</b-form-invalid-feedback>
          </validation-provider>
          <b-input v-model="companySize" placeholder="Company Size" class="text-field mt-14-px" v-if="!invitedCompanyName"></b-input>
          <div class="my-26-px">
            <b-form-checkbox v-model="terms" size="sm" class="aggree-terms">
              <span class="f-14-px">I agree to the terms of use</span>
            </b-form-checkbox>
          </div>
          <b-btn
            variant="primary"
            type="submit"
            class="auth-btn w-100 h-34-px gilroy-b"
            @click="signup"
            :disabled="submitting || !terms"
          >
            <b-spinner small v-if="submitting" class="mr-2"></b-spinner>
            <span v-if="emailQuery">Join Your Team</span>
            <span v-else>Get Access</span>
          </b-btn>
        </b-form>
      </validation-observer>
      <p class="mt-40-px mx-2 mx-md-0 f-14-px text-center">
        <span class="text-secondary mr-2">Already have account?</span>
        <span class="text-primary cursor-pointer" @click="gotoLogin"
          >Log in Here</span
        >
      </p>
    </div>

  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import BUS from "@/bus/event";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      companyName: "",
      companySize: "",
      email: "",
      password: "",
      terms: false,
      submitting: false,
      showPass: false
    };
  },
  created(){
    if(this.invitedCompanyName) this.companyName = this.invitedCompanyName
    if(this.emailQuery) this.email = this.emailQuery
  },
  computed: {
    invitedCompanyName() {
      return this.$route.query.company;
    },
    emailQuery(){
      return this.$route.query.email
    },
    tokenQuery(){
      return this.$route.query.token
    },
  },
  methods: {
    ...mapActions("USER", ["REQUEST_ACCESS"]),
    ...mapActions("USER", ["LOGIN", "SIGNUP"]),
    ...mapActions("ORGANIZATION", ["FETCH_ORGANIZATIONS"]),
    ...mapMutations("USER", ["SET_ORGANIZATION_INDEX"]),
    async signup() {
      this.submitting = true;
      let isValid = await this.$refs.signupFormObserver.validate();
      if (!isValid) {
        this.submitting = false;
        return;
      }
      try {
        let payload = {
          first_name: this.firstName,
          last_name: this.lastName,
          company_name: this.invitedCompanyName || this.companyName,
          email: this.email
          // password: this.password
        };
        console.log('PAY', payload)
        if(this.emailQuery){
          payload.password = this.password
          payload.invite_token = this.tokenQuery
          let res = await this.SIGNUP(payload);
          let payload_dev = {
            email: this.emailQuery,
            password: this.password
          };
          let res2 = await this.LOGIN(payload_dev);
          let organizations = await this.FETCH_ORGANIZATIONS();
          if (organizations.length == 1) this.SET_ORGANIZATION_INDEX(0);
          this.$router.push({ name: "Dashboard" });
        }else{
          let res = await this.REQUEST_ACCESS(payload);
          BUS.$emit(
            "msg-modal",
            "Request Sent Successfully.\nPlease verify your email."
          );
          this.$emit("done", this.firstName);
        }
        this.resetForm();
      } catch (e) {
        console.log(e);
        let errors = {};
        Object.keys(e).forEach(key => {
          errors[key.charAt(0).toUpperCase() + key.slice(1)] = e[key];
        });
        this.$refs.signupFormObserver.setErrors(errors);
      }
      this.submitting = false;
    },
    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.companyName = "";
      this.email = "";
      this.password = "";
      this.$refs.signupFormObserver.validate();
    },
    gotoLogin() {
      this.$router.push({ name: "Login" });
    },
    toggleShowPass() {
      this.showPass = !this.showPass;
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    }
  }
};
</script>

<style lang="sass" scoped>
.signup-form-card
  max-width: 484.6px

  ::v-deep .aggree-terms
    label span
      display: flex
      align-items: center
      margin-top: 1.5px
</style>
