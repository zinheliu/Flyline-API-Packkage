<template>
  <div>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <b-icon icon="patch-exclamation" font-scale="4" class="" variant="primary"></b-icon>
      <p class="mb-4 mt-4 txt text-center">Are you sure you want to Remove?</p>
      <div class="d-flex">
        <b-btn class="custom-btn mr-3" @click="rmv">
          <b-spinner small class="mr-2" v-if="submitting" />
          Remove
        </b-btn>
        <b-btn class="custom-btn btn-error" @click="close">
          Close
        </b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    successFunc: Function,
    param1: Object
  },
  data(){
    return {
      submitting: false,
    }
  },
  methods:{
    async rmv(){
      if(this.submitting) return
      this.submitting = true
      await this.successFunc(this.param1)
      this.submitting = false
      this.close()
    },
    close(){
      this.$emit('close')
    },
  },
}
</script>

<style lang="sass" scoped>
.btn-error
  background-color: #EA4D44 !important
  border: 1px solid #EA4D44
  &:hover, &:active, &:focus
    border: 1px solid #EA4D44

.txt
  color: #707070
.icon
  color: #707070
</style>