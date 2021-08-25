<template>
  <div class="signup-left-banner pb-5 h-100 d-flex flex-column align-items-center pt-82-px">
    <div class="inner-wrapper ml-auto mr-70-px">
      <div class="logo cursor-pointer" @click="goHome">
        <img src="@/assets/images/svg/flyline_logo.svg" alt="" class="w-100 h-100">
      </div>
      <p class="title-text text-left signup-banner-title mt-30-px mb-20-px">What will you build, with our developer toolkit</p>
      <div class="quick-descriptions-wrapper">
        <div class="quick-description d-flex mb-10-px" v-for="(quickDescription, qDI) in quickDescriptions" :key="qDI">
          <div class="checkbox-part text-left">
            <b-icon icon="check-square-fill" class="icon mt-20-px"></b-icon>
          </div>
          <div class="title-subtitle-part">
            <p class="q-d-title text-left mb-4-px">{{quickDescription.title}}</p>
            <p class="q-d-subtitle text-left">{{quickDescription.subtitle}}</p>
          </div>
        </div>
      </div>

      <div class="dev-doc-img">
        <img src="@/assets/images/svg/Documentation_Image.svg" alt="" class="w-100 h-100">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      quickDescriptions:[
        {
          title: 'Quick Description',
          subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting '
        },
        {
          title: 'Quick Description',
          subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting '
        },
        // {
        //   title: 'Quick Description',
        //   subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting '
        // },
      ]
    }
  },
  methods:{
    goHome(){
      this.$router.push({name: 'Landing'})
    },
  },
}
</script>

<style lang="sass" scoped>
.signup-left-banner
  .inner-wrapper
  .logo
    width: 178px
    height: 28px
  .signup-banner-title
    max-width: 391px

  .quick-description
    .checkbox-part
      width: 62px
      .icon
        color: #0E3178
    .title-subtitle-part
      width: calc(100% - 62px)
      .q-d-title
        font-size: 18px
        font-weight: bold
        color: #0e3178
      .q-d-subtitle
        max-width: 329px
        font-size: 16px
        letter-spacing: normal
        color: #1e3668

  .dev-doc-img
    max-width: 500px
    max-height: 250px
    width: 100%
    height: 100%


</style>