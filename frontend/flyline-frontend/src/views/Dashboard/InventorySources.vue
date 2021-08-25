<template>
  <div class="inventory-sources-page pt-32-px pb-75-px">
    <!-- <b-row class="mx-0" align-h="between" align-v="center">
      <p class="mb-0 inv-page-title gilroy-b">Available Inventory Sources</p>
      <div class="actions-sec d-flex flex-column flex-md-row">
        <div
          class="indicators d-flex flex-column flex-md-row justify-content-between mt-2 mt-md-0"
        >
          <div class="indicator">
            <div class="indicator-bg__1"></div>
            <p class="mb-0 gilroy-b indicator-text__1">Not available yet</p>
          </div>
          <div class="indicator mt-2 mt-md-0">
            <div class="indicator-bg__2"></div>
            <p class="mb-0 gilroy-b indicator-text__2">Available and Ready</p>
          </div>
        </div>
      </div>
    </b-row> -->
    <!-- <div
      class="inventory-sources d-flex flex-wrap justify-content-between mt-28-px"
    >
      <div
        class="inventory-source-card text-left mb-25-px p-12-px"
        v-for="(inventorySource, index) in filteredInventorySources"
        :key="index"
        @click="openSource(inventorySource)"
      >
        <div class="airlines mb-13-px d-flex align-items-center">
          <img
            :class="['mr-1', airline.classes]"
            :src="airline.photo"
            :style="airline.style || {}"
            alt=""
            v-for="(airline, pI) in getAirlines(inventorySource)"
            :key="pI"
          />
          <span
            class="overflow-airlines__more ml-auto"
            v-if="inventorySource.moreText"
            >{{ inventorySource.moreText }}</span
          >
          <span
            class="overflow-airlines ml-1"
            v-else-if="inventorySource.airlines.length > 4"
            >+{{ inventorySource.airlines.length - 4 }}</span
          >
        </div>
        <div class="dash w-100 mb-16-px"></div>
        <p class="mb-0 group-name gilroy-b mb-12-px">
          {{ inventorySource.group }}
        </p>
        <p class="connected-with-text mb-10-px">Available In</p>
        <div class="connections d-flex">
          <div
            :class="[
              'connection sandbox mr-12-px',
              inventorySource.connection.sandbox ? 'conn-active' : ''
            ]"
          >
            <span class="mr-8-px">Sandbox</span>
            <b-icon
              icon="check-square-fill"
              v-if="inventorySource.connection.sandbox"
            ></b-icon>
            <b-icon icon="x-square-fill" v-else></b-icon>
          </div>
          <div
            :class="[
              'connection production',
              inventorySource.connection.production ? 'conn-active' : ''
            ]"
          >
            <span class="mr-8-px">Production</span>
            <b-icon
              icon="check-square-fill"
              v-if="inventorySource.connection.production"
            ></b-icon>
            <b-icon icon="x-square-fill" v-else></b-icon>
          </div>
        </div>
      </div>
    </div> -->
    <dashboard-card class="py-20-px px-2 px-md-3">
      <div
        class="dashboard-toolbar d-flex justify-content-between align-items-md-center mb-3"
      >
        <p class="mb-0 dashboard-title-text">Airline Content</p>
        <div
          class="d-flex flex-wrap flex-column flex-md-row align-items-start align-items-md-center"
        >
          <!-- <b-select
            class="mod-select-box ml-md-3 mt-2 mt-md-0"
            :options="filterOptions"
            v-model="selectedFilterOption"
          /> -->
        </div>
      </div>
      <div class="table-section" v-if="inventorySources.length > 0">
        <b-table
          class="shrink-table airlines airlines-table"
          :fields="fields"
          :items="inventorySources"
          @row-clicked="openSource"
          :per-page="inventoryPaginaSettings.perPage"
          :current-page="inventoryPaginaSettings.currentPage"
        >
          <template #cell(airlines)="row">
            <img
              :class="['airline-logo mr-1', airline.classes]"
              :src="airline.photo"
              :style="airline.style || {}"
              alt=""
              v-for="(airline, pI) in row.item.airlines"
              :key="pI"
            />
          </template>
          <template #cell(connection)="row">
            <span
              v-if="row.item.connection.production"
              class="connection d-flex align-items-center production"
            >
              <span class="mt-2-px">Production</span>
              <!-- <b-icon icon="x-square-fill"></b-icon> -->
            </span>
            <span
              v-if="row.item.connection.sandbox"
              class="connection d-flex align-items-center sandbox"
            >
              <span class="mt-2-px">Sandbox</span>
              <!-- <b-icon icon="x-square-fill"></b-icon> -->
            </span>
            <span
              v-else
              class="connection d-flex align-items-center development"
            >
              <span class="mt-2-px">In Development</span>
            </span>
          </template>
          <template #cell(actions)="row">
            <span class="text-underline">View More</span>
          </template>
        </b-table>
      </div>
    </dashboard-card>
    <b-row class="mx-0 pagination mt-24-px" align-h="center">
      <b-pagination
        class="custom-pagination"
        v-model="inventoryPaginaSettings.currentPage"
        :total-rows="inventorySources.length"
        :per-page="inventoryPaginaSettings.perPage"
        first-number
        last-number
        prev-class="pg-prev-btn"
      >
        <template #prev-text>
          <b-icon icon="chevron-left"></b-icon>
        </template>
        <template #next-text>
          <b-icon icon="chevron-right"></b-icon>
        </template>
        <template #ellipsis-text>
          <span class="ellipsis"> 。。。</span>
        </template>
      </b-pagination>
    </b-row>
    <modal
      size="lg"
      :modal="sourceDetailsModal"
      @change="toggleSourceDetailsModal"
    >
      <inventory-source-details :source="selectedSource" />
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modals/Modal";
import InventorySourceDetails from "@/components/Dashboard/InventorySourceDetails";
import DashboardCard from "@/components/Dashboard/DashboardCard";
export default {
  components: {
    Modal,
    InventorySourceDetails,
    DashboardCard
  },
  data() {
    return {
      fields: [
        { key: "airlines", label: "Airline Icon" },
        { key: "group", label: "Airline Name" },
        { key: "iataCode", label: "IATA Code" },
        { key: "connection", label: "Status" },
        { key: "region", label: "Region" },
        { key: "actions", label: "More Data" }
      ],
      inventorySources: [
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/ANA_Airlines_Icon.svg"),
              classes: ""
            }
          ],
          group: "ANA Airlines",
          iataCode: "NH",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Aegean_Airlines_icon.svg"),
              classes: "",
              style: {}
            }
          ],
          group: "Aegean Airlines",
          iataCode: "A3",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Aer_Lingus_icon.svg"),
              classes: ""
            }
          ],
          group: "Aer Lingus",
          iataCode: "EI",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/aero_mexico_icon.svg"),
              style: {}
            }
          ],
          group: "AeroMexico",
          iataCode: "AM",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/aeroflot_russian_airlines_icon.svg"),
              style: {}
            }
          ],
          group: "Aeroflot Russian Airlines",
          iataCode: "SU",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            { photo: require("@/assets/images/airlines/airasia_icon.svg") }
          ],
          group: "Air Asia",
          iataCode: "AK",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Air_Canada-Icon.svg"),
              classes: ""
            }
          ],
          group: "Air Canada",
          iataCode: "AC",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Air_France-icon.svg"),
              classes: ""
            }
          ],
          group: "Air France",
          iataCode: "AF",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/klm_icon.svg"),
              classes: "",
              style: {}
            }
          ],
          group: "KLM",
          iataCode: "KL",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/air_new_zealand_icon.svg"),
              style: {}
            }
          ],
          group: "Air New Zealand",
          iataCode: "NZ",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Australia - Pacific",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Alaska_Airlines-Logo.svg"),
              style: {}
            }
          ],
          group: "Alaska Airlines",
          iataCode: "AS",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: false
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/alitalia_icon.svg"),
              style: {}
            }
          ],
          group: "Alitalia",
          iataCode: "AZ",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Asiana_Airlines_Icon.svg"),
              classes: ""
            }
          ],
          group: "Asiana Airlines",
          iataCode: "OZ",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/austrian_airlines_icon.svg"),
              classes: "",
              style: {}
            }
          ],
          group: "Austrian",
          iataCode: "OS",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/avianca_airline_icon.svg"),
              style: {}
            }
          ],
          group: "Avianca Taca",
          iataCode: "AV",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "South America",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Brussels_Airlines-Icon.svg"),
              classes: "",
              style: {}
            }
          ],
          group: "Brussels",
          iataCode: "SN",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/American_Airlines_Icon.svg"),
              classes: ""
            }
          ],
          group: "American Airlines",
          iataCode: "AA",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/British_Airways_Icon.svg"),
              classes: "",
              style: {}
            }
          ],
          group: "British Airways",
          iataCode: "BA",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/cathay_pacific_airlines_icon.svg"),
              style: {}
            }
          ],
          group: "Cathay Pacific",
          iataCode: "CX",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Cebu_Pacific-Icon.svg"),
              style: {}
            }
          ],
          group: "Cebu Pacific Air",
          iataCode: "5J",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/China_Eastern_Airlines-Logo.svg")
            }
          ],
          group: "China Eastern Airlines",
          iataCode: "MU",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Chine_Southern_Airlines_Icon.svg"),
              style: {}
            }
          ],
          group: "China Southern Airlines",
          iataCode: "CZ",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/delta_airlines_icon.svg"),
              style: {}
            }
          ],
          group: "Delta Airlines",
          iataCode: "DL",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: false
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/eva_air_icon.svg"),
              style: {}
            }
          ],
          group: "EVA Air",
          iataCode: "BR",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/EasyJet-Logo.svg"),
              style: {}
            }
          ],
          group: "Easyjet",
          iataCode: "EC",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/emirates-airlines.svg"),
              style: {}
            }
          ],
          group: "Emirates Airline",
          iataCode: "EK",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Middle East",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/ethopian_airlines_icon.svg"),
              style: {}
            }
          ],
          group: "Ethiopian",
          iataCode: "ET",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Africa",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            { photo: require("@/assets/images/airlines/etihad_airways.svg") }
          ],
          group: "Etihad",
          iataCode: "EY",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Middle East",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Eurowings-Icon.svg"),
              classes: "",
              style: {}
            }
          ],
          group: "Eurowings",
          iataCode: "EW",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/finn_air_logo.svg"),
              classes: ""
            }
          ],
          group: "Finnair",
          iataCode: "AY",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Frontier_airlines_icon.svg"),
              classes: ""
            }
          ],
          group: "Frontier Airlines",
          iataCode: "F9",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: false
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Gol_Transportes_Aereos-Logo.svg"),
              style: {}
            }
          ],
          group: "GOL Linhas Aéreas",
          iataCode: "G3",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "South America",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Garuda_Indonesia-Icon.svg"),
              style: {}
            }
          ],
          group: "Garuda Indonesia",
          iataCode: "GA",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Hawaiian_Airlines_Icon.svg"),
              classes: "",
              style: {}
            }
          ],
          group: "Hawaiian Airlines",
          iataCode: "HA",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Iberia_(airline)-icon.svg"),
              classes: ""
            }
          ],
          group: "Iberia Airlines",
          iataCode: "IB",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Japan_Airlines-icon.svg"),
              classes: ""
            }
          ],
          group: "Japan Airlines",
          iataCode: "JL",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Jet_Airways-icon.svg"),
              classes: ""
            }
          ],
          group: "Jet Airways",
          iataCode: "9W",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Jetstar_Airways-icon.svg"),
              classes: ""
            }
          ],
          group: "Jetstar",
          iataCode: "JQ",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/korean_airline_icon.svg"),
              style: {}
            }
          ],
          group: "Korean Air",
          iataCode: "KE",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            { photo: require("@/assets/images/airlines/LATAM_icon.wine.svg") }
          ],
          group: "LAN Airlines",
          iataCode: "LA",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "South America",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Lion_air_icon.svg"),
              classes: ""
            }
          ],
          group: "Lion Air",
          iataCode: "JT",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/JetBlue_Airways_Logo.svg"),
              style: {},
              classes: ""
            }
          ],
          group: "JetBlue",
          iataCode: "B6",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/lufthansa_airlines_icon.svg"),
              style: {
                width: "40px"
              }
            }
            // { photo: require("@/assets/images/airlines/Lufthansa.eps") }
          ],
          group: "Lufthansa Group",
          iataCode: "LH",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/qantas_airlines_icon.svg"),
              style: {
                width: "40px"
              }
            }
          ],
          group: "Qantas Airlines",
          iataCode: "QF",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Australia - Pacific",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/malaysia_airlines_icon.svg"),
              style: {
                width: "40px"
              }
            }
          ],
          group: "Malaysia Airlines",
          iataCode: "MH",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Norwegian_Air_Shuttle_Logo.svg")
            }
          ],
          group: "Norwegian Airlines",
          iataCode: "D8",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            { photo: require("@/assets/images/airlines/Olympic_Air-Logo.svg") }
          ],
          group: "Olympic Airlines",
          iataCode: "OA",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Qatar_Airways-Logo.svg")
            }
          ],
          group: "Qatar Airways",
          iataCode: "QR",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Middle East",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Ryanair-icon.svg"),
              classes: ""
            }
          ],
          group: "Ryan Air",
          iataCode: "FR",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Scandinavian_Airlines-icon.svg"),
              style: {},
              classes: "width-unset"
            }
          ],
          group: "SAS Scandinavian Airlines",
          iataCode: "SK",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Southwest_Airlines-icon.svg"),
              classes: ""
            }
          ],
          group: "Southwest Airlines",
          iataCode: "WN",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: false
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/spirit_airlines_icon.svg"),
              classes: ""
            }
          ],
          group: "Spirit Airlines",
          iataCode: "NK",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: false
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/swiss_air_icon.svg"),
              style: {}
            }
          ],
          group: "Swiss Air",
          iataCode: "LX",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/thair_airways_icon.svg"),
              style: {}
            }
          ],
          group: "Thai Airways International",
          iataCode: "TG",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/thomson_airlines.svg"),
              style: {}
            }
          ],
          group: "Thomson Airways (TUI)",
          iataCode: "BY",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/transvia_icon.svg"),
              classes: ""
            }
          ],
          group: "Transavia Airlines",
          iataCode: "HV",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Shenzhen_Airlines-icon.svg"),
              classes: ""
            }
          ],
          group: "Shenzhen Airlines",
          iataCode: "ZH",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/turkish_airlines_icon.svg"),
              style: {}
            }
          ],
          group: "Turkish Airlines",
          iataCode: "TK",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Singapore_Airlines-icon.svg"),
              classes: "",
              style: {}
            }
          ],
          group: "Singapore Airlines",
          iataCode: "SQ",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Asia",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/united_airlines_icon.svg"),
              style: {}
            }
          ],
          group: "United Airlines",
          iataCode: "UA",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Full support' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Vietnam_Airlines-icon.svg"),
              style: {}
            }
          ],
          group: "Vietnam Airlines",
          iataCode: "VN",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/virgin_atlantic_airlines_icon.svg"),
              style: {}
            }
          ],
          group: "Virgin Atlantic Airlines",
          iataCode: "VS",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/Vueling-icon.svg"),
              classes: ""
            }
          ],
          group: "Vueling Airlines",
          iataCode: "VY",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "Europe",
          connection: {
            sandbox: true,
            production: true
          }
        },
        {
          airlines: [
            {
              photo: require("@/assets/images/airlines/west_jet_icon.svg"),
              style: {}
            }
          ],
          group: "WestJet",
          iataCode: "WS",
          status: [
            { text: 'Real Time Pricing & Availability', value: 'Coming soon' },
            { text: 'Complete Shopping Attributes', value: 'Full support' },
            { text: 'Historical & Real Time Flight Schedules', value: 'Full support' },
            { text: 'Seat Mapping Data', value: 'Full support' },
          ],
          region: "North America",
          connection: {
            sandbox: true,
            production: true,
            development: true
          }
        }
      ],
      selectedSource: null,
      sourceDetailsModal: false,
      inventoryPaginaSettings: {
        perPage: 12,
        currentPage: 1
      },
      filterOptions: ["List By"],
      selectedFilterOption: "List By"
    };
  },
  computed: {
    filteredInventorySources() {
      return this.inventorySources.slice(
        (this.inventoryPaginaSettings.currentPage - 1) *
          this.inventoryPaginaSettings.perPage,
        (this.inventoryPaginaSettings.currentPage - 1) *
          this.inventoryPaginaSettings.perPage +
          this.inventoryPaginaSettings.perPage
      );
    }
  },
  methods: {
    getAirlines(inventorySource) {
      let airlines = [...inventorySource.airlines];
      return airlines.splice(0, 4);
    },
    openSource(source) {
      this.selectedSource = source;
      this.sourceDetailsModal = true;
    },
    toggleSourceDetailsModal(v) {
      if (v != this.sourceDetailsModal) this.sourceDetailsModal = false;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../styles/inventory-source'
.inventory-sources-page
  @media screen and (max-width: 800px)
    margin: 40px 0
  .airline-logo
    width: 32px
    height: 32px
  ::v-deep .airlines-table
    td
      vertical-align: middle
  .inv-page-title
    font-size: 20px
    font-stretch: normal
    font-style: normal
    line-height: 1.45
    letter-spacing: normal
    color: #333333
  .inv-page-btn
    width: 158.6px
    height: 42.3px
    box-shadow: 0 0 8px 0 rgba(50, 190, 242, 0.2)
    background-color: #00aeef
    font-size: 14px
    font-stretch: normal
    font-style: normal
    line-height: 1.43
    letter-spacing: normal
    color: #ffffff
    border: none
  .inventory-sources
    .inventory-source-card
      width: 300px
      height: 180px
      border-radius: 10px
      background-color: #ffffff
      border: solid 1.9px #e9e9e9
      @media screen and (max-width: 800px)
        width: 100%

  .actions-sec
    @media screen and (max-width: 800px)
      width: 100%
      margin: 0 auto

  .indicators
    width: 381.3px
    height: auto
    padding: 9.3px 21px 9px 12.3px
    border: solid 1.9px #e9e9e9
    border-radius: 6px
    background-color: #ffffff
    @media screen and (max-width: 800px)
      width: 100%
      height: auto
    .indicator
      display: flex
      width: 100%
      align-items: center
      .indicator-bg
        width: 24px
        height: 24px
        border-radius: 50%
        &__1
          @extend .indicator-bg
          background-color: #FCEDEB
        &__2
          @extend .indicator-bg
          background-color: #EAF8F0
        &__3
          @extend .indicator-bg
          background-color: #FFA700
      .indicator-text
        font-size: 12px
        font-stretch: normal
        font-style: normal
        line-height: 1.8
        letter-spacing: normal
        margin-left: 10px
        &__1
          @extend .indicator-text
          color: #ea4d44
        &__2
          @extend .indicator-text
          color: #3abb74
        &__3
          @extend .indicator-text
          color: #FFF6E5
</style>
