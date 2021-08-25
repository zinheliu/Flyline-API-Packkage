<template>
  <div class="py-60-px text-left" style="margin-left: 20px;">
    <div class="wrapper px-3 pr-lg-0 pl-lg-4">
      <p class="c-title">Client libraries</p>
      <p class="c-desc c-desc-m">
        Flyline offers official API libraries for different programming
        languages, which are regularly updated for breaking and non-breaking API
        changes.
      </p>
      <div class="l-s mt-5">
        <div class="lib mb-3 d-flex align-items-center cursor-pointer" @click="goTo({href: 'https://github.com/FlyLine-Development/flyline_node'})">
          <img src="@/assets/images/svg/node.svg" alt="">
          <span class="l-t-1 ml-4">Node</span>
          <span class="l-t-2 ml-3">Flyline_node</span>
          <b-icon icon="arrow-right" class="ml-auto gilroy-b"></b-icon>
        </div>
        <div class="lib mb-3 d-flex align-items-center cursor-pointer" @click="goTo({href: 'https://github.com/FlyLine-Development/flyline_python'})">
          <img src="@/assets/images/svg/download-1.svg" alt="">
          <span class="l-t-1 ml-4">Python</span>
          <span class="l-t-2 ml-3">Flyline_python</span>
          <b-icon icon="arrow-right" class="ml-auto gilroy-b"></b-icon>
        </div>
        <div class="lib mb-3 d-flex align-items-center cursor-pointer" @click="goTo({href: 'https://github.com/FlyLine-Development/flyline_ruby'})">
          <img src="@/assets/images/svg/download-2.svg" alt="">
          <span class="l-t-1 ml-4">Ruby</span>
          <span class="l-t-2 ml-3">Flyline_ruby</span>
          <b-icon icon="arrow-right" class="ml-auto gilroy-b"></b-icon>
        </div>
        <div class="lib mb-3 d-flex align-items-center cursor-pointer" @click="goTo({href: 'https://github.com/FlyLine-Development/flyline_java'})">
          <img src="@/assets/images/svg/download-3.svg" alt="">
          <span class="l-t-1 ml-4">Java</span>
          <span class="l-t-2 ml-3">Flyline_java</span>
          <b-icon icon="arrow-right" class="ml-auto gilroy-b"></b-icon>
        </div>
        <div class="lib d-flex align-items-center cursor-pointer" @click="goTo({href: 'https://github.com/FlyLine-Development/flyline_go'})">
          <img src="@/assets/images/svg/download-4.svg" alt="">
          <span class="l-t-1 ml-4">Go</span>
          <span class="l-t-2 ml-3">Flyline_go</span>
          <b-icon icon="arrow-right" class="ml-auto gilroy-b"></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(item) {
      if (item.href) {
        window.location = item.href;
      } else if (item.to) {
        let obj = { name: item.to };
        this.$router.push(obj);
      } else if (item.path) {
        let obj = { path: item.path };
        this.$router.push(obj);
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.c-title
  font-size: 20px
  font-weight: 800
  font-stretch: normal
  font-style: normal
  font-family: Gilroy-Bold
  line-height: 2
  letter-spacing: normal
  color: #000000
.c-desc
  font-size: 14px
  font-weight: 500
  font-stretch: normal
  font-style: normal
  line-height: 2
  letter-spacing: normal
  color: #707070
  &.c-desc-m
    max-width: 540px

.l-s
  .lib
    width: 100%
    max-width: 570px
    min-height: 72px
    border-radius: 4px
    border: solid 1.9px #e9e9e9
    padding: 0 28px
    img
      &:nth-child(1)
        width: 29px
        height: 32px
      &:nth-child(2)
        width: 28px
        height: 28px
      &:nth-child(3)
        width: 24px
        height: 24px
      &:nth-child(4)
        width: 20px
        height: 37px
      &:nth-child(5)
        width: 42px
        height: 16px
    span
      &.l-t-1
        font-size: 16px
        font-family: GILROY-BOLD
        font-stretch: normal
        font-style: normal
        line-height: 1.88
        letter-spacing: normal
        color: #333333
        min-width: 64px
      &.l-t-2
        font-size: 12px
        font-weight: 500
        font-stretch: normal
        font-style: normal
        line-height: 2.5
        letter-spacing: normal
        color: #333333
</style>
