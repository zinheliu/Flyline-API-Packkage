import {
  IATA_CODE_CITY,
  UNIQUE_IDENTIFIER_FOR_AIRCRAFT,
  NAME_OF_CITY,
  IATA_COUNTRY_CODE,
  LATITUDE,
  LONGITUDE,
  TIME_ZONE,
  LIMIT,
  BEFORE,
  AFTER,
} from './commonTypes'

export default {
  schema: {
    properties: [
      /* iata_code */
      IATA_CODE_CITY(),
      /* id */
      // UNIQUE_IDENTIFIER_FOR_AIRCRAFT(),
      /* name */
      NAME_OF_CITY(),
      IATA_COUNTRY_CODE(undefined,true, undefined, undefined, undefined, "The two-character IATA code for the country"),
      LATITUDE(undefined, true, undefined, undefined, undefined, "The latitude city", "US"),
      LONGITUDE(undefined, true, undefined, undefined, undefined, "The longitude city", "US"),
      TIME_ZONE(undefined, true, undefined, undefined, undefined, "The timezone of the city", "America/New_York"),
    ] 
  },
  single: {
    endPoint: 'GET https://api.flyline.io/api/cities/{iata_code}/',
    urlParameters:{
      properties: [
        /* iata_code */
        IATA_CODE_CITY(),
      ],
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/cities/{iata_code}/" \\ 
  -H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/cities/{iata_code}/', {
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
response = requests.get("https://api.flyline.io/api/cities/{iata_code}/", headers=headers)
data = response.json()`,
      ruby: `require 'rest-client'
require 'json'
headers = {
'Content-Type' => 'application/json',
'Accept' => 'application/json',
'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
result = RestClient.get('https://api.flyline.io/api/cities/{iata_code}/', headers)
p JSON.parse(result)`
    },
    response: 
`{
  "data": {
      "iata_code": "NYC",
      "name": "New York",
      "iata_country_code": "US",
      "latitude": "40.714353",
      "longitude": "-74.005973",
      "time_zone": "America/New_York"
  }
}`,
  },
  list: {
    endPoint: 'GET https://api.flyline.io/api/cities/',
    queryParameters: {
      properties: [
        /* limit */
        LIMIT(),
        /* before */
        BEFORE(),
        /* after */
        AFTER(),
      ]
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/cities/" \\ 
-H "Accept: application/json" \\ 
-H "Accept-Encoding: gzip" \\ 
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/cities/', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Encoding': 'gzip',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  }
}).then((r) => r.json())`,
      py:
`import requests
headers = {
  "Accept": "application/json",
  "Accept-Encoding": "gzip",
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
response = requests.get("https://api.flyline.io/api/cities/", headers=headers)
data = response.json()`
    },
    response: 
`{
  "meta": {
      "after": "cD0yMDIxLTAxLTA3KzA2JTNBMzQlM0E1Ny43NjQ2NjklMkIwMCUzQTAw",
      "before": null,
      "limit": 50
  },
  "data": [
      {
          "iata_code": "ZZV",
          "name": "Zanesville",
          "iata_country_code": "US",
          "latitude": "39.933334",
          "longitude": "-82.016670",
          "time_zone": "America/New_York"
      }
}`,
  }
}