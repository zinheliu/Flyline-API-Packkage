const apiTypes = [
  {
    text: 'Air Shoping API',
    value: 1
  },
  {
    text: 'Air Amenities API',
    value: 2
  },
  {
    text: 'Air Schedule API',
    value: 3
  },
  {
    text: 'Seat Map API',
    value: 4
  },
]

export const API_TYPES = apiTypes
export const API_TYPE = val => apiTypes.find(a => a.value == val)