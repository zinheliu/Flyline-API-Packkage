<template>
  <b-sidebar
    :visible="sidebar"
    title="Sidebar"
    @change="closed"
    no-close-on-route-change
    no-close-on-esc
    no-header
    sidebar-class="sidebar-comp text-left"
  >
    <div class="sidebar-wrapper pt-md-5">
      <div class="sidebar-menus">
        <div v-for="(topMenu, tpI) in sidebarMenus" :key="tpI" class="">
          <div class="w-100 dash mb-3 mt-5" v-if="tpI > 0"></div>
          <p
            class="menu-item-text__main mb-3"
            @click="gotoDoc(topMenu)"
            v-if="tpI == 0"
          >
            {{ topMenu.text }}
          </p>
          <div class="w-100 dash mb-4" v-if="tpI == 0"></div>
          <div
            v-for="(menuItem, tmI) in topMenu.menuItems"
            :key="tmI"
            class="menu-item mb-3"
          >
            <span
              :class="[
                'd-flex align-items-center py-1',
                topMenu.text ? ' pt-3' : '',
                isMenuSelected(menuItem) ? 'doc-sidebar-selected-menu' : ''
              ]"
              @click="gotoDoc(menuItem)"
            >
              <!-- <i class="fa fa-caret-right mr-3" v-if="menuItem.menuItems && menuItem.menuItems.length > 0"></i>
              <i class="fa fa-circle mr-3" v-else></i> -->
              <span :class="['menu-item-text__sub']">{{ menuItem.text }}</span>
            </span>
            <div class="sub-menu-wrapper mb-3 mt-2" v-if="menuItem.expanded">
              <div
                v-for="(subMenuItem, smI) in menuItem.menuItems"
                :key="smI"
                :class="[
                  'menu-item py-1 pt-3 mb-1',
                  topMenu.text ? '' : '',
                  isMenuSelected(subMenuItem) ? 'doc-sidebar-selected-menu' : ''
                ]"
                @click="gotoDoc(subMenuItem)"
              >
                <span class="menu-item-text d-flex align-items-center">
                  <!-- <i class="fa fa-caret-right mr-3" v-if="subMenuItem.menuItems && subMenuItem.menuItems.length > 0"></i>
                  <i class="fa fa-circle mr-3" v-else></i> -->
                  <span class="menu">{{ subMenuItem.text }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-5 version d-none d-md-block">
        Version Lastest (1.0)
      </p>
    </div>
  </b-sidebar>
</template>

<script>
import EventBus from "@/bus/event";
export default {
  props: {
    sidebar: Boolean
  },
  data() {
    return {
      sidebarMenus: [
        {
          text: "Welcome to API Ref",
          params: "welcome",
          menuItems: [
            // {
            //   text: "Basic Principle",
            //   expanded: true,
            //   menuItems: [
            //     {
            //       text: "Overview",
            //       to: "/api-ref/key-principles"
            //     },
            //     {
            //       text: "One-way trip",
            //       to: "/api-ref/key-principles-one-way-direct-trip"
            //     },
            //     {
            //       text: "Return direct trip",
            //       to: "/api-ref/key-principles-return-direct-trip"
            //     },
            //     {
            //       text: "Multi-city direct trip",
            //       to: "/api-ref/key-principles-multi-city-direct-trip"
            //     }
            //   ]
            // },
            {
              text: "Making Requests",
              expanded: true,
              menuItems: [
                {
                  text: "Authentication",
                  to: "/api-ref/making-request-authentication"
                },
                {
                  text: "MIME Types",
                  to: "/api-ref/making-request-mime-types"
                }
              ]
            },
            {
              text: "Pagination",
              to: "/api-ref/pagination"
            },
            {
              text: "Postman Collection",
              to: "/api-ref/postman-collection"
            }
          ]
        },
        {
          text: "Flyline API Suit",
          params: "api-suit",
          menuItems: [
            // {
            //   text: "Offer Requests",
            //   expanded: true,
            //   menuItems: [
            //     {
            //       text: "Overview",
            //       to: "/api-ref/offer-request"
            //     },
            //     {
            //       text: "Offer request schema",
            //       to: "/api-ref/offer-request/offer-request-schema"
            //     },
            //     {
            //       text: "Create an offer request",
            //       to: "/api-ref/offer-request/create-an-offer-request"
            //     },
            //     {
            //       text: "Get a single offer request",
            //       to: "/api-ref/offer-request/get-a-single-offer-request"
            //     },
            //     {
            //       text: "List offer requests",
            //       to: "/api-ref/offer-request/list-offer-requests"
            //     }
            //   ]
            // },
            {
              text: "Product Endpoints"
            },
            {
              text: "Airfare Shopping",
              expanded: true,
              menuItems: [
                {
                  text: "Overview",
                  to: "/api-ref/flight-search"
                },
                {
                  text: "One-way trip",
                  to: "/api-ref/flight-search-one-way-direct-trip"
                },
                {
                  text: "Return direct trip",
                  to: "/api-ref/flight-search-return-direct-trip"
                },
                {
                  text: "Multi-city direct trip",
                  to: "/api-ref/flight-search-multi-city-direct-trip"
                },
                {
                  text: "Flight search schema",
                  to: "/api-ref/flight-search-schema"
                },
                {
                  text: "Get flight offers",
                  to: "/api-ref/get-flight-offers"
                }
              ]
            },
            {
              text: "Shopping Attributes",
              expanded: true,
              menuItems: [
                {
                  text: "Overview",
                  to: "/api-ref/amenities"
                },
                {
                  text: "Shopping Attributes Schema",
                  to: "/api-ref/amenities-schema"
                },
                {
                  text: "Get Attributes by Flight Number",
                  to: "/api-ref/get-amenities"
                },
                {
                  text: "Get Attributes by Route",
                  to: "/api-ref/get-amenities-by-route"
                }
              ]
            },
            {
              text: "Flight Schedules & Status",
              expanded: true,
              menuItems: [
                {
                  text: "Overview",
                  to: "/api-ref/schedules"
                },
                {
                  text: "Schedules schema",
                  to: "/api-ref/schedules-schema"
                },
                {
                  text: "Get Schedules by Flight Number",
                  to: "/api-ref/get-schedules-by-flight-number"
                },
                {
                  text: "Get Schedules by Route",
                  to: "/api-ref/get-schedules-by-route"
                }
              ]
            },
            {
              text: "Seat Mapping Data",
              expanded: true,
              menuItems: [
                {
                  text: "Overview",
                  to: "/api-ref/seatmap"
                },
                {
                  text: "Seatmap schema",
                  to: "/api-ref/seatmap-schema"
                },
                {
                  text: "Get Seatmaps",
                  to: "/api-ref/get-seatmaps"
                }
              ]
            }
          ]
        },
        {
          text: "Supporting Resources",
          params: "supporting-apis",
          menuItems: [
            {
              text: "Supporting Resources"
            },
            {
              text: "Aircraft Data",
              expanded: true,
              menuItems: [
                {
                  text: "Overview",
                  to: "/api-ref/aircraft"
                },
                {
                  text: "Aircraft Schema",
                  to: "/api-ref/aircraft-schema"
                },
                {
                  text: "Get a single aircraft",
                  to: "/api-ref/get-a-single-aircraft"
                },
                {
                  text: "List aircraft",
                  to: "/api-ref/list-aircraft"
                }
              ]
            },
            {
              text: "Airline Data",
              expanded: true,
              menuItems: [
                {
                  text: "Overview",
                  to: "/api-ref/airline"
                },
                {
                  text: "Airline Schema",
                  to: "/api-ref/airline-schema"
                },
                {
                  text: "Get a single airline",
                  to: "/api-ref/get-a-single-airline"
                },
                {
                  text: "List airlines",
                  to: "/api-ref/list-airline"
                }
              ]
            },
            {
              text: "Airport Data",
              expanded: true,
              menuItems: [
                {
                  text: "Overview",
                  to: "/api-ref/airport"
                },
                {
                  text: "Airport Schema",
                  to: "/api-ref/airport-schema"
                },
                {
                  text: "Get a single airport",
                  to: "/api-ref/get-a-single-airport"
                },
                {
                  text: "List airports",
                  to: "/api-ref/list-airport"
                }
              ]
            },
            {
              text: "City Data",
              expanded: true,
              menuItems: [
                {
                  text: "Overview",
                  to: "/api-ref/city"
                },
                {
                  text: "City Schema",
                  to: "/api-ref/city-schema"
                },
                {
                  text: "Get a single city",
                  to: "/api-ref/get-a-single-city"
                },
                {
                  text: "List city",
                  to: "/api-ref/list-city"
                }
              ]
            },
            {
              text: "Cabin Class Mapping",
              expanded: true,
              menuItems: [
                {
                  text: "Overview",
                  to: "/api-ref/cabin-fare"
                },
                {
                  text: "Schema",
                  to: "/api-ref/cabin-fare-schema"
                },
                {
                  text: "Get Cabin Class Mapping",
                  to: "/api-ref/get-cabin-fare"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  created() {
    this.expandSelectedMenu();
    EventBus.$on("scroll-to-doc-section", () => {
      setTimeout(() => {
        this.expandSelectedMenu();
      }, 100);
    });
  },
  methods: {
    gotoDoc(menu) {
      if (
        menu.expanded != null &&
        menu.menuItems &&
        menu.menuItems.length > 0
      ) {
        menu.expanded = !menu.expanded;
      } else if (menu.to) {
        if (this.$route.path != menu.to) this.$router.push({ path: menu.to });
        EventBus.$emit("scroll-to-doc-section", 180);
      } else if (menu.params) {
        this.$router.replace({
          name: this.$route.name,
          params: { section: menu.params }
        });
      }
    },
    isMenuSelected(menu) {
      if (!menu || !menu.to) return false;
      let rTo = this.$route.path;
      if (rTo.length == 0) return false;
      if (rTo[rTo.length - 1] == "/") rTo = rTo.substr(0, rTo.length - 1);
      return menu.to == rTo;
    },
    expandSelectedMenu() {
      this.sidebarMenus.forEach(topMenu => {
        if (topMenu.menuItems)
          for (let menuKey in topMenu.menuItems) {
            let menuItem = topMenu.menuItems[menuKey];
            if (menuItem.menuItems && menuItem.menuItems.length > 0) {
              for (let submenuKey in menuItem.menuItems) {
                let subMenu = menuItem.menuItems[submenuKey];
                let isSelected = this.isMenuSelected(subMenu);
                if (isSelected) {
                  menuItem.expanded = true;
                  break;
                }
              }
            }
          }
      });
    },
    closed() {
      console.log("closed");
    },
    goLanding() {
      this.$router.push({ name: "Landing" });
    }
  }
};
</script>

<style lang="sass" scoped>
::v-deep .sidebar-comp
  padding-left: 1500px
  margin-left: -1500px !important
  background-color: #ffffff !important
  left: unset !important
  margin-top: 66px !important
  .b-sidebar-body
    width: max-content
  @media screen and (max-width: 1100px)
    position: unset !important
    width: 100%
    height: auto
    padding-left: 0
    margin-left: 0 !important
    margin-top: 0 !important
    .b-sidebar-body
      width: 100%

  .sidebar-wrapper
    padding: 15px 40px 100px 0px
    width: 270px
    border-right: solid 1px rgba(14, 49, 120, 0.1)
    background-color: #ffffff !important
    min-height: 100vh
    @media screen and (max-width: 1100px)
      border-right: none
      width: 100%
      min-height: unset
      padding-right: 0
      padding-bottom: 20px

    .sidebar-menus
      .topmenu-text
        font-size: 16px
        font-weight: bold
        font-stretch: normal
        font-style: normal
        line-height: 1.44
        letter-spacing: normal
        text-align: left
        color: #333333
      .menu-item
        i
          color: #345793
          &.fa-circle
            font-size: 8px
      .menu-item-text
        font-size: 13px
        font-weight: 500
        font-stretch: normal
        font-style: normal
        line-height: 1.43
        letter-spacing: normal
        text-align: left
        color: #707070
        &__main
          @extend .menu-item-text
          font-size: 14px
          font-family: GILROY-BOLD
          color: #333333
        &__sub
          @extend .menu-item-text
          font-family: GILROY-BOLD
          font-size: 14px
          font-weight: 500
          color: #333333

        &:hover
          color: #203BE7
          cursor: pointer
    .sub-menu-wrapper
      // border-left: solid 0.5px #EDEEF6
    .doc-sidebar-selected-menu
      border-radius: 4px
      // background-color: #203BE7
      .menu-item-text
        color: #203be7 !important
        font-family: GILROY-BOLD
      // i
      //   color: #ffffff !important

  .version
    font-size: 16px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 1.43
    letter-spacing: normal
    text-align: left
    color: #707070
    // @media screen and (max-width: 800px)
</style>
