<template>
  <div class="aircraft-seat-info">
    <div class="aircraft-seat-info-wrapper px-3 px-lg-4 py-5">
      <p class="c-title">Additional Aircraft Information</p>
      <div class="table-section">
        <b-table :items="seatmap.seats" :fields="fields" class="shrink-table sandbox-tokens-table">
          <template #cell(actions)>
            <b-icon icon="chevron-right" scale="1.1"></b-icon>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seatmap: Object
  },
  data(){
    return {
      fields:[
        { key: 'cabin_class', label: 'Cabin Class', },
        { key: 'seat_count', label: 'Number of Seats' },
        { key: 'seat_pitch', label: 'Seat Pitch' },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.aircraft-seat-info
  .aircraft-seat-info-wrapper
    border-radius: 4px
    border: solid 1.8px #edeef6
    background-color: #ffffff
    .c-title
      font-size: 18px
      font-family: GILROY-BOLD
      font-stretch: normal
      font-style: normal
      line-height: normal
      letter-spacing: -0.36px
      color: #000000
</style>