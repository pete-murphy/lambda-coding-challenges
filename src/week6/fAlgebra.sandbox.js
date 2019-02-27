const util = require("util")

const map = f => Functor => Functor.map(f)
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

const cata = f => x =>
  compose(
    f,
    map(cata(f))
  )(x)

// Not sure why we're using Const instead of Identity ???
class Const {
  static of(x) {
    return new Const(x)
  }
  constructor(value) {
    this.value = value
  }
  map(_) {
    return this
  }
  [util.inspect.custom]() {
    return `Const(${this.value})`
  }
}

class Add {
  static of(x, y) {
    return new Add(x, y)
  }
  constructor(x, y) {
    this.x = x
    this.y = y || 0
  }
  map(f) {
    return Add.of(f(this.x), f(this.y))
  }
  [util.inspect.custom]() {
    return `Add(${this.x}, ${this.y})`
  }
}

class Mul {
  static of(x, y) {
    return new Mul(x, y)
  }
  constructor(x, y) {
    this.x = x
    this.y = y || 1
  }
  map(f) {
    return Mul.of(f(this.x), f(this.y))
  }
  [util.inspect.custom]() {
    return `Mul(${this.x}, ${this.y})`
  }
}

const interpret = a => {
  switch (a.constructor) {
    case Mul:
      return a.x * a.y
    case Add:
      return a.x + a.y
    case Const:
      return a.value
  }
}

const interpret_ = a => {
  switch (a.constructor) {
    case Mul:
      return `${a.x} times ${a.y}`
    case Add:
      return `${a.x} plus ${a.y}`
    case Const:
      return a.value
  }
}

const program = Mul.of(Add.of(Const.of(2), Const.of(3)), Const.of(4))

Mul.of(3) //?

const res = cata(interpret)(program)
const res_ = cata(interpret_)(program)

res
res_
