import {
    AIR_SCHEDULES_BY_ROUTE_BODY_PAMARS,
    AIR_SCHEDULES_SCHEMA,
    AIR_SCHEDULES_BY_FLIGHT_BODY_PAMARS
} from "./commonTypes";

export default {
  schema: {
    properties: AIR_SCHEDULES_SCHEMA()
  },

  listByRoute: {
    endPoint: "POST https://api.flyline.io/api/schedule/",
    queryParameters: {
      properties: AIR_SCHEDULES_BY_ROUTE_BODY_PAMARS()
    },
    request: {
      curl: `curl -X POST --compressed "https://api.flyline.io/api/schedule/" \\
-H "Accept-Encoding: gzip" \\
-H "Content-Type: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>" \\
-d '{
    "origin": "DFW",
    "destination": "LAX",
    "airline": "AA",
    "date": "2021-06-04"
}'`,
      node: `import fetch from 'unfetch'
fetch('https://api.flyline.io/api/schedule/', {
  method: 'POST',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
    body: JSON.stringify({
      "origin": "DFW",
      "destination": "LAX",
      "airline": "AA",
      "date": "2021-06-04"
  }).then((r) => r.json())`,
      py: `import requests
headers = {
  "Accept-Encoding": "gzip",
  "Accept": "application/json",
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
data = {
  "origin": "DFW",
  "destination": "LAX",
  "airline": "AA",
  "date": "2021-06-04"
}
response = requests.get("https://api.flyline.io/api/schedule/", headers=headers, data=data)
data = response.json()`,
      js: `const data = {
  "origin": "DFW",
  "destination": "LAX",
  "airline": "AA",
  "date": "2021-06-04"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'FToken <YOUR_ACCESS_TOKEN>'
};
fetch("https://api.flyline.io/api/schedule/",
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
    "origin" => "DFW",
    "destination" => "LAX",
    "airline" => "AA",
    "date" => "2021-06-04"
}
result = RestClient.post('https://api.flyline.io/api/schedule/', payload.to_json, headers)
p JSON.parse(result)`
    },
    response: `[
      {
          "flight_status": "Scheduled",
          "flight_no": "524",
          "aircraft": "789",
          "distance": 0,
          "departure": {
              "airport_code": "DFW",
              "city_code": "Dallas",
              "country_code": "US",
              "time_scheduled": "2021-06-04T06:00:00",
              "time_expected": "2021-06-04T06:00:00",
              "time_actual": null,
              "terminal": "D"
          },
          "arrival": {
              "airport_code": "LAX",
              "city_code": "Los Angeles",
              "country_code": "US",
              "time_scheduled": "2021-06-04T07:05:00",
              "time_expected": "2021-06-04T07:05:00",
              "time_actual": null,
              "terminal": "4"
          }
      },
      {
          "flight_status": "Scheduled",
          "flight_no": "2853",
          "aircraft": "772",
          "distance": 0,
          "departure": {
              "airport_code": "DFW",
              "city_code": "Dallas",
              "country_code": "US",
              "time_scheduled": "2021-06-04T08:00:00",
              "time_expected": "2021-06-04T08:00:00",
              "time_actual": null,
              "terminal": "A"
          },
          "arrival": {
              "airport_code": "LAX",
              "city_code": "Los Angeles",
              "country_code": "US",
              "time_scheduled": "2021-06-04T09:11:00",
              "time_expected": "2021-06-04T09:11:00",
              "time_actual": null,
              "terminal": "4"
          }
      },
   ]`
  },
  listByFlightNumber: {
    endPoint: "POST https://api.flyline.io/api/schedule-flight/",
    queryParameters: {
      properties: AIR_SCHEDULES_BY_FLIGHT_BODY_PAMARS()
    },
    request: {
      curl: `curl -X POST --compressed "https://api.flyline.io/api/schedule-flight/" \\
-H "Accept-Encoding: gzip" \\
-H "Content-Type: application/json" \\
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>" \\
-d '{
    "airline": "AA",
    "date": "2021-06-01",
    "flight_number": "1100"
}'`,
      node: `import fetch from 'unfetch'
fetch('https://api.flyline.io/api/schedule-flight/', {
  method: 'POST',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  },
  body: JSON.stringify({
    "airline": "AA",
    "date": "2021-06-01",
    "flight_number": "1100"
}).then((r) => r.json())`,
      py: `import requests
headers = {
  "Accept-Encoding": "gzip",
  "Accept": "application/json",
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
data = {
  "airline": "AA",
  "date": "2021-06-01",
  "flight_number": "1100"
}
response = requests.get("https://api.flyline.io/api/schedule-flight/", headers=headers, data=data)
data = response.json()`,
      js: `const data = {
  "airline": "AA",
  "date": "2021-06-01",
  "flight_number": "1100"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'FToken <YOUR_ACCESS_TOKEN>'
};
fetch("https://api.flyline.io/api/schedule-flight/",
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
    'airline' => "AA",
    'date' => '2021-06-01',
    'flight_number' => '1100'
}
result = RestClient.post('https://api.flyline.io/api/schedule-flight/', payload.to_json, headers)
p JSON.parse(result)`
    },
    response: `{
      "flight_status": "Scheduled",
      "flight_no": "1100",
      "aircraft": "32B",
      "distance": 0,
      "departure": {
          "airport_code": "DFW",
          "city_code": "Dallas",
          "country_code": "US",
          "time_scheduled": "2021-06-04T12:51:00",
          "time_expected": "2021-06-04T12:51:00",
          "time_actual": null,
          "terminal": "C"
      },
      "arrival": {
          "airport_code": "BNA",
          "city_code": "Nashville",
          "country_code": "US",
          "time_scheduled": "2021-06-04T14:47:00",
          "time_expected": "2021-06-04T14:47:00",
          "time_actual": null,
          "terminal": null
      }
   }`
  },
};
