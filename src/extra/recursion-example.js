const reduce = (reducerFn, initialValue) => ([num, ...nums]) => {
  return num === undefined
    ? initialValue
    : reduce(reducerFn, reducerFn(initialValue, num))(nums)
}

const sum = reduce((acc, x) => acc + x, 0)
console.log(sum([1, 2, 3]))

const reverse = reduce((acc, x) => [x].concat(acc), [])
console.log(reverse([1, 2, 3]))

const map = fn => reduce((acc, x) => acc.concat(fn(x)), [])
console.log(map(x => x + 1)([1, 2, 3]))

const isOdd = x => x % 2 === 1
const filter = predFn =>
  reduce((acc, x) => acc.concat(predFn(x) ? [x] : []), [])
console.log(filter(isOdd)([1, 2, 3, 4, 5]))
