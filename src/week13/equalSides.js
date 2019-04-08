Array.prototype.scan = function(fn, initialValue) {
  return this.reduce(
    (acc, x) => [...acc, fn(acc.reduce(fn, initialValue), x)],
    []
  )
}
// ;[1, 2, 3].scan((acc, x) => acc + x, 0) //?

// function equalSides(arr, arrRev=arr.reverse(), len=arr.length, ix=0) {

// }

Array.prototype.splitAt = function(ix) {
  return [this.slice(0, ix), this.slice(ix + 1)]
}
const add = (a, b) => a + b
const sum = xs => xs.reduce(add, 0)

function equalSides(arr) {
  return arr
    .map((_, i) => arr.splitAt(i))
    .findIndex(([as, bs]) => sum(as) === sum(bs))
}

equalSides([1, 1, 1, 4, 2, 1]) //?
