const sumOfDigits = num =>
  [...String(num)].map(Number).reduce((sum, x) => sum + x, 0)

module.exports = sumOfDigits
