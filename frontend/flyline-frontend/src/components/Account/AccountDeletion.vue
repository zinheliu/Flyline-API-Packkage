<template>
  <div class="account-deletion">
    <!-- <div
      class="dashboard-toolbar d-flex justify-content-between align-items-center mb-3"
    >
      <p class="mb-0 dashboard-title-text">Account Deletation</p>
    </div>
    <p class="mb-0 mt-10-px description-text text-left gilroy-m">
      Once you delete your account, you will no longer have access to FlyLine
      Apps and API's, all pending organization invitations will be revoked as
      well as organization memberships. if you'd like to delete your account,
      reach out to us at
      <span class="text-primary">hello@flyline.io</span>
    </p> -->
    <img src="@/assets/images/svg/no_billing_info_icon.svg" alt="" />
    <p class="mb-3 card-header-text gilroy-b text-center mt-4">Account Deletation</p>
    <p class="mb-0 card-desc-text mx-auto">
      Once you delete your account, you will no longer have access to FlyLine
      Apps and API's, all pending organization invitations will be revoked as
      well as organization memberships. if you'd like to delete your account,
      reach out to us at
      <span class="gilroy-b text-primary cursor-pointer" @click="openEmail">hello@flyline.io</span>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    openEmail() {
      window.location.href = "mailto:hello@flyline.io?subject=&body=";
    }
  }
};
</script>

<style lang="sass" scoped>
.account-deletion
  .description-text
    width: 900
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 2
    letter-spacing: normal
    color: #707070
  .card-desc-text
    max-width: 600px 
    color: rgb(112, 112, 112)
    font-size: 14px;line-height: 2
</style>
