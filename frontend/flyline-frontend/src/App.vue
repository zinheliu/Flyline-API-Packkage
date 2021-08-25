<template>
  <div id="app">
    <router-view :class="[dark?'dark-mode':'']" />
    <modal :modal="msgModal" @change="toggleMsgModal" size="sm">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <b-icon icon="patch-check" font-scale="4" variant="primary"></b-icon>
        <p class="mb-0 mt-4 text-primary">{{msg}}</p>
      </div>
    </modal>
    <modal :modal="warningMsgModal" @change="toggleWarningMsgModal" size="sm">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <b-icon icon="patch-exclamation" font-scale="4" variant="primary"></b-icon>
        <p class="mb-0 mt-4 text-primary">{{msg}}</p>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/Modals/Modal'
import BUS from '@/bus/event'
import { mapGetters } from 'vuex'
export default {
  components:{
    Modal
  },
  data(){
    return {
      msg: null,
      msgModal: false,
      warningMsgModal: false,
    }
  },
  created(){
    this.setupBus()
  },
  watch:{
    msgModal(v){
      if(v) setTimeout(() => this.msgModal = false , 500)
    }
  },
  computed:{
    ...mapGetters('UTIL', ['dark']),
  },
  methods:{
    setupBus(){
      BUS.$on('msg-modal', msg => {
        this.msg = msg
        this.msgModal = true
      })
      BUS.$on('warning-msg-modal', msg => {
        this.msg = msg
        this.warningMsgModal = true
      })
    },
    toggleMsgModal(v){
      if(v != this.msgModal)
        this.msgModal = false
    },
    toggleWarningMsgModal(v){
      if(v != this.warningMsgModal)
        this.warningMsgModal = false
    },
  },
}
</script>

<style lang="scss">
html, body, #app{
  height: 100%;
  width: 100%;
}
#app {
  font-family: GILROY-MEDIUM, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
