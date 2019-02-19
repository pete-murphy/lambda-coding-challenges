const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const toUpper = c => c.toUpperCase()
const split = regEx => str => str.split(regEx)
const capitalize = str => str.replace(/\w/, toUpper)
const join = str => strs => strs.join(str)
const mapTail = fn => ([x, ...xs]) => [x, ...xs.map(fn)]
const replace = regEx => fn => str => str.replace(regEx, fn)

// const toCamelCase = pipe(
//   split(/[-_]/g),
//   mapTail(capitalize),
//   join("")
// )

const drop = n => arr => arr.slice(n)

const toCamelCase = replace(/[-_]\w/g)(
  pipe(
    drop(1),
    capitalize
  )
)

const assert = require("assert")

const test = () => {
  assert(
    toCamelCase("the-stealth-warrior") === "theStealthWarrior",
    toCamelCase("the-stealth-warrior")
  )
  assert(
    toCamelCase("The_stealth_warrior") === "TheStealthWarrior",
    toCamelCase("The_stealth_warrior")
  )
  console.log("All tests passed!")
}

test()
