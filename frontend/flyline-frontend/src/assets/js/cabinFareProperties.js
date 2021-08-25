import {
  CABIN_FARE_GET_PARAMS,
  CABIN_FARE_SCHEMA,
  LIMIT,
  BEFORE,
  AFTER,
} from './commonTypes'

export default {
  schema: {
    properties: CABIN_FARE_SCHEMA()
  },
  single: {
    endPoint: 'GET https://api.flyline.io/api/cabin-booking/',
    urlParameters:{
      properties: CABIN_FARE_GET_PARAMS(),
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/cabin-booking/?carrier=AA&cabin_class=economy" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch(https://api.flyline.io/api/cabin-booking/?carrier=AA&cabin_class=economy', {
  method: 'GET',
  headers: {
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  }
}).then((r) => r.json())`,
      py:
`import requests
headers = {
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
params = {
    "carrier": "AA",
    "cabin_class": "economy",
}
response = requests.get("https://api.flyline.io/api/cabin-booking/", headers=headers, params=params)
data = response.json()`,
      ruby: `require 'rest-client'
require 'json'
params = {
    'carrier' => 'AA',
    'cabin_class' => 'economy',
}
headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
result = RestClient.get('https://api.flyline.io/api/cabin-booking/', params, headers)
p JSON.parse(result)`
    },
    response: 
`{
  "AA": [
      {
          "carrier": "AA",
          "cabin_class": "economy",
          "cabin_class_code": "Y",
          "fare_class_codes": [
              "E", "G", "H", "K", "L", "M", "N", "O", "Q", "S", "T", "V", "Y"
          ]
      }
  ]
}`,
  },
}