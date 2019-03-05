const range = (a, b, acc = []) => (a > b ? acc : range(a + 1, b, [...acc, a]))
const chunksOf = k => xs =>
  k > 0 ? range(0, xs.length - k).map(j => xs.slice(j, j + k)) : []
const concat = strs => strs.join("")
const maximumBy = fn => xs =>
  xs.reduce((max, x) => (fn(x) > fn(max) ? x : max), "")
const length = xs => xs.length

const longestConsecutive = (arr, k) =>
  maximumBy(length)(chunksOf(k)(arr).map(concat))
