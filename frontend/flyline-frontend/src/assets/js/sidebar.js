export default [
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
            text: "Get Amenities by Flight Number",
            to: "/api-ref/get-amenities"
          },
          {
            text: "Get Amenities by Route",
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
        text: "SeatMap API",
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
        text: "Aircraft Equipment Data",
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
        text: "Operating/Marketing Airline Data",
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
        text: "Airports Data",
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
];
