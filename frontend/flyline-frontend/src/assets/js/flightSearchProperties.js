import {
  SLICES_FLIGHT_SEARCH_SCHEMA,
  CABIN_CLASS,
  PASSENGERS_FOR_FLIGHT_SEARCH_CREATE_REQ_BODY,
  MAX_PRICE_FLIGHT_SEARCH_SCHEMA,
  LIVE_MODE,
  OFFERS_FLIGHT_SEARCH_SCHEMA,
  SLICES_FLIGHT_SEARCH_RESPONSE_SCHEMA,
  PASSENGERS_FOR_FLIGHT_SEARCH_SCHEMA,
  PERMITTED_CARRIER_FLIGHT_SEARCH_SCHEMA,
  CORPORATE_ACCOUNTS_FLIGHT_SEARCH_SCHEMA,
  AIRPORTS_FLIGHT_SEARCH_SCHEMA,
  AIRCRAFT_FLIGHT_SEARCH_SCHEMA,
  CARRIER_FLIGHT_SEARCH_SCHEMA,
  SORT_BY_FLIGHT_SEARCH_SCHEMA
} from "./commonTypes";

export default {
  schema: {
    properties: [
      /* cabin_class */
    //   CABIN_CLASS(),
      /* live_mode */
    //   LIVE_MODE(),
      /* offers */
      OFFERS_FLIGHT_SEARCH_SCHEMA(),
      /* slices */
    //   SLICES_FLIGHT_SEARCH_RESPONSE_SCHEMA(),
      /* passengers */
    //   PASSENGERS_FOR_FLIGHT_SEARCH_SCHEMA(),
        AIRPORTS_FLIGHT_SEARCH_SCHEMA(),
        AIRCRAFT_FLIGHT_SEARCH_SCHEMA(),
        CARRIER_FLIGHT_SEARCH_SCHEMA()
    ]
  },

  list: {
    endPoint: "POST https://api.flyline.io/api/flights/shop/",
    queryParameters: {
      properties: [
        /* cabin_class */
        CABIN_CLASS(),
        /* slices */
        SLICES_FLIGHT_SEARCH_SCHEMA(),
        /* passengers */
        PASSENGERS_FOR_FLIGHT_SEARCH_CREATE_REQ_BODY(),
        MAX_PRICE_FLIGHT_SEARCH_SCHEMA(),
        SORT_BY_FLIGHT_SEARCH_SCHEMA(),
        PERMITTED_CARRIER_FLIGHT_SEARCH_SCHEMA(),
        CORPORATE_ACCOUNTS_FLIGHT_SEARCH_SCHEMA()
      ]
    },
    request: {
      curl: `curl -X POST --compressed "https://api.flyline.io/api/flights/shop/" \\
-H "Accept-Encoding: gzip" \\
-H "Content-Type: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>" \\
-d '{
"cabin_class": "economy",
"slices": [
    {
        "departure": {
            "code": "DFW",
            "date": "2021-05-29"
        },
        "arrival": {
            "code": "LAX"
        }
    }
],
"passengers": [
    {
        "age": 27
    }
]
}'`,
      node: `import fetch from 'unfetch'
fetch('https://api.flyline.io/api/flights/shop/', {
  method: 'POST',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  },
  body: JSON.stringify({
    "cabin_class": "economy",
    "slices": [
        {
            "departure": {
                "code": "DFW",
                "date": "2021-02-10"
            },
            "arrival": {
                "code": "LAX"
            }
        }
    ],
    "passengers": [
        {
            "age": 27
        }
    ]
  })
}).then((r) => r.json())`,
      py: `import requests
headers = {
"Accept-Encoding": "gzip",
"Content-Type": "application/json",
"Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
data = {
"cabin_class": "economy",
"slices": [
    {
    "departure": {
        "code": "DFW",
        "date": "2021-05-10"
    },
    "arrival": {
        "code": "LAX"
    }
    }
],
"passengers": [
    {
        "age": 27
    }
]
}
response = requests.post("https://api.flyline.io/api/flights/shop/", headers=headers, json=data)
data = response.json()`,
        js: `const data = {
"cabin_class": "economy",
"slices": [
    {
    "departure": {
        "code": "DFW",
        "date": "2021-05-29"
    },
    "arrival": {
        "code": "LAX"
    }
    }
],
"passengers": [
    {
    "age": 27
    }
]
};
const headers = {
'Content-Type':'application/json',
'Accept':'application/json',
'Authorization':'FToken <YOUR_ACCESS_TOKEN>'
};
fetch("https://api.flyline.io/api/flights/shop/",
{
method: 'POST',
body: JSON.stringify(data),
headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});`,
        ruby: `require 'rest-client'
require 'json'
headers = {
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
payload = {
    'cabin_class' => 'economy',
    'slices' => [
        {
            'departure' => {
                'code' => 'DFW',
                'date' => '2021-05-29'
            },
            'arrival' => {
                'code' => 'LAX'
            }
        }
    ],
    'passengers' => [
        {
            'age' => 27
        }
    ]
}
result = RestClient.post('https://api.flyline.io/api/flights/shop/', payload.to_json, headers)
p JSON.parse(result)`
    },
    response: `{
        "live_mode": false,
        "airports": [
            {
                "iata_code": "LAX",
                "name": "Los Angeles International",
                "iata_country_code": "US",
                "latitude": "33.943398",
                "longitude": "-118.408280",
                "icao_code": "KLAX",
                "time_zone": "America/Los_Angeles",
                "city": {
                    "iata_code": "LAX",
                    "name": "Los Angeles",
                    "iata_country_code": "US"
                }
            },
            {
                "iata_code": "DFW",
                "name": "Dallas/Fort Worth International",
                "iata_country_code": "US",
                "latitude": "32.897460",
                "longitude": "-97.036125",
                "icao_code": "KDFW",
                "time_zone": "America/Chicago",
                "city": {
                    "iata_code": "DFW",
                    "name": "Dallas",
                    "iata_country_code": "US"
                }
            },
            {
                "iata_code": "PHX",
                "name": "Sky Harbor International",
                "iata_country_code": "US",
                "latitude": "33.435036",
                "longitude": "-112.000160",
                "icao_code": "KPHX",
                "time_zone": "America/Phoenix",
                "city": {
                    "iata_code": "PHX",
                    "name": "Phoenix",
                    "iata_country_code": "US"
                }
            }
        ],
        "aircraft": [
            {
                "iata_code": "738",
                "name": "Boeing 737-800 Passenger"
            },
            {
                "iata_code": "321",
                "name": "Airbus A321"
            }
        ],
        "carriers": [
            {
                "code": "AA",
                "name": "American Airlines"
            }
        ],
        "offers": [
            {
                "id": "X4299103A-410B-4648-BFA7-1",
                "base_amount": "48.37",
                "base_currency": "USD",
                "tax_amount": "18.03",
                "tax_currency": "USD",
                "total_amount": "66.40",
                "total_currency": "USD",
                "passengers": [
                    {
                        "id": "PAX_0",
                        "age": 27,
                        "type": "adult"
                    }
                ],
                "owner": "AA",
                "slices": [
                    {
                        "origin": "DFW",
                        "destination": "LAX",
                        "duration": "PT03H30M",
                        "segments": [
                            {
                                "id": "Isgm010056858bf40",
                                "aircraft": "321",
                                "origin": "DFW",
                                "departing_at": "2021-03-29T20:00:00",
                                "destination": "LAX",
                                "arriving_at": "2021-03-29T21:30:00",
                                "distance": 1231,
                                "duration": "PT03H30M",
                                "marketing_carrier": "AA",
                                "marketing_carrier_flight_number": "1947",
                                "passengers": [
                                    {
                                        "baggages": [
                                            {
                                                "type": "carry_on",
                                                "quantity": 2
                                            },
                                            {
                                                "type": "checked",
                                                "quantity": 0
                                            }
                                        ],
                                        "passenger_id": "PAX_0"
                                    }
                                ],
                                "origin_terminal": "0",
                                "destination_terminal": "0"
                            }
                        ]
                    }
                ],
                "fares": [
                    {
                        "fare_name": "Main Cabin",
                        "fare_class": "Y",
                        "fare_basis_code": "N7AZZNN3",
                        "fare_type": "Published fares",
                        "fare_rules": {
                            "refundable": false,
                            "change_fee": false,
                            "cancel_fee": false,
                            "ticketing": {
                                "endorsements": [
                                    "NONREF/FAREDIF/",
                                    "CXL BY FLT TIME OR NOVALUE"
                                ]
                            }
                        },
                        "segments": [
                            {
                                "segment_id": "Isgm010056858bf40",
                                "cabin_amenities": [
                                    "Netflix streaming capable (fee)",
                                    "Snacks provided",
                                    "Seatback on-demand video",
                                    "Power & USB outlets",
                                    "Nonalcoholic beverages provided"
                                ],
                                "cabin_attributes": [
                                    "Seat Pitch 31\"",
                                    "3-3 Seat Layout"
                                ]
                            }
                        ],
                        "passengers": [
                            "PAX_0"
                        ]
                    }
                ],
                "expires_at": "2021-03-22T16:31:03+00:00",
                "max_connections": 1
            },
            {
                "id": "X4299103A-410B-4648-BFA7-23",
                "base_amount": "512.56",
                "base_currency": "USD",
                "tax_amount": "52.84",
                "tax_currency": "USD",
                "total_amount": "565.40",
                "total_currency": "USD",
                "passengers": [
                    {
                        "id": "PAX_0",
                        "age": 27,
                        "type": "adult"
                    }
                ],
                "owner": "AA",
                "slices": [
                    {
                        "origin": "DFW",
                        "destination": "LAX",
                        "duration": "PT03H30M",
                        "segments": [
                            {
                                "id": "Isgm010056858bf40",
                                "aircraft": "321",
                                "origin": "DFW",
                                "departing_at": "2021-03-29T20:00:00",
                                "destination": "LAX",
                                "arriving_at": "2021-03-29T21:30:00",
                                "distance": 1231,
                                "duration": "PT03H30M",
                                "marketing_carrier": "AA",
                                "marketing_carrier_flight_number": "1947",
                                "passengers": [
                                    {
                                        "baggages": [
                                            {
                                                "type": "carry_on",
                                                "quantity": 2
                                            },
                                            {
                                                "type": "checked",
                                                "quantity": 0
                                            }
                                        ],
                                        "passenger_id": "PAX_0"
                                    }
                                ],
                                "origin_terminal": "0",
                                "destination_terminal": "0"
                            }
                        ]
                    }
                ],
                "fares": [
                    {
                        "fare_name": "Main Cabin Flexible",
                        "fare_class": "Y",
                        "fare_basis_code": "B0AKZRN1",
                        "fare_type": "Published fares",
                        "fare_rules": {
                            "refundable": true,
                            "change_fee": false,
                            "cancel_fee": false,
                            "ticketing": {}
                        },
                        "segments": [
                            {
                                "segment_id": "Isgm010056858bf40",
                                "cabin_amenities": [
                                    "Netflix streaming capable (fee)",
                                    "Snacks provided",
                                    "Seatback on-demand video",
                                    "Power & USB outlets",
                                    "Nonalcoholic beverages provided"
                                ],
                                "cabin_attributes": [
                                    "Seat Pitch 31\"",
                                    "3-3 Seat Layout"
                                ]
                            }
                        ],
                        "passengers": [
                            "PAX_0"
                        ]
                    }
                ],
                "expires_at": "2021-03-22T16:31:03+00:00",
                "max_connections": 1
            },
            {
                "id": "X4299103A-410B-4648-BFA7-26",
                "base_amount": "94.88",
                "base_currency": "USD",
                "tax_amount": "30.32",
                "tax_currency": "USD",
                "total_amount": "125.20",
                "total_currency": "USD",
                "passengers": [
                    {
                        "id": "PAX_0",
                        "age": 27,
                        "type": "adult"
                    }
                ],
                "owner": "AA",
                "slices": [
                    {
                        "origin": "DFW",
                        "destination": "LAX",
                        "duration": "PT05H14M",
                        "segments": [
                            {
                                "id": "Isgm480056858bf40",
                                "aircraft": "738",
                                "origin": "DFW",
                                "departing_at": "2021-03-29T20:00:00",
                                "destination": "PHX",
                                "arriving_at": "2021-03-29T20:43:00",
                                "distance": 865,
                                "duration": "PT02H43M",
                                "marketing_carrier": "AA",
                                "marketing_carrier_flight_number": "2402",
                                "passengers": [
                                    {
                                        "baggages": [
                                            {
                                                "type": "carry_on",
                                                "quantity": 2
                                            },
                                            {
                                                "type": "checked",
                                                "quantity": 0
                                            }
                                        ],
                                        "passenger_id": "PAX_0"
                                    }
                                ],
                                "origin_terminal": "0",
                                "destination_terminal": "4"
                            },
                            {
                                "id": "Isgm490056858bf40",
                                "aircraft": "321",
                                "origin": "PHX",
                                "departing_at": "2021-03-29T21:40:00",
                                "destination": "LAX",
                                "arriving_at": "2021-03-29T23:14:00",
                                "distance": 369,
                                "duration": "PT01H34M",
                                "marketing_carrier": "AA",
                                "marketing_carrier_flight_number": "640",
                                "passengers": [
                                    {
                                        "baggages": [
                                            {
                                                "type": "carry_on",
                                                "quantity": 2
                                            },
                                            {
                                                "type": "checked",
                                                "quantity": 0
                                            }
                                        ],
                                        "passenger_id": "PAX_0"
                                    }
                                ],
                                "origin_terminal": "4",
                                "destination_terminal": "0"
                            }
                        ]
                    }
                ],
                "fares": [
                    {
                        "fare_name": "Main Cabin",
                        "fare_class": "Y Y",
                        "fare_basis_code": "V7AZZNN1",
                        "fare_type": "Published fares",
                        "fare_rules": {
                            "refundable": false,
                            "change_fee": false,
                            "cancel_fee": false,
                            "ticketing": {
                                "endorsements": [
                                    "NONREF/FAREDIF/",
                                    "CXL BY FLT TIME OR NOVALUE"
                                ]
                            }
                        },
                        "segments": [
                            {
                                "segment_id": "Isgm480056858bf40",
                                "cabin_amenities": [
                                    "Netflix streaming capable (fee)",
                                    "Snacks provided",
                                    "Streaming entertainment",
                                    "Power & USB outlets",
                                    "Nonalcoholic beverages provided"
                                ],
                                "cabin_attributes": [
                                    "Seat Pitch 30\"",
                                    "3-3 Seat Layout"
                                ]
                            },
                            {
                                "segment_id": "Isgm490056858bf40",
                                "cabin_amenities": [
                                    "Netflix streaming capable (fee)",
                                    "Snacks provided",
                                    "Seatback on-demand video",
                                    "Power & USB outlets",
                                    "Nonalcoholic beverages provided"
                                ],
                                "cabin_attributes": [
                                    "Seat Pitch 31\"",
                                    "3-3 Seat Layout"
                                ]
                            }
                        ],
                        "passengers": [
                            "PAX_0"
                        ]
                    }
                ],
                "expires_at": "2021-03-22T16:31:03+00:00",
                "max_connections": 2
            },
            {
                "id": "X4299103A-410B-4648-BFA7-32",
                "base_amount": "506.05",
                "base_currency": "USD",
                "tax_amount": "61.15",
                "tax_currency": "USD",
                "total_amount": "567.20",
                "total_currency": "USD",
                "passengers": [
                    {
                        "id": "PAX_0",
                        "age": 27,
                        "type": "adult"
                    }
                ],
                "owner": "AA",
                "slices": [
                    {
                        "origin": "DFW",
                        "destination": "LAX",
                        "duration": "PT05H14M",
                        "segments": [
                            {
                                "id": "Isgm480056858bf40",
                                "aircraft": "738",
                                "origin": "DFW",
                                "departing_at": "2021-03-29T20:00:00",
                                "destination": "PHX",
                                "arriving_at": "2021-03-29T20:43:00",
                                "distance": 865,
                                "duration": "PT02H43M",
                                "marketing_carrier": "AA",
                                "marketing_carrier_flight_number": "2402",
                                "passengers": [
                                    {
                                        "baggages": [
                                            {
                                                "type": "carry_on",
                                                "quantity": 2
                                            },
                                            {
                                                "type": "checked",
                                                "quantity": 0
                                            }
                                        ],
                                        "passenger_id": "PAX_0"
                                    }
                                ],
                                "origin_terminal": "0",
                                "destination_terminal": "4"
                            },
                            {
                                "id": "Isgm490056858bf40",
                                "aircraft": "321",
                                "origin": "PHX",
                                "departing_at": "2021-03-29T21:40:00",
                                "destination": "LAX",
                                "arriving_at": "2021-03-29T23:14:00",
                                "distance": 369,
                                "duration": "PT01H34M",
                                "marketing_carrier": "AA",
                                "marketing_carrier_flight_number": "640",
                                "passengers": [
                                    {
                                        "baggages": [
                                            {
                                                "type": "carry_on",
                                                "quantity": 2
                                            },
                                            {
                                                "type": "checked",
                                                "quantity": 0
                                            }
                                        ],
                                        "passenger_id": "PAX_0"
                                    }
                                ],
                                "origin_terminal": "4",
                                "destination_terminal": "0"
                            }
                        ]
                    }
                ],
                "fares": [
                    {
                        "fare_name": "Main Cabin Flexible",
                        "fare_class": "Y",
                        "fare_basis_code": "M3AIZRN1",
                        "fare_type": "Published fares",
                        "fare_rules": {
                            "refundable": true,
                            "change_fee": false,
                            "cancel_fee": false,
                            "ticketing": {}
                        },
                        "segments": [
                            {
                                "segment_id": "Isgm480056858bf40",
                                "cabin_amenities": [
                                    "Netflix streaming capable (fee)",
                                    "Snacks provided",
                                    "Streaming entertainment",
                                    "Power & USB outlets",
                                    "Nonalcoholic beverages provided"
                                ],
                                "cabin_attributes": [
                                    "Seat Pitch 30\"",
                                    "3-3 Seat Layout"
                                ]
                            }
                        ],
                        "passengers": [
                            "PAX_0"
                        ]
                    },
                    {
                        "fare_name": "Main Cabin Flexible",
                        "fare_class": "Y",
                        "fare_basis_code": "M0AHZRN1",
                        "fare_type": "Published fares",
                        "fare_rules": {
                            "refundable": true,
                            "change_fee": false,
                            "cancel_fee": false,
                            "ticketing": {}
                        },
                        "segments": [
                            {
                                "segment_id": "Isgm490056858bf40",
                                "cabin_amenities": [
                                    "Netflix streaming capable (fee)",
                                    "Snacks provided",
                                    "Seatback on-demand video",
                                    "Power & USB outlets",
                                    "Nonalcoholic beverages provided"
                                ],
                                "cabin_attributes": [
                                    "Seat Pitch 31\"",
                                    "3-3 Seat Layout"
                                ]
                            }
                        ],
                        "passengers": [
                            "PAX_0"
                        ]
                    }
                ],
                "expires_at": "2021-03-22T16:31:03+00:00",
                "max_connections": 2
            }
        ]
    }`
  }
};
