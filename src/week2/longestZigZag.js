const assert = require("assert")

const tail = xs => xs.slice(1)
const zipWith = fn => xs => ys => xs.map((x, i) => fn(x, ys[i]))
const subtract = (x, y) => x - y
const eqNotZero = (x, y) => x !== y && y !== 0

// const longestZigZag = str => {
//   const nums = str.split(" ").map(Number)
//   nums
//   const signs = zipWith(subtract)(nums)(tail(nums)).map(Math.sign)
//   signs
//   tail(signs) //?
//   const go = ([x, ...xs], [y, ...ys], key = 0, acc = { 0: 1 }) =>
//     y === undefined
//       ? acc
//       : x !== y || y === 0
//         ? go(xs, ys, key, { ...acc, [key]: acc[key] + 1 })
//         : go(xs, ys, key + 1, { ...acc, [key + 1]: 2 })
//   return go(signs, tail(signs)) //?
//   // return Math.max(...Object.values(go(signs, tail(signs))))
// }

// longestZigZag("2 1 0 1 2 1 2 3") //?
// Object.values(longestZigZag("2 1 0 1 2 1 2 3")) //?
// // should be 2 3 4 2
// Object.values(longestZigZag("7 3 5 5 2")) //?
// // should be 3 2
// Object.values(longestZigZag("3 8 6 4 5 2")) //?
// // should be 3 4

const test = (fn, cases) => {
  cases.forEach(([input, expect]) =>
    assert(fn(input) === expect, `Expected: ${expect}\nReceived: ${fn(input)}`)
  )
  console.log("All tests passed!")
}

// nonEmptySubsequences         :: [a] -> [[a]]
// nonEmptySubsequences []      =  []
// nonEmptySubsequences (x:xs)  =  [x] : foldr f [] (nonEmptySubsequences xs)
//   where f ys r = ys : (x : ys) : r

const nonEmptySubsequences = ([x, ...xs], acc = []) =>
  x === undefined
    ? acc
    : [
        [x],
        ...nonEmptySubsequences(xs).reduceRight(
          (acc, y) => [y, [x, ...y], ...acc],
          []
        )
      ]

const isZigZag = xs =>
  xs.every(
    (x, i) =>
      x > Math.max(xs[i - 1] || -Infinity, xs[i + 1] || -Infinity) ||
      x < Math.min(xs[i - 1] || +Infinity, xs[i + 1] || +Infinity)
  )

const words = str => str.split(" ")
const map = fn => xs => xs.map(fn)
const filter = predFn => xs => xs.filter(predFn)
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const maxBy = prop => xs => Math.max(...xs.map(x => x[prop]))

const trace = msg => x => {
  console.log(msg, x)
  return x
}

const longestZigZag = pipe(
  words,
  map(Number),
  nonEmptySubsequences,
  trace("what"),
  filter(isZigZag),
  maxBy("length")
)

// const cases = [[[0], [[0]]], [[0, 1], [[0], [1], [0, 1]]]]
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

test(longestZigZag, cases)
