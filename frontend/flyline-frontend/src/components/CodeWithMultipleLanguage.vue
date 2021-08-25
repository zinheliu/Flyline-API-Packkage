<template>
  <div class="code-with-multiple-languages">
    <div class="top-bar d-flex justify-content-between align-items-md-end mb-4 flex-column flex-md-row">
      <span class="tb-title gilroy-b">{{title}}</span>
      <!-- <div class="language-options ml-auto ml-md-0 mt-4 mt-md-0" v-if="!hideOptions && hasCodeOption">
        <span 
          v-for="(language, lI) in languageOptions" :key="lI" 
          :class="['language-option gilroy-b hover-primary-color cursor-pointer', selectedLanguage.value == language.value ? 'text-primary' : '']" 
          @click="selectedLanguage = language"
        >{{language.text}}</span>
      </div> -->
    </div>
    <code-view :title="title" :languageOptions="filteredLanOptions" :selectedLanguage="selectedLanguage" @lang="onLanChange" :code="codeBasedOnSelectedLanguage" v-if="codeBasedOnSelectedLanguage" :showText="false" :codeTextColor="'text-primary'" :showCopy="false" />
  </div>
</template>

<script>
import CodeView from '@/components/CodeView'
export default {
  props: ['title', 'code', 'hideOptions'],
  components:{
    CodeView
  },
  data(){
    return {
      languageOptions: [
        { text: 'CURL', value: 'curl' },
        { text: 'Node', value: 'node' },
        { text: 'Ruby', value: 'ruby' },
        { text: 'JavaScript', value: 'js' },
        { text: 'Python', value: 'py' },
      ],
      selectedLanguage: null,
    }
  },
  created(){
    this.selectedLanguage = this.languageOptions[0]
  },
  computed:{
    filteredLanOptions(){
      let codeKeys = Object.keys(this.code)
      return this.languageOptions.filter(l => codeKeys.includes(l.value))
    },
    codeBasedOnSelectedLanguage(){
      if(!this.hasCodeOption) return this.code
      return this.code[this.selectedLanguage.value] 
      || this.code[this.languageOptions[0].value] 
      || ''
    },
    hasCodeOption(){
      return !(Object.keys(this.code).length == 0 || typeof this.code == 'string')
    },
  },
  methods:{
    onLanChange(v){
      this.selectedLanguage = this.languageOptions.find(l => l.value == v)
    },
  },
}
</script>

<style lang="sass" scoped>
.code-with-multiple-languages
  .top-bar
    .tb-title
      font-size: 22px
      font-stretch: normal
      font-style: normal
      line-height: 1.55
      letter-spacing: normal
      color: #333333
    .language-options
      .language-option
        font-size: 14px
        font-stretch: normal
        font-style: normal
        line-height: 2.43
        letter-spacing: normal
        margin-left: 20px
        color: #b1b1b1
        &:nth-child(1)
          margin-left: 0
</style>