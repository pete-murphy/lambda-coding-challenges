const range = (curr, end, acc = []) =>
  curr > end ? acc : range(curr + 1, end, [...acc, curr])

const primes = ([num, ...nums], acc = []) =>
  num === undefined
    ? acc
    : primes(nums.filter(n => n % num !== 0), [...acc, num])

const primeList = (start, end) => primes(range(2, end)).filter(n => n >= start)
