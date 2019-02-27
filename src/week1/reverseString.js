import assert from "assert"

const Iso = (to, from) => ({ to, from })
const string = Iso(cs => cs.join(""), str => [...str])

const reverse = xs => xs.reverse()
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

// const reverseString = pipe(
//   string.from,
//   reverse,
//   string.to
// )

const reverseString = str => [...str].reduce((acc, x) => x + acc)
// const reverseString = str => [...str].reverse().join("")

const runTests = f => cases => {
  cases.forEach(([input, expected]) =>
    assert(f(input) === expected, `Expected: ${expected}, Actual: ${f(input)}`)
  )
  console.log("All tests passed!")
}

const cases = [
  ["hello neighbor", "neighbor"],
  ["", ""],
  ["the", "the"],
  ["CS rocks!", "rocks"]
]

runTests(longestWord)(cases)
