import {
  IATA_CODE_AIRPORT,
  UNIQUE_IDENTIFIER_FOR_AIRPORT,
  NAME_OF_AIRPORT,
  IATA_COUNTRY_CODE,
  LATITUDE,
  LONGITUDE,
  ICAO_CODE,
  TIME_ZONE,
  CITY_NAME,
  CITY,

  LIMIT,
  BEFORE,
  AFTER,
} from './commonTypes'

export default {
  schema: {
    properties: [
      /* iata_code */
      IATA_CODE_AIRPORT(),
      /* id */
      // UNIQUE_IDENTIFIER_FOR_AIRPORT(),
      /* name */
      NAME_OF_AIRPORT(),
      /* iata_country_code */
      IATA_COUNTRY_CODE(),
      /* latitude */
      LATITUDE(),
      /* longitude */
      LONGITUDE(),
      /* icao_code */
      ICAO_CODE(),
      /* time_zone */
      TIME_ZONE(),
      /* city_name */
      // CITY_NAME(),
      /* city */
      CITY(),
    ]
  },
  single: {
    endPoint: 'GET https://api.flyline.io/api/airports/{iata_code}/',
    urlParameters:{
      properties: [
        /* iata_code */
        IATA_CODE_AIRPORT(),
      ],
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/airports/{iata_code}/" \\
-H "Accept-Encoding: gzip" \\
-H "Accept: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/airports/{iata_code}/', {
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
response = requests.get("https://api.flyline.io/api/airports/{iata_code}/", headers=headers)
data = response.json()`     ,
      ruby: `require 'rest-client'
require 'json'
headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
result = RestClient.get('https://api.flyline.io/api/airports/{iata_code}/', headers)
p JSON.parse(result)`
    },
    response: 
`{
  "data": {
    "city": {
        "iata_code": "DFW",
        "name": "Dallas/Fort Worth International Airport",
        "iata_country_code": "US"
    },
    "name": "Dallas/Fort Worth International Airport",
    "iata_code": "DFW",
    "icao_code": "KDFW",
    "iata_country_code": "US",
    "latitude": "32.897460",
    "longitude": "-97.036125",
    "time_zone": "America/Chicago"
  }
}`
  },
  list: {
    endPoint: 'GET https://api.flyline.io/api/airports/',
    queryParameters: {
      properties: [
        /* after */
        AFTER(),
        /* before */
        BEFORE(),
        /* limit */
        LIMIT(),
        /* iata_country_code */
        IATA_COUNTRY_CODE()
      ]
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/airports/" \\
-H "Accept-Encoding: gzip" \\
-H "Accept: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/airports/', {
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
response = requests.get("https://api.flyline.io/api/airports/", headers=headers)
data = response.json()`,
      ruby: `require 'rest-client'
require 'json'
headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
result = RestClient.get('https://api.flyline.io/api/airports/', headers)
p JSON.parse(result)`
    },
    response:
`{
  "meta": {
    "limit": 50,
    "after": "cD0yMDIwLTEyLTE3KzE4JTNBMTklM0EzNy4wNzkyNjMlMkIwMCUzQTAw"
  },
  "data": [
    {
      ""city": {
        "iata_code": "ZZV",
        "name": "Zanesville",
        "iata_country_code": "US"
      },
      "name": "Zanesville",
      "iata_code": "ZZV",
      "icao_code": "KZZV",
      "iata_country_code": "US",
      "latitude": "39.933334",
      "longitude": "-82.016670",
      "time_zone": "America/New_York"
    }
  ]
}`
  }
}