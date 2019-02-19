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

module.exports = {
  contiguousSubsequences,
  filter,
  length,
  map,
  maximum,
  pipe,
  words
}
