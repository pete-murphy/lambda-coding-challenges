const phoneDigitsToLetters = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ"
}

const map = f => xs => xs.map(f)
const concat = xs => ys => [...xs, ...ys]
const replicate = n => x => Array(n).fill(x)
const flatMap = f => xs => xs.flatMap(f)
const sequence = ([xs, ...xss]) =>
  xs === undefined
    ? [[]]
    : flatMap(x => map(xs => [x, ...xs])(sequence(xss)))(xs)

function telephoneWords(str) {
  return sequence([...str].map(s => [...phoneDigitsToLetters[s]].join(""))).map(
    xs => xs.join("")
  )
}
