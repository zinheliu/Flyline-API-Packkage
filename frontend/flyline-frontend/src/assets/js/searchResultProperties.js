import { 
  ALLOWED_PASSENGER_IDENTITY_DOCUMENT_TYPES,
  BASE_AMOUNT,
  BASE_CURRENCY,
  CREATED_AT,
  UPDATED_AT,
  EXPIRES_AT,
  UNIQUE_IDENTIFIER_FOR_OFFER,
  LIVE_MODE,
  OWNER_SEARCH_RESULT,
  PASSENGER_IDENTITY_DONCUMENTS_REQUIRED,
  PASSENGERS,
  SLICES_SEARCH_RESULT,
  TAX_AMOUNT,
  TAX_CURRENCY,
  TOTAL_AMOUNT,
  TOTAL_EMISSIONS_KG,
  TOTAL_CURRENCY,
  UNIQUE_IDENTIFIER_FOR_OFFER_REQUEST,
  RETURN_AVAILABLE_SERVICES,
  LIMIT,
  BEFORE,
  AFTER,
  OFFER_REQUEST_ID,
  SORT,
  MAX_CONNECTIONS,
  AVAILABLE_SERVICES_FOR_SEARCH_RESULT_SCHEMA
} from './commonTypes'

export default {
  schema:{
    properties: [
      /* allowed_passenger_identity_document_types */
      ALLOWED_PASSENGER_IDENTITY_DOCUMENT_TYPES(),
      /* available_services */
      AVAILABLE_SERVICES_FOR_SEARCH_RESULT_SCHEMA(),
      /* base_amount */
      BASE_AMOUNT(),
      /* base_currency */
      BASE_CURRENCY(),
      /* created_at */
      CREATED_AT(),
      // /* updated_at */
      // UPDATED_AT(),
      /* expires_at */
      EXPIRES_AT(),
      /* id */
      UNIQUE_IDENTIFIER_FOR_OFFER(),
      /* live_mode */
      LIVE_MODE(),
      /* owner */
      OWNER_SEARCH_RESULT(),
      /* passenger_identity_documents_required */
      PASSENGER_IDENTITY_DONCUMENTS_REQUIRED(),
      /* passengers */
      PASSENGERS(),
      /* slices */
      SLICES_SEARCH_RESULT(),
      /* tax_amount */
      TAX_AMOUNT(),
      /* tax_currency */
      TAX_CURRENCY(),
      /* total_amount */
      TOTAL_AMOUNT(),
      /* total_emissions_kg */
      TOTAL_EMISSIONS_KG(),
      /* total_currency */
      TOTAL_CURRENCY(),
    ]
  },
  single: {
    endPoint: 'POST https://api.flyline.io/api/air/offers/{id}/',
    urlParameters:{
      properties: [
        /* id */
        UNIQUE_IDENTIFIER_FOR_OFFER('', false, false, true),
      ],
    },
    queryParameters:{
      properties: [
        /* return_available_services */
        RETURN_AVAILABLE_SERVICES(),
      ],
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/offers/{id}/" \\
-H "Accept-Encoding: gzip" \\
-H "Accept: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node: 
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/offers/{id}/', {
  method: 'GET',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  }
}).then((r) => r.json())`,
      py:
`import requests
headers = {
  "Accept-Encoding": "gzip",
  "Accept": "application/json",
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
response = requests.get("https://api.flyline.io/api/offers/{id}/", headers=headers)
data = response.json()
`
    },
    response: 
`{
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
}`
  },
  list: {
    endPoint: 'GET https://api.flyline.io/api/offers/',
    queryParameters: {
      properties: [
        /* after */
        AFTER(),
        /* before */
        BEFORE(),
        /* limit */
        LIMIT(),
        OFFER_REQUEST_ID(),
        SORT(),
        MAX_CONNECTIONS(),
      ]
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/offers/" \\
-H "Accept-Encoding: gzip" \\
-H "Accept: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/offers/', {
  method: 'GET',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  }
}).then((r) => r.json())`,
      py:
`import requests
headers = {
  "Accept-Encoding": "gzip",
  "Accept": "application/json",
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
response = requests.get("https://api.flyline.io/api/offers/", headers=headers)
data = response.json()
`
    },
    response:
`{
  "meta": {
    "limit": 50,
    "after": "g2wAAAACbQAAABBBZXJvbWlzdC1LaGFya2l2bQAAAB="
  },
  "data": [
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
  ]
}`
  }

}