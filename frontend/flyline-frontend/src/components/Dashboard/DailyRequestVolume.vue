<template>
  <div class="daily-resuest-volume">
    <div class="dashboard-toolbar d-flex justify-content-between align-items-center mb-3">
      <p class="mb-0 dashboard-title-text">Daily Request Volume</p>
      <p class="mb-0 text-primary view-all">
        <span class="mr-2">View All</span>
        <b-icon icon="chevron-right" scale="1.1"></b-icon>
      </p>
    </div>
    <div class="table-section">
      <b-table :items="recentSearches" :fields="fields" class="shrink-table daily-resuest-volume-table"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      recentSearches:[
        {
          time: 'Des 16, 2020 11:00 AM',
          from: {'code': 'DFW','type': 'city'},
          to: {'code': 'NYC','type': 'city'},
          departure: '12/22/2021',
          return: '12/22/2021'
        },
        {
          time: 'Des 16, 2020 11:00 AM',
          from: {'code': 'DFW','type': 'city'},
          to: {'code': 'NYC','type': 'city'},
          departure: '12/22/2021',
          return: '12/22/2021'
        },
        {
          time: 'Des 16, 2020 11:00 AM',
          from: {'code': 'DFW','type': 'city'},
          to: {'code': 'NYC','type': 'city'},
          departure: '12/22/2021',
          return: '12/22/2021'
        },
        {
          time: 'Des 16, 2020 11:00 AM',
          from: {'code': 'DFW','type': 'city'},
          to: {'code': 'NYC','type': 'city'},
          departure: '12/22/2021',
          return: '12/22/2021'
        },
      ],
      fields:[
        { key: 'time', label: 'TIMESTAMP', },
        { key: 'from', label: 'FROM' },
        { key: 'to', label: 'TO' },
        { key: 'departure', label: 'DEPARTURE' },
        { key: 'return', label: 'RETURN' },
      ]
    }
  },
}
</script>

<style lang="sass" scoped>

</style>