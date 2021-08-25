<template>
  <div class="recent-bookings">
    <div class="dashboard-toolbar d-flex justify-content-between align-items-center mb-3">
      <p class="mb-0 dashboard-title-text">Recent Bookings</p>
      <p class="mb-0 text-primary view-all">
        <span class="mr-2">View All</span>
        <b-icon icon="chevron-right" scale="1.1"></b-icon>
      </p>
    </div>
    <div class="bookings">
      <div class="recent-booking-card" v-for="(booking, bI) in 3" :key="bI">
        <div class="dash w-100"></div>
        <div class="recent-booking-card-body d-flex py-3">
          <div class="booking-informations-wrapper py-2">
            <div class="booking-informations d-flex align-items-center justify-content-between">
              <div class="airline-icon">
                <img src="@/assets/images/svg/aa_icon.svg" alt="" class="w-100 h-100">
              </div>
              <p class="mb-0 gilroy-b airline-title">America Airline</p>
              <div class="departure">
                <p class="mb-0 gilroy-b departure-time">23:50</p>
                <p class="mb-0 gilroy-b departure-place mt-12-px">BKK</p>
              </div>
              <div class="departure-return-dot-map d-flex flex-column">
                <div class="dots-wrapper d-flex">
                  <div class="dot mr-8-px"></div>
                  <div class="stopages-dot d-flex justify-content-around">
                    <div v-for="(stopage, sI) in 2" :key="sI" class="dot"></div>
                    <div class="dash w-100"></div>
                  </div>
                  <div class="dot ml-8-px"></div>
                </div>
                <p class="mb-0 mt-auto gilroy-b stopage-short-desc">10h 25m (2 stops)</p>
              </div>
              <div class="return">
                <p class="mb-0 gilroy-b return-time">23:50</p>
                <p class="mb-0 gilroy-b return-place mt-12-px">BKK</p>
              </div>
            </div>
            <div class="booking-informations d-flex align-items-center justify-content-between mt-35-px">
              <div class="airline-icon">
                <img src="@/assets/images/svg/aa_icon.svg" alt="" class="w-100 h-100">
              </div>
              <p class="mb-0 gilroy-b airline-title">America Airline</p>
              <div class="departure">
                <p class="mb-0 gilroy-b departure-time">23:50</p>
                <p class="mb-0 gilroy-b departure-place mt-12-px">BKK</p>
              </div>
              <div class="departure-return-dot-map d-flex flex-column">
                <div class="dots-wrapper d-flex">
                  <div class="dot mr-8-px"></div>
                  <div class="stopages-dot d-flex justify-content-around">
                    <div v-for="(stopage, sI) in 2" :key="sI" class="dot"></div>
                    <div class="dash w-100"></div>
                  </div>
                  <div class="dot ml-8-px"></div>
                </div>
                <p class="mb-0 mt-auto gilroy-b stopage-short-desc">10h 25m (2 stops)</p>
              </div>
              <div class="return">
                <p class="mb-0 gilroy-b return-time">23:50</p>
                <p class="mb-0 gilroy-b return-place mt-12-px">BKK</p>
              </div>
            </div>
          </div>
          <div class="user-and-bill ml-4 pl-4 d-flex flex-column justify-content-center">
            <p class="mb-2 price">
              <span class="amount gilroy-b mr-2">$1,260</span>
              <span class="currency gilroy-b">USD</span>
            </p>
            <b-btn class="view-booking-btn gilroy-b mb-4">View Booking</b-btn>
            <p class="email gilroy-b">Email : zach@flyline.io</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.recent-bookings
  .bookings
    .recent-booking-card
      .recent-booking-card-body
        .booking-informations-wrapper
          width: 75%
          .booking-informations
            .airline-icon
              width: 60px
              height: 60px
            .airline-title
              font-size: 14px
              font-stretch: normal
              font-style: normal
              line-height: 1.43
              letter-spacing: normal
              color: #707070
            .departure-time, .return-time
              font-size: 24px
              font-stretch: normal
              font-style: normal
              line-height: 1.46
              letter-spacing: normal
              color: #707070
            .departure-place, .return-place, .stopage-short-desc
              font-size: 14px
              font-stretch: normal
              font-style: normal
              line-height: 1.43
              letter-spacing: normal
              color: #707070
            .departure-return-dot-map
              height: 67px
              .dots-wrapper
                max-width: 193px
                width: 500px
                margin-top: 12px
                .stopages-dot
                  position: relative
                  width: calc( 193px - 22px - 16px ) // max_width - 2*dot_width_in_two_sides - 2*margin_of_two_dots_in_two_sides
                  .dash
                    position: absolute
                    top: calc( 50% - 0.5px )
                    z-index: 0
                  .dot
                    position: relative
                    z-index: 1
                .dot
                  width: 11px
                  height: 11px
                  border-radius: 50%
                  border: solid 1.5px #0e3178
                  background-color: #ffffff
          
        .user-and-bill
          border-left: solid 1.5px #edeef6
          .price
            .amount
              font-size: 30px
              font-stretch: normal
              font-style: normal
              line-height: 1.43
              letter-spacing: normal
              color: #3cbc6f
            .currency
              font-size: 12px
              font-stretch: normal
              font-style: normal
              line-height: 1.42
              letter-spacing: normal
              color: #707070
          .view-booking-btn
            width: 140px
            height: 36px
            opacity: 0.8
            border-radius: 4px
            background-color: #00aeef
            border: none
          .email
            font-size: 14px
            font-stretch: normal
            font-style: normal
            line-height: 1.43
            letter-spacing: normal
            color: #707070
</style>