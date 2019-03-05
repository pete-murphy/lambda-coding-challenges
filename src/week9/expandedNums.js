const toChars = str => str.split("")
const append = s1 => s2 => `${s2}${s1}`
const mult = m => n => m * n
const expandedNums = xs =>
  toChars(String(xs))
    .map(Number)
    .reduce((nums, x) => [...nums.map(mult(10)), x], [])
    .filter(x => x)
    .map(String)
    .join(" + ")

expandedNums(520)
