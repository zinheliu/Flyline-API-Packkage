<template>
  <div class="team-info-sub-header d-flex">
    <div
      class="user-avatar d-flex justify-content-center align-items-center mr-3"
    >
      <img
        v-if="currentOrganization.organization.avatar"
        :src="currentOrganization.organization.avatar"
        alt=""
        class="w-100 h-100"
      />
      <span v-else class="gilroy-b">{{ currentOrganization.organization.name[0] }}</span>
    </div>
    <div class="team-info text-left">
      <p class="mb-0 team-name gilroy-b d-flex align-items-center">
        <span class="mr-3">{{currentOrganization.organization.name}}</span>
        <!-- <b-icon icon="chevron-down" scale="1" class=""></b-icon> -->
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("USER", ["currentOrganization"])
  }
};
</script>

<style lang="sass" scoped>
.team-info-sub-header
  .team-info
    max-width: 299px
    .team-name
      margin-top: 7px
      font-size: 16px
      font-stretch: normal
      font-style: normal
      line-height: 1.45
      letter-spacing: normal
      color: #333333
      @media screen and (max-width: 800px)
        font-size: 18px
    .team-small-desc
      font-size: 14px
      font-weight: 500
      font-stretch: normal
      font-style: normal
      line-height: 1.43
      letter-spacing: normal
      color: #b1b1b1
</style>
