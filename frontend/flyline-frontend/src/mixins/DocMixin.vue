<template>
  <div></div>
</template>

<script>
import EventBus from '@/bus/event'
export default {
  data(){
    return {
      prevSection: null,
      scrollFactor: 0
    }
  },
  mounted(){
    this.scrollFactor = window.innerHeight / 2.5
    this.scrollToSectionAsParam(180)
    window.onscroll = this.windowScrollHandler
    EventBus.$on('scroll-to-doc-section', (offset) => {
      console.log(offset)
      window.onscroll = null
      this.scrollToSectionAsParam(offset)
      window.onscroll = this.windowScrollHandler
    })
  },
  methods: {
    scrollToSectionAsParam(offset){
      if(this.$route.params.section){
        let sec = document.getElementById(this.$route.params.section)
        if(sec) sec.scrollIntoView()
      }else if(window.scrollY > 0) {
        let sec = document.getElementById('overview')
        if(sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
      }
      if(offset) window.scrollTo(0, window.scrollY - offset)
    },
    windowScrollHandler(){
      let sections = [...document.querySelectorAll('section')]
      if(sections.length > 0) this.scrollFactor = Math.max(this.scrollFactor, (sections[0].offsetTop - 10))
      for(let key in  sections) {
        let section = sections[key]
        if(
          (window.scrollY + this.scrollFactor) > section.offsetTop 
          && (window.scrollY + this.scrollFactor) < (section.offsetTop + section.offsetHeight)
        ){
          if(this.prevSection == section.id) break

          if(this.$route.params.section != section.id) 
            this.$router.replace({
              name: this.$route.name,
              params: {
                section: section.id
              }
            })
          this.prevSection = section.id
          break
        }
      }
    },
    goTo(name){
      this.$router.push({name})
      EventBus.$emit('scroll-to-doc-section')
    },
  },
}
</script>

<style>

</style>