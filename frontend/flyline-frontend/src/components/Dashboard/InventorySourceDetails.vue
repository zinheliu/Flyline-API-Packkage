<template>
  <div class="inventory-source-details text-left">
    <div
      class="source-info d-flex flex-column flex-md-row justify-content-md-between align-items-md-center"
    >
      <p class="mb-0 group-name gilroy-b mb-12-px">{{ source.group }}</p>
      <div
        class="d-flex flex-column flex-md-row align-items-md-center mt-2 mt-md-0"
      >
        <p class="connected-with-text mb-3 mb-md-0 mr-md-3">Available In</p>
        <div class="connections d-flex">
          <div
            :class="[
              'connection sandbox mr-12-px',
              source.connection.sandbox ? 'conn-active' : ''
            ]"
            v-if="source.connection.sandbox"
          >
            <span class="mr-8-px">Sandbox</span>
          </div>
          <div
            :class="[
              'connection production mr-12-px',
              source.connection.production ? 'conn-active' : ''
            ]"
            v-if="source.connection.production"
          >
            <span class="mr-8-px">Production</span>
          </div>
          <div
            :class="[
              'connection development',
              source.connection.development ? 'conn-active' : ''
            ]"
            v-else-if="source.connection.development"
          >
            <span class="mr-8-px">In Development</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="details-div d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mt-4 mt-md-5 py-md-2"
    >
      <p class="detail-title-text gilroy-b mb-0">Included airlines</p>
      <div class="airlines mb-13-px d-flex align-items-center">
        <!-- <img class="mr-1" :src="airline.photo" alt="" v-for="(airline, pI) in source.airlines" :key="pI"> -->
        <span class="detail-desc-text gilroy-b">{{ source.group }}</span>
        <span
          class="overflow-airlines__more gilroy-b ml-3"
          v-if="source.moreText"
          >{{ source.moreText }}</span
        >
      </div>
    </div>
    <div v-for="(status, sI) in source.status" :key="sI">
      <div class="dash w-100 mb-2"></div>
      <div
        class="details-div d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-md-2"
      >
        <p class="detail-title-text gilroy-b mb-2 mb-md-0">{{status.text}}</p>
        <p class="detail-desc-text gilroy-b mb-0 mb-md-0">{{status.value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    source: Object
  }
};
</script>

<style lang="sass" scoped>
@import '../../styles/inventory-source'
.inventory-source-details
  .details-div
    .detail-title-text
      color: #333333
      font-size: 14px
    .detail-desc-text
      color: #797979
      font-size: 12px
</style>
