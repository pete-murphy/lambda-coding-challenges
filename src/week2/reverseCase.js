const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const isUpper = char => char.toUpperCase() === char
const toOppositeCase = char =>
  isUpper(char) ? char.toLowerCase() : char.toUpperCase()
const toString = chars => chars.join("")

const reverseCase = pipe()
// Array.from,
// chars => chars.map(toOppositeCase),
// toString

const string = "HELLO world!"
console.log(reverseCase(string))

// // Simple test:
// const assert = require("assert")
// const test = () => {
//   assert(reverseCase("hello WORLD!") === "HELLO world!")
//   console.log("Test passed")
// }
// test()
