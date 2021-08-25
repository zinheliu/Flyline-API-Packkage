<template>
  <div class="seat-mapping">
    <div class="seat-mapping-wrapper">
      <div v-for="(seatData, sdI) in seatmap.seats" :key="sdI" class="seat-list-wrapper">
        <div class="fl-row mb-2" v-for="(row, rI) in groupby(seatData.data)" :key="rI">
          <div class="d-flex justify-content-between emergency-exit-row" v-if="row[0].position_type == 'EXIT_ROW'">
            <exit-gate />
            <exit-gate iconPosition="right" />
          </div>
          <div class="d-flex" v-else>
            <div v-for="(seat, stI) in row" :key="stI" :class="[seat.type == 'asile' ? 'mx-auto' : '']">
              <asile class="aisle" v-if="seat.type == 'asile'" :seat="seat" />
              <seat :class="seatClass(row, stI)" :seat="seat" v-else />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Seat from '@/components/SeatMap/Seat'
import ExitGate from '@/components/SeatMap/ExitGate'
import Asile from '@/components/SeatMap/Asile'
export default {
  components: {
    Seat,
    ExitGate,
    Asile,
  },
  props: {
    seatmap: Object
  },
  computed: {
    },
  methods: {
    asileObj(designator){
      return {
        type: 'asile',
        designator
      }
    },
    seatClass(row, stI){
      if(stI != 0 && row[stI-1].type == 'asile') return ''
      if(stI != 0) return 'ml-1'
      return ''
    },
    isAisle(){

    },
    groupby(seats) {
      if(Array.isArray(seats) && seats.length > 0){
        let arr = []
        let rows = (seats.map(s => s.designator.split(' ')[0])).filter((value, index, self) => self.indexOf(value) === index)
        rows.forEach(row =>{
          let sArr = seats.filter(s => s.designator.startsWith(row))
          if(sArr.length == 2){
            sArr.splice(1, 0 , this.asileObj(row))
          }else if(sArr.length == 3){
            sArr.splice(1, 0 , this.asileObj(row))
            sArr.splice(3, 0 , this.asileObj(row))
          }else if(sArr.length == 4){
            sArr.splice(2, 0 , this.asileObj(row))
          }else if(sArr.length == 5){
            sArr.splice(2, 0 , this.asileObj(row))
            sArr.splice(4, 0 , this.asileObj(row))
          }else if(sArr.length == 6){
            sArr.splice(3, 0 , this.asileObj(row))
          }else if(sArr.length == 7){
            sArr.splice(3, 0 , this.asileObj(row))
            sArr.splice(5, 0 , this.asileObj(row))
          }else if(sArr.length == 8){
            sArr.splice(3, 0 , this.asileObj(row))
            sArr.splice(6, 0 , this.asileObj(row))
          }
          if(sArr.length > 0) arr.push(sArr)
        })
        return arr
      }
      return []
    },
  },
}
</script>

<style lang="sass" scoped>
.seat-mapping
  overflow-x: auto
  .seat-mapping-wrapper
    display: flex
    flex-flow: column
    width: max-content
    .seat-list-wrapper
      width: 100%
      .fl-row
        .emergency-exit-row
          height: 46px
          display: flex
          align-items: center
</style>