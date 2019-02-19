const divMod = ([x, y]) => [
  Math.floor(x / y),
  x - y * Math.floor(x / y)
  // x >= 0 ? (x % y) % y : y + ((x % y) % y)
]

const cases = [
  [[0, 1], [0, 0]],
  [[0, 2], [0, 0]],
  [[0, 2], [0, 0]],
  [[1, 2], [0, 1]],
  [[-2, 7], [-1, 5]],
  [[-3, 7], [-1, 4]],
  [[-29, 7], [-5, 6]],
  [[9, 2], [4, 1]]
]

const assert = require("assert")
const test = (fn, cases) => {
  cases.forEach(([input, expect]) => {
    console.log(`Testing ${fn.name}(${JSON.stringify(input)})`)
    assert(
      JSON.stringify(fn(input)) === JSON.stringify(expect),
      `\nFor input: ${JSON.stringify(
        input
      )}\nExpected: ${expect}\nReceived: ${fn(input)}`
    )
  })
  console.log("All tests passed!")
}

test(divMod, cases)
