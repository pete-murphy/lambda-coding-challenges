const range = (a, b) =>
  Array(b - a + 1)
    .fill()
    .map((_, i) => a + i)

const foo = num =>
  num ===
  String(num)
    .split("")
    .map((n, i) => Math.pow(Number(n), i + 1))
    .reduce((acc, x) => acc + x)

const sumDigPower = (a, b) => range(a, b).filter(foo)
