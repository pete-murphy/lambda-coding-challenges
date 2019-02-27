// This works:
// const reverseNumber = num => +[...`${num}`].reduce((acc, x) => x + acc)

// const reverseNumber = num => {
//   let str = ""
//   for (const n of `${num}`) {
//     str = n + str
//   }
//   return Number(str)
// }

const reverse = xs => xs.reverse()
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const trace = msg => x => {
  console.log(msg, x)
  return x
}

const reverseNumber = pipe(
  String,
  Array.from,
  x => x.reverse(),
  x => x.join(""),
  Number
)

reverseNumber(445) //?
reverseNumber(12345) //?

const assert = require("assert")

const cases = [[12345, 54321], [1101, 1011], [555, 555]]

const runTests = f => cases => {
  cases.forEach(([a, b]) =>
    assert(f(a) === b, `Test failed 😕.\n\n\nExpected: ${b}, Received: ${f(a)}`)
  )
  console.log("All tests passed!")
}

runTests(reverseNumber)(cases)
