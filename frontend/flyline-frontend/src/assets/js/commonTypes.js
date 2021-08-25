const types = [
  "string",
  "object",
  "list",
  "enum",
  "number",
  "string[]",
  "integer",
  // "date",
  "datetime",
  "boolean"
];
const REQUIRED = "required";
const COMMAS = ["or", ",", ",or", ", or"];
const generateTitles = (texts, firstOneAsDesc) => {
  texts = texts.filter(t => t.trim().length > 0);
  return texts.map((text, i) => {
    let classes = "";
    if (firstOneAsDesc && i == 0) classes += "doc-description-text";
    else if ((firstOneAsDesc && i == 1) || (!firstOneAsDesc && i == 0))
      classes += "doc-title-text__small";
    if (types.includes(text)) classes += " text-primary";
    else if (text == REQUIRED) classes += " text-danger";
    if (i > 0) {
      if (firstOneAsDesc && i == 1) classes += "";
      else classes += " opt-text ml-4";
    }
    return {
      classes: classes,
      text: text
    };
  });
};
const generateDescription = texts =>
  texts.map(text => ({
    classes: "doc-description-text",
    text: text
  }));
const generateExamples = texts =>
  texts.map((text, i) => {
    let classes = "";
    classes += " doc-description-text";
    if (i > 0 && !COMMAS.includes(text.trim())) classes += " text-primary";
    else if (COMMAS.includes(text.trim())) classes += " mr-1";
    return {
      classes,
      text: text
    };
  });

// const geneBasicType = (
//   subOf = "",
//   bottomDash = true,
//   nullable,
//   required,
//   titles,
//   desc,
//   examples
// ) => {
//   let fTitles = [...titles];
//   if (nullable) fTitles.push("nullable");
//   else if (required) fTitles.push("required");
//   return {
//     bottomDash: bottomDash,
//     titles: generateTitles(fTitles, subOf != ""),
//     desc: generateDescription([desc]),
//     examples: generateExamples(examples)
//   };
// };

export const LATITUDE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "latitude", "number"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The latitude position of the airport represented in Decimal degrees with 6 decimal points with a range between -90° and 90°"
    ]),
    examples: generateExamples(["Example : ", example || "39.933334"])
  };
};
export const LONGITUDE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "longitude", "number"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The longitude position of the airport represented in Decimal degrees with 6 decimal points with a range between -180° and 180°"
    ]),
    examples: generateExamples(["Example : ", example || "-104.672844"])
  };
};
export const ALLOWED_PASSENGER_IDENTITY_DOCUMENT_TYPES = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [
    subOf,
    "allowed_passenger_identity_document_types",
    "string[]"
  ];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The types of identity documents that may be provided for the passengers when creating an order based on this offer. Currently, the only supported type is passport. If this is [], then you must not provide identity documents.`
    ]),
    examples: generateExamples(["Example : ", example || '["passport"]'])
  };
};
export const UNIQUE_IDENTIFIER_FOR_OFFER = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "id", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || `Airline's unique identifier for the offer`
    ]),
    examples: generateExamples([
      "Example : ",
      example || "X5B84D42A-5FFA-4B02-87C2-1"
    ])
  };
};
export const UNIQUE_IDENTIFIER_FOR_AIRCRAFT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "id", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "Flyline's unique identifier for the aircraft"
    ]),
    examples: generateExamples([
      "Example : ",
      example || "arc_00009UhD4ongolulWd91Ky"
    ])
  };
};
export const UNIQUE_IDENTIFIER_FOR_AIRLINE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "id", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "Flyline's unique identifier for the airline"
    ]),
    examples: generateExamples([
      "Example : ",
      example || "aln_00001876aqC8c5umZmrRds"
    ])
  };
};
export const UNIQUE_IDENTIFIER_FOR_AIRPORT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "id", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "Flyline's unique identifier for the airport"
    ]),
    examples: generateExamples(["Example : ", example || "arp_lhr_gb"])
  };
};
export const UNIQUE_IDENTIFIER_FOR_OFFER_REQUEST = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "id", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "Flyline's unique identifier for the offer request"
    ]),
    examples: generateExamples([
      "Example : ",
      example || "26fe856d9cfd0132ccc8b74b833b2ff5afaa5543"
    ])
  };
};

export const BASE_AMOUNT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "base_amount", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The base price of the offer for all passengers, excluding taxes. It does not include the base amount of any service(s) that might be booked with the offer.`
    ]),
    examples: generateExamples(["Example : ", example || "38.00"])
  };
};
export const BASE_CURRENCY = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "base_currency", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The currency of the base_amount, as an ISO 4217 currency code. It will match your organization's billing currency unless you??�re using Flyline as an accredited IATA agent, in which case it will be in the currency provided by the airline (which will usually be based on the country where your IATA agency is registered).`
    ]),
    examples: generateExamples(["Example : ", example || "USD"])
  };
};
export const CREATED_AT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "created_at", "datetime"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || `The ISO 8601 datetime at which the offer was created`
    ]),
    examples: generateExamples([
      "Example : ",
      example || "2020-12-29T19:53:58.157343Z"
    ])
  };
};
export const UPDATED_AT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "updated_at", "datetime"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || `The ISO 8601 datetime at which the offer was last updated`
    ]),
    examples: generateExamples([
      "Example : ",
      example || "2020-12-29T19:53:58.157343Z"
    ])
  };
};
export const EXPIRES_AT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "expires_at", "datetime"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The ISO 8601 datetime at which the offer will expire and no longer be usable to create an order`
    ]),
    examples: generateExamples([
      "Example : ",
      example || "2021-02-04T16:30:44+00:00"
    ])
  };
};
export const LIVE_MODE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "live_mode", "boolean"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `Whether the offer request was created in live mode. This field will be set to true if the offer request was created in live mode, or false if it was created in test mode.`
    ]),
    examples: generateExamples(["Example : ", example || "true"])
  };
};

export const OWNER = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "owner", "object"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || `The airline which provided the offer`]),
    sub: [
      /* owner.iata_code */
      IATA_CODE_TWO_CHARS(subOf + "owner."),
      /* owner.name */
      {
        titles: generateTitles([subOf + "owner.", "name", "string"], true),
        desc: generateDescription([`The name of the airline`]),
        examples: generateExamples(["Example : ", "United Airlines"])
      }
    ]
  };
};
export const OWNER_SEARCH_RESULT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "owner", "object"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || `The airline which provided the offer`]),
    sub: [
      /* owner.iata_code */
      IATA_CODE_TWO_CHARS(subOf + "owner.", true, true),
      /* owner.name */
      {
        titles: generateTitles([subOf + "owner.", "name", "string"], true),
        desc: generateDescription([`The name of the airline`]),
        examples: generateExamples(["Example : ", "United Airlines"])
      }
    ]
  };
};

export const PASSENGER_IDENTITY_DONCUMENTS_REQUIRED = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "passenger_identity_documents_required", "boolean"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `Whether identity documents must be provided for each of the passengers when creating an order based on this offer. If this is true, you must provide an identity document for every passenger.`
    ]),
    examples: generateExamples(["Example : ", example || "true"])
  };
};

export const PASSENGERS = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "passengers", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `Whether identity documents must be provided for each of the passengers when creating an order based on this offer. If this is true, you must provide an identity document for every passenger.`
    ]),
    sub: [
      /* subOf +  passengers.age */
      /* subOf +  passengers.id */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "passengers.", "id", "string"], true),
        desc: generateDescription([
          `The identifier for the passenger, unique within this Shop Flight. This ID will be generated by Flyline unless you had optionally provided one. Optionally providing one has been deprecated.`
        ]),
        examples: generateExamples(["Example : ", "PAX_0"])
      },
      {
        bottomDash: true,
        titles: generateTitles([subOf + "passengers.", "age", "integer"], true),
        desc: generateDescription([
          `The age of the passenger on the departure_date of the final slice.`
        ]),
        examples: generateExamples(["Example : ", "27"])
      },
      /* subOf +  passengers.type */
      {
        titles: generateTitles([subOf + "passengers.", "type", "enum"], true),
        desc: generateDescription([`The type of the passenger.`]),
        examples: generateExamples(["Example : ", "adult"])
      }
    ]
  };
};

export const PASSENGERS_FOR_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "passengers", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The passengers who want to travel. A passenger will have only a type or an age."
    ]),
    sub: [
      /* subOf +  passengers.id */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "passengers.", "id", "string"], true),
        desc: generateDescription([
          `The identifier for the passenger, unique within this Offer Request and across all Offer Requests. This ID will be generated by Duffel unless you had optionally provided one. Optionally providing one has been deprecated.`
        ]),
        examples: generateExamples(["Example : ", "pas_00009hj8USM7Ncg31cBCL"])
      },
      /* subOf +  passengers.age */
      {
        titles: generateTitles([subOf + "passengers.", "id", "string"], true),
        desc: generateDescription([
          `The identifier for the passenger, unique within this Offer Request. This ID will be generated by Flyline unless you had optionally provided one. Optionally providing one has been deprecated.`
        ]),
        examples: generateExamples(["Example : ", "PAX_0"])
      },
      /* subOf +  passengers.type */
      {
        titles: generateTitles([subOf + "passengers.", "type", "enum"], true),
        desc: generateDescription([`The type of the passenger.`]),
        examples: generateExamples(["Possible values : ", "adult"])
      }
    ]
  };
};

export const DESTINATION_TYPE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  examples
) => {
  let fTitles = [subOf, "destination_type", "enum"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The slices that make up this offer. Each slice will include one or more segments, the specific flights that the airline is offering to take the passengers from the slice's origin to its destination.`
    ]),
    examples:
      examples ||
      generateExamples(["Possible values : ", "airport", " or ", "city"])
  };
};

export const DESTINATION = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "destination", "object"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "The city or airport where this slice ends"
    ]),
    sub: [
      /* subOf +  slices.destination.iata_city_code */
      IATA_CITY_CODE(subOf + "destination."),
      /* subOf +  slices.destination.iata_code */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "destination.", "iata_code", "string"],
          true
        ),
        desc: generateDescription(["The 3-letter IATA code for the place"]),
        examples: generateExamples(["Example : ", "LHR"])
      },
      /* subOf +  slices.destination.name */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "destination.", "name", "string"],
          true
        ),
        desc: generateDescription(["The name of the place"]),
        examples: generateExamples(["Example : ", "Heathrow"])
      },
      /* subOf +  slices.destination.type */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "destination.", "type", "string"],
          true
        ),
        desc: generateDescription(["The type of the place"]),
        examples: generateExamples([
          "Possible values : ",
          "airport",
          " or ",
          "city"
        ])
      },
      /* subOf +  slices.destination.iata_country_code */
      IATA_COUNTRY_CODE(subOf + "destination."),
      /* subOf +  slices.destination.latitude */
      LATITUDE(subOf + "slices.destination."),
      /* subOf +  slices.destination.longitude */
      LONGITUDE(subOf + "slices.destination."),
      /* subOf +  slices.destination.icao_code */
      ICAO_CODE(subOf + "slices.destination."),
      /* subOf +  slices.destination.time_zone */
      TIME_ZONE(subOf + "slices.destination.", true, true),
      /* subOf +  slices.destination.city_name */
      CITY_NAME(subOf + "slices.destination.", true, true),
      /* subOf +  slices.destination.city */
      CITY(subOf + "slices.destination.", false, true)
    ]
  };
};

export const SLICES_OFFER_REQUEST_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = ["slices", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The slices that make up this offer request. One-way journeys can be expressed using one slice, whereas return trips will need two.`
    ]),
    sub: [
      /* offer.slices.destination_type */
      DESTINATION_TYPE(
        subOf + "slices.",
        true,
        false,
        false,
        null,
        "The type of the destination"
      ),
      /* subOf +  slices.destination */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "destination", "object"],
          true
        ),
        desc: generateDescription([
          "The city or airport the passengers want to travel to"
        ]),
        sub: [
          /* subOf +  slices.destination.iata_city_code */
          // IATA_CITY_CODE(subOf + 'destination.'),
          /* subOf +  slices.destination.iata_code */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.destination.", "iata_code", "string"],
              true
            ),
            desc: generateDescription(["The 3-letter IATA code for the place"]),
            examples: generateExamples(["Example : ", "DEN"])
          },
          /* subOf +  slices.destination.name */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.destination.", "name", "string"],
              true
            ),
            desc: generateDescription(["The name of the place"]),
            examples: generateExamples(["Example : ", "Denver International"])
          },
          /* subOf +  slices.destination.type */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.destination.", "type", "string"],
              true
            ),
            desc: generateDescription(["The type of the place"]),
            examples: generateExamples([
              "Possible values : ",
              "airport",
              " or ",
              "city"
            ])
          },
          /* subOf +  slices.destination.iata_country_code */
          IATA_COUNTRY_CODE(subOf + "slices.destination."),
          /* subOf +  slices.destination.latitude */
          LATITUDE(
            subOf + "slices.destination.",
            true,
            true,
            false,
            null,
            null,
            "39.849390"
          ),
          /* subOf +  slices.destination.longitude */
          LONGITUDE(
            subOf + "slices.destination.",
            true,
            true,
            false,
            null,
            null,
            "-104.672844"
          ),
          /* subOf +  slices.destination.icao_code */
          ICAO_CODE(
            subOf + "slices.destination.",
            true,
            true,
            false,
            null,
            null,
            "KDEN"
          ),
          /* subOf +  slices.destination.time_zone */
          TIME_ZONE(
            subOf + "slices.destination.",
            true,
            true,
            false,
            null,
            null,
            "America/Denver"
          ),
          /* subOf +  slices.destination.city_name */
          // CITY_NAME(subOf + 'slices.destination.', true, true),
          /* subOf +  slices.destination.city */
          // CITY(subOf + 'slices.destination.', false, true),
          {
            bottomDash: false,
            titles: generateTitles(
              [subOf + "slices.destination.", "city", "object"],
              true
            ),
            desc: generateDescription([
              "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
            ]),
            sub: [
              /* subOf +  iata_code */
              IATA_CODE(
                subOf + "slices.destination.city.",
                true,
                false,
                false,
                null,
                null,
                "DEN"
              ),
              /* subOf +  name */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "slices.destination.city.", "name", "string"],
                  true
                ),
                desc: generateDescription(["The name of the city"]),
                examples: generateExamples(["Example : ", "Denver"])
              },
              /* subOf +  iata_country_code */
              IATA_COUNTRY_CODE(subOf + "slices.destination.city.", false)
            ]
          }
        ]
      },
      /* subOf +  slices.origin_type */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "origin_type", "enum"],
          true
        ),
        desc: generateDescription(["The type of the origin"]),
        examples: generateExamples([
          "Possible values : ",
          "airport",
          " or ",
          "city"
        ])
      },
      /* subOf +  slices.origin */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "slices.", "origin", "object"], true),
        desc: generateDescription([
          "The city or airport the passengers want to depart from"
        ]),
        sub: [
          /* subOf +  slices.origin.iata_city_code */
          // IATA_CITY_CODE(subOf + 'slices.origin.', true, false),
          /* subOf +  slices.origin.iata_code */
          IATA_CODE(
            subOf + "slices.origin.",
            true,
            false,
            false,
            null,
            null,
            "DFW"
          ),
          /* subOf +  slices.origin.name */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.origin.", "name", "string"],
              true
            ),
            desc: generateDescription(["The name of the place"]),
            examples: generateExamples([
              "Example : ",
              "Dallas/Fort Worth International"
            ])
          },
          /* subOf +  slices.origin.type */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.origin.", "type", "string"],
              true
            ),
            desc: generateDescription(["The type of the place"]),
            examples: generateExamples([
              "Possible values : ",
              "airport",
              " or ",
              "city"
            ])
          },
          /* subOf +  slices.origin.iata_country_code */
          IATA_COUNTRY_CODE(subOf + "slices.origin.", true, false),
          /* subOf +  slices.origin.latitude */
          LATITUDE(
            subOf + "slices.origin.",
            true,
            true,
            false,
            null,
            null,
            "32.897460"
          ),
          /* subOf +  slices.origin.longitude */
          LONGITUDE(
            subOf + "slices.origin.",
            true,
            true,
            false,
            null,
            null,
            "-97.036125"
          ),
          /* subOf +  slices.origin.icao_code */
          ICAO_CODE(
            subOf + "slices.origin.",
            true,
            true,
            false,
            null,
            null,
            "KDFW"
          ),
          /* subOf +  slices.origin.time_zone */
          TIME_ZONE(
            subOf + "slices.origin.",
            true,
            true,
            false,
            null,
            null,
            "America/Chicago"
          ),
          /* subOf +  slices.origin.city_name */
          // CITY_NAME(subOf + 'slices.origin.', true, true),
          /* subOf +  slices.origin.city */
          // CITY(subOf + 'slices.origin.', false, true),
          {
            bottomDash: false,
            titles: generateTitles(
              [subOf + "slices.origin.", "city", "object"],
              true
            ),
            desc: generateDescription([
              "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
            ]),
            sub: [
              /* subOf +  iata_code */
              IATA_CODE(
                subOf + "slices.origin.city.",
                true,
                false,
                false,
                null,
                null,
                "DFW"
              ),
              /* subOf +  name */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "slices.origin.city.", "name", "string"],
                  true
                ),
                desc: generateDescription(["The name of the city"]),
                examples: generateExamples(["Example : ", "Dallas"])
              },
              /* subOf +  iata_country_code */
              IATA_COUNTRY_CODE(subOf + "slices.origin.city.", false)
            ]
          }
        ]
      },
      /* subOf +  slices.departure_date */
      {
        titles: generateTitles(
          [subOf + "slices.", "departure_date", "date"],
          true
        ),
        desc: generateDescription([
          "The ISO 8601 date on which the passengers want to depart"
        ]),
        examples: generateExamples(["Example : ", "2020-04-24"])
      }
    ]
  };
};

export const SLICES_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = ["slices", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The slices that make up this offer request. One-way journeys can be expressed using one slice, whereas return trips will need two.`
    ]),
    sub: [
      /* subOf +  slices.departure_date */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "departure", "object", "required"],
          true
        ),
        desc: generateDescription([
          "The departure represents departure location in the slice"
        ]),
        sub: [
          /* subOf +  slices.departure.code */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.departure.", "code", "string", "required"],
              true
            ),
            desc: generateDescription([
              "The 3-letter IATA code for the city or airport where this slice starts"
            ]),
            examples: generateExamples(["Example : ", "DEN"])
          },
          /* subOf +  slices.departure.date */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.departure.", "date", "string", "required"],
              true
            ),
            desc: generateDescription([
              "The ISO 8601 date on which the passengers want to depart"
            ]),
            examples: generateExamples(["Example : ", "2021-01-05"])
          },
          /* subOf +  slices.departure.date */
          {
            titles: generateTitles(
              [
                subOf + "slices.departure.",
                "permitted_times",
                "list",
                "optional"
              ],
              true
            ),
            desc: generateDescription([
              "The list of ISO 8601 times on which the passengers want to departure"
            ]),
            sub: [
              {
                bottomDash: true,
                titles: generateTitles(
                  ["Filter by Exact Time", "object"],
                  false
                ),
                desc: generateDescription(["Return flights on those times"]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "kind",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact compare or duration compare based on its value"
                    ]),
                    examples: generateExamples([
                      "Possible values : ",
                      "exact",
                      " , ",
                      "range"
                    ])
                  },
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "time",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The ISO 8601 time on which the passengers want to depart."
                    ]),
                    examples: generateExamples(["Example : ", "9:00"])
                  }
                ]
              },
              {
                titles: generateTitles(
                  ["Filter by Range Time", "object"],
                  false
                ),
                desc: generateDescription([
                  "Return flights departing in those time duration"
                ]),
                sub: [
                  /* subOf +  slices.departure.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "kind",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact compare or duration compare based on its value"
                    ]),
                    examples: generateExamples([
                      "Possible values : ",
                      "exact",
                      " , ",
                      "range"
                    ])
                  },
                  /* subOf +  slices.departure.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "start_time",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The start time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "9:00"])
                  },
                  /* subOf +  slices.departure.date */
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "end_time",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The end time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "19:00"])
                  }
                ]
              }
            ]
          }
        ]
      },
      /* subOf +  slices.departure.date */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "arrival", "object", "required"],
          true
        ),
        desc: generateDescription([
          "The arrival represents arrival location in the slice"
        ]),
        sub: [
          /* subOf +  slices.departure.date */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.arrival.", "code", "string", "required"],
              true
            ),
            desc: generateDescription([
              "The 3-letter IATA code for the city or airport where this slice starts"
            ]),
            examples: generateExamples(["Example : ", "DEN"])
          },
          /* subOf +  slices.departure.date */
          {
            bottomDash: true,
            titles: generateTitles(
              [
                subOf + "slices.arrival.",
                "permitted_times",
                "list",
                "optional"
              ],
              true
            ),
            desc: generateDescription([
              "The list of ISO 8601 times on which the passengers want to arrive"
            ]),
            sub: [
              {
                bottomDash: true,
                titles: generateTitles(
                  ["Filter by Exact Time", "object"],
                  false
                ),
                desc: generateDescription(["Return flights on those times"]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "kind",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact compare or duration compare based on its value"
                    ]),
                    examples: generateExamples(["Possible values : ", "exact"])
                  },
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "time",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The ISO 8601 time on which the passengers want to depart."
                    ]),
                    examples: generateExamples(["Example : ", "09:00"])
                  }
                ]
              },
              {
                titles: generateTitles(
                  ["Filter by Range Time", "object"],
                  false
                ),
                desc: generateDescription([
                  "Return flights arriving at in those times"
                ]),
                sub: [
                  /* subOf +  slices.departure.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "kind",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact compare or duration compare based on its value"
                    ]),
                    examples: generateExamples(["Possible values : ", "range"])
                  },
                  /* subOf +  slices.departure.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "start_time",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The start time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "09:00"])
                  },
                  /* subOf +  slices.departure.date */
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "end_time",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The end time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "19:00"])
                  }
                ]
              }
            ]
          },
          /* subOf +  slices.arrival.date */
          {
            titles: generateTitles(
              [
                subOf + "slices.arrival.",
                "permitted_dates",
                "list",
                "optional"
              ],
              true
            ),
            desc: generateDescription([
              "The list of ISO 8601 dates on which the passengers want to arrive"
            ]),
            sub: [
              /* subOf +  slices.arrival.date */
              {
                bottomDash: true,
                titles: generateTitles(
                  ["Filter by Exact Date", "object"],
                  false
                ),
                desc: generateDescription([
                  "A passenger specified by their type"
                ]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "kind",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact compare based on its value"
                    ]),
                    examples: generateExamples(["Possible values : ", "exact"])
                  },
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "date",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The ISO 8601 time on which the passengers want to depart"
                    ]),
                    examples: generateExamples(["Example : ", "2021-01-27"])
                  }
                ]
              },
              {
                titles: generateTitles(
                  ["Filter by Date Range", "object"],
                  false
                ),
                desc: generateDescription([
                  "Return flights arriving in those date ranges"
                ]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "kind",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as duration compare based on its value"
                    ]),
                    examples: generateExamples(["Possible values : ", "range"])
                  },
                  /* subOf +  slices.arrival.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "start_date",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The start date in ISO 8601 format"
                    ]),
                    examples: generateExamples(["Example : ", "2021-01-27"])
                  },
                  /* subOf +  slices.arrival.date */
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "end_date",
                        "string",
                        "optional"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The end date in ISO 8601 format"
                    ]),
                    examples: generateExamples(["Example : ", "2021-02-01"])
                  }
                ]
              }
            ]
          }
        ]
      },
      /* subOf +  slices.departure.date */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "max_stops", "integer", "optional"],
          true
        ),
        desc: generateDescription(["the number of stops"]),
        examples: generateExamples(["Example : ", "2"])
      },
      {
        titles: generateTitles(
          [subOf + "slices.", "flight_numbers", "list", "optional"],
          true
        ),
        desc: generateDescription([
          "The list of flight numbers which passenger want to travel"
        ])
        // examples: generateExamples(['Example : ', '2']),
      }
    ]
  };
};

export const SLICES_AMENITIES_BY_ROUTE_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = ["slices", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The slices that make up this attribute request. One-way journeys can be expressed using one slice, whereas return trips will need two.`
    ]),
    sub: [
      /* subOf +  slices.departure_date */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "departure", "object", "required"],
          true
        ),
        desc: generateDescription([
          "The departure represents departure location in the slice"
        ]),
        sub: [
          /* subOf +  slices.departure.code */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.departure.", "code", "string", "required"],
              true
            ),
            desc: generateDescription([
              "The 3-letter IATA code for the city or airport where this slice starts"
            ]),
            examples: generateExamples(["Example : ", "DEN"])
          },
          /* subOf +  slices.departure.date */
          {
            titles: generateTitles(
              [subOf + "slices.departure.", "date", "string", "required"],
              true
            ),
            desc: generateDescription([
              "The ISO 8601 date on which the passengers want to depart"
            ]),
            examples: generateExamples(["Example : ", "2021-01-05"])
          }
        ]
      },
      /* subOf +  slices.departure.date */
      {
        titles: generateTitles(
          [subOf + "slices.", "arrival", "object", "required"],
          true
        ),
        desc: generateDescription([
          "The arrival represents arrival location in the slice"
        ]),
        sub: [
          /* subOf +  slices.departure.date */
          {
            titles: generateTitles(
              [subOf + "slices.arrival.", "code", "string", "required"],
              true
            ),
            desc: generateDescription([
              "The 3-letter IATA code for the city or airport where this slice starts"
            ]),
            examples: generateExamples(["Example : ", "DEN"])
          }
        ]
      }
    ]
  };
};

export const SLICES_FLIGHT_SEARCH_RESPONSE_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = ["slices", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The slices that make up this offer request. One-way journeys can be expressed using one slice, whereas return trips will need two.`
    ]),
    sub: [
      /* subOf +  slices.departure_date */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "departure", "object"],
          true
        ),
        desc: generateDescription([
          "The departure represents departure location in the slice"
        ]),
        sub: [
          /* subOf +  slices.departure.code */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.departure.", "code", "string"],
              true
            ),
            desc: generateDescription([
              "The 3-letter IATA code for the city or airport where this slice starts"
            ]),
            examples: generateExamples(["Example : ", "DEN"])
          },
          /* subOf +  slices.departure.date */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.departure.", "date", "string"],
              true
            ),
            desc: generateDescription([
              "The ISO 8601 date on which the passengers want to depart"
            ]),
            examples: generateExamples(["Example : ", "2021-01-05"])
          },
          /* subOf +  slices.departure.date */
          {
            titles: generateTitles(
              [subOf + "slices.departure.", "permitted_times", "list"],
              true
            ),
            desc: generateDescription([
              "The list of ISO 8601 times on which the passengers want to departure"
            ]),
            sub: [
              {
                bottomDash: true,
                titles: generateTitles(
                  ["Filter by Exact Time", "object"],
                  false
                ),
                desc: generateDescription(["Return flights on those times"]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "kind",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact compare based on its value"
                    ]),
                    examples: generateExamples(["Possible values : ", "exact"])
                  },
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "time",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The ISO 8601 time on which the passengers want to depart."
                    ]),
                    examples: generateExamples(["Example : ", "09:00"])
                  }
                ]
              },
              {
                titles: generateTitles(
                  ["Filter by Range Time", "object"],
                  false
                ),
                desc: generateDescription([
                  "A passenger specified by their age"
                ]),
                sub: [
                  /* subOf +  slices.departure.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "kind",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as duration compare based on its value"
                    ]),
                    examples: generateExamples(["Possible values : ", "range"])
                  },
                  /* subOf +  slices.departure.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "start_time",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The start time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "9:00"])
                  },
                  /* subOf +  slices.departure.date */
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.departure.permitted_times.",
                        "end_time",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The end time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "19:00"])
                  }
                ]
              }
            ]
          }
        ]
      },
      /* subOf +  slices.departure.date */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "slices.", "arrival", "object"], true),
        desc: generateDescription([
          "The arrival represents arrival location in the slice"
        ]),
        // desc: generateDescription(['The list of ISO 8601 times on which the passengers want to departure']),
        sub: [
          /* subOf +  slices.departure.date */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.arrival.", "code", "string"],
              true
            ),
            desc: generateDescription([
              "The 3-letter IATA code for the city or airport where this slice starts"
            ]),
            examples: generateExamples(["Example : ", "DEN"])
          },
          /* subOf +  slices.departure.date */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.arrival.", "permitted_times", "list"],
              true
            ),
            desc: generateDescription([
              "The list of ISO 8601 times on which the passengers want to arrive"
            ]),
            sub: [
              {
                bottomDash: true,
                titles: generateTitles(
                  ["Filter by Exact Time", "object"],
                  false
                ),
                desc: generateDescription(["Return flights on those times"]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "kind",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact compare or duration compare based on its value"
                    ]),
                    examples: generateExamples([
                      "Possible values : ",
                      "exact",
                      " , ",
                      "range"
                    ])
                  },
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "time",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The ISO 8601 time on which the passengers want to depart."
                    ]),
                    examples: generateExamples(["Example : ", "9:00"])
                  }
                ]
              },
              {
                titles: generateTitles(
                  ["Filter by Range Time", "object"],
                  false
                ),
                desc: generateDescription([
                  "Return flights arriving in those time duration"
                ]),
                sub: [
                  /* subOf +  slices.departure.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "kind",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact duration compare based on its value"
                    ]),
                    examples: generateExamples([
                      "Possible values : ",
                      "exact",
                      " , ",
                      "range"
                    ])
                  },
                  /* subOf +  slices.departure.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "start_time",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The start time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "9:00"])
                  },
                  /* subOf +  slices.departure.date */
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_times.",
                        "end_time",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The end time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "19:00"])
                  }
                ]
              }
            ]
          },
          /* subOf +  slices.arrival.date */
          {
            titles: generateTitles(
              [subOf + "slices.arrival.", "permitted_dates", "list"],
              true
            ),
            desc: generateDescription([
              "The list of ISO 8601 dates on which the passengers want to arrive"
            ]),
            sub: [
              /* subOf +  slices.arrival.date */
              {
                bottomDash: true,
                titles: generateTitles(
                  ["Filter by Exact Date", "object"],
                  false
                ),
                desc: generateDescription([
                  "A passenger specified by their type"
                ]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "kind",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact compare or duration compare based on its value"
                    ]),
                    examples: generateExamples([
                      "Possible values : ",
                      "exact",
                      " , ",
                      "range"
                    ])
                  },
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "date",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The ISO 8601 time on which the passengers want to depart"
                    ]),
                    examples: generateExamples(["Example : ", "9:00"])
                  }
                ]
              },
              {
                titles: generateTitles(
                  ["Filter by Exact Date", "object"],
                  false
                ),
                desc: generateDescription([
                  "A passenger specified by their type"
                ]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "kind",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "This filter work as exact compare or duration compare based on its value"
                    ]),
                    examples: generateExamples([
                      "Possible values : ",
                      "exact",
                      " , ",
                      "range"
                    ])
                  },
                  /* subOf +  slices.arrival.date */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "start_time",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The start time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "9:00"])
                  },
                  /* subOf +  slices.arrival.date */
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.arrival.permitted_dates.",
                        "end_time",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      "The end time of day in HH:MM format."
                    ]),
                    examples: generateExamples(["Example : ", "19:00"])
                  }
                ]
              }
            ]
          }
        ]
      },
      /* subOf +  slices.departure.date */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "max_stops", "integer", "nullable"],
          true
        ),
        desc: generateDescription(["the number of stops"]),
        examples: generateExamples(["Example : ", "2"])
      },
      {
        titles: generateTitles(
          [subOf + "slices.", "flight_numbers", "list", "nullable"],
          true
        ),
        desc: generateDescription([
          "The list of flight numbers which passenger want to travel"
        ])
        // examples: generateExamples(['Example : ', '2']),
      }
    ]
  };
};
export const PASSENGERS_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = ["passengers", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The slices that make up this offer request. One-way journeys can be expressed using one slice, whereas return trips will need two.`
    ]),
    sub: [
      {
        bottomDash: true,
        titles: generateTitles([subOf + "Exact time filter", "object"], false),
        desc: generateDescription(["A passenger specified by their type"]),
        sub: [
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "passengers.", "kind", "enum", "required"],
              true
            ),
            desc: generateDescription(["A passenger specified by their type"]),
            examples: generateExamples(["Possible values : ", "adult"])
          },
          {
            titles: generateTitles(
              [subOf + "passengers.", "time", "enum", "required"],
              true
            ),
            desc: generateDescription(["A passenger specified by their type"]),
            examples: generateExamples(["Possible values : ", "adult"])
          }
        ]
      },
      {
        titles: generateTitles([subOf + "Time range filter", "object"], false),
        desc: generateDescription(["A passenger specified by their age"]),
        sub: [
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "passengers.", "kind", "integer", "required"],
              true
            ),
            desc: generateDescription(["A passenger specified by their type"]),
            examples: generateExamples(["Example : ", "range"])
          },
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "passengers.", "start_time", "integer", "required"],
              true
            ),
            desc: generateDescription(["A passenger specified by their type"]),
            examples: generateExamples(["Example : ", "14"])
          },
          {
            titles: generateTitles(
              [subOf + "passengers.", "end_time", "integer", "required"],
              true
            ),
            desc: generateDescription(["A passenger specified by their type"]),
            examples: generateExamples(["Example : ", "14"])
          }
        ]
      }
    ]
  };
};
export const MAX_PRICE_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = ["max_price", "object", "optional"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || `Do not return solutions that cost more than this price.`
    ]),
    sub: [
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "max_price.", "currency", "string", "optional"],
          true
        ),
        desc: generateDescription(["ISO 4217 Currency code"]),
        examples: generateExamples(["Example : ", "USD"])
      },
      {
        titles: generateTitles(
          [subOf + "max_price.", "price", "string", "required"],
          true
        ),
        desc: generateDescription(["Max price of the offer"]),
        examples: generateExamples(["Example : ", "100"])
      }
    ]
  };
};
export const SORT_BY_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = ["sort_by", "string", "optional"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `Sorts the results by price, departure time, arrival time, and stops`
    ]),
    examples: generateExamples([
      "Possible values : ",
      "price",
      " , ",
      "departure",
      " , ",
      "arrival",
      " , ",
      "stops"
    ])
  };
};
export const PERMITTED_CARRIER_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "permitted_carriers", "list", "optional"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `A list of 2-letter IATA airline designators. Offers with only these carriers should be returned.`
    ])
  };
};

export const CORPORATE_ACCOUNTS_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "corporate_accounts", "list", "optional"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `List of corporate accounts to be sent to airlines, if and where applicable`
    ]),
    sub: [
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "corporate_accounts.", "carrier", "string", "required"],
          true
        ),
        desc: generateDescription([
          "The two-character IATA code for the airline"
        ]),
        examples: generateExamples(["Example : ", "AC"])
      },
      {
        titles: generateTitles(
          [subOf + "corporate_accounts.", "account", "string", "required"],
          true
        ),
        desc: generateDescription(["Actual loyalty program account number"]),
        examples: generateExamples(["Example : ", "675124"])
      }
    ]
  };
};

export const IATA_CITY_CODE = (
  subOf = "",
  bottomDash = true,
  nullable = true,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "iata_city_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The 3-letter IATA code for the city where the place is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
    ]),
    examples: generateExamples(["Example : ", example || "LON"])
  };
};

export const ORIGIN = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "origin", "object"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "The city or airport where this slice begins"
    ]),
    sub: [
      /* subOf +  slices.origin.iata_city_code */
      IATA_CITY_CODE(subOf + "origin."),
      /* subOf +  slices.origin.iata_code */
      IATA_CODE(subOf + "origin."),
      /* subOf +  slices.origin.name */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "origin.", "name", "string"], true),
        desc: generateDescription(["The name of the place"]),
        examples: generateExamples(["Example : ", "Heathrow"])
      },
      /* subOf +  slices.origin.type */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "origin.", "type", "string"], true),
        desc: generateDescription(["The type of the place"]),
        examples: generateExamples([
          "Possible values : ",
          "airport",
          " or ",
          "city"
        ])
      },
      /* subOf +  slices.origin.iata_country_code */
      IATA_COUNTRY_CODE(subOf + "origin.", true, true),
      /* subOf +  slices.origin.latitude */
      LATITUDE(subOf + "origin.", true, true),
      /* subOf +  slices.origin.longitude */
      LONGITUDE(subOf + "origin.", true, true),
      /* subOf +  slices.origin.icao_code */
      ICAO_CODE(subOf + "origin.", true, true),
      /* subOf +  slices.origin.time_zone */
      TIME_ZONE(subOf + "origin.", true, true),
      /* subOf +  slices.origin.city_name */
      CITY_NAME(subOf + "origin.", true, true),
      /* subOf +  slices.origin.city */
      CITY(subOf + "origin.", false, true)
    ]
  };
};

export const SLICES_SEARCH_RESULT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "slices", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The slices that make up this offer. Each slice will include one or more segments, the specific flights that the airline is offering to take the passengers from the slice's origin to its destination.`
    ]),
    sub: [
      /* offer.slices.destination_type */
      DESTINATION_TYPE(
        subOf + "slices.",
        true,
        false,
        false,
        null,
        "The type of the destination"
      ),
      /* subOf +  slices.destination */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "destination", "string"],
          true
        ),
        desc: generateDescription([
          "The city or airport where this slice ends"
        ]),
        sub: [
          /* subOf +  slices.destination.iata_city_code */
          // IATA_CITY_CODE(subOf + 'slices.destination.', true, false),
          /* subOf +  slices.destination.iata_code */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.destination.", "iata_code", "string"],
              true
            ),
            desc: generateDescription(["The 3-letter IATA code for the place"]),
            examples: generateExamples(["Example : ", "DEN"])
          },
          /* subOf +  slices.destination.name */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.destination.", "name", "string"],
              true
            ),
            desc: generateDescription(["The name of the place"]),
            examples: generateExamples(["Example : ", "Denver International"])
          },
          /* subOf +  slices.destination.type */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.destination.", "type", "string"],
              true
            ),
            desc: generateDescription(["The type of the place"]),
            examples: generateExamples([
              "Possible values : ",
              "airport",
              " or ",
              "city"
            ])
          },
          /* subOf +  slices.destination.iata_country_code */
          IATA_COUNTRY_CODE(subOf + "slices.destination."),
          /* subOf +  slices.destination.latitude */
          LATITUDE(
            subOf + "slices.destination.",
            true,
            true,
            false,
            null,
            null,
            "39.849390"
          ),
          /* subOf +  slices.destination.longitude */
          LONGITUDE(
            subOf + "slices.destination.",
            true,
            true,
            false,
            null,
            null,
            "-104.672844"
          ),
          /* subOf +  slices.destination.icao_code */
          ICAO_CODE(
            subOf + "slices.destination.",
            true,
            true,
            false,
            null,
            null,
            "KDEN"
          ),
          /* subOf +  slices.destination.time_zone */
          TIME_ZONE(
            subOf + "slices.destination.",
            true,
            true,
            false,
            null,
            null,
            "America/Denver"
          ),
          /* subOf +  slices.destination.city_name */
          // CITY_NAME(subOf + 'slices.destination.', true, true),
          /* subOf +  slices.destination.city */
          // CITY(subOf + 'slices.destination.', false, true),
          {
            bottomDash: false,
            titles: generateTitles(
              [subOf + "slices.destination.", "city", "object"],
              true
            ),
            desc: generateDescription([
              "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
            ]),
            sub: [
              /* subOf +  iata_code */
              IATA_CODE(
                subOf + "slices.destination.city.",
                true,
                false,
                false,
                null,
                null,
                "DEN"
              ),
              /* subOf +  name */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "slices.destination.city.", "name", "string"],
                  true
                ),
                desc: generateDescription(["The name of the city"]),
                examples: generateExamples(["Example : ", "Denver"])
              },
              /* subOf +  iata_country_code */
              IATA_COUNTRY_CODE(subOf + "slices.destination.city.", false)
            ]
          }
        ]
      },
      /* subOf +  slices.origin_type */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "origin_type", "enum"],
          true
        ),
        desc: generateDescription(["The type of the origin"]),
        examples: generateExamples([
          "Possible values : ",
          "airport",
          " or ",
          "city"
        ])
      },
      /* subOf +  slices.origin */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "slices.", "origin", "object"], true),
        desc: generateDescription([
          "The city or airport where this slice begins"
        ]),
        sub: [
          /* subOf +  slices.origin.iata_city_code */
          // IATA_CITY_CODE(subOf + 'slices.origin.'),
          /* subOf +  slices.origin.iata_code */
          IATA_CODE(
            subOf + "slices.origin.",
            true,
            false,
            false,
            null,
            null,
            "DFW"
          ),
          /* subOf +  slices.origin.name */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.origin.", "name", "string"],
              true
            ),
            desc: generateDescription(["The name of the place"]),
            examples: generateExamples([
              "Example : ",
              "Dallas/Fort Worth International"
            ])
          },
          /* subOf +  slices.origin.type */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.origin.", "type", "string"],
              true
            ),
            desc: generateDescription(["The type of the place"]),
            examples: generateExamples([
              "Possible values : ",
              "airport",
              " or ",
              "city"
            ])
          },
          /* subOf +  slices.origin.iata_country_code */
          IATA_COUNTRY_CODE(subOf + "slices.origin.", true, false),
          /* subOf +  slices.origin.latitude */
          LATITUDE(
            subOf + "slices.origin.",
            true,
            true,
            false,
            null,
            null,
            "32.897460"
          ),
          /* subOf +  slices.origin.longitude */
          LONGITUDE(
            subOf + "slices.origin.",
            true,
            true,
            false,
            null,
            null,
            "-97.036125"
          ),
          /* subOf +  slices.origin.icao_code */
          ICAO_CODE(
            subOf + "slices.origin.",
            true,
            true,
            false,
            null,
            null,
            "KDFW"
          ),
          /* subOf +  slices.origin.time_zone */
          TIME_ZONE(
            subOf + "slices.origin.",
            true,
            true,
            false,
            null,
            null,
            "America/Chicago"
          ),
          /* subOf +  slices.origin.city_name */
          // CITY_NAME(subOf + 'slices.origin.', true, true),
          /* subOf +  slices.origin.city */
          // CITY(subOf + 'slices.origin.', false, true),
          {
            bottomDash: false,
            titles: generateTitles(
              [subOf + "slices.origin.", "city", "object"],
              true
            ),
            desc: generateDescription([
              "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
            ]),
            sub: [
              /* subOf +  iata_code */
              IATA_CODE(
                subOf + "slices.origin.city.",
                true,
                false,
                false,
                null,
                null,
                "DFW"
              ),
              /* subOf +  name */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "slices.origin.city.", "name", "string"],
                  true
                ),
                desc: generateDescription(["The name of the city"]),
                examples: generateExamples(["Example : ", "Dallas"])
              },
              /* subOf +  iata_country_code */
              IATA_COUNTRY_CODE(subOf + "slices.origin.city.", false)
            ]
          }
        ]
      },
      /* subOf +  slices.duration */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "duration", "integer", "nullable"],
          true
        ),
        desc: generateDescription([
          "The duration of the slice, represented in seconds"
        ]),
        examples: generateExamples(["Example : ", "7440"])
      },
      /* subOf +  slices.fare_brand_name */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "fare_brand_name", "string", "nullable"],
          true
        ),
        desc: generateDescription([
          "The name of the fare brand associated with this slice. A fare brand specifies the travel conditions you get on your slice made available by the airline. e.g. a United Airlines Economy Basic fare will only include a hand baggage allowance. It is worth noting that the fare brand names are defined by the airlines themselves and therefore they are subject to change without any prior notice. We??�re in the process of adding support for fare_brand_name across all our airlines, so for now, this field may be null in some subOf +   This will become a non-nullable attribute in the near future."
        ]),
        examples: generateExamples(["Example : ", "Basic"])
      },
      /* subOf +  slices.segments */
      {
        titles: generateTitles([subOf + "slices.", "segments", "list"], true),
        desc: generateDescription([
          "The segments - that is, specific flights - that the airline is offering to get the passengers from the origin to the destination"
        ]),
        sub: [
          /* subOf +  slices.segments.aircraft */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "aircraft", "object", "nullable"],
              true
            ),
            desc: generateDescription([
              "The aircraft that the operating carrier will use to operate this segment"
            ]),
            sub: [
              /* subOf +  slices.segments.aircraft.iata_code */
              IATA_CODE(
                subOf + "slices.segments.aircraft.",
                true,
                false,
                false,
                null,
                null,
                "319"
              ),
              /* subOf +  slices.segments.aircraft.name */
              {
                titles: generateTitles(
                  [subOf + "slices.segments.aircraft.", "name", "string"],
                  true
                ),
                desc: generateDescription(["The name of the aircraft"]),
                examples: generateExamples(["Example : ", "Airbus A319"])
              }
            ]
          },
          /* subOf +  slices.segments.arriving_at */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "arriving_at", "datetime"],
              true
            ),
            desc: generateDescription([
              "The ISO 8601 datetime at which the segment is scheduled to arrive"
            ]),
            examples: generateExamples(["Example : ", "2021-01-05T07:09:00"])
          },
          /* subOf +  slices.segments.destination_terminal */
          {
            bottomDash: true,
            titles: generateTitles(
              [
                subOf + "slices.segments.",
                "destination_terminal",
                "string",
                "nullable"
              ],
              true
            ),
            desc: generateDescription([
              "The terminal at the destination airport where the segment is scheduled to arrive"
            ]),
            examples: generateExamples(["Example : ", "5"])
          },
          /* subOf +  slices.segments.departing_at */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "departing_at", "datetime"],
              true
            ),
            desc: generateDescription([
              "The ISO 8601 datetime at which the segment is scheduled to depart"
            ]),
            examples: generateExamples(["Example : ", "2021-01-05T06:05:00"])
          },
          /* subOf +  slices.segments.origin_terminal */
          {
            bottomDash: true,
            titles: generateTitles(
              [
                subOf + "slices.segments.",
                "origin_terminal",
                "string",
                "nullable"
              ],
              true
            ),
            desc: generateDescription([
              "The terminal at the origin airport from which the segment is scheduled to depart"
            ]),
            examples: generateExamples(["Example : ", "B"])
          },
          /* subOf +  slices.segments.destination */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "destination", "object"],
              true
            ),
            desc: generateDescription([
              "The airport at which the segment is scheduled to arrive"
            ]),
            sub: [
              /* subOf +  slices.destination.iata_code */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "slices.segments.destination.",
                    "iata_code",
                    "string",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  "The 3-letter IATA code for the airport"
                ]),
                examples: generateExamples(["Example : ", "DEN"])
              },
              /* subOf +  slices.destination.name */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "slices.segments.destination.", "name", "string"],
                  true
                ),
                desc: generateDescription(["The name of the airport"]),
                examples: generateExamples([
                  "Example : ",
                  "Denver International"
                ])
              },
              /* subOf +  slices.destination.iata_country_code */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "slices.segments.destination.",
                    "iata_country_code",
                    "string"
                  ],
                  true
                ),
                desc: generateDescription([
                  `The ISO 3166-1 alpha-2 code for the country where the airport is located`
                ]),
                examples: generateExamples(["Example : ", "GB"])
              },
              /* subOf +  slices.destination.latitude */
              LATITUDE("slices.segments.destination."),
              /* subOf +  slices.destination.longitude */
              LONGITUDE("slices.segments.destination."),
              /* subOf +  slices.destination.icao_code */
              ICAO_CODE("slices.segments.destination.", true, true),
              /* subOf +  slices.destination.time_zone */
              TIME_ZONE("slices.segments.destination.", true),
              /* subOf +  slices.destination.city_name */
              // CITY_NAME('slices.destination.', true),
              /* subOf +  slices.destination.city */
              // CITY('slices.destination.', false),
              {
                bottomDash: false,
                titles: generateTitles(
                  [subOf + "slices.segments.destination.", "city", "object"],
                  true
                ),
                desc: generateDescription([
                  "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
                ]),
                sub: [
                  /* subOf +  iata_code */
                  IATA_CODE(
                    subOf + "slices.segments.destination.city.",
                    true,
                    false,
                    false,
                    null,
                    null,
                    "DEN"
                  ),
                  /* subOf +  name */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.segments.destination.city.",
                        "name",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription(["The name of the city"]),
                    examples: generateExamples(["Example : ", "Denver"])
                  },
                  /* subOf +  iata_country_code */
                  IATA_COUNTRY_CODE(
                    subOf + "slices.segments.destination.city.",
                    false
                  )
                ]
              }
            ]
          },
          /* subOf +  slices.segments.distance */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "distance", "string", "nullable"],
              true
            ),
            desc: generateDescription([
              "The distance of the segment in kilometres"
            ]),
            examples: generateExamples(["Example : ", "1031.0"])
          },
          /* subOf +  slices.segments.duration */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "duration", "string", "nullable"],
              true
            ),
            desc: generateDescription([
              "The duration of the segment, represented in seconds"
            ]),
            examples: generateExamples(["Example : ", "7440"])
          },
          /* subOf +  slices.segments.id */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "id", "string"],
              true
            ),
            desc: generateDescription([
              "The unique identifier for the segment. It identifies the segment of an offer (i.e. the same segment across offers will have different ids)."
            ]),
            examples: generateExamples([
              "Example : ",
              "seg_00009htYpSCXrwaB9Dn456"
            ])
          },
          /* subOf +  slices.segments.marketing_carrier */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "marketing_carrier", "object"],
              true
            ),
            desc: generateDescription([
              `The airline selling the tickets for this segment. This may differ from the operating_carrier in the case of a "codeshare", where one airline sells flights operated by another airline.`
            ]),
            sub: [
              /* subOf +  slices.segments.marketing_carrier.iata_code */
              IATA_CODE_TWO_CHARS(
                subOf + "slices.segments.marketing_carrier.",
                true,
                true
              ),
              /* subOf +  slices.segments.marketing_carrier.name */
              {
                titles: generateTitles(
                  [
                    subOf + "slices.segments.marketing_carrier.",
                    "name",
                    "string"
                  ],
                  true
                ),
                desc: generateDescription([`The name of the airline`]),
                examples: generateExamples(["Example : ", "United Airlines"])
              }
            ]
          },
          /* subOf +  slices.segments.marketing_carrier_flight_number */
          {
            bottomDash: true,
            titles: generateTitles(
              [
                subOf + "slices.segments.",
                "marketing_carrier_flight_number",
                "string"
              ],
              true
            ),
            desc: generateDescription([
              "The flight number assigned by the marketing carrier"
            ]),
            examples: generateExamples(["Example : ", "1234"])
          },
          /* subOf +  slices.segments.origin */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "origin", "object"],
              true
            ),
            desc: generateDescription([
              "The airport from which the flight is scheduled to depart"
            ]),
            sub: [
              /* subOf +  slices.origin.iata_code */
              IATA_CODE(
                subOf + "slices.segments.origin.",
                true,
                true,
                false,
                null,
                "The three-character IATA code for the aircraft",
                "DFW"
              ),
              /* subOf +  slices.origin.name */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "slices.segments.origin.", "name", "string"],
                  true
                ),
                desc: generateDescription(["The name of the airport"]),
                examples: generateExamples([
                  "Example : ",
                  "Dallas/Fort Worth International"
                ])
              },
              /* subOf +  slices.origin.iata_country_code */
              IATA_COUNTRY_CODE(subOf + "slices.segments.origin.", true),
              /* subOf +  slices.origin.latitude */
              LATITUDE(
                subOf + "slices.segments.origin.",
                true,
                false,
                false,
                null,
                null,
                "32.897460"
              ),
              /* subOf +  slices.origin.longitude */
              LONGITUDE(
                subOf + "slices.segments.origin.",
                true,
                false,
                false,
                null,
                null,
                "-97.036125"
              ),
              /* subOf +  slices.origin.icao_code */
              ICAO_CODE(
                subOf + "slices.segments.origin.",
                true,
                true,
                false,
                null,
                null,
                "KDFW"
              ),
              /* subOf +  slices.origin.time_zone */
              TIME_ZONE(
                subOf + "slices.segments.origin.",
                true,
                false,
                false,
                null,
                null,
                "America/Chicago"
              ),
              /* subOf +  slices.origin.city_name */
              // CITY_NAME(subOf + 'slices.segments.origin.', true),
              /* subOf +  slices.origin.city */
              // CITY(subOf + 'slices.segments.origin.', false),
              {
                bottomDash: false,
                titles: generateTitles(
                  [subOf + "slices.segments.origin.", "city", "object"],
                  true
                ),
                desc: generateDescription([
                  "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
                ]),
                sub: [
                  /* subOf +  iata_code */
                  IATA_CODE(
                    subOf + "slices.segments.origin.city.",
                    true,
                    false,
                    false,
                    null,
                    null,
                    "DFW"
                  ),
                  /* subOf +  name */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.segments.origin.city.",
                        "name",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription(["The name of the city"]),
                    examples: generateExamples(["Example : ", "Dallas"])
                  },
                  /* subOf +  iata_country_code */
                  IATA_COUNTRY_CODE(
                    subOf + "slices.segments.origin.city.",
                    false
                  )
                ]
              }
            ]
          },
          /* subOf +  slices.segments.operating_carrier */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "slices.segments.", "operating_carrier", "object"],
              true
            ),
            desc: generateDescription([
              `The airline actually operating this segment. This may differ from the marketing_carrier in the case of a "codeshare", where one airline sells flights operated by another airline.`
            ]),
            sub: [
              /* subOf +  slices.segments.operating_carrier.iata_code */
              IATA_CODE_TWO_CHARS(
                subOf + "slices.segments.operating_carrier.",
                true,
                true
              ),
              /* subOf +  slices.segments.operating_carrier.name */
              {
                titles: generateTitles(
                  [
                    subOf + "slices.segments.operating_carrier.",
                    "name",
                    "string"
                  ],
                  true
                ),
                desc: generateDescription(["The name of the airline"]),
                examples: generateExamples(["Example : ", "United Airlines"])
              }
            ]
          },
          /* subOf +  slices.segments.operating_carrier_flight_number */
          {
            bottomDash: true,
            titles: generateTitles(
              [
                subOf + "slices.segments.",
                "operating_carrier_flight_number",
                "string"
              ],
              true
            ),
            desc: generateDescription([
              "The flight number assigned by the operating carrier"
            ]),
            examples: generateExamples(["Example : ", "4321"])
          },
          /* subOf +  slices.segments.passengers */
          {
            titles: generateTitles(
              [subOf + "slices.segments.", "passengers", "list"],
              true
            ),
            desc: generateDescription([
              `Additional segment-specific information about the passengers included in the offer (e.g. their baggage allowance and the cabin class they will be travelling in)`
            ]),
            sub: [
              /* subOf +  slices.segments.passengers.baggages */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "slices.segments.passengers.", "baggages", "list"],
                  true
                ),
                desc: generateDescription([
                  `The baggage allowances for the passenger on this segment included in the offer. Some airlines may allow additional baggage to be booked as a service - see the offer's available_services.`
                ]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "slices.segments.passengers.baggages.",
                        "type",
                        "enum"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      `The type of the baggage allowance`
                    ]),
                    examples: generateExamples([
                      "Possible values : ",
                      "checked",
                      " or ",
                      "carry_on"
                    ])
                  },
                  {
                    titles: generateTitles(
                      [
                        subOf + "slices.segments.passengers.baggages.",
                        "quantity",
                        "integer"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      `The number of this type of bag allowed on the segment. Note that this can currently be 0 in some cases.`
                    ]),
                    examples: generateExamples(["Example : ", "1"])
                  }
                ]
              },
              /* subOf +  slices.segments.passengers.cabin_class */
              CABIN_CLASS(subOf + "slices.segments.passengers."),
              /* subOf +  slices.segments.passengers.cabin_class_marketing_name */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "slices.segments.passengers.",
                    "cabin_class_marketing_name",
                    "string"
                  ],
                  true
                ),
                desc: generateDescription([
                  `The name that the marketing carrier uses to market this cabin class`
                ]),
                examples: generateExamples(["Example : ", "Economy Basic"])
              },
              /* subOf +  slices.segments.passengers.passenger_id */
              {
                titles: generateTitles(
                  [
                    subOf + "slices.segments.passengers.",
                    "passenger_id",
                    "string"
                  ],
                  true
                ),
                desc: generateDescription([
                  `The identifier for the passenger. You may have specified this ID yourself when creating the offer request, or otherwise, Flyline will have generated its own random ID.`
                ]),
                examples: generateExamples([
                  "Example : ",
                  "passenger_a31c375e473d4961b7d2b08e24756513"
                ])
              }
            ]
          }
        ]
      }
    ]
  };
};

export const TAX_AMOUNT = (
  subOf = "",
  bottomDash = true,
  nullable = true,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "tax_amount", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || `The amount of tax payable on the offer for all passengers`
    ]),
    examples: generateExamples(["Example : ", example || "40.80"])
  };
};
export const TAX_CURRENCY = (
  subOf = "",
  bottomDash = true,
  nullable = true,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "tax_currency", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The currency of the tax_amount, as an ISO 4217 currency code. It will match your organization's billing currency unless you??�re using Flyline as an accredited IATA agent, in which case it will be in the currency provided by the airline (which will usually be based on the country where your IATA agency is registered).`
    ]),
    examples: generateExamples(["Example : ", example || "USD"])
  };
};
export const TOTAL_AMOUNT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "total_amount", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The total price of the offer for all passengers, including taxes. It does not include the total price of any service(s) that might be booked with the offer.`
    ]),
    examples: generateExamples(["Example : ", example || "45.00"])
  };
};
export const TOTAL_EMISSIONS_KG = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "total_emissions_kg", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `An estimate of the total carbon dioxide (CO?��) emissions when all of the passengers fly this offer's itinerary, measured in kilograms`
    ]),
    examples: generateExamples(["Example : ", example || "460"])
  };
};
export const TOTAL_CURRENCY = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "total_currency", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The currency of the total_amount, as an ISO 4217 currency code. It will match your organization's billing currency unless you??�re using Flyline as an accredited IATA agent, in which case it will be in the currency provided by the airline (which will usually be based on the country where your IATA agency is registered).`
    ]),
    examples: generateExamples(["Example : ", example || "USD"])
  };
};
export const IATA_CODE_AIRCRAFT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "iata_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "The three-character IATA code for the aircraft"
    ]),
    examples: generateExamples(["Example : ", example || "757"])
  };
};
export const IATA_CODE_CITY = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "iata_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "The three-character IATA code for the city"
    ]),
    examples: generateExamples(["Example : ", example || "NYC"])
  };
};
export const NAME_OF_AIRCRAFT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "name", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || "The name of the aircraft"]),
    examples: generateExamples(["Example : ", example || "Boeing 757"])
  };
};
export const NAME_OF_CITY = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "name", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || "The name of city."]),
    examples: generateExamples(["Example : ", example || "New York"])
  };
};
export const LIMIT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "limit", "integer"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The maximum number of records to return per page. Defaults to 50. May be set to any integer between 1 and 200. For more information on how to paginate through records, see the Pagination section."
    ]),
    examples: generateExamples(["Example : ", example || "50"])
  };
};
export const BEFORE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "before", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "A cursor pointing to the next page of records. For more information on how to paginate through records, see the Pagination section."
    ]),
    examples: generateExamples([
      "Example : ",
      example || "cD0yMDIwLTEyLTE3KzE4JTNBMTklM0EzNy4wNzkyNjMlMkIwMCUzQTAw"
    ])
  };
};
export const AFTER = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "after", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "A cursor pointing to the previous page of records. For more information on how to paginate through records, see the Pagination section."
    ]),
    examples: generateExamples([
      "Example : ",
      example || "cD0yMDIwLTEyLTE3KzE4JTNBMTklM0EzNy4wNzkyNjMlMkIwMCUzQTAw"
    ])
  };
};
export const IATA_CODE_AIRLINE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "iata_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "The two-character IATA code for the airline."
    ]),
    examples: generateExamples(["Example : ", example || "AA"])
  };
};
export const NAME_OF_AIRLINE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "name", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || "The name of the airline"]),
    examples: generateExamples(["Example : ", example || "American Airlines"])
  };
};
export const IATA_CODE_AIRPORT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "iata_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "The three-character IATA code for the airport"
    ]),
    examples: generateExamples(["Example : ", example || "DFW"])
  };
};
export const NAME_OF_AIRPORT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "name", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || "The name of the airport"]),
    examples: generateExamples([
      "Example : ",
      example || "Dallas/Fort Worth International Airport"
    ])
  };
};
export const IATA_COUNTRY_CODE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "iata_country_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The ISO 3166-1 alpha-2 code for the country where the city is located"
    ]),
    examples: generateExamples(["Example : ", example || "US"])
  };
};

export const ICAO_CODE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "icao_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "The four-character ICAO code for the airport"
    ]),
    examples: generateExamples(["Example : ", example || "KDEN"])
  };
};

export const TIME_ZONE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "time_zone", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The time zone of the airport, specified by name from the tz database"
    ]),
    examples: generateExamples(["Example : ", example || "America/Denver"])
  };
};

export const CITY_NAME = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "city_name", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The name of the city (or cities separated by a /) where the airport is located"
    ]),
    examples: generateExamples(["Example : ", example || "London"])
  };
};

export const IATA_CODE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "iata_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || "The three-character IATA code for the city"
    ]),
    examples: generateExamples(["Example : ", example || "DEN"])
  };
};
export const IATA_CODE_FOR_PLACE = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "iata_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || "The 3-letter IATA code for the place"]),
    examples: generateExamples(["Example : ", example || "LHR"])
  };
};
export const IATA_CODE_TWO_CHARS = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "iata_code", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The two-character IATA code for the airline. This may be null for non-IATA carriers."
    ]),
    examples: generateExamples(["Example : ", example || "UA"])
  };
};

export const CITY = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "city", "object"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
    ]),
    sub: [
      /* subOf +  iata_code */
      IATA_CODE(subOf + "city."),
      /* subOf +  name */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "city.", "name", "string"], true),
        desc: generateDescription(["The name of the city"]),
        examples: generateExamples(["Example : ", "Denver"])
      },
      /* subOf +  iata_country_code */
      IATA_COUNTRY_CODE(subOf + "city.", false)
    ]
  };
};

export const CABIN_CLASS = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  examples
) => {
  let fTitles = [subOf, "cabin_class", "enum"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || `The cabin that the passengers want to travel in`
    ]),
    examples:
      examples ||
      generateExamples([
        "Possible values : ",
        "first",
        " , ",
        "business",
        " , ",
        "premium_economy",
        " , or ",
        "economy"
      ])
  };
};

export const OFFERS_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "offers", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || `The offers returned by the airlines`]),
    sub: [
      /* offers.id */
      UNIQUE_IDENTIFIER_FOR_OFFER(subOf + "offers."),
      /* offers.base_amount */
      BASE_AMOUNT(subOf + "offers."),
      /* offers.base_currency */
      BASE_CURRENCY(subOf + "offers."),
      /* offers.tax_amount */
      TAX_AMOUNT(subOf + "offers.", true, true),
      /* offers.tax_currency */
      TAX_CURRENCY(subOf + "offers.", true, true),
      /* offers.total_amount */
      TOTAL_AMOUNT(subOf + "offers."),
      /* offers.total_currency */
      TOTAL_CURRENCY(subOf + "offers.", true),
      /* offers.passengers */
      PASSENGERS(
        subOf + "offers.",
        true,
        false,
        false,
        null,
        "The passengers included in the offer"
      ),
      /* offers.owner */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "offers.", "owner", "string"], true),
        desc: generateDescription([
          "The two-character IATA code for the airline"
        ])
        // examples: generateExamples([
        //   "Example : ",
        //   "Denver International"
        // ])
      },

      /* offers.allowed_passenger_identity_document_types */
      // ALLOWED_PASSENGER_IDENTITY_DOCUMENT_TYPES(subOf + "offers."),

      /* offers.expires_at */
      EXPIRES_AT(subOf + "offers."),
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "offers.", "ticket_time_limit", "datetime", "nullable"],
          true
        ),
        desc: generateDescription([
          "The ISO 8601 datetime when a ticket-associated offer must be purchased/ ticketed"
        ]),
        examples: generateExamples([
          "Possible values : ",
          "2021-03-23T23:59:00"
        ])
      },

      /* offers.passenger_identity_documents_required */
      // PASSENGER_IDENTITY_DONCUMENTS_REQUIRED(subOf + "offers."),

      /* offer.slices */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "offers.", "slices", "list"], true),
        desc: generateDescription([
          `The slices that make up this offer. Each slice will include one or more segments, the specific flights that the airline is offering to take the passengers from the slice's origin to its destination.`
        ]),
        sub: [
          /* offer.slices.destination_type */
          // DESTINATION_TYPE(
          //   subOf + "offers.slices.",
          //   true,
          //   false,
          //   false,
          //   null,
          //   "The type of the destination"
          // ),
          /* subOf +  slices.destination */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "offers.slices.", "destination", "string"],
              true
            ),
            desc: generateDescription([
              "The 3-letter IATA code for airport at which the segment is scheduled to arrive"
            ]),
            examples: generateExamples(["Example : ", "LAX"])
            // sub: [
            //   /* subOf +  slices.destination.iata_city_code */
            //   // IATA_CITY_CODE(subOf + 'offers.slices.destination.'),
            //   /* subOf +  slices.destination.iata_code */
            //   IATA_CODE(
            //     subOf + "offers.slices.destination.",
            //     true,
            //     false,
            //     false,
            //     null,
            //     "The 3-letter IATA code for the place",
            //     "DEN"
            //   ),
            //   /* subOf +  slices.destination.name */
            //   {
            //     bottomDash: true,
            //     titles: generateTitles(
            //       [subOf + "offers.slices.destination.", "name", "string"],
            //       true
            //     ),
            //     desc: generateDescription(["The name of the place"]),
            //     examples: generateExamples([
            //       "Example : ",
            //       "Denver International"
            //     ])
            //   },
            //   /* subOf +  slices.destination.type */
            //   {
            //     bottomDash: true,
            //     titles: generateTitles(
            //       [subOf + "offers.slices.destination.", "type", "string"],
            //       true
            //     ),
            //     desc: generateDescription(["The type of the place"]),
            //     examples: generateExamples([
            //       "Possible values : ",
            //       "airport",
            //       " or ",
            //       "city"
            //     ])
            //   },
            //   /* subOf +  slices.destination.iata_country_code */
            //   IATA_COUNTRY_CODE(subOf + "offers.slices.destination."),
            //   /* subOf +  slices.destination.latitude */
            //   LATITUDE(subOf + "offers.slices.destination.", true, true),
            //   /* subOf +  slices.destination.longitude */
            //   LONGITUDE(subOf + "offers.slices.destination.", true, true),
            //   /* subOf +  slices.destination.icao_code */
            //   ICAO_CODE(subOf + "offers.slices.destination.", true, true),
            //   /* subOf +  slices.destination.time_zone */
            //   TIME_ZONE(subOf + "offers.slices.destination.", true, true),
            //   /* subOf +  slices.destination.city_name */
            //   // CITY_NAME(subOf + 'offers.slices.destination.', true, true),
            //   /* subOf +  slices.destination.city */
            //   CITY(subOf + "offers.slices.destination.", false, true)
            // ]
          },
          /* subOf +  slices.origin_type */
          // {
          //   bottomDash: true,
          //   titles: generateTitles(
          //     [subOf + "offers.slices.", "origin_type", "enum"],
          //     true
          //   ),
          //   desc: generateDescription(["The type of the origin"]),
          //   examples: generateExamples([
          //     "Possible values : ",
          //     "airport",
          //     " or ",
          //     "city"
          //   ])
          // },
          /* subOf +  slices.origin */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "offers.slices.", "origin", "string"],
              true
            ),
            desc: generateDescription([
              "The 3-letter IATA code for the origin airport"
            ]),
            examples: generateExamples(["Example : ", "DFW"])
            // sub: [
            //   /* subOf +  slices.origin.iata_city_code */
            //   // IATA_CITY_CODE(subOf + 'offers.slices.origin.'),
            //   /* subOf +  slices.origin.iata_code */
            //   IATA_CODE_FOR_PLACE(
            //     subOf + "offers.slices.origin.",
            //     true,
            //     false,
            //     false,
            //     null,
            //     null,
            //     "DFW"
            //   ),
            //   /* subOf +  slices.origin.name */
            //   {
            //     bottomDash: true,
            //     titles: generateTitles(
            //       [subOf + "offers.slices.origin.", "name", "string"],
            //       true
            //     ),
            //     desc: generateDescription(["The name of the place"]),
            //     examples: generateExamples([
            //       "Example : ",
            //       "Dallas/Fort Worth International"
            //     ])
            //   },
            //   /* subOf +  slices.origin.type */
            //   {
            //     bottomDash: true,
            //     titles: generateTitles(
            //       [subOf + "offers.slices.origin.", "type", "string"],
            //       true
            //     ),
            //     desc: generateDescription(["The type of the place"]),
            //     examples: generateExamples([
            //       "Possible values : ",
            //       "airport",
            //       " or ",
            //       "city"
            //     ])
            //   },
            //   /* subOf +  slices.origin.iata_country_code */
            //   IATA_COUNTRY_CODE(subOf + "offers.slices.origin.", true, false),
            //   /* subOf +  slices.origin.latitude */
            //   LATITUDE(
            //     subOf + "offers.slices.origin.",
            //     true,
            //     true,
            //     false,
            //     null,
            //     null,
            //     "32.897460"
            //   ),
            //   /* subOf +  slices.origin.longitude */
            //   LONGITUDE(
            //     subOf + "offers.slices.origin.",
            //     true,
            //     true,
            //     false,
            //     null,
            //     null,
            //     "-97.036125"
            //   ),
            //   /* subOf +  slices.origin.icao_code */
            //   ICAO_CODE(
            //     subOf + "offers.slices.origin.",
            //     true,
            //     true,
            //     false,
            //     null,
            //     null,
            //     "KDFW"
            //   ),
            //   /* subOf +  slices.origin.time_zone */
            //   TIME_ZONE(
            //     subOf + "offers.slices.origin.",
            //     true,
            //     true,
            //     false,
            //     null,
            //     null,
            //     "America/Chicago"
            //   ),
            //   /* subOf +  slices.origin.city_name */
            //   // CITY_NAME(subOf + 'offers.slices.origin.', true, true),
            //   /* subOf +  slices.origin.city */
            //   // CITY(subOf + 'offers.slices.origin.', false, true),
            //   {
            //     bottomDash: false,
            //     titles: generateTitles(
            //       [subOf + "offers.slices.origin.", "city", "object"],
            //       true
            //     ),
            //     desc: generateDescription([
            //       "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
            //     ]),
            //     sub: [
            //       /* subOf +  iata_code */
            //       IATA_CODE(
            //         subOf + "offers.slices.origin.city.",
            //         true,
            //         false,
            //         false,
            //         null,
            //         null,
            //         "DFW"
            //       ),
            //       /* subOf +  name */
            //       {
            //         bottomDash: true,
            //         titles: generateTitles(
            //           [subOf + "offers.slices.origin.city.", "name", "string"],
            //           true
            //         ),
            //         desc: generateDescription(["The name of the city"]),
            //         examples: generateExamples(["Example : ", "Dallas"])
            //       },
            //       /* subOf +  iata_country_code */
            //       IATA_COUNTRY_CODE(subOf + "offers.slices.origin.city.", false)
            //     ]
            //   }
            // ]
          },
          /* subOf +  slices.duration */
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "offers.slices.", "duration", "string"],
              true
            ),
            desc: generateDescription([
              "The duration of the slice, represented as a ISO 8601 duration"
            ]),
            examples: generateExamples(["Example : ", "PT02H26M"])
          },
          /* subOf +  slices.segments */
          {
            titles: generateTitles(
              [subOf + "offers.slices.", "segments", "list"],
              true
            ),
            desc: generateDescription([
              "The segments - that is, specific flights - that the airline is offering to get the passengers from the origin to the destination"
            ]),
            sub: [
              /* subOf +  slices.segments.aircraft */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "offers.slices.segments.", "aircraft", "string"],
                  true
                ),
                desc: generateDescription([
                  "The 3-letter IATA code for aircraft that the operating carrier will use to operate this segment"
                ]),
                examples: generateExamples(["Example : ", "319"])
                // sub: [
                //   /* subOf +  slices.segments.aircraft.iata_code */
                //   IATA_CODE_AIRCRAFT(
                //     subOf + "offers.slices.segments.aircraft.",
                //     true,
                //     false,
                //     false,
                //     null,
                //     null,
                //     "319"
                //   ),
                //   /* subOf +  slices.segments.aircraft.name */
                //   {
                //     titles: generateTitles(
                //       [
                //         subOf + "offers.slices.segments.aircraft.",
                //         "name",
                //         "string"
                //       ],
                //       true
                //     ),
                //     desc: generateDescription(["The name of the aircraft"]),
                //     examples: generateExamples(["Example : ", "Airbus A319"])
                //   }
                // ]
              },
              /* subOf +  slices.segments.arriving_at */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.slices.segments.",
                    "arriving_at",
                    "datetime"
                  ],
                  true
                ),
                desc: generateDescription([
                  "The ISO 8601 datetime at which the segment is scheduled to arrive"
                ]),
                examples: generateExamples([
                  "Example : ",
                  "2021-01-05T07:09:00"
                ])
              },
              /* subOf +  slices.segments.destination_terminal */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.slices.segments.",
                    "destination_terminal",
                    "string",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  "The terminal at the destination airport where the segment is scheduled to arrive"
                ]),
                examples: generateExamples(["Example : ", "5"])
              },
              /* subOf +  slices.segments.departing_at */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.slices.segments.",
                    "departing_at",
                    "datetime"
                  ],
                  true
                ),
                desc: generateDescription([
                  "The ISO 8601 datetime at which the segment is scheduled to depart"
                ]),
                examples: generateExamples([
                  "Example : ",
                  "2021-01-05T06:05:00"
                ])
              },
              /* subOf +  slices.segments.origin_terminal */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.slices.segments.",
                    "origin_terminal",
                    "string",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  "The terminal at the origin airport from which the segment is scheduled to depart"
                ]),
                examples: generateExamples(["Example : ", "B"])
              },
              /* subOf +  slices.segments.destination */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "offers.slices.segments.", "destination", "string"],
                  true
                ),
                desc: generateDescription([
                  "The 3-letter IATA code for airport at which the segment is scheduled to arrive"
                ]),
                examples: generateExamples(["Example : ", "LAX"])
                // sub: [
                //   /* subOf +  slices.destination.iata_code */
                //   IATA_CODE_AIRCRAFT(
                //     subOf + "offers.slices.segments.destination.",
                //     true,
                //     false,
                //     false,
                //     null,
                //     null,
                //     "DEN"
                //   ),
                //   /* subOf +  slices.destination.name */
                //   {
                //     bottomDash: true,
                //     titles: generateTitles(
                //       [
                //         subOf + "offers.slices.segments.destination.",
                //         "name",
                //         "string"
                //       ],
                //       true
                //     ),
                //     desc: generateDescription(["The name of the airport"]),
                //     examples: generateExamples([
                //       "Example : ",
                //       "Denver International"
                //     ])
                //   },
                //   /* subOf +  slices.destination.iata_country_code */
                //   IATA_COUNTRY_CODE(
                //     subOf + "offers.slices.segments.destination."
                //   ),
                //   /* subOf +  slices.destination.latitude */
                //   LATITUDE(
                //     subOf + "offers.slices.segments.destination.",
                //     true,
                //     false,
                //     false,
                //     null,
                //     null,
                //     "39.849390"
                //   ),
                //   /* subOf +  slices.destination.longitude */
                //   LONGITUDE(
                //     subOf + "offers.slices.segments.destination.",
                //     true,
                //     false,
                //     false,
                //     null,
                //     null,
                //     "-104.672844"
                //   ),
                //   /* subOf +  slices.destination.icao_code */
                //   ICAO_CODE(
                //     subOf + "offers.slices.segments.destination.",
                //     true,
                //     true,
                //     false,
                //     null,
                //     null,
                //     "KDEN"
                //   ),
                //   /* subOf +  slices.destination.time_zone */
                //   TIME_ZONE(
                //     subOf + "offers.slices.segments.destination.",
                //     true,
                //     false,
                //     false,
                //     null,
                //     null,
                //     "America/Denver"
                //   ),
                //   /* subOf +  slices.destination.city_name */
                //   // CITY_NAME(subOf + 'offers.slices.segments.destination.', true),
                //   /* subOf +  slices.destination.city */
                //   // CITY(subOf + 'offers.slices.segments.destination.', false),
                //   {
                //     bottomDash: false,
                //     titles: generateTitles(
                //       [
                //         subOf + "offers.slices.segments.destination.",
                //         "city",
                //         "object"
                //       ],
                //       true
                //     ),
                //     desc: generateDescription([
                //       "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
                //     ]),
                //     sub: [
                //       /* subOf +  iata_code */
                //       IATA_CODE(
                //         subOf + "offers.slices.segments.destination.city.",
                //         true,
                //         false,
                //         false,
                //         null,
                //         null,
                //         "DEN"
                //       ),
                //       /* subOf +  name */
                //       {
                //         bottomDash: true,
                //         titles: generateTitles(
                //           [
                //             subOf + "offers.slices.segments.destination.city.",
                //             "name",
                //             "string"
                //           ],
                //           true
                //         ),
                //         desc: generateDescription(["The name of the city"]),
                //         examples: generateExamples(["Example : ", "Denver"])
                //       },
                //       /* subOf +  iata_country_code */
                //       IATA_COUNTRY_CODE(
                //         subOf + "offers.slices.segments.destination.city.",
                //         false
                //       )
                //     ]
                //   }
                // ]
              },
              /* subOf +  slices.segments.distance */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "offers.slices.segments.", "distance", "int"],
                  true
                ),
                desc: generateDescription([
                  "The distance of the segment in mileage"
                ]),
                examples: generateExamples(["Example : ", "646"])
              },
              /* subOf +  slices.segments.duration */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "offers.slices.segments.", "duration", "string"],
                  true
                ),
                desc: generateDescription([
                  "The duration of the segment, represented as a ISO 8601 duration"
                ]),
                examples: generateExamples(["Example : ", "PT02H26M"])
              },
              /* subOf +  slices.segments.id */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "offers.slices.segments.", "id", "string"],
                  true
                ),
                desc: generateDescription([
                  "The unique identifier for the segment. It identifies the segment of an offer."
                ]),
                examples: generateExamples([
                  "Example : ",
                  "seg_00009htYpSCXrwaB9Dn456"
                ])
              },
              /* subOf +  slices.segments.marketing_carrier */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.slices.segments.",
                    "marketing_carrier",
                    "string"
                  ],
                  true
                ),
                desc: generateDescription([
                  `The 2 letter IATA code of airline selling the tickets for this segment.`
                ])
                // sub: [
                //   /* subOf +  slices.segments.marketing_carrier.iata_code */
                //   IATA_CODE_TWO_CHARS(
                //     subOf + "offers.slices.segments.marketing_carrier.",
                //     true,
                //     true
                //   ),
                //   /* subOf +  slices.segments.marketing_carrier.name */
                //   {
                //     titles: generateTitles(
                //       [
                //         subOf + "offers.slices.segments.marketing_carrier.",
                //         "name",
                //         "string"
                //       ],
                //       true
                //     ),
                //     desc: generateDescription([`The name of the airline`]),
                //     examples: generateExamples([
                //       "Example : ",
                //       "United Airlines"
                //     ])
                //   }
                // ]
              },
              /* subOf +  slices.segments.marketing_carrier_flight_number */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.slices.segments.",
                    "marketing_carrier_flight_number",
                    "string"
                  ],
                  true
                ),
                desc: generateDescription([
                  "The flight number assigned by the marketing carrier"
                ]),
                examples: generateExamples(["Example : ", "1234"])
              },
              /* subOf +  slices.segments.origin */
              {
                bottomDash: true,
                titles: generateTitles(
                  [subOf + "offers.slices.segments.", "origin", "string"],
                  true
                ),
                desc: generateDescription([
                  "The 3-letter IATA code for airport at which the segment is scheduled to departure"
                ]),
                examples: generateExamples(["Example : ", "1234"])
                // sub: [
                //   /* subOf +  slices.origin.iata_code */
                //   IATA_CODE_AIRPORT(
                //     subOf + "offers.slices.segments.origin.",
                //     true,
                //     true,
                //     false,
                //     null,
                //     null,
                //     "DFW"
                //   ),
                //   /* subOf +  slices.origin.name */
                //   {
                //     bottomDash: true,
                //     titles: generateTitles(
                //       [
                //         subOf + "offers.slices.segments.origin.",
                //         "name",
                //         "string"
                //       ],
                //       true
                //     ),
                //     desc: generateDescription(["The name of the airport"]),
                //     examples: generateExamples([
                //       "Example : ",
                //       "Dallas/Fort Worth International"
                //     ])
                //   },
                //   /* subOf +  slices.origin.iata_country_code */
                //   IATA_COUNTRY_CODE(
                //     subOf + "offers.slices.segments.origin.",
                //     true
                //   ),
                //   /* subOf +  slices.origin.latitude */
                //   LATITUDE(
                //     subOf + "offers.slices.segments.origin.",
                //     true,
                //     false,
                //     false,
                //     null,
                //     null,
                //     "32.897460"
                //   ),
                //   /* subOf +  slices.origin.longitude */
                //   LONGITUDE(
                //     subOf + "offers.slices.segments.origin.",
                //     true,
                //     false,
                //     false,
                //     null,
                //     null,
                //     "-97.036125"
                //   ),
                //   /* subOf +  slices.origin.icao_code */
                //   ICAO_CODE(
                //     subOf + "offers.slices.segments.origin.",
                //     true,
                //     true,
                //     false,
                //     null,
                //     null,
                //     "KDFW"
                //   ),
                //   /* subOf +  slices.origin.time_zone */
                //   TIME_ZONE(
                //     subOf + "offers.slices.segments.origin.",
                //     true,
                //     false,
                //     false,
                //     null,
                //     null,
                //     "America/Chicago"
                //   ),
                //   /* subOf +  slices.origin.city_name */
                //   // CITY_NAME(subOf + 'offers.slices.segments.origin.', true),
                //   /* subOf +  slices.origin.city */
                //   // CITY(subOf + 'offers.slices.segments.origin.', false),
                //   {
                //     bottomDash: false,
                //     titles: generateTitles(
                //       [
                //         subOf + "offers.slices.segments.origin.",
                //         "city",
                //         "object"
                //       ],
                //       true
                //     ),
                //     desc: generateDescription([
                //       "The metropolitan area where the airport is located. Only present for airports which are registered with IATA as belonging to a metropolitan area."
                //     ]),
                //     sub: [
                //       /* subOf +  iata_code */
                //       IATA_CODE(
                //         subOf + "offers.slices.segments.origin.city.",
                //         true,
                //         false,
                //         false,
                //         null,
                //         null,
                //         "DFW"
                //       ),
                //       /* subOf +  name */
                //       {
                //         bottomDash: true,
                //         titles: generateTitles(
                //           [
                //             subOf + "offers.slices.segments.origin.city.",
                //             "name",
                //             "string"
                //           ],
                //           true
                //         ),
                //         desc: generateDescription(["The name of the city"]),
                //         examples: generateExamples(["Example : ", "Dallas"])
                //       },
                //       /* subOf +  iata_country_code */
                //       IATA_COUNTRY_CODE(
                //         subOf + "offers.slices.segments.origin.city.",
                //         false
                //       )
                //     ]
                //   }
                // ]
              },
              /* subOf +  slices.segments.operating_carrier */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.slices.segments.",
                    "operating_carrier",
                    "string"
                  ],
                  true
                ),
                desc: generateDescription([
                  `The 2 letter IATA code of airline or reference code of carriers list.`
                ]),
                sub: [
                  /* subOf +  slices.segments.operating_carrier.iata_code */
                  IATA_CODE_TWO_CHARS(
                    subOf + "offers.slices.segments.operating_carrier.",
                    true,
                    true
                  ),
                  /* subOf +  slices.segments.operating_carrier.name */
                  {
                    titles: generateTitles(
                      [
                        subOf + "offers.slices.segments.operating_carrier.",
                        "name",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription(["The name of the airline"]),
                    examples: generateExamples([
                      "Example : ",
                      "United Airlines"
                    ])
                  }
                ]
              },
              /* subOf +  slices.segments.operating_carrier_flight_number */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.slices.segments.",
                    "operating_carrier_flight_number",
                    "string"
                  ],
                  true
                ),
                desc: generateDescription([
                  "The flight number assigned by the operating carrier"
                ]),
                examples: generateExamples(["Example : ", "4321"])
              },
              /* subOf +  slices.segments.passengers */
              {
                titles: generateTitles(
                  [subOf + "offers.slices.segments.", "passengers", "list"],
                  true
                ),
                desc: generateDescription([
                  `Additional segment-specific information about the passengers included in the offer (e.g. their baggage allowance and the cabin class they will be travelling in)`
                ]),
                sub: [
                  /* subOf +  slices.segments.passengers.baggages */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "offers.slices.segments.passengers.",
                        "baggages",
                        "list"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      `The baggage allowances for the passenger on this segment included in the offer. Some airlines may allow additional baggage to be booked as a service - see the offer's available_services.`
                    ]),
                    sub: [
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            subOf +
                              "offers.slices.segments.passengers.baggages.",
                            "type",
                            "enum"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          `The type of the baggage allowance`
                        ]),
                        examples: generateExamples([
                          "Possible values : ",
                          "checked",
                          " or ",
                          "carry_on"
                        ])
                      },
                      {
                        titles: generateTitles(
                          [
                            subOf +
                              "offers.slices.segments.passengers.baggages.",
                            "quantity",
                            "integer"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          `The number of this type of bag allowed on the segment. Note that this can currently be 0 in some cases.`
                        ]),
                        examples: generateExamples(["Example : ", "1"])
                      }
                    ]
                  },
                  /* subOf +  slices.segments.passengers.cabin_class */
                  CABIN_CLASS(subOf + "offers.slices.segments.passengers."),
                  /* subOf +  slices.segments.passengers.cabin_class_marketing_name */
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        subOf + "offers.slices.segments.passengers.",
                        "cabin_class_marketing_name",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      `The name that the marketing carrier uses to market this cabin class`
                    ]),
                    examples: generateExamples(["Example : ", "Economy Basic"])
                  },
                  /* subOf +  slices.segments.passengers.passenger_id */
                  {
                    titles: generateTitles(
                      [
                        subOf + "offers.slices.segments.passengers.",
                        "passenger_id",
                        "string"
                      ],
                      true
                    ),
                    desc: generateDescription([
                      `The identifier for the passenger. You may have specified this ID yourself when creating the offer request, or otherwise, Flyline will have generated its own random ID.`
                    ]),
                    examples: generateExamples([
                      "Example : ",
                      "passenger_a31c375e473d4961b7d2b08e24756513"
                    ])
                  }
                ]
              }
            ]
          }
        ]
      },
      /* offers.total_emissions_kg */
      // TOTAL_EMISSIONS_KG(subOf + "offers.")

      /* offers.total_durations */
      // {
      //   bottomDash: true,
      //   titles: generateTitles(
      //     [subOf + "offers.", "duration", "integer"],
      //     true
      //   ),
      //   desc: generateDescription([
      //     "The duration of the offer, represented in seconds"
      //   ]),
      //   examples: generateExamples(["Example : ", "7440"])
      // },
      {
        titles: generateTitles([subOf + "offers.", "fares", "list"], true),
        desc: generateDescription(["The list of fares in this offer"]),
        sub: [
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "offers.fares.", "cabin_class", "string", "nullable"],
              true
            ),
            desc: generateDescription([
              "A space-delimited list of codes. A single code indicate the class of service passenger can expect on the plane. For example, if cabin_class say Y, that means the slice has one segment and its cabin class is Y . If cabin_class say C F, that means the slice has 2 segments and the first segment cabin class is C and second segment cabin class is F"
            ]),
            examples: generateExamples(["Possible values : ", "Y"])
          },
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "offers.fares.", "cabin_name", "string", "nullable"],
              true
            ),
            desc: generateDescription([
              " A space-delimited list of codes. A single code indicate the name of cabin class For example, if cabin_name say BUSINESS, that means the slice has one segment and its class of service is BUSINESS . If cabin_name say BUSINESS FIRST, that means the slice has 2 segments and the first segment class of service is Business and second segment class of service is First"
            ]),
            examples: generateExamples(["Possible values : ", "COACH"])
          },
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "offers.fares.", "fare_name", "string", "nullable"],
              true
            ),
            desc: generateDescription([
              "The name of the fare brand associated with this slice. A fare brand specifies the travel conditions you get on your slice made available by the airline."
            ]),
            examples: generateExamples(["Example : ", "Basic Economy"])
          },
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "offers.fares.", "fare_class", "string", "required"],
              true
            ),
            desc: generateDescription([
              "A space-delimited list of codes. A single code indicate the fare class. For example, if fare_class say P, that means the slice has one segment and its fare class is P . If fare_class say P P, that means the slice has 2 segments and the first segment fare_class is P and second segment fare class is P"
            ]),
            examples: generateExamples(["Example : ", "Y"])
          },
          {
            bottomDash: true,
            titles: generateTitles(
              [
                subOf + "offers.fares.",
                "fare_basis_code",
                "string",
                "required"
              ],
              true
            ),
            desc: generateDescription([
              "Code identifying the actual fare (and fare rules that apply) with the airline. May not missing for some airlines"
            ]),
            examples: generateExamples(["Example : ", "GAA3AWBN"])
          },
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "offers.fares.", "fare_type", "string", "required"],
              true
            ),
            desc: generateDescription(["Fare type description"]),
            examples: generateExamples(["Example : ", "Published fares"])
          },
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "offers.fares.", "fare_rules", "object", "nullable"],
              true
            ),
            desc: generateDescription(["Describe Fare rule"]),
            sub: [
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.fares.fare_rules.",
                    "refundable",
                    "boolean",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  "Specify whether the ticket is refundable"
                ])
              },
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.fares.fare_rules.",
                    "corporate",
                    "boolean",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  "Viewership of corporate and other fare types"
                ]),
                examples: generateExamples(["Example : ", "TRUE"])
              },
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.fares.fare_rules.",
                    "change_fee",
                    "boolean",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  "View whether or not change fees apply to a fare"
                ]),
                examples: generateExamples(["Example : ", "TRUE"])
              },
              {
                titles: generateTitles(
                  [
                    subOf + "offers.fares.fare_rules.",
                    "cancel_fee",
                    "boolean",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  "Viewership of applicable cancelation fees"
                ]),
                examples: generateExamples(["Example : ", "TRUE"])
              }
            ]
          },
          {
            titles: generateTitles(
              [subOf + "offers.fares.", "segments", "list", "required"],
              true
            ),
            desc: generateDescription(["Fare type description"]),
            sub: [
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "offers.fares.segments.",
                    "segment_id",
                    "string",
                    "required"
                  ],
                  true
                ),
                desc: generateDescription([
                  "Segment id to which this fare applies"
                ]),
                examples: generateExamples(["Example : ", "Isgm01004a13e6da9"])
              },
              {
                bottomDash: true,
                titles: generateTitles(
                  ["offers.fares.segments.", "cabin_attributes", "object"],
                  true
                ),
                desc: generateDescription([""]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        "offers.fares.segments.cabin_attributes.",
                        "seat_attribute",
                        "object"
                      ],
                      true
                    ),
                    desc: generateDescription([""]),
                    sub: [
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_attributes.seat_attribute.",
                            "display_text",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The description of seat attribute"
                        ]),
                        examples: generateExamples([
                          "Example : ",
                          '34" seat pitch'
                        ])
                      },
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_attributes.seat_attribute.",
                            "pitch",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription(["Seat Pitich"]),
                        examples: generateExamples([
                          "Example : ",
                          '34" seat pitch'
                        ])
                      },
                      {
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_attributes.seat_attribute.",
                            "width",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The category of seat width"
                        ]),
                        examples: generateExamples([
                          "Possible values : ",
                          "standard",
                          " , ",
                          "wider",
                          " , ",
                          "n/a"
                        ])
                      }
                    ]
                  },
                  {
                    titles: generateTitles(
                      [
                        "trip_attributes.slices.segments.cabin_attributes.",
                        "seat_layout",
                        "object"
                      ],
                      true
                    ),
                    desc: generateDescription(["Seat Layout"]),
                    sub: [
                      {
                        titles: generateTitles(
                          [
                            "trip_attributes.slices.segments.cabin_attributes.seat_layout.",
                            "display_text",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The description of seat layout"
                        ]),
                        examples: generateExamples([
                          "Example : ",
                          "3-3 seat layout"
                        ])
                      }
                    ]
                  }
                ]
              },
              {
                bottomDash: true,
                titles: generateTitles(
                  ["offers.fares.segments.", "cabin_amenities", "object"],
                  true
                ),
                desc: generateDescription(["Cabin Amenities"]),
                sub: [
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        "offers.fares.segments.cabin_amenities.",
                        "food",
                        "object"
                      ],
                      true
                    ),
                    desc: generateDescription(["Food"]),
                    sub: [
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.food.",
                            "display_text",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription(["The description of food"]),
                        examples: generateExamples([
                          "Example : ",
                          "Snacks provided"
                        ])
                      },
                      {
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.food.",
                            "cost",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The cateogry of food cost"
                        ]),
                        examples: generateExamples([
                          "Possible values : ",
                          "free",
                          " , ",
                          "paid",
                          " , ",
                          "n/a"
                        ])
                      }
                    ]
                  },
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        "offers.fares.segments.cabin_amenities.",
                        "beverage",
                        "object"
                      ],
                      true
                    ),
                    desc: generateDescription(["Beverage"]),
                    sub: [
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.beverage.",
                            "display_text",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The description of beverage"
                        ]),
                        examples: generateExamples([
                          "Example : ",
                          "Nonalcoholic beverages provided"
                        ])
                      },
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.beverage.",
                            "type",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription(["Tells beverage type"]),
                        examples: generateExamples([
                          "Example : ",
                          "nonalcoholic"
                        ])
                      },
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.beverage.",
                            "alcoholic_cost",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The category of alcoholic cost"
                        ]),
                        examples: generateExamples([
                          "Possible values : ",
                          "free",
                          " , ",
                          "paid",
                          " , ",
                          "n/a"
                        ])
                      },
                      {
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.beverage.",
                            "nonalcoholic_cost",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The category of nonalcoholic cost"
                        ]),
                        examples: generateExamples([
                          "Possible values : ",
                          "free",
                          " , ",
                          "paid",
                          " , ",
                          "n/a"
                        ])
                      }
                    ]
                  },
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        "offers.fares.segments.cabin_amenities.",
                        "entertainment",
                        "object"
                      ],
                      true
                    ),
                    desc: generateDescription(["Entertainment"]),
                    sub: [
                      {
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.entertainment.",
                            "display_text",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The description of entertainment"
                        ]),
                        examples: generateExamples([
                          "Example : ",
                          "Seatback on-demand video"
                        ])
                      }
                    ]
                  },
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        "offers.fares.segments.cabin_amenities.",
                        "wifi",
                        "object"
                      ],
                      true
                    ),
                    desc: generateDescription(["wifi facility"]),
                    sub: [
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.wifi.",
                            "display_text",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The description of wifi facility"
                        ]),
                        examples: generateExamples([
                          "Example : ",
                          "Netflix streaming capable (fee)"
                        ])
                      },
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.wifi.",
                            "quality",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The cateogry of wifi quality"
                        ]),
                        examples: generateExamples([
                          "Possible values : ",
                          "standard",
                          " , ",
                          "better",
                          " , ",
                          "n/a"
                        ])
                      },
                      {
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.wifi.",
                            "cost",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "The category of wifi cost"
                        ]),
                        examples: generateExamples([
                          "Possible values : ",
                          "free",
                          " , ",
                          "paid",
                          " , ",
                          "n/a"
                        ])
                      }
                    ]
                  },
                  {
                    bottomDash: true,
                    titles: generateTitles(
                      [
                        "offers.fares.segments.cabin_amenities.",
                        "power",
                        "object"
                      ],
                      true
                    ),
                    desc: generateDescription(["Power"]),
                    sub: [
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.power.",
                            "display_text",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription(["The description of power"]),
                        examples: generateExamples([
                          "Example : ",
                          "Power & USB outlets"
                        ])
                      },
                      {
                        bottomDash: true,
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.power.",
                            "multiple_at_seat",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "Indicate whether there are multiple outlets in the seat"
                        ]),
                        examples: generateExamples(["Example : ", "no"])
                      },
                      {
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.power.",
                            "usb_port",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "Indicate whether there is usb port in the seat"
                        ]),
                        examples: generateExamples(["Example : ", "yes"])
                      },
                      {
                        titles: generateTitles(
                          [
                            "offers.fares.segments.cabin_amenities.power.",
                            "power_outlet",
                            "string"
                          ],
                          true
                        ),
                        desc: generateDescription([
                          "Indicate wheter there is power outlet in the seat"
                        ]),
                        examples: generateExamples(["Example : ", "yes"])
                      }
                    ]
                  }
                ]
              },
              {
                titles: generateTitles(
                  [
                    subOf + "offers.fares.segments.",
                    "passengers",
                    "string[]",
                    "required"
                  ],
                  true
                ),
                desc: generateDescription([
                  "List of passengers this fare applies to"
                ]),
                examples: generateExamples(["Example : ", `PAX_0`])
              }
            ]
          }
        ]
      }
    ]
  };
};

export const AIRPORTS_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "airports", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || `The offers returned by the airlines`]),
    sub: [
      IATA_CODE_AIRPORT(
        subOf + "airports.",
        true,
        true,
        false,
        null,
        null,
        "DFW"
      ),
      {
        bottomDash: true,
        titles: generateTitles([subOf + "airports.", "name", "string"], true),
        desc: generateDescription(["The name of the airport"]),
        examples: generateExamples([
          "Example : ",
          "Dallas/Fort Worth International"
        ])
      },
      IATA_COUNTRY_CODE(subOf + "airports.", true),
      LATITUDE(
        subOf + "airports.",
        true,
        false,
        false,
        null,
        null,
        "32.897460"
      ),
      /* subOf +  slices.origin.longitude */
      LONGITUDE(
        subOf + "airports.",
        true,
        false,
        false,
        null,
        null,
        "-97.036125"
      ),
      /* subOf +  slices.origin.icao_code */
      ICAO_CODE(subOf + "airports.", true, true, false, null, null, "KDFW"),
      /* subOf +  slices.origin.time_zone */
      TIME_ZONE(
        subOf + "airports.",
        true,
        false,
        false,
        null,
        null,
        "America/Chicago"
      ),
      CITY(subOf + "airports.", false, true)
    ]
  };
};
export const AIRCRAFT_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "aircraft", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || `The list of aircraft that is operating for this trip`
    ]),
    sub: [
      /* subOf +  slices.segments.aircraft.iata_code */
      IATA_CODE_AIRCRAFT(
        subOf + "aircraft.",
        true,
        false,
        false,
        null,
        null,
        "319"
      ),
      /* subOf +  slices.segments.aircraft.name */
      {
        titles: generateTitles([subOf + "aircraft.", "name", "string"], true),
        desc: generateDescription(["The name of the aircraft"]),
        examples: generateExamples(["Example : ", "Airbus A319"])
      }
    ]
  };
};
export const CARRIER_FLIGHT_SEARCH_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "carrier", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc || `The list of airlines that is operating for this trip`
    ]),
    sub: [
      /* subOf +  slices.segments.aircraft.name */
      {
        bottomDash: true,
        titles: generateTitles([subOf + "carrier.", "code", "string"], true),
        desc: generateDescription([
          "The 2 letter IATA code of airline or unique code generated by Flyline"
        ]),
        examples: generateExamples(["Example : ", "Airbus A319"])
      },
      {
        titles: generateTitles([subOf + "carrier.", "name", "string"], true),
        desc: generateDescription([`The name of airline`])
      }
    ]
  };
};

export const RETURN_OFFERS = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "return_offers", "boolean"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `When set to true, the offer request resource returned will include all the offers returned by the airlines. If set to false, the offer request resource won't include any offers. To retrieve the associated offers later, use the List Offers endpoint, specifying the offer_request_id. You should use this option if you want to take advantage of the pagination, sorting and filtering that the List Offers endpoint provides.`
    ]),
    examples: generateExamples(["Example : ", example || "false"])
  };
};
export const RETURN_AVAILABLE_SERVICES = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "return_available_services", "boolean"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `When set to true, the offer resource returned will include all the available_services returned by the airline. If set to false, the offer resource won't include any available_services.`
    ]),
    examples: generateExamples(["Example : ", example || "true"])
  };
};
export const OFFER_REQUEST_ID = (
  subOf = "",
  bottomDash = true,
  nullable,
  required = true,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "offer_request_id", "string"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `Flyline's unique identifier for the offer request, returned when it was created`
    ]),
    examples: generateExamples([
      "Example : ",
      example || "orq_00009htyDGjIfajdNBZRlw"
    ])
  };
};
export const SORT = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "sort", "enum"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `By default, the offers will be returned sorted by ID in ascending order. This parameter allows you to sort the list of offers by total_amount or total_duration. By default the sorting order will be ascending, if you wish to sort in descending order a - will need to be prepended to the sorting attribute (i.e: -total_amount).`
    ]),
    examples: generateExamples([
      "Possible values : ",
      "total_amount",
      " or ",
      "total_duration"
    ])
  };
};
export const MAX_CONNECTIONS = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc,
  example
) => {
  let fTitles = [subOf, "max_connections", "integer"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `Allows to filter the offers list by the maximum number of connections in a given offer. e.g. a return flight with three flights outbound and a direct inbound flight would be filtered out if max_connections=1 was passed.`
    ]),
    examples: generateExamples(["Example : ", example || "2"])
  };
};

export const SLICES_FOR_FLIGHT_SEARCH_CREATE_REQ_BODY = (
  subOf = "",
  bottomDash = true,
  nullable,
  required = true,
  titles,
  desc
) => {
  let fTitles = [subOf, "slices", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The slices that make up this offer request. One-way journeys can be expressed using one slice, whereas return trips will need two.`
    ]),
    sub: [
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "departure_date", "date", "required"],
          true
        ),
        desc: generateDescription([
          `The ISO 8601 date on which the passengers want to depart`
        ]),
        examples: generateExamples(["Example : ", "2021-01-05"])
      },
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "destination", "string", "required"],
          true
        ),
        desc: generateDescription([
          `The 3-letter IATA code for the city or airport where this slice ends`
        ]),
        examples: generateExamples(["Example : ", "DEN"])
      },
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "slices.", "origin", "string", "required"],
          true
        ),
        desc: generateDescription([
          `The 3-letter IATA code for the city or airport where this slice starts`
        ]),
        examples: generateExamples(["Example : ", "DFW"])
      }
    ]
  };
};
export const PASSENGERS_FOR_FLIGHT_SEARCH_CREATE_REQ_BODY = (
  subOf = "",
  bottomDash = true,
  nullable,
  required = true,
  titles,
  desc
) => {
  let fTitles = [subOf, "passengers", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || `The number of passenger`]),
    sub: [
      {
        bottomDash: true,
        titles: generateTitles([
          "Offer Request Body Passenger With Type",
          "object"
        ]),
        desc: generateDescription([`A passenger specified by their type.`]),
        sub: [
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "passengers.", "id", "string", "optional"],
              true
            ),
            desc: generateDescription([
              `The unique id of the passenger. If this is not set, it will automatically generated by flyline.`
            ]),
            examples: generateExamples(["Example : ", "PAX_0"])
          },
          {
            titles: generateTitles(
              [subOf + "passengers.", "type", "enum", "required"],
              true
            ),
            desc: generateDescription([
              `The type of the passenger. If the passenger is aged 18 or over, you should specify a type of adult. If a passenger is aged under 18, you should specify their age instead of a type. A passenger can have only a type or an age, but not both.`
            ]),
            examples: generateExamples(["Possible values : ", "adult"])
          }
        ]
      },
      {
        titles: generateTitles([
          "Offer Request Body Passenger With Age",
          "object"
        ]),
        desc: generateDescription([`A passenger specified by their age.`]),
        sub: [
          {
            bottomDash: true,
            titles: generateTitles(
              [subOf + "passengers.", "id", "string", "optional"],
              true
            ),
            desc: generateDescription([
              `The unique id of the passenger. If this is not set, it will automatically generated by flyline.`
            ]),
            examples: generateExamples(["Example : ", "PAX_0"])
          },
          {
            titles: generateTitles(
              [subOf + "passengers.", "age", "integer", "required"],
              true
            ),
            desc: generateDescription([
              `The age of the passenger on the departure_date of the final slice. e.g. if you a searching for a round trip and the passenger is 15 years old at the time of the outbound flight, but they then have their birthday and are 16 years old for the inbound flight, you must set the age to 16. You should specify an age for passengers who are under 18 years old. A passenger can have only a type or an age, but not both.`
            ]),
            examples: generateExamples(["Example : ", "14"])
          }
        ]
      }
    ]
  };
};
export const PASSENGERS_FOR_AMENITIES_REQ_BODY = (
  subOf = "",
  bottomDash = true,
  nullable,
  required = true,
  titles,
  desc
) => {
  let fTitles = [subOf, "passengers", "int"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([desc || `The number of passenger`])
  };
};
export const FARE_BASIS_CODES_FOR_AMENITIES_REQ_BODY = (
  subOf = "",
  bottomDash = true,
  nullable,
  required = true,
  titles
) => {
  let fTitles = [subOf, "fare_basis_codes", "list", "optional"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != "")
    // desc: generateDescription([
    //   desc ||
    //     `The number of passenger`
    // ]),
  };
};
export const AVAILABLE_SERVICES_FOR_SEARCH_RESULT_SCHEMA = (
  subOf = "",
  bottomDash = true,
  nullable,
  required,
  titles,
  desc
) => {
  let fTitles = [subOf, "available_services", "list"];
  if (nullable) fTitles.push("nullable");
  else if (required) fTitles.push("required");
  return {
    bottomDash: bottomDash,
    titles: titles || generateTitles(fTitles, subOf != ""),
    desc: generateDescription([
      desc ||
        `The services that can be booked along with the offer but are not included by default, for example an additional checked bag. This field is only returned in the Get single offer endpoint. When there are no services available, or we don't support services for the airline, this list will be empty. If you want to know which airlines we support services for, please get in touch with the Flyline support team at help@flyline.io.`
    ]),
    sub: [
      /* available_services.maximum_quantity */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "available_services.", "maximum_quantity", "integer"],
          true
        ),
        desc: generateDescription([
          `The maximum quantity of this service that can be booked with an order`
        ]),
        examples: generateExamples(["Example : ", "1"])
      },
      /* available_services.metadata */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "available_services.", "metadata", "object"],
          true
        ),
        desc: generateDescription([
          `The metadata varies by the type of service. It includes further data about the service. For example, for baggages, it may have data about size and weight restrictions.`
        ]),
        sub: [
          /* Service Metadata for a Baggage */
          {
            titles: generateTitles([
              "Service Metadata for a Baggage",
              "object"
            ]),
            desc: generateDescription([
              `An object containing metadata about the service, like the maximum weight and dimensions of the baggage.`
            ]),
            sub: [
              /* available_services.maximum_weight_kg */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "available_services.",
                    "maximum_weight_kg",
                    "number",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  `The maximum weight that the baggage can have in kilograms`
                ]),
                examples: generateExamples(["Example : ", "23"])
              },
              /* available_services.maximum_height_cm */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "available_services.",
                    "maximum_height_cm",
                    "number",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  `The maximum height that the baggage can have in centimetres`
                ]),
                examples: generateExamples(["Example : ", "90"])
              },
              /* available_services.maximum_length_cm */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "available_services.",
                    "maximum_length_cm",
                    "number",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  `The maximum length that the baggage can have in centimetres`
                ]),
                examples: generateExamples(["Example : ", "90"])
              },
              /* available_services.maximum_depth_cm */
              {
                bottomDash: true,
                titles: generateTitles(
                  [
                    subOf + "available_services.",
                    "maximum_depth_cm",
                    "number",
                    "nullable"
                  ],
                  true
                ),
                desc: generateDescription([
                  `The maximum depth that the baggage can have in centimetres`
                ]),
                examples: generateExamples(["Example : ", "75"])
              },
              /* available_services.type */
              {
                titles: generateTitles(
                  [subOf + "available_services.", "type", "enum"],
                  true
                ),
                desc: generateDescription([
                  `The maximum depth that the baggage can have in centimetres`
                ]),
                examples: generateExamples([
                  "Possible values : ",
                  "checked",
                  " or ",
                  "carry_on"
                ])
              }
            ]
          }
        ]
      },
      /* available_services.passenger_ids */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "available_services.", "passenger_ids", "string[]"],
          true
        ),
        desc: generateDescription([
          `The list of passenger ids the service applies to. If you add this service to an order it will apply to all the passengers in this list. For services where the type is baggage, this list will include only a single passenger.`
        ]),
        examples: generateExamples(["Example : ", '["PAX_0"]'])
      },
      /* available_services.segment_ids */
      {
        bottomDash: true,
        titles: generateTitles(
          [subOf + "available_services.", "segment_ids", "string[]"],
          true
        ),
        desc: generateDescription([
          `The list of segment ids the service applies to. If you add this service to an order it will apply to all the segments in this list. For services where the type is baggage, depending on the airline, this list includes all the segments of all slices or all the segments of a single slice.`
        ]),
        examples: generateExamples([
          "Example : ",
          '["seg_00009hj8USM7Ncg31cB456"]'
        ])
      },
      /* available_services.total_amount */
      TOTAL_AMOUNT(
        subOf + "available_services.",
        true,
        false,
        false,
        null,
        `The total price of the service for all passengers and segments it applies to, including taxes`,
        "15.00"
      ),
      /* available_services.total_currency */
      TOTAL_CURRENCY(subOf + "available_services."),
      /* available_services.type */
      {
        titles: generateTitles(
          [subOf + "available_services.", "type", "enum"],
          true
        ),
        desc: generateDescription([
          `The type of the service. For now we only return services of type baggage but we will return other types in the future. We won't consider adding new service types a breaking change.`
        ]),
        examples: generateExamples(["Possible values : ", "baggage"])
      }
    ]
  };
};

export const AMENITIES_BODY_PARAMS = () => {
  return [
    CABIN_CLASS(),
    {
      bottomDash: true,
      titles: generateTitles(["departure", "string"]),
      desc: generateDescription([
        `The 3-letter IATA code for the city or airport where this flight starts`
      ]),
      examples: generateExamples(["Example : ", "DFW"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["arrival", "string"]),
      desc: generateDescription([
        "The 3-letter IATA code for the city or airport where this flight end"
      ]),
      examples: generateExamples(["Example : ", "ORD"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["departure_date", "date"]),
      desc: generateDescription([
        "The ISO 8601 date on which the passengers want to depart"
      ]),
      examples: generateExamples(["Example : ", "2021-04-25"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["flight_number", "string"]),
      desc: generateDescription([
        "The flight number which passenger want to travel"
      ]),
      examples: generateExamples(["Example : ", "2881"])
    },
    {
      titles: generateTitles(["carrier", "string"]),
      desc: generateDescription(["2-letter IATA airline designator."]),
      examples: generateExamples(["Example : ", "AA"])
    }
  ];
};

export const AMENITIES_SCHEMA = () => {
  return [
    {
      bottomDash: true,
      titles: generateTitles(["cabin_class", "string"]),
      desc: generateDescription([
        "The cabin that the passengers want to travel in"
      ]),
      examples: generateExamples(["Example : ", "economy"])
    },
    AIRPORTS_FLIGHT_SEARCH_SCHEMA(
      undefined,
      true,
      undefined,
      undefined,
      undefined,
      "The list of airports that are operating for this trip"
    ),
    AIRCRAFT_FLIGHT_SEARCH_SCHEMA(),
    {
      bottomDash: true,
      titles: generateTitles(["carriers", "list"]),
      desc: generateDescription(["The list of airlines in search result"]),
      sub: [
        {
          bottomDash: true,
          titles: generateTitles(["carriers.", "iata_code", "string"], true),
          desc: generateDescription(["The 2 letter IATA code of airline "]),
          examples: generateExamples(["Example : ", "AA"])
        },
        {
          bottomDash: true,
          titles: generateTitles(["carriers.", "name", "string"], true),
          desc: generateDescription(["The name of airline"]),
          examples: generateExamples(["Example : ", "American Airlines"])
        },
        {
          titles: generateTitles(
            ["carriers.", "fare_attributes", "object"],
            true
          ),
          desc: generateDescription(["Describe Fare attributes"]),
          sub: [
            {
              bottomDash: true,
              titles: generateTitles(
                [
                  "carriers.fare_attributes.",
                  "baggage_rules",
                  "string",
                  "nullable"
                ],
                true
              ),
              desc: generateDescription(["Baggage rules"])
            },
            {
              bottomDash: true,
              titles: generateTitles(
                [
                  "carriers.fare_attributes.",
                  "cancellation_change_fees",
                  "string",
                  "nullable"
                ],
                true
              ),
              desc: generateDescription(["Change & cancellation fees"])
              // examples: generateExamples(["Example : ", "TRUE"])
            },
            {
              bottomDash: true,
              titles: generateTitles(
                [
                  "carriers.fare_attributes.",
                  "seat_selection",
                  "string",
                  "nullable"
                ],
                true
              ),
              desc: generateDescription(["Seat selection"])
              // examples: generateExamples(["Example : ", "TRUE"])
            },
            {
              bottomDash: true,
              titles: generateTitles(
                [
                  "carriers.fare_attributes.",
                  "boarding_zone",
                  "string",
                  "nullable"
                ],
                true
              ),
              desc: generateDescription(["Boarding Zone"])
              // examples: generateExamples(["Example : ", "TRUE"])
            },
            {
              titles: generateTitles(
                [
                  "carriers.fare_attributes.",
                  "points_mileage",
                  "string",
                  "nullable"
                ],
                true
              ),
              desc: generateDescription(["Available points & milage"])
              // examples: generateExamples(["Example : ", "TRUE"])
            }
          ]
        }
      ]
    },
    {
      bottomDash: true,
      titles: generateTitles(["trip_attributes", "list", "required"]),
      desc: generateDescription([""]),
      sub: [
        {
          bottomDash: true,
          titles: generateTitles(
            ["trip_attributes.", "carrier", "string"],
            true
          ),
          desc: generateDescription(["The 2 letter IATA code of airline"])
          // examples: generateExamples(['Example : ', '319']),
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["trip_attributes.", "aircraft", "string"],
            true
          ),
          desc: generateDescription([
            "The three-character IATA code for the aircraft"
          ]),
          examples: generateExamples(["Example : ", "737"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["trip_attributes.", "origin", "string"],
            true
          ),
          desc: generateDescription([
            "The 3-letter IATA code for airport at which the segment is leaving"
          ]),
          examples: generateExamples(["Example : ", "DFW"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["trip_attributes.", "destination", "string"],
            true
          ),
          desc: generateDescription([
            "The 3-letter IATA code for airport at which the segment is arriving"
          ]),
          examples: generateExamples(["Example : ", "LAX"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["trip_attributes.", "flight_no", "string"],
            true
          ),
          desc: generateDescription(["The flight number"]),
          examples: generateExamples(["Example : ", "971"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["trip_attributes.", "cabin_attributes", "object"],
            true
          ),
          desc: generateDescription([""]),
          sub: [
            {
              bottomDash: true,
              titles: generateTitles(
                [
                  "trip_attributes.cabin_attributes.",
                  "aircraft_interior_images",
                  "list"
                ],
                true
              ),
              desc: generateDescription([
                "The list of aircraft interior images."
              ])
            },
            {
              bottomDash: true,
              titles: generateTitles(
                [
                  "trip_attributes.cabin_attributes.",
                  "seat_attribute",
                  "object"
                ],
                true
              ),
              desc: generateDescription([""]),
              sub: [
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_attributes.seat_attribute.",
                      "display_text",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "The description of seat attribute"
                  ]),
                  examples: generateExamples(["Example : ", '34" seat pitch'])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_attributes.seat_attribute.",
                      "pitch",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["Seat Pitich"]),
                  examples: generateExamples(["Example : ", '34" seat pitch'])
                },
                {
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_attributes.seat_attribute.",
                      "width",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["The category of seat width"]),
                  examples: generateExamples([
                    "Possible values : ",
                    "standard",
                    " , ",
                    "wider",
                    " , ",
                    "n/a"
                  ])
                }
              ]
            },
            {
              titles: generateTitles(
                ["trip_attributes.cabin_attributes.", "seat_layout", "object"],
                true
              ),
              desc: generateDescription(["Seat Layout"]),
              sub: [
                {
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_attributes.seat_layout.",
                      "display_text",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["The description of seat layout"]),
                  examples: generateExamples(["Example : ", "3-3 seat layout"])
                }
              ]
            }
          ]
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["trip_attributes.", "cabin_amenities", "object"],
            true
          ),
          desc: generateDescription(["Cabin Amenities"]),
          sub: [
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.cabin_amenities.", "food", "object"],
                true
              ),
              desc: generateDescription(["Food"]),
              sub: [
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.food.",
                      "display_text",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["The description of food"]),
                  examples: generateExamples(["Example : ", "Snacks provided"])
                },
                {
                  titles: generateTitles(
                    ["trip_attributes.cabin_amenities.food.", "cost", "string"],
                    true
                  ),
                  desc: generateDescription(["The cateogry of food cost"]),
                  examples: generateExamples([
                    "Possible values : ",
                    "free",
                    " , ",
                    "paid",
                    " , ",
                    "n/a"
                  ])
                }
              ]
            },
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.cabin_amenities.", "beverage", "object"],
                true
              ),
              desc: generateDescription(["Beverage"]),
              sub: [
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.beverage.",
                      "display_text",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["The description of beverage"]),
                  examples: generateExamples([
                    "Example : ",
                    "Nonalcoholic beverages provided"
                  ])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.beverage.",
                      "type",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["Tells beverage type"]),
                  examples: generateExamples(["Example : ", "nonalcoholic"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.beverage.",
                      "alcoholic_cost",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["The category of alcoholic cost"]),
                  examples: generateExamples([
                    "Possible values : ",
                    "free",
                    " , ",
                    "paid",
                    " , ",
                    "n/a"
                  ])
                },
                {
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.beverage.",
                      "nonalcoholic_cost",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "The category of nonalcoholic cost"
                  ]),
                  examples: generateExamples([
                    "Possible values : ",
                    "free",
                    " , ",
                    "paid",
                    " , ",
                    "n/a"
                  ])
                }
              ]
            },
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.cabin_amenities.", "entertainment", "object"],
                true
              ),
              desc: generateDescription(["Entertainment"]),
              sub: [
                {
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.entertainment.",
                      "display_text",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "The description of entertainment"
                  ]),
                  examples: generateExamples([
                    "Example : ",
                    "Seatback on-demand video"
                  ])
                }
              ]
            },
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.cabin_amenities.", "wifi", "object"],
                true
              ),
              desc: generateDescription(["wifi facility"]),
              sub: [
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.wifi.",
                      "display_text",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "The description of wifi facility"
                  ]),
                  examples: generateExamples([
                    "Example : ",
                    "Netflix streaming capable (fee)"
                  ])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.wifi.",
                      "quality",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["The cateogry of wifi quality"]),
                  examples: generateExamples([
                    "Possible values : ",
                    "standard",
                    " , ",
                    "better",
                    " , ",
                    "n/a"
                  ])
                },
                {
                  titles: generateTitles(
                    ["trip_attributes.cabin_amenities.wifi.", "cost", "string"],
                    true
                  ),
                  desc: generateDescription(["The category of wifi cost"]),
                  examples: generateExamples([
                    "Possible values : ",
                    "free",
                    " , ",
                    "paid",
                    " , ",
                    "n/a"
                  ])
                }
              ]
            },
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.cabin_amenities.", "power", "object"],
                true
              ),
              desc: generateDescription(["Power"]),
              sub: [
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.power.",
                      "display_text",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["The description of power"]),
                  examples: generateExamples([
                    "Example : ",
                    "Power & USB outlets"
                  ])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.power.",
                      "multiple_at_seat",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Indicate whether there are multiple outlets in the seat"
                  ]),
                  examples: generateExamples(["Example : ", "no"])
                },
                {
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.power.",
                      "usb_port",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Indicate whether there is usb port in the seat"
                  ]),
                  examples: generateExamples(["Example : ", "yes"])
                },
                {
                  titles: generateTitles(
                    [
                      "trip_attributes.cabin_amenities.power.",
                      "power_outlet",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Indicate wheter there is power outlet in the seat"
                  ]),
                  examples: generateExamples(["Example : ", "yes"])
                }
              ]
            }
          ]
        },
        {
          titles: generateTitles(
            ["trip_attributes.", "baggages", "list"],
            true
          ),
          desc: generateDescription(["List of baggage details"]),
          sub: [
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.baggages.", "type", "string"],
                true
              ),
              desc: generateDescription(["Specify the baggage type"]),
              examples: generateExamples([
                "Possible values : ",
                "carry_on",
                " , ",
                "checked",
                " , ",
                "excess",
                " , ",
                "overweight",
                " , ",
                "oversize",
                " , ",
                "sports"
              ])
            },
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.baggages.", "description", "string"],
                true
              ),
              desc: generateDescription(["Baggage Type Description"])
            },
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.baggages.", "notes", "string"],
                true
              ),
              desc: generateDescription(["Baggage Type Notes"])
            },
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.baggages.", "dimension_allowance", "list"],
                true
              ),
              desc: generateDescription([
                "Baggage dimension allowance per baggage piece"
              ]),
              sub: [
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.dimension_allowance.",
                      "ref",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "The reference string of baggage dimension"
                  ])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.dimension_allowance.",
                      "max_linear_in_inch",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Maximum linear dimensions value represented in inch. Linear measurement"
                  ])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.dimension_allowance.",
                      "min_linear_in_inch",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Minimum linear dimensions value represented in inch. Linear measurement = length + width + height"
                  ]),
                  examples: generateExamples(["Example : ", "62"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.dimension_allowance.",
                      "max_linear_in_cm",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Maximum linear dimensions value represented in centimeters. Linear measurement = length + width + height"
                  ]),
                  examples: generateExamples(["Example : ", "62"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.dimension_allowance.",
                      "min_linear_in_cm",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Minimum linear dimensions value represented in centimeters. Linear measurement = length + width + height"
                  ]),
                  examples: generateExamples(["Example : ", "62"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.dimension_allowance.",
                      "max_dimension_in_inch",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Maximum dimensions value represented in inches. Dimension is represented like this. length (in)  x width (in) x height (in)"
                  ]),
                  examples: generateExamples([
                    "Example : ",
                    "21.6 x 9.8 x 13.7 in"
                  ])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.dimension_allowance.",
                      "max_dimension_in_cm",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Maximum dimensions value represented in centimeters. Dimension is represented like this. length (cm)  x width (cm) x height (cm)"
                  ]),
                  examples: generateExamples(["Example : ", "55 x 25 x 35 cm"])
                }
              ]
            },
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.baggages.", "weight_allowance", "list"],
                true
              ),
              desc: generateDescription([
                "Baggage weight allowance per baggage piece"
              ]),
              sub: [
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.weight_allowance.",
                      "ref",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "The reference string of weight allowances"
                  ])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.weight_allowance.",
                      "max_weight_in_lb",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Maximum baggage weight represented in pounds"
                  ]),
                  examples: generateExamples(["Example : ", "50"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.weight_allowance.",
                      "min_weight_in_lb",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Minimum baggage weight represented in pounds"
                  ]),
                  examples: generateExamples(["Example : ", "50"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.weight_allowance.",
                      "max_weight_in_kg",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Maximum baggage weight represented in kilograms"
                  ]),
                  examples: generateExamples(["Example : ", "50"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.weight_allowance.",
                      "min_weight_in_kg",
                      "float"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "Minimum baggage weight represented in kilograms"
                  ]),
                  examples: generateExamples(["Example : ", "50"])
                }
              ]
            },
            {
              bottomDash: true,
              titles: generateTitles(
                ["trip_attributes.baggages.", "prices", "list"],
                true
              ),
              desc: generateDescription(["Baggage price per baggage piece"]),
              sub: [
                {
                  bottomDash: true,
                  titles: generateTitles(
                    ["trip_attributes.baggages.prices.", "ref", "string"],
                    true
                  ),
                  desc: generateDescription([
                    "The reference string of baggage price"
                  ]),
                  examples: generateExamples(["Example : ", "34"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    ["trip_attributes.baggages.prices.", "currency", "string"],
                    true
                  ),
                  desc: generateDescription(["The currency of baggage price"]),
                  examples: generateExamples(["Example : ", "USD"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    ["trip_attributes.baggages.prices.", "amount", "float"],
                    true
                  ),
                  desc: generateDescription(["The price of baggage price"]),
                  examples: generateExamples(["Example : ", "34"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    ["trip_attributes.baggages.prices.", "min_amount", "float"],
                    true
                  ),
                  desc: generateDescription(["The min price of baggage price"]),
                  examples: generateExamples(["Example : ", "34"])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    ["trip_attributes.baggages.prices.", "max_amount", "float"],
                    true
                  ),
                  desc: generateDescription(["The max price of baggage price"]),
                  examples: generateExamples(["Example : ", "34"])
                }
              ]
            },
            {
              titles: generateTitles(
                ["trip_attributes.baggages.", "rules", "list"],
                true
              ),
              desc: generateDescription([
                "The list of baggage policies. Some airlines have complicated baggage policies. Their rules might depend on route, cabin class or even on booking date."
              ]),
              sub: [
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.rules.",
                      "total_quantity",
                      "int"
                    ],
                    true
                  ),
                  desc: generateDescription([
                    "The total number of pieces in this rule. This number might be 0 or empty."
                  ])
                },
                {
                  bottomDash: true,
                  titles: generateTitles(
                    [
                      "trip_attributes.baggages.rules.",
                      "description",
                      "string"
                    ],
                    true
                  ),
                  desc: generateDescription(["The description of rule"]),
                  examples: generateExamples([
                    "Example : ",
                    "1 Carry-on Item",
                    "&",
                    "1 Personal Item"
                  ])
                },
                {
                  titles: generateTitles(
                    ["trip_attributes.baggages.rules.", "pieces", "list"],
                    true
                  ),
                  desc: generateDescription([
                    "The list of pieces that this baggage rule contains"
                  ]),
                  sub: [
                    {
                      bottomDash: true,
                      titles: generateTitles(
                        [
                          "trip_attributes.baggages.rules.pieces.",
                          "quantity",
                          "int"
                        ],
                        true
                      ),
                      desc: generateDescription([
                        "The number of pieces. So if this value is 2, the passengers are allowed to carry 2 pieces and the dimension of your allowed pieces are specified in piece_allowance."
                      ]),
                      examples: generateExamples(["Example : ", "1"])
                    },
                    {
                      bottomDash: true,
                      titles: generateTitles(
                        [
                          "trip_attributes.baggages.rules.pieces.",
                          "description",
                          "string"
                        ],
                        true
                      ),
                      desc: generateDescription([
                        "The description of each piece"
                      ])
                    },
                    {
                      titles: generateTitles(
                        [
                          "trip_attributes.baggages.rules.pieces.",
                          "piece_allowance",
                          "list"
                        ],
                        true
                      ),
                      desc: generateDescription([
                        "More detail of piece. That specify the dimension and weight of the piece"
                      ]),
                      sub: [
                        {
                          bottomDash: true,
                          titles: generateTitles(
                            [
                              "trip_attributes.baggages.rules.pieces.piece_allowance",
                              "dimension_allowance_ref",
                              "string"
                            ],
                            true
                          ),
                          desc: generateDescription([
                            "Specify the dimension of the piece. This value is the reference string of baggage dimension. You can find this value in the dimension_allowance list."
                          ]),
                          examples: generateExamples([
                            "Example : ",
                            "checked_d1"
                          ])
                        },
                        {
                          bottomDash: true,
                          titles: generateTitles(
                            [
                              "trip_attributes.baggages.rules.pieces.piece_allowance",
                              "weight_allowance_ref",
                              "string"
                            ],
                            true
                          ),
                          desc: generateDescription([
                            "Specify the weight of the piece. This value is the reference string of baggage weight. You can find this value in the weight_allowance list."
                          ]),
                          examples: generateExamples([
                            "Example : ",
                            "checked_w1"
                          ])
                        },
                        {
                          titles: generateTitles(
                            [
                              "trip_attributes.baggages.rules.pieces.piece_allowance",
                              "weight_allowance_ref",
                              "string"
                            ],
                            true
                          ),
                          desc: generateDescription([
                            "Specify the weight of the piece. This value is the reference string of baggage price. You can find this value in the prices list."
                          ]),
                          examples: generateExamples([
                            "Example : ",
                            "checked_p1"
                          ])
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
        // {
        //   bottomDash: true,
        //   titles: generateTitles(["trip_attributes.", "slices", "list"], true),
        //   desc: generateDescription([""]),
        //   sub: [
        //     {
        //       bottomDash: true,
        //       titles: generateTitles(
        //         ["trip_attributes.slices.", "origin", "string"],
        //         true
        //       ),
        //       desc: generateDescription([
        //         "The 3-letter IATA code of departure airport"
        //       ]),
        //       examples: generateExamples(["Example : ", "DFW"])
        //     },
        //     {
        //       bottomDash: true,
        //       titles: generateTitles(
        //         ["trip_attributes.slices.", "destination", "string"],
        //         true
        //       ),
        //       desc: generateDescription([
        //         "The 3-letter IATA code of arrival airport"
        //       ]),
        //       examples: generateExamples(["Example : ", "LAX"])
        //     },
        //     {
        //       titles: generateTitles(
        //         ["trip_attributes.slices.", "segments", "list"],
        //         true
        //       ),
        //       desc: generateDescription([
        //         "The list of specific flights - that the airline is offering to get the passengers from the origin to the destination"
        //       ]),
        //       sub: [
        //         {
        //           bottomDash: true,
        //           titles: generateTitles(
        //             ["trip_attributes.slices.segments.", "origin", "string"],
        //             true
        //           ),
        //           desc: generateDescription([
        //             "The 3-letter IATA code for airport at which the segment is leaving"
        //           ]),
        //           examples: generateExamples(["Example : ", "DFW"])
        //         },
        //         {
        //           bottomDash: true,
        //           titles: generateTitles(
        //             [
        //               "trip_attributes.slices.segments.",
        //               "destination",
        //               "string"
        //             ],
        //             true
        //           ),
        //           desc: generateDescription([
        //             "The 3-letter IATA code for airport at which the segment is arriving"
        //           ]),
        //           examples: generateExamples(["Example : ", "LAX"])
        //         },
        //         {
        //           bottomDash: true,
        //           titles: generateTitles(
        //             ["trip_attributes.slices.segments.", "aircraft", "string"],
        //             true
        //           ),
        //           desc: generateDescription([
        //             "The 3-letter IATA code for aircraft operated for this segment"
        //           ]),
        //           examples: generateExamples(["Example : ", "319"])
        //         },
        //         {
        //           bottomDash: true,
        //           titles: generateTitles(
        //             ["trip_attributes.slices.segments.", "flight_no", "string"],
        //             true
        //           ),
        //           desc: generateDescription(["The flight number"]),
        //           examples: generateExamples(["Example : ", "971"])
        //         },
        //         {
        //           bottomDash: true,
        //           titles: generateTitles(
        //             [
        //               "trip_attributes.slices.segments.",
        //               "cabin_attributes",
        //               "object"
        //             ],
        //             true
        //           ),
        //           desc: generateDescription([""]),
        //           sub: [
        //             {
        //               bottomDash: true,
        //               titles: generateTitles(
        //                 [
        //                   "trip_attributes.slices.segments.cabin_attributes.",
        //                   "seat_attribute",
        //                   "object"
        //                 ],
        //                 true
        //               ),
        //               desc: generateDescription([""]),
        //               sub: [
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_attributes.seat_attribute.",
        //                       "display_text",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The description of seat attribute"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Example : ",
        //                     '34" seat pitch'
        //                   ])
        //                 },
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_attributes.seat_attribute.",
        //                       "pitch",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription(["Seat Pitich"]),
        //                   examples: generateExamples([
        //                     "Example : ",
        //                     '34" seat pitch'
        //                   ])
        //                 },
        //                 {
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_attributes.seat_attribute.",
        //                       "width",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The category of seat width"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Possible values : ",
        //                     "standard",
        //                     " , ",
        //                     "wider",
        //                     " , ",
        //                     "n/a"
        //                   ])
        //                 }
        //               ]
        //             },
        //             {
        //               titles: generateTitles(
        //                 [
        //                   "trip_attributes.slices.segments.cabin_attributes.",
        //                   "seat_layout",
        //                   "object"
        //                 ],
        //                 true
        //               ),
        //               desc: generateDescription(["Seat Layout"]),
        //               sub: [
        //                 {
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_attributes.seat_layout.",
        //                       "display_text",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The description of seat layout"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Example : ",
        //                     "3-3 seat layout"
        //                   ])
        //                 }
        //               ]
        //             }
        //           ]
        //         },
        //         {
        //           titles: generateTitles(
        //             [
        //               "trip_attributes.slices.segments.",
        //               "cabin_amenities",
        //               "object"
        //             ],
        //             true
        //           ),
        //           desc: generateDescription(["Cabin Amenities"]),
        //           sub: [
        //             {
        //               bottomDash: true,
        //               titles: generateTitles(
        //                 [
        //                   "trip_attributes.slices.segments.cabin_amenities.",
        //                   "food",
        //                   "object"
        //                 ],
        //                 true
        //               ),
        //               desc: generateDescription(["Food"]),
        //               sub: [
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.food.",
        //                       "display_text",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The description of food"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Example : ",
        //                     "Snacks provided"
        //                   ])
        //                 },
        //                 {
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.food.",
        //                       "cost",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The cateogry of food cost"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Possible values : ",
        //                     "free",
        //                     " , ",
        //                     "paid",
        //                     " , ",
        //                     "n/a"
        //                   ])
        //                 }
        //               ]
        //             },
        //             {
        //               bottomDash: true,
        //               titles: generateTitles(
        //                 [
        //                   "trip_attributes.slices.segments.cabin_amenities.",
        //                   "beverage",
        //                   "object"
        //                 ],
        //                 true
        //               ),
        //               desc: generateDescription(["Beverage"]),
        //               sub: [
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.beverage.",
        //                       "display_text",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The description of beverage"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Example : ",
        //                     "Nonalcoholic beverages provided"
        //                   ])
        //                 },
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.beverage.",
        //                       "type",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription(["Tells beverage type"]),
        //                   examples: generateExamples([
        //                     "Example : ",
        //                     "nonalcoholic"
        //                   ])
        //                 },
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.beverage.",
        //                       "alcoholic_cost",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The category of alcoholic cost"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Possible values : ",
        //                     "free",
        //                     " , ",
        //                     "paid",
        //                     " , ",
        //                     "n/a"
        //                   ])
        //                 },
        //                 {
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.beverage.",
        //                       "nonalcoholic_cost",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The category of nonalcoholic cost"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Possible values : ",
        //                     "free",
        //                     " , ",
        //                     "paid",
        //                     " , ",
        //                     "n/a"
        //                   ])
        //                 }
        //               ]
        //             },
        //             {
        //               bottomDash: true,
        //               titles: generateTitles(
        //                 [
        //                   "trip_attributes.slices.segments.cabin_amenities.",
        //                   "entertainment",
        //                   "object"
        //                 ],
        //                 true
        //               ),
        //               desc: generateDescription(["Entertainment"]),
        //               sub: [
        //                 {
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.entertainment.",
        //                       "display_text",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The description of entertainment"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Example : ",
        //                     "Seatback on-demand video"
        //                   ])
        //                 }
        //               ]
        //             },
        //             {
        //               bottomDash: true,
        //               titles: generateTitles(
        //                 [
        //                   "trip_attributes.slices.segments.cabin_amenities.",
        //                   "wifi",
        //                   "object"
        //                 ],
        //                 true
        //               ),
        //               desc: generateDescription(["wifi facility"]),
        //               sub: [
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.wifi.",
        //                       "display_text",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The description of wifi facility"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Example : ",
        //                     "Netflix streaming capable (fee)"
        //                   ])
        //                 },
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.wifi.",
        //                       "quality",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The cateogry of wifi quality"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Possible values : ",
        //                     "standard",
        //                     " , ",
        //                     "better",
        //                     " , ",
        //                     "n/a"
        //                   ])
        //                 },
        //                 {
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.wifi.",
        //                       "cost",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The category of wifi cost"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Possible values : ",
        //                     "free",
        //                     " , ",
        //                     "paid",
        //                     " , ",
        //                     "n/a"
        //                   ])
        //                 }
        //               ]
        //             },
        //             {
        //               bottomDash: true,
        //               titles: generateTitles(
        //                 [
        //                   "trip_attributes.slices.segments.cabin_amenities.",
        //                   "power",
        //                   "object"
        //                 ],
        //                 true
        //               ),
        //               desc: generateDescription(["Power"]),
        //               sub: [
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.power.",
        //                       "display_text",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "The description of power"
        //                   ]),
        //                   examples: generateExamples([
        //                     "Example : ",
        //                     "Power & USB outlets"
        //                   ])
        //                 },
        //                 {
        //                   bottomDash: true,
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.power.",
        //                       "multiple_at_seat",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "Indicate whether there are multiple outlets in the seat"
        //                   ]),
        //                   examples: generateExamples(["Example : ", "no"])
        //                 },
        //                 {
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.power.",
        //                       "usb_port",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "Indicate whether there is usb port in the seat"
        //                   ]),
        //                   examples: generateExamples(["Example : ", "yes"])
        //                 },
        //                 {
        //                   titles: generateTitles(
        //                     [
        //                       "trip_attributes.slices.segments.cabin_amenities.power.",
        //                       "power_outlet",
        //                       "string"
        //                     ],
        //                     true
        //                   ),
        //                   desc: generateDescription([
        //                     "Indicate wheter there is power outlet in the seat"
        //                   ]),
        //                   examples: generateExamples(["Example : ", "yes"])
        //                 }
        //               ]
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //   titles: generateTitles(
        //     ["trip_attributes.", "fare_attributes", "object"],
        //     true
        //   ),
        //   desc: generateDescription(["Describe Fare attributes"]),
        //   sub: [
        //     {
        //       bottomDash: true,
        //       titles: generateTitles(
        //         [
        //           "trip_attributes.fare_attributes.",
        //           "baggage_rules",
        //           "string",
        //           "nullable"
        //         ],
        //         true
        //       ),
        //       desc: generateDescription(["Baggage rules"])
        //     },
        //     {
        //       bottomDash: true,
        //       titles: generateTitles(
        //         [
        //           "trip_attributes.fare_attributes.",
        //           "cancellation_change_fees",
        //           "string",
        //           "nullable"
        //         ],
        //         true
        //       ),
        //       desc: generateDescription(["Change & cancellation fees"])
        //       // examples: generateExamples(["Example : ", "TRUE"])
        //     },
        //     {
        //       bottomDash: true,
        //       titles: generateTitles(
        //         [
        //           "trip_attributes.fare_attributes.",
        //           "seat_selection",
        //           "string",
        //           "nullable"
        //         ],
        //         true
        //       ),
        //       desc: generateDescription(["Seat selection"])
        //       // examples: generateExamples(["Example : ", "TRUE"])
        //     },
        //     {
        //       bottomDash: true,
        //       titles: generateTitles(
        //         [
        //           "trip_attributes.fare_attributes.",
        //           "boarding_zone",
        //           "string",
        //           "nullable"
        //         ],
        //         true
        //       ),
        //       desc: generateDescription(["Boarding Zone"])
        //       // examples: generateExamples(["Example : ", "TRUE"])
        //     },
        //     {
        //       titles: generateTitles(
        //         [
        //           "trip_attributes.fare_attributes.",
        //           "points_mileage",
        //           "string",
        //           "nullable"
        //         ],
        //         true
        //       ),
        //       desc: generateDescription(["Available points & milage"])
        //       // examples: generateExamples(["Example : ", "TRUE"])
        //     }
        //   ]
        // }
      ]
    }
  ];
};
export const AIR_SCHEDULES_SCHEMA = () => {
  return [
    {
      bottomDash: true,
      titles: generateTitles(["flight_status", "string", "required"]),
      desc: generateDescription(["The status of the flight"]),
      examples: generateExamples(["Example : ", "Scheduled"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["flight_no", "int", "required"]),
      desc: generateDescription(["The flight number"]),
      examples: generateExamples(["Example : ", "1100"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["aircraft", "string", "optional"]),
      desc: generateDescription([
        "The three-character IATA code for the aircraft"
      ]),
      examples: generateExamples(["Example : ", "73H"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["distance", "int", "optional"]),
      desc: generateDescription([
        "The distance between two airports in mileage. "
      ]),
      examples: generateExamples(["Example : ", "1274"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["departure", "object", "required"]),
      desc: generateDescription(["More detail information about departure"]),
      sub: [
        {
          bottomDash: true,
          titles: generateTitles(
            ["departure.", "airport_code", "string", "required"],
            true
          ),
          desc: generateDescription([
            "The 3-letter IATA code for airport at which the flight is scheduled to depart"
          ]),
          examples: generateExamples(["Example : ", "BNA"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["departure.", "city", "string", "optional"],
            true
          ),
          desc: generateDescription([
            "The name of city where the flight is scheduled to depart"
          ]),
          examples: generateExamples(["Example : ", "Nashville"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["departure.", "country_code", "string", "optional"],
            true
          ),
          desc: generateDescription([
            "The ISO 3166-1 alpha-2 code for the country where the departure airport is located"
          ]),
          examples: generateExamples(["Example : ", "US"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["departure.", "time_scheduled", "datetime", "required"],
            true
          ),
          desc: generateDescription([
            "The ISO 8601 format planned time for the aircraft to depart"
          ]),
          examples: generateExamples(["Example : ", "2021-06-01T15:42:00"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["departure.", "time_expected", "datetime", "optional"],
            true
          ),
          desc: generateDescription([
            "Sometime there might be unforeseen delays like long take-off queues, de-icing, long taxiway etc. Under such situations, the departure time might either increase or decrease (depends) and will be different from the time_scheduled. This tells us when the flight might depart based on the current airport scenario."
          ]),
          examples: generateExamples(["Example : ", "2021-06-01T15:42:00"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["departure.", "time_actual", "datetime", "optional"],
            true
          ),
          desc: generateDescription([
            "The ISO 8601 format time when an aircraft took-off"
          ]),
          examples: generateExamples(["Example : ", "2021-06-01T15:40:00"])
        },
        {
          titles: generateTitles(
            ["departure.", "terminal", "string", "optional"],
            true
          ),
          desc: generateDescription(["The terminal at the departure airport"]),
          examples: generateExamples(["Example : ", "C"])
        }
      ]
    },
    {
      titles: generateTitles(["arrival", "object", "required"]),
      desc: generateDescription(["More detail information about arrival"]),
      sub: [
        {
          bottomDash: true,
          titles: generateTitles(
            ["arrival.", "airport_code", "string", "required"],
            true
          ),
          desc: generateDescription([
            "The 3-letter IATA code for airport at which the flight is scheduled to arrive"
          ]),
          examples: generateExamples(["Example : ", "DFW"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["arrival.", "city", "string", "optional"],
            true
          ),
          desc: generateDescription([
            "The name of city where the flight is scheduled to arrive"
          ]),
          examples: generateExamples(["Example : ", "Dallas"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["arrival.", "country_code", "string", "optional"],
            true
          ),
          desc: generateDescription([
            "The ISO 3166-1 alpha-2 code for the country where arrival airport is located"
          ]),
          examples: generateExamples(["Example : ", "US"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["arrival.", "time_scheduled", "datetime", "required"],
            true
          ),
          desc: generateDescription([
            "The ISO 8601 format planned time for the aircraft to arrive"
          ]),
          examples: generateExamples(["Example : ", "2021-06-01T18:00:00"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["arrival.", "time_expected", "datetime", "optional"],
            true
          ),
          desc: generateDescription([
            "This tells us when the flight might arrive based on the current airport scenario."
          ]),
          examples: generateExamples(["Example : ", "2021-06-01T18:00:00"])
        },
        {
          bottomDash: true,
          titles: generateTitles(
            ["arrival.", "time_actual", "datetime", "optional"],
            true
          ),
          desc: generateDescription([
            "The ISO 8601 format time when an aircraft landed"
          ]),
          examples: generateExamples(["Example : ", "2021-06-01T15:40:00"])
        },
        {
          titles: generateTitles(
            ["arrival.", "terminal", "string", "optional"],
            true
          ),
          desc: generateDescription(["The terminal at the arrival airport"]),
          examples: generateExamples(["Example : ", "C"])
        }
      ]
    }
  ];
};

export const AIR_SCHEDULES_BY_ROUTE_BODY_PAMARS = () => {
  return [
    {
      bottomDash: true,
      titles: generateTitles(["origin", "string"]),
      desc: generateDescription(["IATA code of departure airport"]),
      examples: generateExamples(["Example : ", "JFK"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["destination", "string"]),
      desc: generateDescription(["IATA code of arrival airport"]),
      examples: generateExamples(["Example : ", "LAX"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["airline", "string"]),
      desc: generateDescription(["IATA code of airline"]),
      examples: generateExamples(["Example : ", "AA"])
    },
    {
      titles: generateTitles(["date", "string"]),
      desc: generateDescription(["Date in ISO format"]),
      examples: generateExamples(["Example : ", "2021-04-19"])
    }
  ];
};
export const AIR_SCHEDULES_BY_FLIGHT_BODY_PAMARS = () => {
  return [
    {
      bottomDash: true,
      titles: generateTitles(["airline", "string"]),
      desc: generateDescription(["IATA code of airline"]),
      examples: generateExamples(["Example : ", "AA"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["date", "string"]),
      desc: generateDescription(["Date in ISO format"]),
      examples: generateExamples(["Example : ", "2021-04-19"])
    },
    {
      titles: generateTitles(["flight_number", "string"]),
      desc: generateDescription(["Flight number"]),
      examples: generateExamples(["Example : ", "33"])
    }
  ];
};

export const CABIN_FARE_SCHEMA = () => {
  return [
    {
      bottomDash: true,
      titles: generateTitles(["carrier", "string"]),
      desc: generateDescription(["The 2 character IATA Code for the airline"]),
      examples: generateExamples(["Example : ", "AA"])
    },
    CABIN_CLASS(
      undefined,
      true,
      undefined,
      undefined,
      undefined,
      "The cabin class"
    ),
    {
      bottomDash: true,
      titles: generateTitles(["cabin_class_code", "string"]),
      desc: generateDescription([
        "This code specifies the cabin, Y for Economy Class, W for Premium Economy, C for Business Class, F for First Class"
      ]),
      examples: generateExamples(["Possible values : ", "Y"])
    },
    {
      titles: generateTitles(["fare_class_codes", "string"]),
      desc: generateDescription([
        "Reservation Booking Designators, A listing of RBDs associated with the cabin indicated"
      ]),
      examples: generateExamples([
        "Example : ",
        '["E", "G", "H", "K", "L", "M", "N", "O", "Q", "S", "T", "V", "Y"]'
      ])
    }
  ];
};

export const CABIN_FARE_GET_PARAMS = () => {
  return [
    {
      bottomDash: true,
      titles: generateTitles(["carrier", "string"]),
      desc: generateDescription(["The 2 character IATA Code for the airline"]),
      examples: generateExamples(["Example : ", "AA"])
    },
    CABIN_CLASS(
      undefined,
      false,
      undefined,
      undefined,
      undefined,
      "The cabin class"
    )
  ];
};

export const SEAT_MAP_SCHEMA = () => {
  return [
    {
      bottomDash: true,
      titles: generateTitles(["airline_code", "string"]),
      desc: generateDescription(["The 2-letter IATA airline designator"]),
      examples: generateExamples(["Example : ", "AA"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["airline_name", "string"]),
      desc: generateDescription(["The name of airline"]),
      examples: generateExamples(["Example : ", "American Airlines"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["aircraft_code", "string"]),
      desc: generateDescription(["The 3-letter IATA aircraft designator"]),
      examples: generateExamples(["Example : ", "332"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["display_text", "string"]),
      desc: generateDescription(["The display text of aircraft"]),
      examples: generateExamples(["Example : ", "Airbus A330-200 (332)"])
    },
    // {
    //   bottomDash: true,
    //   titles: generateTitles(
    //     ["seat_map", "string"],
    //   ),
    //   desc: generateDescription([
    //     "The link of the aircraft seatmap"
    //   ]),
    //   // examples: generateExamples(["Example : ", "Airbus A330-200 (332)"])
    // },
    // {
    //   bottomDash: true,
    //   titles: generateTitles(
    //     ["seat_map_key", "string"],
    //   ),
    //   desc: generateDescription([
    //     "The link of seat map key"
    //   ]),
    //   // examples: generateExamples(["Example : ", "Airbus A330-200 (332)"])
    // },
    {
      bottomDash: true,
      titles: generateTitles(["traveler_photos", "string"]),
      desc: generateDescription([
        "The list of links that travelers have taken on aircraft"
      ])
      // examples: generateExamples(["Example : ", "Airbus A330-200 (332)"])
    },
    {
      bottomDash: true,
      titles: generateTitles(["overview", "string"]),
      desc: generateDescription(["The description of aircraft"])
      // examples: generateExamples(["Example : ", "Airbus A330-200 (332)"])
    },
    {
      titles: generateTitles(["seats", "list"]),
      desc: generateDescription(["The list of cabin class seats"]),
      sub: [
        {
          bottomDash: true,
          titles: generateTitles(["cabin_class", "string"]),
          desc: generateDescription(["Specify the cabin class of seats"]),
          examples: generateExamples(["Example : ", "Economy"])
        },
        {
          bottomDash: true,
          titles: generateTitles(["seat_count", "int"]),
          desc: generateDescription([
            "The number of seats with specified cabin class"
          ]),
          examples: generateExamples(["Example : ", "40"])
        },
        {
          titles: generateTitles(["data", "list"]),
          desc: generateDescription([
            "The list of seats with specified cabin class"
          ]),
          sub: [
            {
              bottomDash: true,
              titles: generateTitles(["designator", "string"]),
              desc: generateDescription(["The seat number"]),
              examples: generateExamples(["Example : ", "1A"])
            },
            {
              bottomDash: true,
              titles: generateTitles(["description", "string"]),
              desc: generateDescription(["Details of the seat"])
              // examples: generateExamples(["Example : ", "1A"])
            },
            {
              titles: generateTitles(["position_type", "string"]),
              desc: generateDescription(["Seat position type"]),
              examples: generateExamples(["Example : ", "Normal"])
            }
          ]
        }
      ]
    }
  ];
};

export const SEAT_MAP_LIST_BODY = () => {
  return [
    {
      bottomDash: true,
      titles: generateTitles(["carrier", "string"]),
      desc: generateDescription(["The 2-letter IATA airline designator"]),
      examples: generateExamples(["Example : ", "AA"])
    },
    {
      titles: generateTitles(["aircraft", "string"]),
      desc: generateDescription(["The 3-letter IATA aircraft designator"]),
      examples: generateExamples(["Example : ", "332"])
    }
  ];
};
