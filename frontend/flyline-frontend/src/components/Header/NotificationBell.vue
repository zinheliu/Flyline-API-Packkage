<template>
  <div class="bell-wrapper">
    <b-icon icon="bell" scale="1.5"></b-icon>
    <p class="mb-0 badge-number">2</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.bell-wrapper
  position: relative
  width: 40px
  height: 38px
  display: flex
  align-items: center
  justify-content: center
  .badge-number
    width: 19px
    height: 19px
    display: flex
    justify-content: center
    align-items: center
    background-color: #3abb74
    font-size: 8px
    line-height: 1.25
    color: #ffffff
    border-radius: 50%
    position: absolute
    right: 0
    top: 0
</style>