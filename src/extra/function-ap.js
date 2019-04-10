const curry = (fn, seenArgs = []) => (...args) =>
  fn.length === args.length + seenArgs.length
    ? fn(...seenArgs, ...args)
    : curry(fn, [...seenArgs, ...args])

// ap :: (r -> a -> b) ~> (r -> a) -> (r -> b)
Function.prototype.ap = function(ra) {
  return (...r) => this(...r)(ra(...r))
}

const toggleReducer = (s, a) => {
  switch (a.type) {
    case "on":
      return { ...s, on: true }
    case "off":
      return { ...s, on: false }
    default:
      return s
  }
}

const reducer = (s, a) => {
  switch (a.type) {
    case "setOn":
      return { ...s, on: !s.on }
    default:
      return {}
  }
}

const combinedReducers = (_args => r1 => r2 => ({ ...r1, ...r2 }))
  .ap(toggleReducer)
  .ap(reducer)

combinedReducers({ on: true }, { type: "" }) //?
