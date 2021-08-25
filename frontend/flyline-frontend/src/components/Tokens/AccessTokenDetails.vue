<template>
  <div class="token-details text-left">
    <div class="source-info d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mb-4">
      <p class="mb-0 group-name gilroy-b mb-12-px">Production</p>
    </div>
    <div class="details-div d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-md-2">
      <p class="detail-title-text gilroy-b mb-2 mb-md-0">Type</p>
      <p class="detail-desc-text gilroy-b mb-0 mb-md-0">Live</p>
    </div>
    <div class="dash w-100 my-2"></div>
    <div class="details-div d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-md-2">
      <p class="detail-title-text gilroy-b mb-2 mb-md-0">Scope</p>
      <p class="detail-desc-text gilroy-b mb-0 mb-md-0">Read and Write</p>
    </div>
    <div class="dash w-100 my-2"></div>
    <div class="details-div d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-md-2">
      <p class="detail-title-text gilroy-b mb-2 mb-md-0">Last used</p>
      <p class="detail-desc-text gilroy-b mb-0 mb-md-0">1 day ago</p>
    </div>
    <div class="dash w-100 my-2"></div>
    <div class="details-div d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-md-2">
      <p class="detail-title-text gilroy-b mb-2 mb-md-0">Created at</p>
      <p class="detail-desc-text gilroy-b mb-0 mb-md-0">Thu, 13 Aug 2020, 05:30</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import '../../styles/inventory-source'
.token-details
  .group-name
    font-size: 24px
  .details-div
    .detail-title-text
      color: #333333
      font-size: 14px
    .detail-desc-text
      color: #797979
      font-size: 12px
        
</style>