const test = require("tape")
const deepEquals = require("./deepEquals")

const johnA = {
  name: "John",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
}

const johnB = {
  name: "John",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
}

const johnC = {
  name: "John Charles",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
}

test("Deep equals", t => {
  t.plan(2)
  t.equal(deepEquals(johnA, johnB), true)
  t.equal(deepEquals(johnA, johnC), false)
})
