const { checkForall, property, integer, bool } = require("jsverify")
const test = require("tape")
const { sumOfDigits: sumOfDigitsR } = require("./sumOfDigits.bs")
const sumOfDigits = require("./sumOfDigits")

test("JS and BS implementations are equivalent for 1234", t => {
  t.plan(1)
  t.equal(sumOfDigitsR(1234), sumOfDigits(1234))
})
