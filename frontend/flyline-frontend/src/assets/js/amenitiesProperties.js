import {
    AMENITIES_BODY_PARAMS,
    AMENITIES_SCHEMA,
    CABIN_CLASS,
    SLICES_AMENITIES_BY_ROUTE_SCHEMA,
    PASSENGERS_FOR_AMENITIES_REQ_BODY,
    MAX_PRICE_FLIGHT_SEARCH_SCHEMA,
    PERMITTED_CARRIER_FLIGHT_SEARCH_SCHEMA,
    CORPORATE_ACCOUNTS_FLIGHT_SEARCH_SCHEMA,
    FARE_BASIS_CODES_FOR_AMENITIES_REQ_BODY
} from "./commonTypes";

export default {
  schema: {
    properties: AMENITIES_SCHEMA()
  },

  list: {
    endPoint: "POST https://api.flyline.io/api/search/attributes/flight/",
    queryParameters: {
      properties: AMENITIES_BODY_PARAMS()
    },
    request: {
      curl: `curl -X POST --compressed "https://api.flyline.io/api/search/attributes/flight/" \\
-H "Accept-Encoding: gzip" \\
-H "Content-Type: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>" \\
-d '{
    "cabin_class": "economy",
    "departure": "DFW",
    "arrival": "LAX",
    "departure_date": "2021-06-15",
    "flight_no": "2812",
    "carrier": "AA"
 }'`,
      node: `import fetch from 'unfetch'
fetch('https://api.flyline.io/api/search/attributes/flight/', {
  method: 'POST',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  },
  body: JSON.stringify({
    "cabin_class": "economy",
    "departure": "DFW",
    "arrival": "LAX",
    "departure_date": "2021-06-15",
    "flight_no": "2812",
    "carrier": "AA"
}).then((r) => r.json())`,
      py: `import requests
headers = {
"Accept-Encoding": "gzip",
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
data = {
    "cabin_class": "economy",
    "departure": "DFW",
    "arrival": "LAX",
    "departure_date": "2021-06-15",
    "flight_no": "2812",
    "carrier": "AA"
}
response = requests.post("https://api.flyline.io/api/search/attributes/flight/", headers=headers, json=data)
data = response.json()`,
      js: `const data = {
        "cabin_class": "economy",
        "departure": "DFW",
        "arrival": "LAX",
        "departure_date": "2021-06-15",
        "flight_no": "2812",
        "carrier": "AA"
     };
const headers = {
'Content-Type':'application/json',
'Accept':'application/json',
'Authorization':'FToken <YOUR_ACCESS_TOKEN>'
};
fetch("https://api.flyline.io/api/search/attributes/flight/",
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
    'departure' => 'DFW',
    'arrival' => 'LAX',
    'departure_date' => '2021-06-15',
    'flight_no' => '2812',
    'carrier' => 'AA',
}
result = RestClient.post('https://api.flyline.io/api/search/attributes/flight/', payload.to_json, headers)
p JSON.parse(result)`
    },
    response: `{
        "cabin_class": "economy",
        "carriers": [
            {
                "iata_code": "AA",
                "name": "American Airlines",
                "fare_attributes": {
                    "baggage_rules": "Carry-on bag and personal item included, Fee for checked bag(s)",
                    "cancellation_change_fees": "Change fees apply",
                    "seat_selection": "Advance seat selection included, option to purchase a premium seat",
                    "boarding_zone": "General boarding",
                    "points_mileage": "Award miles earned based on ticket price"
                }
            }
        ],
        "airports": [
            {
                "iata_code": "DFW",
                "name": "Dallas/Fort Worth International"
            },
            {
                "iata_code": "LAX",
                "name": "Los Angeles International"
            }
        ],
        "aircraft": [
            {
                "iata_code": "737",
                "name": "Boeing 737 all pax models"
            }
        ],
        "trip_attributes": [
            [
                {
                    "cabin_attributes": {
                        "aircraft_interior_images": [
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-001.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-002.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-003.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-004.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-005.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-2/interiors/image-001.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-2/interiors/image-002.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-2/interiors/image-003.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-2/interiors/image-004.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-max-8-7m8/interiors/image-001.jpg"
                        ],
                        "seat_layout": {
                            "display_text": "3-3 seat layout"
                        },
                        "seat_attributes": {
                            "display_text": "30\" seat pitch",
                            "pitch": "30",
                            "width": "standard"
                        }
                    },
                    "cabin_amenities": {
                        "food": {
                            "display_text": "Snacks provided",
                            "cost": "free"
                        },
                        "beverage": {
                            "display_text": "Nonalcoholic beverages provided",
                            "type": "nonalcoholic",
                            "alcoholic_cost": "n/a",
                            "nonalcoholic_cost": "free"
                        },
                        "entertainment": {
                            "display_text": "Streaming entertainment"
                        },
                        "wifi": {
                            "display_text": "Netflix streaming capable (fee)",
                            "quality": "better",
                            "cost": "paid"
                        },
                        "power": {
                            "display_text": "Power & USB outlets",
                            "multiple_at_seat": "no",
                            "usb_port": "yes",
                            "power_outlet": "yes"
                        }
                    },
                    "carrier": "AA",
                    "origin": "DFW",
                    "destination": "LAX",
                    "aircraft": "737",
                    "flight_no": "2812",
                    "baggages": [
                        {
                            "type": "carry_on",
                            "notes": "NOTE: Bulkhead seats do not have under seat storage, therefore, all carry-on baggage must be stowed in the overhead bin during take-off and landing.",
                            "rules": [
                                {
                                    "pieces": [
                                        {
                                            "quantity": 2,
                                            "piece_allowance": {
                                                "price_ref": "carryon_p1",
                                                "dimension_allowance_ref": "carryon_d1"
                                            }
                                        }
                                    ],
                                    "description": "1 Carry-on Item & 1 Personal Item",
                                    "total_quantity": 2
                                }
                            ],
                            "prices": [
                                {
                                    "ref": "carryon_p1",
                                    "amount": "0"
                                }
                            ],
                            "description": "American Airlines carry-on baggage policy",
                            "dimension_allowance": [
                                {
                                    "ref": "carryon_d1",
                                    "max_linear_in_cm": "115",
                                    "max_linear_in_inch": "45",
                                    "max_dimension_in_cm": "56 x 36 x 23 cm",
                                    "max_dimension_in_inch": "22 x 14 x 9 in"
                                }
                            ]
                        },
                        {
                            "type": "checked",
                            "notes": "Extra baggage is any bag exceeding the free checked baggage allowance corresponding to passenger??™s fare (i.e., the first piece of baggage for a GoLight ticket, the second piece of baggage for a Flex ticket or the third piece of baggage for Business Class).",
                            "rules": [
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: $30.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p1",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $40.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p2",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "US domestic (including Canada, Hawaii, Puerto Rico, and US Virgin Islands",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: $30.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p1",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $40.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p2",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Mexico",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: $30.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p1",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "SSecond bag: $40.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p2",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Caribbean (except Cuba and Haiti)",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: Free ($40.00 USD, Basic Economy)",
                                            "piece_allowance": {
                                                "price_ref": "checked_p2",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Cuba",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $70.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p6",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Haiti",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: $30.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p1",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $40.00 USD ($55.00 USD to/from Honduras seasonally)",
                                            "piece_allowance": {
                                                "price_ref": "checked_p2",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Central America (except Panama)",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $40.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p2",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Panama",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free ($45.00 USD, Basic Economy)",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $65.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p7",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "South America (except Colombia, Ecuador, and Guyana)",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $55.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p8",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Colombia",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $40.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p8",
                                                "weight_allowance_ref": "checked_w2",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Ecuador",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $40.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p8",
                                                "weight_allowance_ref": "checked_w2",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Guyana",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free ($75.00 USD, Basic Economy)",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Second bag: $100.00 USD",
                                            "piece_allowance": {
                                                "price_ref": "checked_p4",
                                                "weight_allowance_ref": "checked_w2",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Transatlantic",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w1",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "First bag: Free",
                                            "piece_allowance": {
                                                "price_ref": "checked_p5",
                                                "weight_allowance_ref": "checked_w",
                                                "dimension_allowance_ref": "checked_d1"
                                            }
                                        }
                                    ],
                                    "description": "Transpacific",
                                    "total_quantity": 2
                                }
                            ],
                            "prices": [
                                {
                                    "ref": "checked_p1",
                                    "amount": "30.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "checked_p2",
                                    "amount": "40.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "checked_p3",
                                    "amount": "75.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "checked_p4",
                                    "amount": "100.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "checked_p5",
                                    "amount": "0",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "checked_p6",
                                    "amount": "70.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "checked_p7",
                                    "amount": "65.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "checked_p8",
                                    "amount": "55.00",
                                    "currency": "USD"
                                }
                            ],
                            "description": "American Airlines' (AA) checked baggage / hold luggage policy",
                            "weight_allowance": [
                                {
                                    "ref": "checked_w1",
                                    "max_weight_in_kg": "23",
                                    "max_weight_in_lb": "50"
                                },
                                {
                                    "ref": "checked_w2",
                                    "max_weight_in_kg": "32",
                                    "max_weight_in_lb": "70"
                                }
                            ],
                            "dimension_allowance": [
                                {
                                    "ref": "checked_d1",
                                    "max_linear_in_cm": "157",
                                    "max_linear_in_inch": "62"
                                }
                            ]
                        },
                        {
                            "type": "excess",
                            "rules": [
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "Third bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Fourth bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p2"
                                            }
                                        }
                                    ],
                                    "description": "US domestic (including Canada, Hawaii, Puerto Rico, and US Virgin Islands)",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "Third bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Fourth bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p2"
                                            }
                                        }
                                    ],
                                    "description": "Caribbean, Central America, and Mexico",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "Third bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p1"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Fourth bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p2"
                                            }
                                        }
                                    ],
                                    "description": "South America",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "Third bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p2"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Fourth bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p2"
                                            }
                                        }
                                    ],
                                    "description": "Transatlantic",
                                    "total_quantity": 2
                                },
                                {
                                    "pieces": [
                                        {
                                            "quantity": 1,
                                            "description": "Third bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p2"
                                            }
                                        },
                                        {
                                            "quantity": 1,
                                            "description": "Fourth bag",
                                            "piece_allowance": {
                                                "price_ref": "excess_p2"
                                            }
                                        }
                                    ],
                                    "description": "Transpacific",
                                    "total_quantity": 2
                                }
                            ],
                            "prices": [
                                {
                                    "ref": "excess_p1",
                                    "amount": "150.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "excess_p2",
                                    "amount": "200.00",
                                    "currency": "USD"
                                }
                            ],
                            "description": "American Airlines' (AA) fee for excess baggage"
                        },
                        {
                            "type": "overweight",
                            "notes": "",
                            "rules": [
                                {
                                    "pieces": [
                                        {
                                            "description": "$100.00 USD extra per bag",
                                            "piece_allowance": {
                                                "price_ref": "overweight_p1",
                                                "dimension_allowance_ref": "overweight_w1"
                                            }
                                        }
                                    ],
                                    "description": "Waived for all First Class, Business Class, Advantage Executive Platinum, and oneworld Emerald passengers"
                                },
                                {
                                    "pieces": [
                                        {
                                            "description": "$200.00 USD extra per bag",
                                            "piece_allowance": {
                                                "price_ref": "overweight_p2",
                                                "dimension_allowance_ref": "overweight_w2"
                                            }
                                        }
                                    ],
                                    "description": "Not accepted to/from Cuba or on Transatlantic"
                                },
                                {
                                    "pieces": [
                                        {
                                            "description": "$400.00 USD extra per bag",
                                            "piece_allowance": {
                                                "price_ref": "overweight_p3",
                                                "dimension_allowance_ref": "overweight_w2"
                                            }
                                        }
                                    ],
                                    "description": "Transpacific (not accepted to/from Australia)"
                                }
                            ],
                            "prices": [
                                {
                                    "ref": "overweight_p1",
                                    "amount": "100.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "overweight_p2",
                                    "amount": "200.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "overweight_p3",
                                    "amount": "450.00",
                                    "currency": "USD"
                                }
                            ],
                            "description": "American Airlines (AA) will charge the following for bags that are greater than the standard 50 pounds or 23 kilograms:",
                            "weight_allowance": [
                                {
                                    "ref": "overweight_w1",
                                    "max_weight_in_kg": "32",
                                    "max_weight_in_lb": "70",
                                    "min_weight_in_kg": "24",
                                    "min_weight_in_lb": "51"
                                },
                                {
                                    "ref": "overweight_w2",
                                    "max_weight_in_kg": "46",
                                    "max_weight_in_lb": "100",
                                    "min_weight_in_kg": "33",
                                    "min_weight_in_lb": "71"
                                }
                            ]
                        },
                        {
                            "type": "oversize",
                            "notes": "There are year-round limitations on baggage when traveling to Bolivia, Paraguay and cities in Brazil. Bags with overall dimensions that exceed 125 inches or 320 centimeters will not be accepted.",
                            "rules": [
                                {
                                    "pieces": [
                                        {
                                            "piece_allowance": {
                                                "price_ref": "oversize_p1",
                                                "dimension_allowance_ref": "oversize_d1"
                                            }
                                        }
                                    ],
                                    "description": "U S domestic, the Caribbean, Central America (except Panama), Mexico, and Transpacific"
                                },
                                {
                                    "pieces": [
                                        {
                                            "piece_allowance": {
                                                "price_ref": "oversize_p2",
                                                "dimension_allowance_ref": "oversize_d1"
                                            }
                                        }
                                    ],
                                    "description": "Panama, South America, and Transatlantic."
                                }
                            ],
                            "prices": [
                                {
                                    "ref": "oversize_p1",
                                    "amount": "200.00",
                                    "currency": "USD"
                                },
                                {
                                    "ref": "oversize_p2",
                                    "amount": "150.00",
                                    "currency": "USD"
                                }
                            ],
                            "dimension_allowance": [
                                {
                                    "ref": "oversize_d1",
                                    "max_linear_in_cm": "320",
                                    "min_linear_in_cm": "158",
                                    "max_linear_in_inch": "125",
                                    "min_linear_in_inch": "62"
                                }
                            ]
                        },
                        {
                            "type": "sports",
                            "description": "Sports equipment such as skis, golf bags, fishing equipment, hockey, and lacrosse equipment will be accepted up to American Airlines' (AA) size and weight limits and will count as one checked bag/hold bag. Associated fees might be applied."
                        }
                    ]
                }
            ]
        ]
    }
    `
  },
  byRoute: {
    endPoint: "POST https://api.flyline.io/api/search/attributes/route/",
    queryParameters: {
      properties: [
        /* cabin_class */
        CABIN_CLASS(),
        /* slices */
        SLICES_AMENITIES_BY_ROUTE_SCHEMA(),
        /* passengers */
        // PASSENGERS_FOR_AMENITIES_REQ_BODY(),
        // FARE_BASIS_CODES_FOR_AMENITIES_REQ_BODY(),
        // MAX_PRICE_FLIGHT_SEARCH_SCHEMA(),
        PERMITTED_CARRIER_FLIGHT_SEARCH_SCHEMA(undefined, false, undefined, undefined, undefined, "A list of 2-letter IATA airline designators. Flights that these carriers provide should be returned.")
        // CORPORATE_ACCOUNTS_FLIGHT_SEARCH_SCHEMA(),
      ]
    },
    request: {
      curl: `curl -X POST --compressed "https://api.flyline.io/api/search/attributes/route/" \\
-H "Accept-Encoding: gzip" \\
-H "Content-Type: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>" \\
-d '{
    "cabin_class": "economy",
    "slices": [
        {
            "departure": {
                "code": "DFW",
                "date": "2021-06-19"
            },
            "arrival": {
                "code": "LAX"
            }
        }
    ]
 }'`,
      node: `import fetch from 'unfetch'
fetch('https://api.flyline.io/api/search/attributes/route/', {
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
                "date": "2021-06-19"
            },
            "arrival": {
                "code": "LAX"
            }
        }
    ]
 }).then((r) => r.json())`,
      py: `import requests
headers = {
"Accept-Encoding": "gzip",
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
data = {
    "cabin_class": "economy",
    "slices": [
        {
            "departure": {
                "code": "DFW",
                "date": "2021-06-19"
            },
            "arrival": {
                "code": "LAX"
            }
        }
    ]
}
response = requests.post("https://api.flyline.io/api/search/attributes/route/", headers=headers, json=data)
data = response.json()`,
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
                'date' => '2021-06-19'
            },
            'arrival' => {
                'code' => 'LAX'
            }
        }
    ]
}
result = RestClient.post('https://api.flyline.io/api/search/attributes/route/', payload.to_json, headers)
p JSON.parse(result)`
    },
    response: `{
        "cabin_class": "economy",
        "carriers": [
            {
                "iata_code": "AA",
                "name": "American Airlines",
                "fare_attributes": {
                    "baggage_rules": "Carry-on bag and personal item included, Fee for checked bag(s)",
                    "cancellation_change_fees": "Change fees apply",
                    "seat_selection": "Advance seat selection included, option to purchase a premium seat",
                    "boarding_zone": "General boarding",
                    "points_mileage": "Award miles earned based on ticket price"
                }
            },
            {
                "iata_code": "AF",
                "name": "Air France",
                "fare_attributes": {
                    "baggage_rules": "Carry-on bag and personal item included, Fee for checked bag(s)",
                    "cancellation_change_fees": "Change fees apply",
                    "seat_selection": "Limited seat selection, fee applies for premium seating",
                    "boarding_zone": "General boarding",
                    "points_mileage": "Flying Blue members earn 10 XP"
                }
            },
            {
                "iata_code": "AM",
                "name": "Aeromexico"
            },
            {
                "iata_code": "BA",
                "name": "British Airways",
                "fare_attributes": {
                    "baggage_rules": "Carry-on bag and personal item included, Fee for checked bag(s)",
                    "cancellation_change_fees": "No fee for changes/cancellations",
                    "seat_selection": "Fee for advance seat selection, seats assigned after check-in",
                    "boarding_zone": "General boarding",
                    "points_mileage": ""
                }
            },
            {
                "iata_code": "DL",
                "name": "Delta Air Lines",
                "fare_attributes": {
                    "refundable": false,
                    "change_fee": true,
                    "cancel_fee": false,
                    "baggage_rules": "Carry-on bag and personal item included, Fee for checked bag(s)",
                    "cancellation_change_fees": "Change fees apply",
                    "seat_selection": "Advance seat selection included, option to purchase a premium seat",
                    "boarding_zone": "General boarding",
                    "points_mileage": ""
                }
            },
            {
                "iata_code": "JL",
                "name": "Japan Airlines"
            },
            {
                "iata_code": "KE",
                "name": "Korean Air"
            },
            {
                "iata_code": "NK",
                "name": "Spirit Airlines",
                "fare_attributes": {
                    "baggage_rules": "No carry on bag allowed, only personal item, Fee for checked bag(s)",
                    "cancellation_change_fees": "Change fees apply",
                    "seat_selection": "Fee for advance seat selection, seats assigned after check-in",
                    "boarding_zone": "General boarding",
                    "points_mileage": "Members earn up 6X points"
                }
            },
            {
                "iata_code": "QF",
                "name": "Qantas"
            },
            {
                "iata_code": "WS",
                "name": "WestJet"
            }
        ],
        "airports": [
            {
                "iata_code": "LAX",
                "name": "Los Angeles International"
            },
            {
                "iata_code": "DFW",
                "name": "Dallas/Fort Worth International"
            }
        ],
        "aircraft": [
            {
                "iata_code": "32B",
                "name": "Airbus A321 (sharklets)"
            },
            {
                "iata_code": "788",
                "name": "Boeing 787-8 pax"
            },
            {
                "iata_code": "777",
                "name": "Boeing 777 all pax models"
            },
            {
                "iata_code": "737",
                "name": "Boeing 737 all pax models"
            },
            {
                "iata_code": "32Q",
                "name": "Airbus A321-200 Neo"
            },
            {
                "iata_code": "32D",
                "name": "Airbus A319 Ceo (Sharklets)"
            },
            {
                "iata_code": "32A",
                "name": "Airbus A320-200 Ceo (Sharklets)"
            }
        ],
        "trip_attributes": [
            [
                {
                    "cabin_attributes": {
                        "aircraft_interior_images": [
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-001.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-002.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-003.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-004.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-1/interiors/image-005.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-2/interiors/image-001.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-2/interiors/image-002.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-2/interiors/image-003.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-800-738-layout-2/interiors/image-004.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/boeing-737-max-8-7m8/interiors/image-001.jpg"
                        ],
                        "baggages": [
                            {
                                "type": "carry_on",
                                "notes": "NOTE: Bulkhead seats do not have under seat storage, therefore, all carry-on baggage must be stowed in the overhead bin during take-off and landing.",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 2,
                                                "piece_allowance": {
                                                    "price_ref": "carryon_p1",
                                                    "dimension_allowance_ref": "carryon_d1"
                                                }
                                            }
                                        ],
                                        "description": "1 Carry-on Item & 1 Personal Item",
                                        "total_quantity": 2
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "carryon_p1",
                                        "amount": "0"
                                    }
                                ],
                                "description": "American Airlines carry-on baggage policy",
                                "dimension_allowance": [
                                    {
                                        "ref": "carryon_d1",
                                        "max_linear_in_cm": "115",
                                        "max_linear_in_inch": "45",
                                        "max_dimension_in_cm": "56 x 36 x 23 cm",
                                        "max_dimension_in_inch": "22 x 14 x 9 in"
                                    }
                                ]
                            },
                            {
                                "type": "checked",
                                "notes": "Extra baggage is any bag exceeding the free checked baggage allowance corresponding to passenger??™s fare (i.e., the first piece of baggage for a GoLight ticket, the second piece of baggage for a Flex ticket or the third piece of baggage for Business Class).",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: $30.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p1",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "US domestic (including Canada, Hawaii, Puerto Rico, and US Virgin Islands",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: $30.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p1",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Mexico",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: $30.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p1",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "SSecond bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Caribbean (except Cuba and Haiti)",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: Free ($40.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Cuba",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $70.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p6",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Haiti",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: $30.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p1",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD ($55.00 USD to/from Honduras seasonally)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Central America (except Panama)",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Panama",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($45.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $65.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p7",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "South America (except Colombia, Ecuador, and Guyana)",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $55.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p8",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Colombia",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p8",
                                                    "weight_allowance_ref": "checked_w2",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Ecuador",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p8",
                                                    "weight_allowance_ref": "checked_w2",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Guyana",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($75.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $100.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p4",
                                                    "weight_allowance_ref": "checked_w2",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Transatlantic",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Transpacific",
                                        "total_quantity": 2
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "checked_p1",
                                        "amount": "30.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p2",
                                        "amount": "40.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p3",
                                        "amount": "75.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p4",
                                        "amount": "100.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p5",
                                        "amount": "0",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p6",
                                        "amount": "70.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p7",
                                        "amount": "65.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p8",
                                        "amount": "55.00",
                                        "currency": "USD"
                                    }
                                ],
                                "description": "American Airlines' (AA) checked baggage / hold luggage policy",
                                "weight_allowance": [
                                    {
                                        "ref": "checked_w1",
                                        "max_weight_in_kg": "23",
                                        "max_weight_in_lb": "50"
                                    },
                                    {
                                        "ref": "checked_w2",
                                        "max_weight_in_kg": "32",
                                        "max_weight_in_lb": "70"
                                    }
                                ],
                                "dimension_allowance": [
                                    {
                                        "ref": "checked_d1",
                                        "max_linear_in_cm": "157",
                                        "max_linear_in_inch": "62"
                                    }
                                ]
                            },
                            {
                                "type": "excess",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "US domestic (including Canada, Hawaii, Puerto Rico, and US Virgin Islands)",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "Caribbean, Central America, and Mexico",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "South America",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "Transatlantic",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "Transpacific",
                                        "total_quantity": 2
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "excess_p1",
                                        "amount": "150.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "excess_p2",
                                        "amount": "200.00",
                                        "currency": "USD"
                                    }
                                ],
                                "description": "American Airlines' (AA) fee for excess baggage"
                            },
                            {
                                "type": "overweight",
                                "notes": "",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "description": "$100.00 USD extra per bag",
                                                "piece_allowance": {
                                                    "price_ref": "overweight_p1",
                                                    "dimension_allowance_ref": "overweight_w1"
                                                }
                                            }
                                        ],
                                        "description": "Waived for all First Class, Business Class, Advantage Executive Platinum, and oneworld Emerald passengers"
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "description": "$200.00 USD extra per bag",
                                                "piece_allowance": {
                                                    "price_ref": "overweight_p2",
                                                    "dimension_allowance_ref": "overweight_w2"
                                                }
                                            }
                                        ],
                                        "description": "Not accepted to/from Cuba or on Transatlantic"
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "description": "$400.00 USD extra per bag",
                                                "piece_allowance": {
                                                    "price_ref": "overweight_p3",
                                                    "dimension_allowance_ref": "overweight_w2"
                                                }
                                            }
                                        ],
                                        "description": "Transpacific (not accepted to/from Australia)"
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "overweight_p1",
                                        "amount": "100.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "overweight_p2",
                                        "amount": "200.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "overweight_p3",
                                        "amount": "450.00",
                                        "currency": "USD"
                                    }
                                ],
                                "description": "American Airlines (AA) will charge the following for bags that are greater than the standard 50 pounds or 23 kilograms:",
                                "weight_allowance": [
                                    {
                                        "ref": "overweight_w1",
                                        "max_weight_in_kg": "32",
                                        "max_weight_in_lb": "70",
                                        "min_weight_in_kg": "24",
                                        "min_weight_in_lb": "51"
                                    },
                                    {
                                        "ref": "overweight_w2",
                                        "max_weight_in_kg": "46",
                                        "max_weight_in_lb": "100",
                                        "min_weight_in_kg": "33",
                                        "min_weight_in_lb": "71"
                                    }
                                ]
                            },
                            {
                                "type": "oversize",
                                "notes": "There are year-round limitations on baggage when traveling to Bolivia, Paraguay and cities in Brazil. Bags with overall dimensions that exceed 125 inches or 320 centimeters will not be accepted.",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "piece_allowance": {
                                                    "price_ref": "oversize_p1",
                                                    "dimension_allowance_ref": "oversize_d1"
                                                }
                                            }
                                        ],
                                        "description": "U S domestic, the Caribbean, Central America (except Panama), Mexico, and Transpacific"
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "piece_allowance": {
                                                    "price_ref": "oversize_p2",
                                                    "dimension_allowance_ref": "oversize_d1"
                                                }
                                            }
                                        ],
                                        "description": "Panama, South America, and Transatlantic."
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "oversize_p1",
                                        "amount": "200.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "oversize_p2",
                                        "amount": "150.00",
                                        "currency": "USD"
                                    }
                                ],
                                "dimension_allowance": [
                                    {
                                        "ref": "oversize_d1",
                                        "max_linear_in_cm": "320",
                                        "min_linear_in_cm": "158",
                                        "max_linear_in_inch": "125",
                                        "min_linear_in_inch": "62"
                                    }
                                ]
                            },
                            {
                                "type": "sports",
                                "description": "Sports equipment such as skis, golf bags, fishing equipment, hockey, and lacrosse equipment will be accepted up to American Airlines' (AA) size and weight limits and will count as one checked bag/hold bag. Associated fees might be applied."
                            }
                        ],
                        "seat_layout": {
                            "display_text": "3-3 seat layout"
                        },
                        "seat_attributes": {
                            "display_text": "30\" seat pitch",
                            "pitch": "30",
                            "width": "standard"
                        }
                    },
                    "cabin_amenities": {
                        "food": {
                            "display_text": "Snacks provided",
                            "cost": "free"
                        },
                        "beverage": {
                            "display_text": "Nonalcoholic beverages provided",
                            "type": "nonalcoholic",
                            "alcoholic_cost": "n/a",
                            "nonalcoholic_cost": "free"
                        },
                        "entertainment": {
                            "display_text": "Streaming entertainment"
                        },
                        "wifi": {
                            "display_text": "Netflix streaming capable (fee)",
                            "quality": "better",
                            "cost": "paid"
                        },
                        "power": {
                            "display_text": "Power & USB outlets",
                            "multiple_at_seat": "no",
                            "usb_port": "yes",
                            "power_outlet": "yes"
                        }
                    },
                    "carrier": "AA",
                    "origin": "DFW",
                    "aircraft": "737",
                    "destination": "LAX",
                    "flight_no": "524"
                },
                {
                    "cabin_attributes": {
                        "aircraft_interior_images": [
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-1/interiors/image-001.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-1/interiors/image-002.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-2/interiors/image-001.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-2/interiors/image-002.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-2/interiors/image-003.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-2/interiors/image-004.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-2/interiors/image-005.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-2/interiors/image-006.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-2/interiors/image-007.jpg",
                            "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a321-321-layout-2/interiors/image-008.jpg"
                        ],
                        "baggages": [
                            {
                                "type": "carry_on",
                                "notes": "NOTE: Bulkhead seats do not have under seat storage, therefore, all carry-on baggage must be stowed in the overhead bin during take-off and landing.",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 2,
                                                "piece_allowance": {
                                                    "price_ref": "carryon_p1",
                                                    "dimension_allowance_ref": "carryon_d1"
                                                }
                                            }
                                        ],
                                        "description": "1 Carry-on Item & 1 Personal Item",
                                        "total_quantity": 2
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "carryon_p1",
                                        "amount": "0"
                                    }
                                ],
                                "description": "American Airlines carry-on baggage policy",
                                "dimension_allowance": [
                                    {
                                        "ref": "carryon_d1",
                                        "max_linear_in_cm": "115",
                                        "max_linear_in_inch": "45",
                                        "max_dimension_in_cm": "56 x 36 x 23 cm",
                                        "max_dimension_in_inch": "22 x 14 x 9 in"
                                    }
                                ]
                            },
                            {
                                "type": "checked",
                                "notes": "Extra baggage is any bag exceeding the free checked baggage allowance corresponding to passenger??™s fare (i.e., the first piece of baggage for a GoLight ticket, the second piece of baggage for a Flex ticket or the third piece of baggage for Business Class).",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: $30.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p1",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "US domestic (including Canada, Hawaii, Puerto Rico, and US Virgin Islands",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: $30.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p1",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Mexico",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: $30.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p1",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "SSecond bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Caribbean (except Cuba and Haiti)",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: Free ($40.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Cuba",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $70.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p6",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Haiti",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: $30.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p1",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD ($55.00 USD to/from Honduras seasonally)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Central America (except Panama)",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p2",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Panama",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($45.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $65.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p7",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "South America (except Colombia, Ecuador, and Guyana)",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $55.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p8",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Colombia",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p8",
                                                    "weight_allowance_ref": "checked_w2",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Ecuador",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($30.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $40.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p8",
                                                    "weight_allowance_ref": "checked_w2",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Guyana",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free ($75.00 USD, Basic Economy)",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Second bag: $100.00 USD",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p4",
                                                    "weight_allowance_ref": "checked_w2",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Transatlantic",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w1",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "First bag: Free",
                                                "piece_allowance": {
                                                    "price_ref": "checked_p5",
                                                    "weight_allowance_ref": "checked_w",
                                                    "dimension_allowance_ref": "checked_d1"
                                                }
                                            }
                                        ],
                                        "description": "Transpacific",
                                        "total_quantity": 2
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "checked_p1",
                                        "amount": "30.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p2",
                                        "amount": "40.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p3",
                                        "amount": "75.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p4",
                                        "amount": "100.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p5",
                                        "amount": "0",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p6",
                                        "amount": "70.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p7",
                                        "amount": "65.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "checked_p8",
                                        "amount": "55.00",
                                        "currency": "USD"
                                    }
                                ],
                                "description": "American Airlines' (AA) checked baggage / hold luggage policy",
                                "weight_allowance": [
                                    {
                                        "ref": "checked_w1",
                                        "max_weight_in_kg": "23",
                                        "max_weight_in_lb": "50"
                                    },
                                    {
                                        "ref": "checked_w2",
                                        "max_weight_in_kg": "32",
                                        "max_weight_in_lb": "70"
                                    }
                                ],
                                "dimension_allowance": [
                                    {
                                        "ref": "checked_d1",
                                        "max_linear_in_cm": "157",
                                        "max_linear_in_inch": "62"
                                    }
                                ]
                            },
                            {
                                "type": "excess",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "US domestic (including Canada, Hawaii, Puerto Rico, and US Virgin Islands)",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "Caribbean, Central America, and Mexico",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p1"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "South America",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "Transatlantic",
                                        "total_quantity": 2
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "quantity": 1,
                                                "description": "Third bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            },
                                            {
                                                "quantity": 1,
                                                "description": "Fourth bag",
                                                "piece_allowance": {
                                                    "price_ref": "excess_p2"
                                                }
                                            }
                                        ],
                                        "description": "Transpacific",
                                        "total_quantity": 2
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "excess_p1",
                                        "amount": "150.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "excess_p2",
                                        "amount": "200.00",
                                        "currency": "USD"
                                    }
                                ],
                                "description": "American Airlines' (AA) fee for excess baggage"
                            },
                            {
                                "type": "overweight",
                                "notes": "",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "description": "$100.00 USD extra per bag",
                                                "piece_allowance": {
                                                    "price_ref": "overweight_p1",
                                                    "dimension_allowance_ref": "overweight_w1"
                                                }
                                            }
                                        ],
                                        "description": "Waived for all First Class, Business Class, Advantage Executive Platinum, and oneworld Emerald passengers"
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "description": "$200.00 USD extra per bag",
                                                "piece_allowance": {
                                                    "price_ref": "overweight_p2",
                                                    "dimension_allowance_ref": "overweight_w2"
                                                }
                                            }
                                        ],
                                        "description": "Not accepted to/from Cuba or on Transatlantic"
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "description": "$400.00 USD extra per bag",
                                                "piece_allowance": {
                                                    "price_ref": "overweight_p3",
                                                    "dimension_allowance_ref": "overweight_w2"
                                                }
                                            }
                                        ],
                                        "description": "Transpacific (not accepted to/from Australia)"
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "overweight_p1",
                                        "amount": "100.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "overweight_p2",
                                        "amount": "200.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "overweight_p3",
                                        "amount": "450.00",
                                        "currency": "USD"
                                    }
                                ],
                                "description": "American Airlines (AA) will charge the following for bags that are greater than the standard 50 pounds or 23 kilograms:",
                                "weight_allowance": [
                                    {
                                        "ref": "overweight_w1",
                                        "max_weight_in_kg": "32",
                                        "max_weight_in_lb": "70",
                                        "min_weight_in_kg": "24",
                                        "min_weight_in_lb": "51"
                                    },
                                    {
                                        "ref": "overweight_w2",
                                        "max_weight_in_kg": "46",
                                        "max_weight_in_lb": "100",
                                        "min_weight_in_kg": "33",
                                        "min_weight_in_lb": "71"
                                    }
                                ]
                            },
                            {
                                "type": "oversize",
                                "notes": "There are year-round limitations on baggage when traveling to Bolivia, Paraguay and cities in Brazil. Bags with overall dimensions that exceed 125 inches or 320 centimeters will not be accepted.",
                                "rules": [
                                    {
                                        "pieces": [
                                            {
                                                "piece_allowance": {
                                                    "price_ref": "oversize_p1",
                                                    "dimension_allowance_ref": "oversize_d1"
                                                }
                                            }
                                        ],
                                        "description": "U S domestic, the Caribbean, Central America (except Panama), Mexico, and Transpacific"
                                    },
                                    {
                                        "pieces": [
                                            {
                                                "piece_allowance": {
                                                    "price_ref": "oversize_p2",
                                                    "dimension_allowance_ref": "oversize_d1"
                                                }
                                            }
                                        ],
                                        "description": "Panama, South America, and Transatlantic."
                                    }
                                ],
                                "prices": [
                                    {
                                        "ref": "oversize_p1",
                                        "amount": "200.00",
                                        "currency": "USD"
                                    },
                                    {
                                        "ref": "oversize_p2",
                                        "amount": "150.00",
                                        "currency": "USD"
                                    }
                                ],
                                "dimension_allowance": [
                                    {
                                        "ref": "oversize_d1",
                                        "max_linear_in_cm": "320",
                                        "min_linear_in_cm": "158",
                                        "max_linear_in_inch": "125",
                                        "min_linear_in_inch": "62"
                                    }
                                ]
                            },
                            {
                                "type": "sports",
                                "description": "Sports equipment such as skis, golf bags, fishing equipment, hockey, and lacrosse equipment will be accepted up to American Airlines' (AA) size and weight limits and will count as one checked bag/hold bag. Associated fees might be applied."
                            }
                        ],
                        "seat_layout": {
                            "display_text": "3-3 seat layout"
                        },
                        "seat_attributes": {
                            "display_text": "31\" seat pitch",
                            "pitch": "31",
                            "width": "wider"
                        }
                    },
                    "cabin_amenities": {
                        "food": {
                            "display_text": "Snacks provided",
                            "cost": "free"
                        },
                        "beverage": {
                            "display_text": "Nonalcoholic beverages provided",
                            "type": "nonalcoholic",
                            "alcoholic_cost": "n/a",
                            "nonalcoholic_cost": "free"
                        },
                        "entertainment": {
                            "display_text": "Seatback on-demand video"
                        },
                        "wifi": {
                            "display_text": "Netflix streaming capable (fee)",
                            "quality": "better",
                            "cost": "paid"
                        },
                        "power": {
                            "display_text": "Power & USB outlets",
                            "multiple_at_seat": "no",
                            "usb_port": "yes",
                            "power_outlet": "yes"
                        }
                    },
                    "carrier": "AA",
                    "origin": "DFW",
                    "aircraft": "32B",
                    "destination": "LAX",
                    "flight_no": "788"
                }
            ]
        ]
    }`
  }
};
