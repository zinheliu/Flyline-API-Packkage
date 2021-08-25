<template>
  <div>
    <p class="inv-title gilroy-b">Invite a Team Member</p>
    <validation-observer ref="inviteFormObserver" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(invite)">
        <validation-provider name="Email" rules="required|email" v-slot="validationContext">
          <b-input v-model="email" class="inv-text-field" placeholder="Email Address" :state="getValidationState(validationContext)"></b-input>
          <b-form-invalid-feedback v-for="(error, eI) in validationContext.errors" :key="eI">{{error}}</b-form-invalid-feedback>
        </validation-provider>
        <validation-provider name="Role" rules="required" v-slot="validationContext">
          <b-form-select class="inv-select mt-18-px" :options="roleOptions" v-model="selectedRole" :state="getValidationState(validationContext)">
            <template #first>
              <b-form-select-option :value="null" disabled>Role</b-form-select-option>
            </template>
          </b-form-select>
          <b-form-invalid-feedback :class="[getValidationState(validationContext)?'':'d-block']" v-for="(error, eI) in validationContext.errors" :key="eI">{{error}}</b-form-invalid-feedback>
        </validation-provider>
        <validation-provider name="Detail" v-slot="validationContext">
          <b-form-invalid-feedback :class="['my-1', eI==0 ? 'mt-4':'',getValidationState(validationContext)?'':'d-block']" v-for="(error, eI) in validationContext.errors" :key="eI">{{error}}</b-form-invalid-feedback>
        </validation-provider>
        <b-btn class="custom-btn send-inv-btn gilroy-b w-100 mt-32-px" :disabled="submitting" type="submit">
          <b-spinner small variant="light" class="mr-2" v-if="submitting"></b-spinner>
          Send Invitation
        </b-btn>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import InventorySourceDetails from '../Dashboard/InventorySourceDetails.vue'
import BUS from '@/bus/event'
export default {
  components: { InventorySourceDetails },
  props:{
    modal: Boolean
  },
  data(){
    return {
      roleOptions: [
        {text: 'Admin', value: 1},
        {text: 'Member', value: 2},
      ],
      selectedRole: null,
      email: '',
      submitting: false,
    }
  },
  methods:{
    ...mapActions('ORGANIZATION', ['SEND_INVITE']),
    resetForm(){
      this.email = ''
      this.selectedRole = null
      this.$refs.inviteFormObserver.reset()
    },
    async invite(){
      this.submitting = true
      let isValid = await this.$refs.inviteFormObserver.validate()
      try{
        if(isValid){
          const payload = {
            email: this.email,
            role: this.selectedRole
          }
          let res = await this.SEND_INVITE(payload)
          this.resetForm()
          this.$emit('done')
          BUS.$emit('msg-modal', 'Invitation sent')
        }
      }catch(e){
        console.log(e)
        let errors = {}
        Object.keys(e).forEach(key => {
          errors[key.charAt(0).toUpperCase() + key.slice(1)] = e[key]
        })
        console.log(errors)
        this.$refs.inviteFormObserver.setErrors(errors)
      }
      this.submitting = false
    },
    getValidationState({dirty, validated, valid = null}){
      return dirty || validated ? valid : null
    },
  },
}
</script>

<style lang="sass" scoped>
.inv-title
  font-size: 20px
  font-stretch: normal
  font-style: normal
  line-height: 1.45
  letter-spacing: normal
  color: #333333
.inv-text-field , .inv-select
  height: 49px
  opacity: 0.8
  border-radius: 6px
  border: solid 1px #edeef6
  background-color: #ffffff
  color: #707070
  &::placeholder
    color: #707070
  &:focus , &:active
    outline: 0
    box-shadow: none
::v-deep .inv-select
  background: #fff url('../../assets/images/svg/chevron_down.svg') no-repeat right 0.75rem center/16px 10px
  font-size: 16px
  font-stretch: normal
  font-style: normal
  letter-spacing: normal
  color: #707070
.send-inv-btn
  height: 49px
  font-size: 16px
  font-stretch: normal
  font-style: normal
  line-height: 1.44
  letter-spacing: normal
  color: #ffffff

</style>