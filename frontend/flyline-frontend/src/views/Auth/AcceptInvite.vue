<template>
  <div class="user-activate-page h-100 d-flex flex-column">
    <div class="auth-logo mb-40-px mx-auto cursor-pointer" @click="goTo('Landing')">
      <img v-if="dark" src="@/assets/images/svg/flyline_logo_dark.svg" alt="" class="h-100 w-100">
      <img v-else src="@/assets/images/svg/flyline_logo.svg" alt="" class="h-100 w-100">
    </div>
    <validation-observer ref="formObserver">
      <div class="d-flex justify-content-center align-items-center verifying" v-if="submitting">
        <span class="text-primary">Accepting Invitation</span>
        <b-spinner small variant="primary" class="ml-2"></b-spinner>
      </div>
      <div class="auth-card mx-auto py-24-px mt-5" v-if="tokenError">
        <p class="mb-3 auth-title">Oops.. this is an issue</p>
        <p class="text-secondary f-14-px">Your Flyline developer invite has been removed. If you think this is an eror, contact your team.</p>
      </div>
      <div class="d-flex justify-content-center align-items-center verifying" v-if="msg">
        <p :class="['mt-2 f-14-px', msgType]">{{msg}}</p>
      </div>
      <validation-provider name="Detail" v-slot="validationContext">
        <b-form-invalid-feedback :class="['my-1', eI==0 ? 'mt-4':'',getValidationState(validationContext)?'':'d-block']" v-for="(error, eI) in validationContext.errors" :key="eI">{{error}}</b-form-invalid-feedback>
      </validation-provider>

      
      <div class="auth-card py-46-px text-left mx-auto w-100" v-if="success">
        <p class="auth-title mb-15-px">Email has been verified</p>
        <p class="f-14-px text-secondary mb-20-px">Congrats! Your email has been verified, and your account is setup. What will you build with our FlyLine API’s</p>
        <b-btn class="custom-btn mt-45-px continue-btn w-100" @click="goTo('Login')">Continue to Login</b-btn>
      </div>
    </validation-observer>
    <auth-footer class="mt-auto px-3 px-md-0" />
  </div>
</template>

<script>
import AuthFooter from '@/components/Auth/AuthFooter'
import { mapActions, mapGetters } from 'vuex'
import BUS from '@/bus/event'
export default {
  components:{
    AuthFooter
  },
  data(){
    return {
      submitting: false,
      msgType: null,
      msg: null,
      success: false,
      tokenError: false,
    }
  },
  created(){
    if(this.token) this.acceptInvite()
  },
  computed:{
    ...mapGetters('UTIL', ['dark']),
    token(){
      return this.$route.params.token
    },
  },
  methods:{
    ...mapActions('ORGANIZATION', ['ACCEPT_INVITE']),
    async acceptInvite(){
      this.submitting = true
      try{
        let res = await this.ACCEPT_INVITE(this.token)
        this.success = true
        BUS.$emit('msg-modal', 'Invitation Accepted')
        setTimeout(()=>{
          if(res.redirect == 'login') this.$router.push({name: 'Login'})
          else if(res.redirect == 'signup') this.$router.push({name: 'Signup', query: {
            company: res.organization,
            email: res.email,
            token: res.token
          }})
          else if(!res.redirect) {
            this.msg = 'Something went wrong!'
          }
        }, 1000)
      }catch(e){
        console.log('error',e)
        let errors = {}
        Object.keys(e).forEach(key => {
          errors[key.charAt(0).toUpperCase() + key.slice(1)] = e[key]
        })
        console.log('errors',errors)
        this.$refs.formObserver.setErrors(errors)
        if (errors.Message) this.tokenError = true
      }
      this.submitting = false
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
.user-activate-page
  padding: 50px 0 20px 0

  .verifying
    min-height: 70vh
  .continue-btn
    height: 49px
</style>