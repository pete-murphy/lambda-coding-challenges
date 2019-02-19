// Using assert for basic tests in Node
const assert = require("assert")

// Utility functions
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const map = fn => xs => xs.map(fn)
const filter = fn => xs => xs.filter(fn)
const words = str => str.split(" ")
const length = xs => xs.length
const maximum = xs => Math.max(...xs)

// Inclusive range function
const range = (a, b, acc = []) =>
  a === b ? [...acc, a] : range(a + 1, b, [...acc, a])

// There's probably a nicer way of doing this
const contiguousSubsequences = xs => {
  const l = xs.length
  return xs
    .map((_, i) => range(i + 1, l).map(j => xs.slice(i, j)))
    .reduce((acc, x) => [...acc, ...x], [])
}

// Need this instead of || because `0 || x` will return `x`
const or = (x, y) => (x === undefined ? y : x)

const isZigZag = nums =>
  nums.every(
    (num, i) =>
      num > Math.max(or(nums[i - 1], -Infinity), or(nums[i + 1], -Infinity)) ||
      num < Math.min(or(nums[i - 1], +Infinity), or(nums[i + 1], +Infinity))
  )

const longestZigZag = pipe(
  words,
  map(Number),
  contiguousSubsequences,
  filter(isZigZag),
  map(length),
  maximum
)

// A bunch of test cases, input paired with expected output
const cases = [
  ["4 2 3 1 5 3", 6],
  ["1", 1],
  ["7 3", 2],
  ["1 3", 2],
  ["7 3 5 5 2", 3],
  ["3 8 6 4 5 2", 4],
  ["1 1 0 1 2 1 2 3", 4],
  ["1 1 0 1 2 1 2", 4],
  ["-1 0 1 -2 0", 4]
]

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

test(longestZigZag, cases)
