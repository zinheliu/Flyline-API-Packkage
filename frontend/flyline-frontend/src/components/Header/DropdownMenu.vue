<template>
  <div class="drp d-flex align-items-center h-100">
    <div class="drp-info d-flex align-items-center">
      <b-dropdown class="user-menu" ref="drp" >
        <template #button-content>
          <div class="d-flex align-content-center">
            <span class="d-none d-lg-flex align-items-center user-name">{{title}}</span>
          </div>
        </template>
        <div class="de-menus">
          <p v-for="(menu, mI) in menus" :key="mI" class="dr-menu-item gilroy-b cursor-pointer" @click="goTo(menu.to)">{{menu.title}}</p>
        </div>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'menus'],
  methods:{
    close(){
      this.$refs.drp.hide()
    },
    goTo(name){
      if(name){
        this.$router.push({name})
        this.close()
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.drp
  ::v-deep .dropdown-toggle
    background: unset !important
    padding: 0 !important
  ::v-deep .user-menu
    button
      background-color: transparent
      // max-width: 180px
      width: 100%
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      font-size: 14px
      font-stretch: normal
      font-style: normal
      font-family: GILROY-BOLD
      letter-spacing: normal
      color: #333333
      outline: none
      box-shadow: none
      border: none
      padding: 0
      padding-right: 28px
      background: transparent url('../../assets/images/svg/arrow.svg') no-repeat right -2px center/25px 6px
      @media screen and (max-width: 1100px)
        padding-right: 0px
      &::after
        display: none
      &:focus , &:hover , &:active
        outline: none
        box-shadow: none !important
        border: none
        background: transparent url('../../assets/images/svg/arrow.svg') no-repeat right -2px center/25px 6px
        color: #333333

    ul
      @media screen and (max-width: 800px)
        display: none
    .dropdown-menu
      margin-top: 25px
      border-radius: 10px
      box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.1)
      background-color: #ffffff
      width: 234px
      border: none
      padding: 35px 20px 25px 47px
      left: calc( 64% - (234px/2) ) !important
      .dr-menu-item
        font-size: 14px
        font-stretch: normal
        font-style: normal
        line-height: 1.43
        letter-spacing: normal
        color: #333333
        margin-bottom: 30px
        &.logout
          color: #EA4D44
</style>
