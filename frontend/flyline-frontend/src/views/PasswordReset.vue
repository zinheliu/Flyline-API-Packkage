<template>
  <div class="request-password-reset-page h-100 d-flex flex-column">
    <div class="auth-logo mb-40-px mx-auto cursor-pointer" @click="goTo('Landing')">
    </div>
    <div class="auth-card pt-46-px pb-20-px text-left mx-auto w-100" v-if="invalid">
      <p class="auth-title mb-15-px">Bad Request</p>
      <p class="f-14-px text-secondary mb-20-px">Invalid Request</p>
    </div>
    <div class="auth-card pt-46-px pb-20-px text-left mx-auto w-100" v-else>
      <p class="auth-title mb-15-px">Password reset</p>
      <p class="f-14-px text-secondary pass-res-desc mb-20-px">Your password has been cleared, enter your new password below to finish resetting your password.</p>
      <validation-observer ref="FPassFormObserver" v-slot="{ handleSubmit }">
        <b-form @submit.stop.prevent="handleSubmit(requestPasswordReset)">
          <validation-provider name="Password" rules="required" v-slot="validationContext">
            <b-input-group class="mt-14-px password-input-group">
              <b-input v-model="password" :type="showPass ? 'text':'password'" placeholder="Password" class="password-field text-field" :state="getValidationState(validationContext)"></b-input>
              <b-input-group-append class="d-flex align-items-center pr-2">
                <b-icon class="cursor-pointer text-secondary hover-primary-color" icon="eye-slash-fill" v-if="!showPass" @click="toggleShowPass"></b-icon>
                <b-icon class="cursor-pointer text-secondary hover-primary-color" icon="eye-fill" v-else @click="toggleShowPass"></b-icon>
              </b-input-group-append>
            </b-input-group>
            <b-form-invalid-feedback :class="[getValidationState(validationContext)?'':'d-block']" v-for="(error, eI) in validationContext.errors" :key="eI">{{error}}</b-form-invalid-feedback>
          </validation-provider>
          <p :class="['my-2 f-14-px', msgType]" v-if="msgType">{{msg}}</p>
          <b-btn variant="primary" class="w-100 auth-btn mb-26-px h-34-px gilroy-b mt-34-px" type="submit" @click="requestPasswordReset" :disabled="submitting">
            <b-spinner small variant="light" class="mr-2" v-if="submitting"></b-spinner>
            Reset Password
          </b-btn>
        </b-form>
      </validation-observer>
    </div>

    <auth-footer class="mt-auto px-3 px-md-0" />
  </div>
</template>

<script>
import AuthFooter from '@/components/Auth/AuthFooter'
import { mapActions, mapGetters } from 'vuex'
export default {
  components:{
    AuthFooter
  },
  data(){
    return {
      password: '',
      showPass: false,

      submitting: false,
      invalid: false,
      msgType: null,
      msg: null
    }
  },
  created(){
    if(!this.secret) this.invalid = true
  },
  computed:{
    ...mapGetters('UTIL', ['dark']),
    email(){
      return this.$route.query.email
    },
    secret(){
      return this.$route.query.secret
    },
  },
  methods:{
    ...mapActions('USER', ['PASSWORD_RESET']),
    async requestPasswordReset(){
      this.submitting = true
      try{
        let isValid = await this.$refs.FPassFormObserver.validate()
        if(isValid){
          let payload = {
            token: this.secret,
            password: this.password
          }
          let data = await this.PASSWORD_RESET(payload)
          this.msgType = 'text-success'
          this.msg = 'Password reset successful. You can login now'
          setTimeout(()=>{
            this.$router.push({name: 'Login'})
          }, 1000)
        }
      }catch(e){
        console.log('error',e)
        let errors = {}
        Object.keys(e).forEach(key => {
          errors[key.charAt(0).toUpperCase() + key.slice(1)] = e[key]
        })
        console.log('errors',errors)
        this.$refs.FPassFormObserver.setErrors(errors)
      }
      this.submitting = false
    },
    toggleShowPass(){
      this.showPass = !this.showPass
    },
    getValidationState({dirty, validated, valid = null}){
      return dirty || validated ? valid : null
    },
    goTo(name){
      this.$router.push({name})
    },
  },
}
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