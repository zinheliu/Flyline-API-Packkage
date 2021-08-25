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
          <div class="w-100 dash my-4" v-if="tpI > 0"></div>
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
          text: "API Doc Home",
          to: "/docs",
          menuItems: [
            {
              text: "Product Guides",
              expanded: true,
              menuItems: [
                {
                  text: "Working with In-flight Amenities",
                  to: "/api-ref/get-amenities"
                },
                {
                  text: "Return Seat Mapping Data",
                  to: "/api-ref/get-seatmaps"
                },
                {
                  text: "Get Flight Schedules by Route",
                  to: "/api-ref/get-schedules-by-route"
                },
                {
                  text: "Configure Cabin Mapping",
                  to: "/api-ref/cabin-fare"
                }
              ]
            },
            {
              text: "API Reference",
              to: "/api-ref"
            }
          ]
        },
        {
          menuItems: [
            {
              text: "Postman Collection",
              href: "https://github.com/FlyLine-Development/flyline-postman"
            },
            {
              text: "Changelog",
              to: "/docs/changelog"
            },
            {
              text: "Libraries",
              to: "/docs/libraries"
            }
          ]
        },
        {
          menuItems: [
            {
              text: "Products",
              expanded: true,
              menuItems: [
                {
                  text: "Air Shopping",
                  to: "/api-ref/flight-search"
                },
                {
                  text: "Shopping Attributes",
                  to: "/api-ref/amenities"
                },
                {
                  text: "Flight Schedules & Status",
                  to: "/api-ref/schedules"
                },
                {
                  text: "Seat Mapping data",
                  to: "/api-ref/seatmap"
                },
                {
                  text: "Supporting Resources",
                  to: "/api-ref/aircraft"
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
        EventBus.$emit("scroll-to-doc-section");
      } else if (menu.params) {
        this.$router.replace({
          name: this.$route.name,
          params: { section: menu.params }
        });
      } else if (menu.href) {
        window.location = menu.href;
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
