require("httparty")
require "json"
require "net/http"
./lib/flyline/client.rb
module Flyline
    class Client
        include HTTParty
        include JSON
        base_url "https://api.flyline.io"
        format :json
        def initialize(f_token)
            self.class.default_option_merge!(headers: {'Authorization'=> "FToken #{f_token}", 'Content-Type' => "application/json"})
        end

        def sendPostRequest(endPoint, data)
            self.class.post(endPoint, JSON.dump(data)).parsed_response
        end

        def sendGetRequest(endPoint)
            self.class.get(endPoint).parsed_response
        end

        def get_airfares(data)
	        self.sendPostRequest("/api/flights/shop/", data)
        end

        def get_airattributesByFlightNumber(data)
	        self.sendPostRequest("/search/attributes/flight/", data)
        end

        def get_airattributesByRoute(data)
	        self.sendPostRequest("/search/attributes/route/", data)
        end

        def get_schedulesByFlightNumber(data)
	        self.sendPostRequest("/api/schedule-flight", data)
        end

        def get_schedulesByRoute(data)
	        self.sendPostRequest("/api/schedule/", data)
        end

        def get_seatMaps(data)
	        self.sendPostRequest("/api/seat-maps", data)
        end

        def get_aircrafts()
	        self.sendGetRequest("/api/aircraft/")
        end

        def get_aircraft(iata_code)
	        self.sendGetRequest("/api/aircraft/" + iata_code + "/")
        end

        def get_airlines()
	        self.sendGetRequest("/api/airlines/")
        end

        def get_airline(iata_code)
	        self.sendGetRequest("/api/airlines/" + iata_code + "/")
        end

        def get_airports()
	        self.sendGetRequest("/api/airports/")
        end

        def get_airport(iata_code)
	        self.sendGetRequest("/api/airports/" + iata_code + "/")
        end

        def get_airportByCity(iata_code)
            self.sendGetRequest("/api/cities/" + iata_code + "/airports/")
        end

        def get_cities()
	        self.sendGetRequest("/api/cities")
        end

        def get_city(iata_code)
	        self.sendGetRequest("/api/cities/" + iata_code + "/")
        end

        def get_cabinClassMapping(carrier, cabin_class)
	        if carrier != "" && cabin_class != ""
		        self.sendGetRequest("/api/cabin-booking?carrier=" + carrier + "&cabin_class" + cabin_class)
	        else
		        self.sendGetRequest("/api/cabin-booking/")
            end
        end


        def get_seatTypes()
	        self.sendGetRequest("/api/seats/")
        end

        def get_aeatLayouts()
            self.sendGetRequest("/api/layouts/")
        end

        def get_aoods()
            self.sendGetRequest("/api/foods/")
        end

        def get_aeverages()
            self.sendGetRequest("/api/beverages/")
        end

        def get_antertainments()
            self.sendGetRequest("/api/entertainments/")
        end

        def get_aifis()
            self.sendGetRequest("/api/wifis/")
        end

        def get_aowers()
            self.sendGetRequest("/api/powers")
        end
    end
end
