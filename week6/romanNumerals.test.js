const test = require("tape")
const romanNumeralize = require("./romanNumerals")

test("Roman numerals", t => {
  t.plan(1)
  t.equal(romanNumeralize(1973), "MCMLXXIII")
})
