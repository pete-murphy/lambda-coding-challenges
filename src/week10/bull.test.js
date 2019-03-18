const { checkForall, oneof, integer } = require("jsverify")
const test = require("tape")
const { encr, decr } = require("./bull")

const alphaNumCharCodes = oneof(
  integer(48, 57),
  integer(65, 90),
  integer(97, 122)
)

test("Isomorphism", t => {
  t.plan(1)
  t.equal(
    checkForall(
      alphaNumCharCodes,
      alphaNumCharCodes,
      alphaNumCharCodes,
      alphaNumCharCodes,
      (a, b, c, d) => {
        const str = [a, b, c, d].map(n => String.fromCharCode(n)).join("")
        return [...str].map(a => encr(decr(a))).join("") === str
      }
    ),
    true
  )
})
