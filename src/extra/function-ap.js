const curry = (fn, seenArgs = []) => (...args) =>
  fn.length === args.length + seenArgs.length
    ? fn(...seenArgs, ...args)
    : curry(fn, [...seenArgs, ...args])

// sequence :: t (f a) -> f (t a)

// map :: (r -> a) ~> (a -> b) -> (r -> b)
Function.prototype.map = function(ab) {
  return (...r) => ab(this(...r))
}

// ap :: [(a -> b)] ~> [a] -> [b]
Array.prototype.ap = function(as) {
  return this.flatMap(f => as.flatMap(a => f(a)))
}

// ap :: (r -> a -> b) ~> (r -> a) -> (r -> b)
Function.prototype.ap = function(ra) {
  return (...r) => this(...r)(ra(...r))
}

// sequence :: (Applicative f, Traversable t)
//          => t (f a)
//          -> f (t a)

// Traversable []
// Applicative ((->) r)
// sequence :: t (f a) -> f (t a)
// sequence :: [(r -> a)] -> r -> [a]
const sequence = fns => r => fns.ap([r])
// const sequence = fns => r => fns.map(fn => fn(r))

// const sequence = ras => r => ras.ap([r])

// /*
// traverse :: (Traversable t, Applicative f)
//          => (a -> f b)
//          -> t a
//          -> f (t b)

// With Traversable instance of [],
//  ((->) r) as Applicative
// traverse :: (r -> a -> b)
//          -> [a]
//          -> (r -> [b])

// const lift2 = f => fn1 => fn2 => x => f(fn1(x))(fn2(x))

// const traverse = fn => as => r => as.map(fn(r)) //?
// const traverse = rab => as => r => rab.map(ab => ab.ap(as)) //?
const traverse = rab => as => r => lift2

const id = x => x

// const sequence = traverse(id)

// traverse(x => y => x * y)([1, 2, 3])(5) //?

sequence([x => x + 1, x => x + 2, x => x + 3])(4) //?

const add = x => y => x + y
;[add(1), add(10)].ap([1, 2, 3, 4]) //?

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

// lift2 = f => a1 => a2 => a1.reduce((b, a) => [...b, ...a2.map(f(a))], [])

// lift2(x => y => x + y)([1, 2, 3])([1, 2, 3]) //?

const mult = x => y => x * y

const Fn = { of: x => _ => x, lift2: f => x => y => r => f(x(r))(y(r)) }
Fn.lift2(add)(mult(2))(mult(10))(1) //?
