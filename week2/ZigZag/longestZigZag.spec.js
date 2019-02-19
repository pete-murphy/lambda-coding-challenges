import longestZigZag from "./longestZigZag"

const cases = [
  ["4 2 3 1 5 3", 6],
  ["1", 1],
  ["7 3", 2],
  ["1 3", 2],
  ["7 3 5 5 2", 3],
  ["3 8 6 4 5 2", 4],
  ["1 1 0 1 2 1 2 3", 4],
  ["1 1 0 1 2 1 2", 4]
]

const test = (fn, cases) => {
  cases.forEach(([input, expect]) =>
    assert(fn(input) === expect, `Expected: ${expect}\nReceived: ${fn(input)}`)
  )
  console.log("All tests passed!")
}

test(longestZigZag, cases)
