<template>
  <div class="py-140-px seatmap-search text-left px-1 px-lg-0">
    <div class="c-width mx-auto">
      <div v-if="!searching">
        <b-row v-for="(seatmap, sI) in seatmaps" :key="sI">
          <b-col cols="12" lg="7">
            <aircraft :seatmap="seatmap" />
            <seat-mapping-key :seatmap="seatmap" class="mt-5" />
            <aircraft-seat-info :seatmap="seatmap" class="mt-5" />
            <interior-aircraft-photos :seatmap="seatmap" class="mt-5" />
          </b-col>
          <b-col cols="12" lg="5" class="seatmap-sec">
            <div class="mt-3 mt-lg-0">
              <seat-mapping :seatmap="seatmap" />
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Aircraft from '@/components/SeatMap/Aircraft'
import SeatMappingKey from '@/components/SeatMap/SeatMappingKey'
import AircraftSeatInfo from '@/components/SeatMap/AircraftSeatInfo'
import InteriorAircraftPhotos from '@/components/SeatMap/InteriorAircraftPhotos'
import SeatMapping from '@/components/SeatMap/SeatMapping'
import { mapActions } from 'vuex'
export default {
  components: {
    Aircraft,
    SeatMappingKey,
    AircraftSeatInfo,
    InteriorAircraftPhotos,
    SeatMapping,
  },
  data(){
    return {
      searching: true,
      seatmaps: []
    }
  },
  created(){
    this.searchSeat()
  },
  methods: {
    ...mapActions('SEATMAP', ['FETCH_SEAT_MAP']),
    async searchSeat(searching = true){
      this.searching = searching
      try{
        let payload = {...this.$route.query}
        this.seatmaps = await this.FETCH_SEAT_MAP(payload)
        console.log(seatmaps)
      }catch(e){}
      this.searching = false
    },
  }
}
</script>

<style lang="sass" scoped>
.c-width
  max-width: 1000px
.seatmap-sec
  border-left: solid 1.8px #edeef6
  border-right: solid 1.8px #edeef6
</style>
