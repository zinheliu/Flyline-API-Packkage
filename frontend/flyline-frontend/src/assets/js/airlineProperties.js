import {
  IATA_CODE_AIRLINE,
  UNIQUE_IDENTIFIER_FOR_AIRLINE,
  NAME_OF_AIRLINE,

  LIMIT,
  BEFORE,
  AFTER,
} from './commonTypes'

export default {
  schema: {
    properties: [
      /* iata_code */
      IATA_CODE_AIRLINE(),
      /* id */
      // UNIQUE_IDENTIFIER_FOR_AIRLINE(),
      /* name */
      NAME_OF_AIRLINE(),
    ]
  },
  single: {
    endPoint: 'GET https://api.flyline.io/api/airlines/{iata_code}/',
    urlParameters:{
      properties: [
        /* iata_code */
        IATA_CODE_AIRLINE(),
      ],
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/airlines/{iata_code}/" \\
-H "Accept-Encoding: gzip" \\
-H "Accept: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/airlines/{iata_code}/', {
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
response = requests.get("https://api.flyline.io/api/airlines/{iata_code}/", headers=headers)
data = response.json()`,
      ruby: `require 'rest-client'
require 'json'
headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
result = RestClient.get('https://api.flyline.io/api/airlines/{iata_code}/', headers)
p JSON.parse(result)`
    },
    response:
`{
  "data": {
    "name": "American Airlines",
    "iata_code": "AA"
  }
}`
  },
  list: {
    endPoint: 'GET https://api.flyline.io/api/airlines/',
    queryParameters: {
      properties: [
        /* after */
        AFTER(),
        /* before */
        BEFORE(),
        /* limit */
        LIMIT(),
      ]
    },
    request: {
      curl: 
`curl -X GET --compressed "https://api.flyline.io/api/airlines/" \\
-H "Accept-Encoding: gzip" \\
-H "Accept: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>"`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/airlines/', {
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
response = requests.get("https://api.flyline.io/api/airlines/", headers=headers)
data = response.json()` ,
      ruby: `require 'rest-client'
require 'json'
headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
result = RestClient.get('https://api.flyline.io/api/airlines/', headers)
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
      "name": "American Airlines",
      "iata_code": "AA"
    }
  ]
}`
  }
}