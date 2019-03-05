const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const toChars = str => str.split("")
const append = s1 => s2 => `${s2}${s1}`

const expandedNums = xs =>
  toChars(String(xs))
    .reduce((strs, x) => [...strs.map(append("0")), x], [])
    .join(" + ")

expandedNums(562) //?
