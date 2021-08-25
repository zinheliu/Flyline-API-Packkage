<template>
  <div class="lan-cover">
    <Signup2 />
  </div>
</template>

<script>
import Signup2 from '@/views/Signup2'
export default {
  components:{
    Signup2
  },
  methods:{
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body="
    },
    goTo(item) {
      if (item.href) {
        window.location = item.href;
      } else if (item.to) {
        let obj = { name: item.to };
        this.$router.push(obj);
        window.scrollTo(0, 0);
      } else if (item.path) {
        let obj = { path: item.path };
        this.$router.push(obj);
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.lan-cover
  @media screen and (min-width: 1100px)
    padding-top: 50px
    height: 100vh
    padding-top: 0
    display: flex
    align-items: center
</style>