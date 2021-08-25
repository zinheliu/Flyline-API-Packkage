import {
  IATA_CODE_AIRCRAFT,
  UNIQUE_IDENTIFIER_FOR_AIRCRAFT,
  NAME_OF_AIRCRAFT,

  LIMIT,
  BEFORE,
  AFTER,
} from './commonTypes'

export default {
  schema: {
    properties: [
      /* iata_code */
      IATA_CODE_AIRCRAFT(),
      /* id */
      // UNIQUE_IDENTIFIER_FOR_AIRCRAFT(),
      /* name */
      NAME_OF_AIRCRAFT(),
    ]
  },
  single: {
    endPoint: 'GET https://api.flyline.io/api/aircraft/{iata_code}/',
    urlParameters:{
      properties: [
        /* iata_code */
        IATA_CODE_AIRCRAFT(),
      ],
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/aircraft/{iata_code}/" \\ 
  -H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/aircraft/{iata_code}/', {
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
response = requests.get("https://api.flyline.io/api/aircraft/{iata_code}/", headers=headers)
data = response.json()`,
      ruby: `require 'rest-client'
require 'json'
headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
result = RestClient.get('https://api.flyline.io/api/aircraft/{iata_code}/', headers)
p JSON.parse(result)`
    },
    response: 
`{
  "data": {
    "name": "Boeing 757",
    "iata_code": "757"
  }
}`,
  },
  list: {
    endPoint: 'GET https://api.flyline.io/api/aircraft/',
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
`curl -X GET --compressed "https://api.flyline.io/api/aircraft/" \\ 
-H "Accept: application/json" \\ 
-H "Accept-Encoding: gzip" \\ 
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/aircraft/', {
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
response = requests.get("https://api.flyline.io/api/aircraft/", headers=headers)
data = response.json()`,
      ruby: `require 'rest-client'
require 'json'
headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
result = RestClient.get('https://api.flyline.io/api/aircraft/', headers)
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
      "name": "Airbus Industries A380",
      "iata_code": "380"
    }
  ]
}`,
  }
}