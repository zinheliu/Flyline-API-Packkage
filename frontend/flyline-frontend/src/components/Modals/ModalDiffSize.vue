<template>
  <b-modal :size="size" v-model="inviteModal" :content-class="modalClass" hide-footer hide-header centered @change="toggle">
    <b-icon icon="x" class="close-icon" font-scale="1.7" @click="closeModal"></b-icon>
    <slot />
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props:{
    modal: Boolean,
    size: {
      type: String,
      default: 'md'
    }
  },
  data(){
    return {
      inviteModal: false,
    }
  },
  created(){
    this.inviteModal = this.modal || false
  },
  watch:{
    modal(v){
      this.inviteModal = v
    }
  },
  computed:{
    ...mapGetters('UTIL', ['dark']),
    modalClass(){
      let classes = 'custom-modal'
      if(this.dark) classes += ' dark'
      return classes
    },
  },
  methods:{
    toggle(v){
      this.inviteModal = v
      this.$emit('change', this.inviteModal)
    },
    closeModal(){
      this.toggle(false)
    },
  },
}
</script>

<style lang="sass" scoped>
::v-deep .custom-modal
  border-radius: 10px
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05)
  border: solid 1px rgba(14, 49, 120, 0.1)
  background-color: #ffffff
  padding: 46px
  position: relative
  .modal-body
    padding: 0
  @media screen and (max-width: 800px)
    padding: 15px
  .close-icon
    display: none
    @media screen and (max-width: 800px)
      display: block
      position: absolute
      right: -10px
      top: -10px

</style>