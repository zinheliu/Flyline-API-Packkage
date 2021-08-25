<template>
  <div :class="['code d-flex']">
    <!-- <div
      :class="[
        'code-wrapper d-flex flex-column justify-content-center w-100',
        !showText && !showCopy
          ? 'flex-md-column'
          : !showText
          ? 'flex-md-row'
          : '',
        showCopy ? 'width-minus-copy' : 'w-100'
      ]"
    > -->
    <div class="d-flex w-100 flex-column code-wrapper">
      <!-- <div
        :class="[
          'd-flex justify-content-between title-part mb-2 mb-md-0',
          showText ? 'min-height' : 'order-md-2'
        ]"
      >
        <p class="code-text float-left mb-2" v-if="showText">{{title}}</p>
      </div> -->
      <div :class="['d-flex justify-content-between align-items-center title-part mb-2 mb-md-0']">
        <p class="mb-0">{{title}}</p>
        <div class="d-flex">
          <b-select @change="onLanChange" :options="languageOptions" v-model="language" v-if="languageOptions" class="lan-opt"></b-select>
          <div class="cpy-icon-wrapper ml-3">
            <div class="cpy-icon">
              <b-icon icon="clipboard" class="cursor-pointer" font-scale="0.9" v-b-tooltip.hover="cpyTootTip" @click="copy"></b-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- <pre
        :class="['code-text__code mb-0 py-3', codeTextColor]"
        ref="codeText"
        >{{ code }}</pre
      > -->
      <prism-editor
        ref="codeText"
        :tabSize="4"
        v-model="code"
        readonly
        :highlight="highlighter"
        :line-numbers="lineNumbers"
      />
      <b-btn
        :class="['custom-btn display-response-btn ml-auto mt-3']"
        v-if="displayRes"
        @click="showResponse = !showResponse"
      >
        {{ showResponse ? "Hide Response" : "Display Response" }}
        <img class="ml-2 arrow-right-img" src="@/assets/images/svg/arrow_2.svg" alt="">
      </b-btn>
      <prism-editor
        v-if="showResponse"
        :tabSize="4"
        v-model="code"
        readonly
        :highlight="highlighter"
        :line-numbers="lineNumbers"
      />
      <!-- <pre
        v-if="showResponse"
        :class="['code-text__code mb-0 py-3', codeTextColor]"
        ref="codeText"
        >{{ code }}</pre
      > -->
    </div>
  </div>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
export default {
  components: {
    PrismEditor
  },
  props: {
    code: String,
    showText: {
      type: Boolean,
      default: true
    },
    showCopy: {
      type: Boolean,
      default: true
    },
    codeTextColor: String,
    displayRes: Boolean,
    title: {
      type: String,
      default: 'Text'
    },
    languageOptions: Array,
    selectedLanguage: Object,
  },
  created(){
    this.setLanguage()
  },
  data() {
    return {
      showResponse: false,
      lineNumbers: true,
      cpyTootTip: 'Copy',
      language: null,
    };
  },
  watch:{
    selectedLanguage(v){
      this.setLanguage()
    },
  },
  methods: {
    onLanChange(){
      this.$emit('lang', this.language)
    },
    setLanguage(){
      if(this.selectedLanguage) this.language = this.selectedLanguage.value
    },
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
    copyToClipBoard(str) {
      const el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    copy() {
      let pre = this.$refs.codeText.$el.querySelector("pre");
      this.copyToClipBoard(pre.textContent);
      this.cpyTootTip = 'Copied!'
      setTimeout(()=>{
        this.cpyTootTip = 'Copy'
      }, 1000)
    }
  }
};
</script>

<style lang="sass" scoped>
.code
  // padding: 13px 25px
  // border-radius: 4px
  // border: solid 1px rgba(14, 49, 120, 0.1)
  // background-color: #ffffff
  // border: solid 1.9px #e9e9e9
  // background-color: #ffffff
  // max-height: 578px
  // overflow: auto
  .code-copy-btn
    width: 86px
    // height: 48px
    padding: 2.5px 18px
    border-radius: 4px
    border: solid 1px #193a7e
    background-color: #ffffff
    font-size: 12px
    font-weight: normal
    color: #707070
    right: 0
    top: 0px
    &:hover
      background-color: #203BE7
      color: #ffffff
      border-color: #203BE7
  .code-wrapper
    .title-part
      // background-color: #3C4356
      background-color: #E3E8ED
      padding: 0 10px
      min-height: 40px
      border-top-left-radius: 10px
      border-top-right-radius: 10px
      p
        color: #333333
        line-height: normal
      &.min-height
        height: 30px
        @media screen and (max-width: 800px)
          height: 50px
    .code-text
      font-size: 16px
      font-weight: 600
      color: #707070
      &__code
        width: 100%
        // width: calc( 100% - 86px )
        // @media screen and (max-width: 800px)
        //   width: 100%
    .cpy-icon-wrapper
      display: flex
      align-items: center
      .cpy-icon
        padding-left: 10px
        border-left: solid 1px #ffffff
    .lan-opt
      height: 22px
      padding: 0 20px
      font-size: 14px
      // color: #ffffff
      color: #333333
      line-height: 1.75
      background: transparent url("../assets/images/svg/select-icon.svg") right 0.25rem center/16px 16px no-repeat
      border: none
      &:active , &:focus
        border: none
        box-shadow: none

.display-response-btn
  height: 45px
  border-radius: 4px
  font-size: 16px
  font-weight: 600
  display: flex
  align-items: center
  &:hover
    background-color: #203BE7
    color: #ffffff
    border-color: #203BE7
</style>
