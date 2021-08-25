<template>
  <div class="payment-methods">
    <div class="dashboard-toolbar px-2 px-md-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
      <p class="mb-0 dashboard-title-text text-left">Payment & Billing Methods</p>
      <p class="mb-0 d-flex align-items-center mt-3 mt-md-0">
        <span class="total-amount-this-month gilroy-b">$1,600</span>
        <span class="total-cost-this-month gilroy-b ml-4">Total Cost this Month</span>
      </p>
    </div>
    <div class="table-section">
      <b-table :items="items" :fields="fields" class="shrink-table pay-as-you-go-table">
        <template #cell(card)="row">
          <div class="d-flex align-items-center">
            <span class="">{{row.item.card}}</span>
          </div>
        </template>
        <template #cell(expiry)="row">
          <span class="expiry-text">{{row.item.expiry}}</span>
        </template>
        <template #cell(editAction)="row">
          <span class="text-primary">Edit</span>
        </template>
        <template #cell(deleteAction)="row">
          <b-icon icon="trash" class="ml-2"></b-icon>
        </template>
      </b-table>
    </div>
    <p class="mb-0 add-payment-method gilroy-b text-right mt-4">Add Payment Method</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[
        {
          card: 'MasterCard ending in 4620',
          expiry: '07/20'
        },
        {
          card: 'MasterCard ending in 4620',
          expiry: '07/20'
        },
      ],
      fields:[
        { key: 'card', label: 'Card Type and Name', tdClass: 'full-w-mob' },
        { key: 'expiry', label: 'Exp Date', tdClass: 'full-w-mob' },
        { key: 'editAction', label: 'Edit', thClass: 'action',  },
        { key: 'deleteAction', label: 'Delete', thClass: 'action text-md-center', tdClass: 'text-md-center'  },
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.payment-methods
  .add-payment-method
    font-size: 12px
    font-weight: 600
    font-stretch: normal
    font-style: normal
    line-height: 1.42
    letter-spacing: normal
    color: #00AEEF
  .total-amount-this-month
    font-size: 32px
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #00aeef
  .total-cost-this-month
    font-size: 12px
    font-stretch: normal
    font-style: normal
    letter-spacing: normal
    color: #707070

  ::v-deep .pay-as-you-go-table
    th
      &.action
        max-width: 20px
</style>