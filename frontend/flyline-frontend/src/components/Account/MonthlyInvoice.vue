<template>
  <div class="monthly-invoice">
    <div class="dashboard-toolbar px-2 px-md-3 d-flex justify-content-between align-items-center mb-3">
      <p class="mb-0 dashboard-title-text text-left">Monthly Invoices</p>
      <p class="mb-0 text-primary cursor-pointer view-all">
        <span class="">Download All</span>
      </p>
    </div>
    <div class="table-section">
      <b-table :items="items" :fields="fields" class="shrink-table pay-as-you-go-table">
        <template #cell(total)="row">
          <span class="total-amount">{{row.item.total}}</span>
        </template>
        <template #cell(actions)="row">
          <span class="text-primary">Download</span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[
        {
          month: 'November 1st - November 30th',
          total: 'Total : $134.00'
        },
        {
          month: 'November 1st - November 30th',
          total: 'Total : $134.00'
        },
      ],
      fields:[
        { key: 'month', label: 'Invoice Month', tdClass: 'full-w-mob' },
        { key: 'total', label: 'Invoice Total', tdClass: 'full-w-mob' },
        { key: 'actions', label: 'Download', tdClass: 'text-md-right', thClass: 'text-md-right' },
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
</style>