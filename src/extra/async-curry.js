const curry = (fn, seen = []) => (...args) => {
  fn.length //?
  return fn.length <= args.length + seen.length
    ? fn(...seen, ...args)
    : curry(fn, [...seen, ...args])
}
const asyncAdd = (x, y) =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      typeof x === "number" ? resolve(x + y) : reject("Expected number")
    }, 30)
  })

const curriedAsyncAdd = curry(asyncAdd)

const fizz = n => (n % 3 === 0 ? "Fizz" : String(n))
;[1, 2, 3].map(fizz) //?

// curriedAsyncAdd(2)(3) //?

Object.prototype.map = function(fn) {
  return Object.entries(this).reduce(
    (accObj, [key, val]) => ({
      ...accObj,
      [key]: typeof val === "object" ? val.map(fn) : fn(val)
    }),
    {}
  )
}

const exampleObj = {
  a: 1,
  b: 2,
  c: {
    c1: 3,
    c2: 4
  }
}

exampleObj.map(x => x + 1) //?

Promise.resolve(3).then(x => x + 1) //?
Array.of(3).map(x => x + 4) //?
