<template>
  <div class="dashboard-card">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.dashboard-card
  border-radius: 10px
  // box-shadow: 0 8px 16px 0 rgba(17, 17, 17, 0.04)
  border: solid 1.9px #e9e9e9
  background-color: #ffffff
</style>