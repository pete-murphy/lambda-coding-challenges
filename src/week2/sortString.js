const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const toArr = str => str.split("")
const toStr = arr => arr.join("")

const insertAtIndex = ix => xs => x =>
  ix === -1 ? [...xs, x] : [...xs.slice(0, ix), x, ...xs.slice(ix)]

findIndex = xs => x => predFn => xs.findIndex(predFn(x))

const uncurry_ = fn => (...args) =>
  args.slice(0, -2).reduce((acc, arg) => acc(arg), fn)

const add = x => y => x + y
const add_ = (x, y) => x + y

// const reduce = fn => xs => xs.reduce((acc, x) => fn(acc, x))

const sum = xs => xs.reduce(uncurry_(add))

sum([1, 2, 3]) //?

// reduce(a => b => a + b)([1, 2, 4]) //?

// const sort = reduce(
//   pipe(
//     findIndex(y => y > x),
//     insertAtIndex
//   )
// )

// ;[1, 2, 3, 4].slice(0, 3) //?

const sortString = pipe(
  toArr,
  sort,
  toStr
)

const assert = require("assert")

const test = (fn, cases) => {
  cases.forEach(([inp, exp]) => {
    assert(fn(inp) === exp, `Expected ${fn(inp)} to be ${exp}`)
  })
  console.log("All tests passed!")
}

const cases = [
  ["dcba", "abcd"],
  ["zycxbwa", "abcwxyz"],
  ["AzycxbCwBaA", "AABCabcwxyz"]
]

test(sortString, cases)

// test(insert)
