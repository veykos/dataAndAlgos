import linearSearch from "./linearSearch";

const states = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  "North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming",
];
describe("Linear search function should", () => {

  test("Be a function", () => {
    expect(typeof linearSearch).toBe("function");
  });
  test('Returns -1 if element not found', () => {
    expect(linearSearch(states, 'Varna')).toBe(-1)
  })
  test('Returns index of 5 if element is found on index 5', () => {
    expect(linearSearch(states, 'California')).toBe(5)
  })
  test('Returns -1 even if partial match of string is found', () => {
    expect(linearSearch(states,'Caalifornia')).toBe(-1)
  })
  test('Returns index of 20 if element is found on position 20', () => {
    expect(linearSearch(states, 'Louisiana')).toBe(20)
  })
  test('Works with numbers too', ()=> {
    expect(linearSearch([1,2,3,4,5,6,7,8,9,10],10)).toBe(9)
  })
  test('Returns -1 if number is not in the array', () => {
    expect(linearSearch([1,2,3,4,5,6,7,8,9,10],11)).toBe(-1)
  })
});
