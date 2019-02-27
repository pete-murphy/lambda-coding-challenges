// const isZigZag = str => {
//   const nums = str.split(" ").map(Number)
//   return nums.every(
//     (num, i) =>
//       num > Math.max(nums[i - 1] || -Infinity, nums[i + 1] || -Infinity) ||
//       num < Math.min(nums[i - 1] || +Infinity, nums[i + 1] || +Infinity)
//   )
// }

// isZigZag("4 2 3 1 5 3")
// // -> true
// isZigZag("7 3 5 5 2")
// // -> false
// isZigZag("3 8 6 4 5")
// // -> false
// isZigZag("1")
// // -> true

// isZigZagging :: (a, a, a) => Bool
const isZigZagging = (x, y, z) =>
  y > Math.max(x || -Infinity, z || -Infinity) ||
  y < Math.min(x || +Infinity, z || +Infinity)

// const splitWhile = predFn => ([x, ...xs]) => predFn(x) ?

// takeWhile(n => n % 2 === 0)([1, 2, 3, 4]) //?
// // -> [[], [2, 3, 4]]
// takeWhile(n => n % 2 === 0)([2, 3, 4]) //?
// // -> [2]
// takeWhile(n => n % 2 === 0)([2, 4, 5]) //?
// // -> [2, 4]

const longestZigZag = str => {
  const signs = str
    .split(" ")
    .map(Number)
    .map((n, i, arr) => Math.sign(n - arr[i - 1]))
  signs
  const lens = signs.reduce(
    (acc, n, i) => {
      n
      return n !== signs[i - 1] && n !== 0
        ? (([x, ...xs]) => [x + 1, ...xs])(acc)
        : [2, ...acc]
    },
    [0]
  )
  lens
  return Math.max(...lens)
}
// longestZigZag("1 1 0 1 2 1 2 3") //?
// longestZigZag("1 1 0 1") //?

const tail = xs => xs.slice(1)
const zipWith = fn => xs => ys => xs.map((x, i) => fn(x, ys[i]))
const subtract = (x, y) => x - y
const eqNotZero = (x, y) => x !== y && y !== 0

const longestZigZag_ = str => {
  const nums = str.split(" ").map(Number)
  const signs = zipWith(subtract)(nums)(tail(nums)).map(Math.sign)
  signs
  const signMap = zipWith(eqNotZero)(signs)(tail(signs))
  return signMap
}

// longestZigZag("4 2 3 1 5 3") //?
longestZigZag_("4 2 3 1 5 3") //?
// -> true
// longestZigZag("7 3 5 5 2") //?
longestZigZag_("7 3 5 5 2") //?
// -> false
// longestZigZag("3 8 6 4 5 2") //?
longestZigZag_("3 8 6 4 5 2") //?
// -> false
// longestZigZag("1") //?
longestZigZag_("1") //?
// -> true
longestZigZag_("1 1 0 1 2 1 2 3") //?

const assert = require("assert")

const test = (fn, cases) => {
  cases.forEach(([input, expect]) =>
    assert(fn(input) === expect, `Expected: ${expect}\nReceived: ${fn(input)}`)
  )
  console.log("All tests passed!")
}

const cases = [
  ["4 2 3 1 5 3", 6],
  ["1", 1],
  ["7 3", 2],
  ["1 3", 2],
  ["7 3 5 5 2", 3],
  ["3 8 6 4 5 2", 3],
  ["1 1 0 1 2 1 2 3", 4],
  ["1 1 0 1 2 1 2", 4]
]

// longestZigZag("4 2 3 1 5 3 1 2 4 5 3 4 2 3 2") //?
// longestZigZag("5 4 3 2 1") //?
// longestZigZag("1 2 3 3 4 4 4 5 4") //?

// const foo = (acc = [])

const arr = [4, 2, 3, 1, 5, 3, 1]
// arr.reduce(
//   (acc, x, i) =>
// ) //?

arr.slice(-1) //?

Math.sign(2) //?

arr.map((n, i) => Math.sign(n - arr[i - 1])) //?

// span                    :: (a -> Bool) -> [a] -> ([a],[a])
// span _ xs@[]            =  (xs, xs)
// span p xs@(x:xs')
//          | p x          =  let (ys,zs) = span p xs' in (x:ys,zs)
//          | otherwise    =  ([],xs)

// const span = predFn => ([x, ...xs]) =>
//   x === undefined
//     ? [[], []]
//     : predFn(x)
//       ? (([ys, zs]) => [[x, ...ys], zs])(span(predFn)(xs))
//       : [[], [x, ...xs]]

// span(x => x < 3)([1, 2, 3, 4, 5, 6]) //?

// // groupBy                 :: (a -> a -> Bool) -> [a] -> [[a]]
// // groupBy _  []           =  []
// // groupBy eq (x:xs)       =  (x:ys) : groupBy eq zs
// //                            where (ys,zs) = span (eq x) xs

// const groupBy = predFn => ([x, ...xs]) =>
//    x === undefined ? []
//      :

// ;[].slice(0, -1) //?
// arr.slice(0, -1) //?
