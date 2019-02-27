const collatzSequence = (n, acc = []) =>
  n === 1
    ? [...acc, n]
    : n % 2 === 0
      ? collatzSequence(n / 2, [...acc, n])
      : collatzSequence(3 * n + 1, [...acc, n])

collatzSequence(23) //?
