const { checkForall, property, integer, bool } = require("jsverify")
const test = require("tape")
const { NOT, AND, NAND, OR, XOR } = require("./emulateLogicGates")

// test("NOT", t => {
//   t.plan(1)
//   t.equal(checkForall(bool, a => NOT(a) === !a), true)
// })

// test("AND", t => {
//   t.plan(1)
//   t.equal(checkForall(bool, bool, (a, b) => AND(a, b) === (a && b)), true)
// })

// test("NAND", t => {
//   t.plan(1)
//   t.equal(checkForall(bool, bool, (a, b) => NAND(a, b) === !(a && b)), true)
// })

// test("OR", t => {
//   t.plan(1)
//   t.equal(checkForall(bool, bool, (a, b) => OR(a, b) === (a || b)), true)
// })

// test("XOR", t => {
//   t.plan(1)
//   t.equal(checkForall(bool, bool, (a, b) => XOR(a, b) == (a ^ b)), true)
// })
