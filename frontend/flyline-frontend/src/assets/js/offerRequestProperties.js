import {
  AFTER,
  BEFORE,
  LIMIT,
  SLICES_OFFER_REQUEST_SCHEMA,
  PASSENGERS_FOR_FLIGHT_SEARCH_SCHEMA,
  CABIN_CLASS,
  OFFERS_FLIGHT_SEARCH_SCHEMA,
  UNIQUE_IDENTIFIER_FOR_OFFER_REQUEST,
  RETURN_OFFERS,
  CREATED_AT,
  LIVE_MODE,
  SLICES_FOR_FLIGHT_SEARCH_CREATE_REQ_BODY,
  PASSENGERS_FOR_FLIGHT_SEARCH_CREATE_REQ_BODY
} from "./commonTypes";

export default {
  schema: {
    properties: [
      /* cabin_class */
      CABIN_CLASS(),
      /* id */
      UNIQUE_IDENTIFIER_FOR_OFFER_REQUEST(),
      /* created_at */
      CREATED_AT(),
      /* live_mode */
      LIVE_MODE(),
      /* offers */
      OFFERS_FLIGHT_SEARCH_SCHEMA(),
      /* slices */
      SLICES_OFFER_REQUEST_SCHEMA(),
      /* passengers */
      PASSENGERS_FOR_FLIGHT_SEARCH_SCHEMA()
    ]
  },
  create: {
    endPoint: "POST https://api.flyline.io/api/offer_requests/",
    queryParameters: {
      properties: [
        /* return_offers */
        RETURN_OFFERS()
      ]
    },
    bodyParameters: {
      properties: [
        /* cabin_class */
        CABIN_CLASS(),
        /* slices */
        SLICES_FOR_FLIGHT_SEARCH_CREATE_REQ_BODY(),
        /* passengers */
        PASSENGERS_FOR_FLIGHT_SEARCH_CREATE_REQ_BODY()
      ]
    },
    request: {
      curl: `curl -X POST --compressed "https://api.flyline.io/api/offer_requests/" \\
-H "Accept-Encoding: gzip" \\
-H "Accept: application/json" \\
-H "Content-Type: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>" \\
-d '{
  "data": {
    "passengers": [
      {
        "age": 27
      }
    ],
    "slices": [
      {
        "origin": "DFW",
        "destination": "DEN",
        "departure_date": "2021-01-05"
      }
    ],
    "cabin_class": "economy"
  }
}'`,
      node: `import fetch from 'unfetch'
fetch('https://api.flyline.io/api/offer_requests/', {
  method: 'POST',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  },
  body: JSON.stringify({
        "data": {
          "passengers": [
            {
              "age": 27
            }
          ],
          "slices": [
            {
              "origin": "DFW",
              "destination": "DEN",
              "departure_date": "2021-01-05"
            }
          ],
          "cabin_class": "economy"
        }
      })
}).then((r) => r.json())`,
      py: `import requests
headers = {
  "Accept-Encoding": "gzip",
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
data = {
  "data": {
    "passengers": [
      {
        "age": 27
      }
    ],
    "slices": [
      {
        "origin": "DFW",
        "destination": "DEN",
        "departure_date": "2021-01-05"
      }
    ],
    "cabin_class": "economy"
  }
}
response = requests.post("https://api.flyline.io/api/offer_requests", headers=headers, data=data)`
    },
    response: `{
  "data": {
    "passengers": [
      {
        "id": "passenger_a31c375e473d4961b7d2b08e24756513",
        "age": 27
      }
    ],
    "slices": [
      {
        "origin": {
            "city": {
                "name": "Dallas",
                "iata_code": "DFW",
                "iata_country_code": "US"
            },
            "name": "Dallas/Fort Worth International",
            "latitude": "32.897460",
            "iata_code": "DFW",
            "icao_code": "KDFW",
            "longitude": "-97.036125",
            "time_zone": "America/Chicago",
            "iata_country_code": "US"
        },
        "destination": {
            "city": {
                "name": "Denver",
                "iata_code": "DEN",
                "iata_country_code": "US"
            },
            "name": "Denver International",
            "latitude": "39.849390",
            "iata_code": "DEN",
            "icao_code": "KDEN",
            "longitude": "-104.672844",
            "time_zone": "America/Denver",
            "iata_country_code": "US"
        },
        "departure_date": "2021-01-05"
      }
    ],
    "offers": [
      {
        "total_currency": "USD",
        "total_emissions_kg": "460",
        "total_amount": "45.00",
        "tax_currency": "USD",
        "tax_amount": "40.80",
        "slices": [
          {
            "segments": [
              {
                "passengers": [
                  {
                    "passenger_id": "passenger_0",
                    "cabin_class_marketing_name": "Economy Basic",
                    "cabin_class": "economy",
                    "baggages": [
                      {
                        "quantity": 1,
                        "type": "checked"
                      }
                    ]
                  }
                ],
                "operating_carrier_flight_number": "4321",
                "operating_carrier": {
                  "name": "British Airways",
                  "iata_code": "BA"
                },
                "origin": {
                  "city": {
                    "iata_country_code": "GB",
                    "name": "London",
                    "iata_code": "LON"
                  },
                  "city_name": "London",
                  "time_zone": "Europe/London",
                  "icao_code": "EGLL",
                  "longitude": -141.951519,
                  "latitude": 64.068865,
                  "iata_country_code": "GB",
                  "name": "Heathrow",
                  "iata_code": "LHR"
                },
                "marketing_carrier_flight_number": "1234",
                "marketing_carrier": {
                  "name": "British Airways",
                  "iata_code": "BA"
                },
                "duration": "PT02H26M",
                "distance": 424,
                "destination": {
                  "city": {
                    "iata_country_code": "GB",
                    "name": "London",
                    "iata_code": "LON"
                  },
                  "city_name": "London",
                  "time_zone": "Europe/London",
                  "icao_code": "EGLL",
                  "longitude": -141.951519,
                  "latitude": 64.068865,
                  "iata_country_code": "GB",
                  "name": "Heathrow",
                  "iata_code": "LHR"
                },
                "origin_terminal": "B",
                "departing_at": "2020-06-13T16:38:02",
                "destination_terminal": "5",
                "arriving_at": "2020-06-13T16:38:02",
                "aircraft": {
                  "name": "Airbus Industries A380",
                  "iata_code": "380"
                }
              }
            ],
            "fare_brand_name": "Basic",
            "duration": "PT02H26M",
            "origin": {
              "city": {
                "iata_country_code": "GB",
                "name": "London",
                "iata_code": "LON"
              },
              "city_name": "London",
              "time_zone": "Europe/London",
              "icao_code": "EGLL",
              "longitude": -141.951519,
              "latitude": 64.068865,
              "iata_country_code": "GB",
              "type": "airport",
              "name": "Heathrow",
              "iata_code": "LHR",
              "iata_city_code": "LON"
            },
            "origin_type": "airport",
            "destination": {
              "city": {
                "iata_country_code": "GB",
                "name": "London",
                "iata_code": "LON"
              },
              "city_name": "London",
              "time_zone": "Europe/London",
              "icao_code": "EGLL",
              "longitude": -141.951519,
              "latitude": 64.068865,
              "iata_country_code": "GB",
              "type": "airport",
              "name": "Heathrow",
              "iata_code": "LHR",
              "iata_city_code": "LON"
            },
            "destination_type": "airport"
          }
        ],
        "passengers": [
          {
            "id": "passenger_a31c375e473d4961b7d2b08e24756513",
            "age": 27
          }
        ],
        "passenger_identity_documents_required": false,
        "owner": {
          "name": "British Airways",
          "iata_code": "BA"
        },
        "live_mode": true,
        "expires_at": "2020-01-17T10:42:14.545Z",
        "created_at": "2020-01-17T10:12:14.545Z",
        "base_currency": "USD",
        "base_amount": "30.20",
        "allowed_passenger_identity_document_types": [
          "passport"
        ]
      }
    ],
    "live_mode": false,
    "created_at": "2020-02-12T15:21:01.927Z",
    "id": "26fe856d9cfd0132ccc8b74b833b2ff5afaa5543",
    "cabin_class": "economy"
  }
}`
  },
  single: {
    endPoint: "POST https://api.flyline.io/api/offer_requests/{id}/",
    urlParameters: {
      properties: [
        /* id */
        UNIQUE_IDENTIFIER_FOR_OFFER_REQUEST("", false, false, true)
      ]
    },
    request: {
      curl: `curl -X GET —compressed "https://api.flyline.io/offer_requests/{id}/" \\
-H "Accept-Encoding: gzip" \\
-H "Accept: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node: `import fetch from 'unfetch'
fetch('https://api.flyline.io/air/offer_requests/{id}/', {
  method: 'GET',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  }
}).then((r) => r.json())`,
      py: `import requests
headers = {
  "Accept-Encoding": "gzip",
  "Accept": "application/json",
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
response = requests.get("https://api.flyline.io/api/air/offer_requests/{id}/", headers=headers)
data = response.json()`
    },
    response: `
"id": "26fe856d9cfd0132ccc8b74b833b2ff5afaa5543",
"cabin_class": "economy",
"offers": [
    {
        "id": "238f24863860563ea9bc5ed2824b664b8f4df8ce",
        "allowed_passenger_identity_document_types": [],
        "available_services": [],
        "base_amount": "38.00",
        "base_currency": "USD",
        "created_at": "2020-12-29T19:53:58.157343Z",
        "updated_at": "2020-12-29T19:53:58.157343Z",
        "expires_at": "2020-12-29T20:14:01Z",
        "live_mode": false,
        "owner": {
            "iata_code": "UAD"
        },
        "passenger_identity_documents_required": false,
        "passengers": [],
        "slices": [
            {
                "origin": {
                    "city": {
                        "name": "Dallas",
                        "iata_code": "DFW",
                        "iata_country_code": "US"
                    },
                    "name": "Dallas/Fort Worth International",
                    "latitude": "32.897460",
                    "iata_code": "DFW",
                    "icao_code": "KDFW",
                    "longitude": "-97.036125",
                    "time_zone": "America/Chicago",
                    "iata_country_code": "US"
                },
                "duration": 7800,
                "segments": [
                    {
                        "origin": {
                            "city": {
                                "name": "Dallas",
                                "iata_code": "DFW",
                                "iata_country_code": "US"
                            },
                            "name": "Dallas/Fort Worth International",
                            "latitude": "32.897460",
                            "iata_code": "DFW",
                            "icao_code": "KDFW",
                            "longitude": "-97.036125",
                            "time_zone": "America/Chicago",
                            "iata_country_code": "US"
                        },
                        "aircraft": {
                            "name": "Airbus A320-100/200",
                            "iata_code": "320"
                        },
                        "distance": 1031.0,
                        "duration": 7800,
                        "passengers": [],
                        "arriving_at": "2021-01-05T09:09:00",
                        "destination": {
                            "city": {
                                "name": "Denver",
                                "iata_code": "DEN",
                                "iata_country_code": "US"
                            },
                            "name": "Denver International",
                            "latitude": "39.849390",
                            "iata_code": "DEN",
                            "icao_code": "KDEN",
                            "longitude": "-104.672844",
                            "time_zone": "America/Denver",
                            "iata_country_code": "US"
                        },
                        "departing_at": "2021-01-05T10:19:00",
                        "origin_terminal": "E",
                        "marketing_carrier": {
                            "name": "United Airlines",
                            "iata_code": "UA"
                        },
                        "marketing_carrier_flight_number": "1610"
                    }
                ],
                "destination": {
                    "city": {
                        "name": "Denver",
                        "iata_code": "DEN",
                        "iata_country_code": "US"
                    },
                    "name": "Denver International",
                    "latitude": "39.849390",
                    "iata_code": "DEN",
                    "icao_code": "KDEN",
                    "longitude": "-104.672844",
                    "time_zone": "America/Denver",
                    "iata_country_code": "US"
                },
                "origin_type": "airport",
                "destination_type": "airport"
            }
        ],
        "tax_amount": "10.10",
        "tax_currency": "USD",
        "total_duration": 0,
        "total_amount": "48.10",
        "total_emissions_kg": null,
        "total_currency": "USD"
    }
    "live_mode": false,
    "slices": [
        {
            "origin": {
                "city": {
                    "name": "Dallas",
                    "iata_code": "DFW",
                    "iata_country_code": "US"
                },
                "name": "Dallas/Fort Worth International",
                "latitude": "32.897460",
                "iata_code": "DFW",
                "icao_code": "KDFW",
                "longitude": "-97.036125",
                "time_zone": "America/Chicago",
                "iata_country_code": "US"
            },
            "destination": {
                "city": {
                    "name": "Denver",
                    "iata_code": "DEN",
                    "iata_country_code": "US"
                },
                "name": "Denver International",
                "latitude": "39.849390",
                "iata_code": "DEN",
                "icao_code": "KDEN",
                "longitude": "-104.672844",
                "time_zone": "America/Denver",
                "iata_country_code": "US"
            },
            "departure_date": "2021-01-05"
        }
    ],
    "passengers": [
        {
            "id": "passenger_f0102fc2c7eb41f6a36d02fddbc043b5",
            "age": 27
        }
    ],
    "created_at": "2020-12-29T19:53:58.157343Z"
}
`
  },
  list: {
    endPoint: "GET https://api.flyline.io/api/offer_requests/",
    queryParameters: {
      properties: [
        /* after */
        AFTER(),
        /* before */
        BEFORE(),
        /* limit */
        LIMIT()
      ]
    },
    request: {
      curl: `curl -X GET —compressed "https://api.flyline.io/offer_requests/" \\
-H "Accept-Encoding: gzip" \\
-H "Accept: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node: `import fetch from 'unfetch'
fetch('https://api.flyline.io/offer_requests/', {
  method: 'GET',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  }
}).then((r) => r.json())`,
      py: `import requests
headers = {
  "Accept-Encoding": "gzip",
  "Accept": "application/json",
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
response = requests.get("https://api.flyline.io/offer_requests/", headers=headers)
data = response.json()`
    },
    response: `{
  "meta": {
      "after": null,
      "before": null,
      "limit": 50
  },
  "data": [
      {
          "id": "26fe856d9cfd0132ccc8b74b833b2ff5afaa5543",
          "cabin_class": "economy",
          "offers": [
              {
                  "id": "238f24863860563ea9bc5ed2824b664b8f4df8ce",
                  "allowed_passenger_identity_document_types": [],
                  "available_services": [],
                  "base_amount": "38.00",
                  "base_currency": "USD",
                  "created_at": "2020-12-29T19:53:58.157343Z",
                  "updated_at": "2020-12-29T19:53:58.157343Z",
                  "expires_at": "2020-12-29T20:14:01Z",
                  "live_mode": false,
                  "owner": {
                      "iata_code": "UAD"
                  },
                  "passenger_identity_documents_required": false,
                  "passengers": [],
                  "slices": [
                      {
                          "origin": {
                              "city": {
                                  "name": "Dallas",
                                  "iata_code": "DFW",
                                  "iata_country_code": "US"
                              },
                              "name": "Dallas/Fort Worth International",
                              "latitude": "32.897460",
                              "iata_code": "DFW",
                              "icao_code": "KDFW",
                              "longitude": "-97.036125",
                              "time_zone": "America/Chicago",
                              "iata_country_code": "US"
                          },
                          "duration": 7800,
                          "segments": [
                              {
                                  "origin": {
                                      "city": {
                                          "name": "Dallas",
                                          "iata_code": "DFW",
                                          "iata_country_code": "US"
                                      },
                                      "name": "Dallas/Fort Worth International",
                                      "latitude": "32.897460",
                                      "iata_code": "DFW",
                                      "icao_code": "KDFW",
                                      "longitude": "-97.036125",
                                      "time_zone": "America/Chicago",
                                      "iata_country_code": "US"
                                  },
                                  "aircraft": {
                                      "name": "Airbus A320-100/200",
                                      "iata_code": "320"
                                  },
                                  "distance": 1031.0,
                                  "duration": 7800,
                                  "passengers": [],
                                  "arriving_at": "2021-01-05T09:09:00",
                                  "destination": {
                                      "city": {
                                          "name": "Denver",
                                          "iata_code": "DEN",
                                          "iata_country_code": "US"
                                      },
                                      "name": "Denver International",
                                      "latitude": "39.849390",
                                      "iata_code": "DEN",
                                      "icao_code": "KDEN",
                                      "longitude": "-104.672844",
                                      "time_zone": "America/Denver",
                                      "iata_country_code": "US"
                                  },
                                  "departing_at": "2021-01-05T10:19:00",
                                  "origin_terminal": "E",
                                  "marketing_carrier": {
                                      "name": "United Airlines",
                                      "iata_code": "UA"
                                  },
                                  "marketing_carrier_flight_number": "1610"
                              }
                          ],
                          "destination": {
                              "city": {
                                  "name": "Denver",
                                  "iata_code": "DEN",
                                  "iata_country_code": "US"
                              },
                              "name": "Denver International",
                              "latitude": "39.849390",
                              "iata_code": "DEN",
                              "icao_code": "KDEN",
                              "longitude": "-104.672844",
                              "time_zone": "America/Denver",
                              "iata_country_code": "US"
                          },
                          "origin_type": "airport",
                          "destination_type": "airport"
                      }
                  ],
                  "tax_amount": "10.10",
                  "tax_currency": "USD",
                  "total_duration": 0,
                  "total_amount": "48.10",
                  "total_emissions_kg": null,
                  "total_currency": "USD"
              }
          ],
          "live_mode": false,
          "slices": [
              {
                  "origin": {
                      "city": {
                          "name": "Dallas",
                          "iata_code": "DFW",
                          "iata_country_code": "US"
                      },
                      "name": "Dallas/Fort Worth International",
                      "latitude": "32.897460",
                      "iata_code": "DFW",
                      "icao_code": "KDFW",
                      "longitude": "-97.036125",
                      "time_zone": "America/Chicago",
                      "iata_country_code": "US"
                  },
                  "destination": {
                      "city": {
                          "name": "Denver",
                          "iata_code": "DEN",
                          "iata_country_code": "US"
                      },
                      "name": "Denver International",
                      "latitude": "39.849390",
                      "iata_code": "DEN",
                      "icao_code": "KDEN",
                      "longitude": "-104.672844",
                      "time_zone": "America/Denver",
                      "iata_country_code": "US"
                  },
                  "departure_date": "2021-01-05"
              }
          ],
          "passengers": [
              {
                  "id": "passenger_f0102fc2c7eb41f6a36d02fddbc043b5",
                  "age": 27
              }
          ],
          "created_at": "2020-12-29T19:53:58.157343Z"
      }
  ]
}`
  }
};
