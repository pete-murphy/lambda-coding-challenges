const isValidWalk = dirs => {
  const { n, e, s, w } = dirs.reduce(
    (acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }),
    { n: 0, e: 0, s: 0, w: 0 }
  )
  return [n + e + s + w === 10, n === s, e === w].every(x => x)
}

// Only returns true if every element is true
const allTrue = booleans => booleans.every(bool => bool)
allTrue([true]) //?
allTrue([true, true, true]) //?
allTrue([true, false, true]) //?
allTrue([false, false]) //?

// Returns an Object with keys that correspond to the direction and
// values that correspond to how many minutes walked in that direction
const tallyWalk = directions =>
  directions.reduce(
    (acc, direction) => ({
      ...acc,
      [direction]: acc[direction] + 1
    }),
    { n: 0, e: 0, s: 0, w: 0 } // Initial value (we haven't walked yet)
  )
tallyWalk(["n"]) //?
tallyWalk(["n", "e", "s"]) //?
tallyWalk(["s", "s", "s", "s"]) //?





const assert = require("assert")

const test = () => {
  assert(
    isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
    "should return true"
  )
  assert(
    !isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
    "should return false"
  )
  assert(!isValidWalk(["w"]), "should return false")
  assert(
    !isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
    "should return false"
  )
  console.log("All tests passed!")
}

test()
