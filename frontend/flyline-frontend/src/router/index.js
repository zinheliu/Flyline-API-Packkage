import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store'
// const loadLayout = name => () => import('@/layouts/'+name+'Layout.vue')
// const loadView = name => () => import('@/views/'+name+'.vue')
import ApiRefLayout from "@/layouts/ApiRefLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import LandingLayout from "@/layouts/LandingLayout";
import LandingLayout2 from "@/layouts/LandingLayout2";
import AuthLayout from "@/layouts/AuthLayout";
import ShoppingLayout from "@/layouts/ShoppingLayout";
import DocLayout from "@/layouts/DocLayout2";
import TermLayout from "@/layouts/TermLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
import SeatMapSearchLayout from "@/layouts/SeatMapSearchLayout";

import ApiRef from "@/views/Doc/ApiRef";
import KeyPrinciples from "@/views/Doc/KeyPrinciples";
import MakingRequest from "@/views/Doc/MakingRequest";
import Pagination from "@/views/Doc/Pagination";
import FlightSearch from "@/views/Doc/FlightSearch";
import OfferRequest from "@/views/Doc/OfferRequest";
import SearchResults from "@/views/Doc/SearchResults";
import Aircraft from "@/views/Doc/Aircraft";
import City from "@/views/Doc/City";
import Airline from "@/views/Doc/Airline";
import Airport from "@/views/Doc/Airport";
import Doc from "@/views/Doc/Doc2";
import Libraries from "@/views/Doc/Libraries";
import ChangelogDoc from "@/views/Doc/Changelog";

import Dashboard from "@/views/Dashboard/Dashboard";
import AccessTokens from "@/views/Dashboard/AccessTokens";
import TeamMembers from "@/views/Dashboard/TeamMembers";
import InventorySources from "@/views/Dashboard/InventorySources";
import ManageAccount from "@/views/Dashboard/ManageAccount";

import Landing from "@/views/Landing";
import Learn from "@/views/Learn";
import Suit from "@/views/Suit";
import Pricing from "@/views/Pricing";
import Terms from "@/views/Terms";
import Privacy from "@/views/Privacy";
import Agreement from "@/views/Agreement";
import SearchApi from "@/views/SearchApi";
import AirShoppingAPISolution from "@/views/AirShoppingAPISolution";
import AirAmenitiesAPISolution from "@/views/AirAmenitiesAPISolution";
import AirSchedulesAPISolution from "@/views/AirSchedulesAPISolution";
import Changelog from "@/views/Changelog";
import CompanyInfo from "@/views/CompanyInfo";
import ContactSales from "@/views/ContactSales";
import AirInFlightContent from "@/views/Product/AirInFlightContent";
import AirSchedules from "@/views/Product/AirSchedules";
import AirShopping from "@/views/Product/AirShopping";
import SeatingData from "@/views/Product/SeatingData";

import Login from "@/views/Login";
import Talk from "@/views/Talk";
import BookDemo from "@/views/BookDemo";
import Signup from "@/views/Signup";
import RequestPasswordReset from "@/views/RequestPasswordReset";
import PasswordReset from "@/views/PasswordReset";
import UserActivate from "@/views/Auth/UserActivate";
import AcceptInvite from "@/views/Auth/AcceptInvite";

import Construction from "@/views/Construction";

import SelectOrganizationPage from "@/views/SelectOrganizationPage";
import Product from "@/views/Product";
import ShoppingTerminal from "@/views/ShoppingTerminal";
import FlightSearchResult from "@/views/FlightSearchResult";
import SeatMapSearch from "@/views/SeatMapSearch";
import SeatMapSearchResult from "@/views/SeatMapSearchResult";

Vue.use(VueRouter);

const routes = [
  {
    path: '/docs',
    component: DocLayout,
    children: [
      {
        path: '',
        name: 'Doc',
        component: Doc
      },
      {
        path: 'libraries',
        name: 'Libraries',
        component: Libraries
      },
      {
        path: 'changelog',
        name: 'ChangelogDoc',
        component: ChangelogDoc
      },
    ],
  },
  {
    path: "/api-ref/:section?",
    component: ApiRefLayout,
    children: [
      {
        path: "",
        name: "ApiRef",
        component: ApiRef
      },
    ]
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "access-tokens",
        name: "AccessTokens",
        component: AccessTokens
      },
      {
        path: "team-members",
        name: "TeamMembers",
        component: TeamMembers
      },
      {
        path: "inventory-sources",
        name: "InventorySources",
        component: InventorySources
      },
      {
        path: "manage-account",
        name: "ManageAccount",
        component: ManageAccount
      }
    ]
  },
  {
    path: "/",
    component: LandingLayout,
    children: [
      {
        path: "",
        name: "Landing",
        component: Landing
      },
    ]
  },
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "pricing",
        name: "Pricing",
        component: Pricing
      },
      {
        path: "air-in-flight-content",
        name: "AirInFlightContent",
        component: AirInFlightContent
      },
      {
        path: "air-schedules",
        name: "AirSchedules",
        component: AirSchedules
      },
      {
        path: "air-shopping",
        name: "AirShopping",
        component: AirShopping
      },
      {
        path: "seating-data",
        name: "SeatingData",
        component: SeatingData
      },
      {
        path: "company-info",
        name: "CompanyInfo",
        component: CompanyInfo
      },
    ]
  },
  {
    path: "/",
    component: LandingLayout2,
    children: [
      {
        path: "suit",
        name: "Suit",
        component: Suit
      },
      {
        path: "air-shopping-API-Solution",
        name: "AirShoppingAPISolution",
        component: AirShoppingAPISolution
      },
      {
        path: "air-amenities-API-Solution",
        name: "AirAmenitiesAPISolution",
        component: AirAmenitiesAPISolution
      },
      {
        path: "air-schedules-API-Solution",
        name: "AirSchedulesAPISolution",
        component: AirSchedulesAPISolution
      },
      {
        path: 'changelog',
        name: 'Changelog',
        component: Changelog
      },
    ]
  },
  {
    path: '/',
    component: TermLayout,
    children: [
      {
        path: "terms",
        name: "Terms",
        component: Terms
      },
      {
        path: "privacy",
        name: "Privacy",
        component: Privacy
      },
    ],
  },
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "signup/",
        name: "Signup",
        component: Signup
      },
      {
        path: "request-password-reset",
        name: "RequestPasswordReset",
        component: RequestPasswordReset
      },
      {
        path: "password-reset/confirm",
        name: "PasswordReset",
        component: PasswordReset
      },
      {
        path: "verify-email/:uid/:token*",
        name: "UserActivate",
        component: UserActivate
      },
      {
        path: "accept-invite/:token*",
        name: "AcceptInvite",
        component: AcceptInvite
      },
      {
        path: "choose-organization",
        name: "ChooseOrganization",
        component: SelectOrganizationPage
      },
      {
        path: "talk-to-team",
        name: "Talk",
        component: Talk
      },
      {
        path: "book-demo",
        name: "BookDemo",
        component: BookDemo
      },
      {
        path: "contact-sales",
        name: "ContactSales",
        component: ContactSales
      },
    ],
  },
  {
    path: '/',
    component: ShoppingLayout,
    children: [
      {
        path: 'shopping-terminal',
        name: 'ShoppingTerminal',
        component: ShoppingTerminal
      },
      {
        path: 'flight-search-result',
        name: 'FlightSearchResult',
        component: FlightSearchResult
      },
    ],
  },
  {
    path: '/',
    component: SeatMapSearchLayout,
    children: [
      {
        path: 'seatmap-search',
        name: 'SeatMapSearch',
        component: SeatMapSearch
      },
      {
        path: 'seatmap-search-result',
        name: 'SeatMapSearchResult',
        component: SeatMapSearchResult
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(to.path.includes('/api-ref')) return
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

let withoutAuthRoutes=[
  "Login",
  "Signup",
  "RequestPasswordReset",
  "PasswordReset",
  "AcceptInvite",
  "UserActivate",
  "Terms",
  "Privacy",
]

let ignorePaths = [
  '/docs',
  '/api-ref',
  '/shopping-terminal',
  '/flight-search-result',
  '/suit',
  '/talk-to-team',
  '/book-demo',
  '/terms',
  '/privacy',
  '/air-shopping-API-Solution',
  '/air-amenities-API-Solution',
  '/air-schedules-API-Solution',
  '/changelog',
  '/contact-sales',
  '/product',
  '/company-info',
  '/pricing',
  '/air-in-flight-content',
  '/air-schedules',
  '/air-shopping',
  '/seating-data',
  '/seatmap-search',
  '/seatmap-search-result',
]

router.beforeEach((to,from,next)=>{
  if(to.name == 'Landing') {
    if(store.getters["USER/token"]){
      next({ name: 'Dashboard' })
      return
    }
    next()
    return
  }
  if(ignorePaths.find(p => to.path.includes(p)) != null) {
    next()
    return
  }
  if(withoutAuthRoutes.indexOf(to.name) == -1 && !store.getters["USER/token"]){
    next('/login')
  }else if(withoutAuthRoutes.indexOf(to.name) >= 0 && store.getters["USER/token"]){
    next('/dashboard')
  }
  else{
    next()
  }
});

export default router
