const Iso = (to, from) => ({ to, from })
const string = Iso(str => str.split(""), xs => xs.join(""))
const reverse = xs => xs.reverse()

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const zipWith = f => ([x, ...xs]) => ([y, ...ys], acc = []) =>
  x === undefined || y === undefined
    ? acc
    : zipWith(f)(xs)(ys, [...acc, f(x)(y)])

const romans = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M"]]
const digitToRoman = ([a, b, c]) => d =>
  ["", a, a + a, a + a + a, a + b, b, b + a, b + a + a, b + a + a + a, a + c][
    Number(d)
  ]

const romanNumeralize = pipe(
  String,
  Array.from,
  xs => xs.reverse(),
  zipWith(digitToRoman)(romans),
  xs => xs.reverse(),
  xs => xs.join("")
)

romanNumeralize(0) //?
romanNumeralize(9) //?
romanNumeralize(19) //?
romanNumeralize(39) //?

module.exports = romanNumeralize

const concat = xs => x => xs.concat(x)

const cata = f => xs => f(xs.map(cata(f)))

cata(x => x)([]) //?
