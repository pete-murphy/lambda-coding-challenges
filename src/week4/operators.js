const negCheck = (num1, num2) => [
  Math.sign(num1) === Math.sign(num2),
  Math.abs(num1),
  Math.abs(num2)
]

const multiply = (x, y) => {
  const arr = negCheck(x, y)
  const go = (n, a, b, acc = 0) =>
    a === 0 ? (n ? acc : -acc) : go(n, a - 1, b, acc + b)
  return go(...arr)
}

const divide = (x, y) => {
  const arr = negCheck(x, y)
  const go = (n, a, b, acc = 0) =>
    a < b ? (n ? acc : -acc) : go(n, a - b, b, acc + 1)
  return go(...arr)
}

const modulo = (x, y) => {
  const arr = negCheck(x, y)
  const go = (n, a, b, acc = 0) =>
    a < b ? (n ? a : -a) : go(n, a - b, b, acc + 1)
  return go(...arr)
}

const assert = require("assert")
const test = (fn, cases) => {
  cases.forEach(([input, expect]) => {
    console.log(`Testing ${fn.name}(${JSON.stringify(input)})`)
    assert(
      fn(input) === expect,
      `\nFor input: ${JSON.stringify(
        input
      )}\nExpected: ${expect}\nReceived: ${fn(input)}`
    )
  })
  console.log("All tests passed!")
}
