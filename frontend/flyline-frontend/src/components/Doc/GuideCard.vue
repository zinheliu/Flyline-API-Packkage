<template>
  <div class="guide-card" @click="goTo(guide.to)">
    <p class="guide-title cursor-pointer">{{guide.title}} <b-icon icon="arrow-right-short"></b-icon> </p>
    <p class="guide-subtitle">{{guide.subtitle}}</p>
  </div>
</template>

<script>
export default {
  props:{
    guide: Object
  },
  methods:{
    goTo(name){
      if(name) this.$router.push({name})
    },
  },
}
</script>

<style lang="sass" scoped>
.guide-card
  width: 277.6px
  padding: 27.4px 29.6px 14.6px 24px
  border-radius: 10px
  // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05)
  border: solid 1px rgba(14, 49, 120, 0.1)
  background-color: #ffffff
  @media screen and (max-width: 800px)
    width: 100%
  .guide-title
    font-size: 18px
    font-weight: bold
    font-stretch: normal
    font-style: normal
    line-height: 1.67
    letter-spacing: normal
    color: #333333
  .guide-subtitle
    font-size: 12px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 1.83
    letter-spacing: normal
    color: #707070
</style>