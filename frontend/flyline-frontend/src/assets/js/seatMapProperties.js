import {
  SEAT_MAP_SCHEMA,
  SEAT_MAP_LIST_BODY,
} from './commonTypes'

export default {
  schema: {
    properties: SEAT_MAP_SCHEMA()
  },
  list: {
    endPoint: 'POST https://api.flyline.io/api/seat-maps/',
    queryParameters: {
      properties: SEAT_MAP_LIST_BODY()
    },
    request: {
      curl: 
`curl -X POST --compressed "https://api.flyline.io/api/seat-maps/" \
-H "Accept-Encoding: gzip" \
-H "Content-Type: application/json" \
-H "Authorization: FToken <YOUR_ACCESS_TOKEN>" \
-d '{
"carrier": "AA",
"aircraft": "332"
}'`,
      node:
`import fetch from 'unfetch'
fetch('https://api.flyline.io/api/seat-maps/', {
  method: 'POST',
  headers: {
    'Accept-Encoding': 'gzip',
    'Accept': 'application/json',
    'Authorization': 'FToken <YOUR_ACCESS_TOKEN>'
  },
  body: JSON.stringify({
    "carrier": "AA",
    "aircraft": "332"
  })
}).then((r) => r.json())`,
      js: 
`const data = {
  "carrier": "AA",
  "aircraft": "332"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'FToken <YOUR_ACCESS_TOKEN>'
};
fetch("https://api.flyline.io/api/seat-maps/",
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
      py:
`import requests
headers = {
  "Accept-Encoding": "gzip",
  "Accept": "application/json",
  "Authorization": "FToken <YOUR_ACCESS_TOKEN>"
}
data = {
  "carrier": "AA",
  "aircraft": "332"
}
response = requests.get("https://api.flyline.io/api/seat-maps/", headers=headers, data=data)
data = response.json()`,
      ruby: 
`require 'rest-client'
require 'json'
headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'FToken <YOUR_ACCESS_TOKEN>'
}
payload = {
    'carrier' => 'AA',
    'aircraft' => '332'
}
result = RestClient.post('https://api.flyline.io/api/seat-maps/', payload.to_json, headers)
p JSON.parse(result)`
    },
    response: 
`[
  {
      "id": 675,
      "traveler_photos": [
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-000.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-001.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-002.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-003.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-004.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-005.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-006.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-007.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-008.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-009.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-010.jpg",
          "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/travelers/traveler-011.jpg"
      ],
      "display_text": "Airbus A330-200 (332)",
      "airline_code": "AA",
      "airline_name": "American Airlines",
      "aircraft_code": "332",
      "seat_map": "https://flyline-api-backend-storages.s3.amazonaws.com/media/seatmaps/american-airlines(AA)/airbus-a330-200-332/seatmap.svg",
      "seat_map_key": "Good seat,Be Aware - See comments,Bad seat,Mixed Review,Standard seat,Blocked seat,Premium seat,Crew seat,Power port,Emergency exit,Galley,Lavatory,Closet,Bassinet",
      "overview": "The American Airlines Airbus A330-200 version features Premium Economy seating. The aircraft is configured with 20 seats that transform into lie-flat beds in Business Class, 21 recliner-style seats in Premium Economy Class, and 206 standard Economy Class seats in the Main Cabin. The Main Cabin also features 50 Main Cabin Extra seats which may be selected for an additional fee for additional legroom and preferred boarding. The aircraft are mainly used on North America to Europe routes.",
      "seats": [
          {
              "data": [
                  {
                      "designator": "1 A",
                      "description": "Seat 1 A is a standard Business Class seat that transforms into a fully-flat bed. The seat is also located at a bulkhead. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "1 C",
                      "description": "Seat 1 C is a standard Business Class seat that transforms into a fully-flat bed. The seat is also located at a bulkhead. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "1 F",
                      "description": "Seat 1 F is a standard Business Class seat that transforms into a fully-flat bed. The seat is also located at a bulkhead. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "1 H",
                      "description": "Seat 1 H is a standard Business Class seat that transforms into a fully-flat bed. The seat is also located at a bulkhead. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "2 A",
                      "description": "Seat 2 A is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "2 C",
                      "description": "Seat 2 C is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "2 F",
                      "description": "Seat 2 F is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "2 H",
                      "description": "Seat 2 H is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "3 A",
                      "description": "Seat 3 A is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "3 C",
                      "description": "Seat 3 C is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "3 F",
                      "description": "Seat 3 F is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "3 H",
                      "description": "Seat 3 H is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "4 A",
                      "description": "Seat 4 A is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "4 C",
                      "description": "Seat 4 C is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "4 F",
                      "description": "Seat 4 F is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "4 H",
                      "description": "Seat 4 H is a standard Business Class seat that transforms into a fully-flat bed.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "5 A",
                      "description": "Seat 5 A is a standard Business Class seat that transforms into a fully-flat bed. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "5 C",
                      "description": "Seat 5 C is a standard Business Class seat that transforms into a fully-flat bed. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "5 F",
                      "description": "Seat 5 F is a standard Business Class seat that transforms into a fully-flat bed. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "5 H",
                      "description": "Seat 5 H is a standard Business Class seat that transforms into a fully-flat bed. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  }
              ],
              "seat_count": 20,
              "cabin_class": "business"
          },
          {
              "data": [
                  {
                      "designator": "10 A",
                      "description": "Seat 10 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "10 B",
                      "description": "Seat 10 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "10 C",
                      "description": "Seat 10 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "10 D",
                      "description": "Seat 10 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "10 E",
                      "description": "Seat 10 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "10 F",
                      "description": "Seat 10 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "10 G",
                      "description": "Seat 10 G is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "10 H",
                      "description": "Seat 10 H is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "11 A",
                      "description": "Seat 11 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "11 B",
                      "description": "Seat 11 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "11 C",
                      "description": "Seat 11 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "11 D",
                      "description": "Seat 11 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "11 E",
                      "description": "Seat 11 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "11 F",
                      "description": "Seat 11 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "11 G",
                      "description": "Seat 11 G is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "11 H",
                      "description": "Seat 11 H is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "12 A",
                      "description": "Seat 12 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "12 B",
                      "description": "Seat 12 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "12 C",
                      "description": "Seat 12 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "12 D",
                      "description": "Seat 12 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "12 E",
                      "description": "Seat 12 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "12 F",
                      "description": "Seat 12 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "12 G",
                      "description": "Seat 12 G is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "12 H",
                      "description": "Seat 12 H is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "13 A",
                      "description": "Seat 13 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "13 B",
                      "description": "Seat 13 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "13 C",
                      "description": "Seat 13 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "13 D",
                      "description": "Seat 13 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "13 E",
                      "description": "Seat 13 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "13 F",
                      "description": "Seat 13 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "13 G",
                      "description": "Seat 13 G is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "13 H",
                      "description": "Seat 13 H is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "14 A",
                      "description": "Seat 14 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "14 B",
                      "description": "Seat 14 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "14 C",
                      "description": "Seat 14 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "14 D",
                      "description": "Seat 14 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "14 E",
                      "description": "Seat 14 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "14 F",
                      "description": "Seat 14 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "14 G",
                      "description": "Seat 14 G is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "14 H",
                      "description": "Seat 14 H is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "15 A",
                      "description": "Seat 15 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "15 B",
                      "description": "Seat 15 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "15 C",
                      "description": "Seat 15 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "15 D",
                      "description": "Seat 15 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "15 E",
                      "description": "Seat 15 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "15 F",
                      "description": "Seat 15 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "15 G",
                      "description": "Seat 15 G is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "15 H",
                      "description": "Seat 15 H is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "16 A",
                      "description": "Seat 16 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "16 B",
                      "description": "Seat 16 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "16 C",
                      "description": "Seat 16 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "16 D",
                      "description": "Seat 16 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "16 E",
                      "description": "Seat 16 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "16 F",
                      "description": "Seat 16 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "16 G",
                      "description": "Seat 16 G is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "16 H",
                      "description": "Seat 16 H is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "17 A",
                      "description": "Seat 17 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "17 B",
                      "description": "Seat 17 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "17 C",
                      "description": "Seat 17 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "17 D",
                      "description": "Seat 17 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "17 E",
                      "description": "Seat 17 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "17 F",
                      "description": "Seat 17 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "17 G",
                      "description": "Seat 17 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "17 H",
                      "description": "Seat 17 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "18 A",
                      "description": "Seat 18 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "18 B",
                      "description": "Seat 18 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "18 C",
                      "description": "Seat 18 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "18 D",
                      "description": "Seat 18 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "18 E",
                      "description": "Seat 18 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "18 F",
                      "description": "Seat 18 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "18 G",
                      "description": "Seat 18 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "18 H",
                      "description": "Seat 18 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "19 A",
                      "description": "Seat 19 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "19 B",
                      "description": "Seat 19 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "19 C",
                      "description": "Seat 19 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "19 D",
                      "description": "Seat 19 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "19 E",
                      "description": "Seat 19 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "19 F",
                      "description": "Seat 19 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "19 G",
                      "description": "Seat 19 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "19 H",
                      "description": "Seat 19 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "20 A",
                      "description": "Seat 20 A is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "20 B",
                      "description": "Seat 20 B is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "20 C",
                      "description": "Seat 20 C is a standard Economy Class seat. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "20 D",
                      "description": "Seat 20 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "20 E",
                      "description": "Seat 20 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "20 F",
                      "description": "Seat 20 F is a standard Economy Class seat. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "20 G",
                      "description": "Seat 20 G is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "20 H",
                      "description": "Seat 20 H is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "21 C",
                      "description": "Seat 21 C is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "21 D",
                      "description": "Seat 21 D is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "21 E",
                      "description": "Seat 21 E is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "21 F",
                      "description": "Seat 21 F is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "27 A",
                      "description": "Seat 27 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "27 B",
                      "description": "Seat 27 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "27 C",
                      "description": "Seat 27 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "27 D",
                      "description": "Seat 27 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "27 E",
                      "description": "Seat 27 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "27 F",
                      "description": "Seat 27 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "27 G",
                      "description": "Seat 27 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "27 H",
                      "description": "Seat 27 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "28 A",
                      "description": "Seat 28 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "28 B",
                      "description": "Seat 28 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "28 C",
                      "description": "Seat 28 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "28 D",
                      "description": "Seat 28 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "28 E",
                      "description": "Seat 28 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "28 F",
                      "description": "Seat 28 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "28 G",
                      "description": "Seat 28 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "28 H",
                      "description": "Seat 28 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "29 A",
                      "description": "Seat 29 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "29 B",
                      "description": "Seat 29 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "29 C",
                      "description": "Seat 29 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "29 D",
                      "description": "Seat 29 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "29 E",
                      "description": "Seat 29 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "29 F",
                      "description": "Seat 29 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "29 G",
                      "description": "Seat 29 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "29 H",
                      "description": "Seat 29 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "30 A",
                      "description": "Seat 30 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "30 B",
                      "description": "Seat 30 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "30 C",
                      "description": "Seat 30 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "30 D",
                      "description": "Seat 30 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "30 E",
                      "description": "Seat 30 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "30 F",
                      "description": "Seat 30 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "30 G",
                      "description": "Seat 30 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "30 H",
                      "description": "Seat 30 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "31 A",
                      "description": "Seat 31 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "31 B",
                      "description": "Seat 31 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "31 C",
                      "description": "Seat 31 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "31 D",
                      "description": "Seat 31 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "31 E",
                      "description": "Seat 31 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "31 F",
                      "description": "Seat 31 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "31 G",
                      "description": "Seat 31 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "31 H",
                      "description": "Seat 31 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "32 A",
                      "description": "Seat 32 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "32 B",
                      "description": "Seat 32 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "32 C",
                      "description": "Seat 32 C is a standard Economy Class seat. The seat back, due to aisle positioning, might be bumped by a passenger or crew member passing from the rear of the aircraft.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "32 D",
                      "description": "Seat 32 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "32 E",
                      "description": "Seat 32 E is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "32 F",
                      "description": "Seat 32 F is a standard Economy Class seat. The seat back, due to aisle positioning, might be bumped by a passenger or crew member passing from the rear of the aircraft.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "32 G",
                      "description": "Seat 32 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "32 H",
                      "description": "Seat 32 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "33 A",
                      "description": "Seat 33 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "33 B",
                      "description": "Seat 33 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "33 C",
                      "description": "Seat 33 C is a standard Economy Class seat that is not aligned with the row in front. The alignment will affect underseat storage and legroom. The tray table is installed in a fixed armrest, therefore, slightly reducing seat width.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "33 D",
                      "description": "Seat 33 D is a standard Economy Class seat that is not aligned with the row in front. The alignment will affect underseat storage and legroom. The tray table is installed in a fixed armrest, therefore, slightly reducing seat width.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "33 F",
                      "description": "Seat 33 F is a standard Economy Class seat that is not aligned with the row in front. The alignment will affect underseat storage and legroom. The tray table is installed in a fixed armrest, therefore, slightly reducing seat width.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "33 G",
                      "description": "Seat 33 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "33 H",
                      "description": "Seat 33 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "34 A",
                      "description": "Seat 34 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "34 B",
                      "description": "Seat 34 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "34 C",
                      "description": "Seat 34 C is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "34 D",
                      "description": "Seat 34 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "34 F",
                      "description": "Seat 34 F is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "34 G",
                      "description": "Seat 34 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "34 H",
                      "description": "Seat 34 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "35 A",
                      "description": "Seat 35 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "35 B",
                      "description": "Seat 35 B is a standard Economy Class seat. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "35 C",
                      "description": "Seat 35 C is a standard Economy Class seat. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "35 D",
                      "description": "Seat 35 D is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "35 F",
                      "description": "Seat 35 F is a standard Economy Class seat. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "35 G",
                      "description": "Seat 35 G is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "35 H",
                      "description": "Seat 35 H is a standard Economy Class seat in a last row of the aircraft that might have limited to no recline. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "36 A",
                      "description": "Seat 36 A is a standard Economy Class seat in the last row of the aircraft that might have limited to no recline. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "36 B",
                      "description": "Seat 36 B is a standard Economy Class seat in the last row of the aircraft that might have limited to no recline. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "36 C",
                      "description": "Seat 36 C is a standard Economy Class seat in the last row of the aircraft that might have limited to no recline. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "36 D",
                      "description": "Seat 36 D is a standard Economy Class seat in the last row of the aircraft that might have limited to no recline. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "36 F",
                      "description": "Seat 36 F is a standard Economy Class seat in the last row of the aircraft that might have limited to no recline. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "9 A",
                      "description": "Seat 9 A is a standard Economy Class seat located at a bulkhead. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "9 B",
                      "description": "Seat 9 B is a standard Economy Class seat located at a bulkhead. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "9 C",
                      "description": "Seat 9 C is a standard Economy Class seat located at a bulkhead. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "9 D",
                      "description": "Seat 9 D is a standard Economy Class seat located at a bulkhead. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "9 E",
                      "description": "Seat 9 E is a standard Economy Class seat located at a bulkhead. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "9 F",
                      "description": "Seat 9 F is a standard Economy Class seat located at a bulkhead. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "9 G",
                      "description": "Seat 9 G is a standard Economy Class seat located at a bulkhead. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "9 H",
                      "description": "Seat 9 H is a standard Economy Class seat located at a bulkhead. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing.",
                      "position_type": "BULKHEAD"
                  }
              ],
              "seat_count": 174,
              "cabin_class": "main-cabin"
          },
          {
              "data": [
                  {
                      "designator": "23 A",
                      "description": "Seat 23 A is a standard Economy Class seat located at an Exit Row. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the lavatory area might be bothersome.",
                      "position_type": "EXIT_ROW"
                  },
                  {
                      "designator": "23 B",
                      "description": "Seat 23 B is a standard Economy Class seat located at an Exit Row. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the lavatory area might be bothersome.",
                      "position_type": "EXIT_ROW"
                  },
                  {
                      "designator": "23 C",
                      "description": "Seat 23 C is a standard Economy Class seat located at an Exit Row. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the lavatory area might be bothersome.",
                      "position_type": "EXIT_ROW"
                  },
                  {
                      "designator": "23 D",
                      "description": "Seat 23 D is a standard Economy Class seat located at an Exit Row. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the lavatory area might be bothersome.",
                      "position_type": "EXIT_ROW"
                  },
                  {
                      "designator": "23 E",
                      "description": "Seat 23 E is a standard Economy Class seat located at an Exit Row. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the lavatory area might be bothersome.",
                      "position_type": "EXIT_ROW"
                  },
                  {
                      "designator": "23 F",
                      "description": "Seat 23 F is a standard Economy Class seat located at an Exit Row. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the lavatory area might be bothersome.",
                      "position_type": "EXIT_ROW"
                  },
                  {
                      "designator": "23 G",
                      "description": "Seat 23 G is a standard Economy Class seat located at an Exit Row. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the lavatory area might be bothersome.",
                      "position_type": "EXIT_ROW"
                  },
                  {
                      "designator": "23 H",
                      "description": "Seat 23 H is a standard Economy Class seat located at an Exit Row. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding. The tray table and inflight entertainment monitor are installed in a fixed armrest, therefore, slightly reducing seat width. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the lavatory area might be bothersome.",
                      "position_type": "EXIT_ROW"
                  },
                  {
                      "designator": "24 A",
                      "description": "Seat 24 A is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "24 B",
                      "description": "Seat 24 B is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "24 C",
                      "description": "Seat 24 C is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "24 D",
                      "description": "Seat 24 D is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "24 E",
                      "description": "Seat 24 E is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "24 F",
                      "description": "Seat 24 F is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "24 G",
                      "description": "Seat 24 G is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "24 H",
                      "description": "Seat 24 H is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "25 A",
                      "description": "Seat 25 A is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "25 B",
                      "description": "Seat 25 B is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "25 C",
                      "description": "Seat 25 C is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "25 D",
                      "description": "Seat 25 D is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "25 E",
                      "description": "Seat 25 E is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "25 F",
                      "description": "Seat 25 F is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "25 G",
                      "description": "Seat 25 G is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "25 H",
                      "description": "Seat 25 H is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "26 A",
                      "description": "Seat 26 A is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "26 B",
                      "description": "Seat 26 B is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "26 C",
                      "description": "Seat 26 C is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "26 D",
                      "description": "Seat 26 D is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "26 E",
                      "description": "Seat 26 E is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "26 F",
                      "description": "Seat 26 F is a standard Economy Class seat. The seat is classified as a Main Cabin Extra seat that may be selected for an additional fee and features extra legroom plus preferred boarding.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "26 G",
                      "description": "Seat 26 G is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "26 H",
                      "description": "Seat 26 H is a standard Economy Class seat.",
                      "position_type": "NORMAL"
                  }
              ],
              "seat_count": 32,
              "cabin_class": "main-cabin-extra"
          },
          {
              "data": [
                  {
                      "designator": "6 A",
                      "description": "Seat 6 A is a standard recliner-style Premium Economy seat located at a bulkhead. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "6 B",
                      "description": "Seat 6 B is a standard recliner-style Premium Economy seat located at a bulkhead. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "6 C",
                      "description": "Seat 6 C is a standard recliner-style Premium Economy seat located at a bulkhead. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "6 D",
                      "description": "Seat 6 D is a standard recliner-style Premium Economy seat located at a bulkhead. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "6 F",
                      "description": "Seat 6 F is a standard recliner-style Premium Economy seat located at a bulkhead. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "6 G",
                      "description": "Seat 6 G is a standard recliner-style Premium Economy seat located at a bulkhead. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "6 H",
                      "description": "Seat 6 H is a standard recliner-style Premium Economy seat located at a bulkhead. Floor storage for personal items is not available for use during takeoff and landing. The proximity to the galley and lavatory area might be bothersome.",
                      "position_type": "BULKHEAD"
                  },
                  {
                      "designator": "7 A",
                      "description": "Seat 7 A is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "7 B",
                      "description": "Seat 7 B is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "7 C",
                      "description": "Seat 7 C is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "7 D",
                      "description": "Seat 7 D is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "7 F",
                      "description": "Seat 7 F is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "7 G",
                      "description": "Seat 7 G is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "7 H",
                      "description": "Seat 7 H is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "8 A",
                      "description": "Seat 8 A is a standard recliner-style Premium Economy seat that is missing a window.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "8 B",
                      "description": "Seat 8 B is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "8 C",
                      "description": "Seat 8 C is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "8 D",
                      "description": "Seat 8 D is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "8 F",
                      "description": "Seat 8 F is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "8 G",
                      "description": "Seat 8 G is a standard recliner-style Premium Economy seat.",
                      "position_type": "NORMAL"
                  },
                  {
                      "designator": "8 H",
                      "description": "Seat 8 H is a standard recliner-style Premium Economy seat that is missing a window.",
                      "position_type": "NORMAL"
                  }
              ],
              "seat_count": 21,
              "cabin_class": "premium-economy"
          }
      ]
  }
]`,
  }
}