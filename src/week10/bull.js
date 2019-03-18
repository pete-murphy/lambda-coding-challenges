const isUpper = char => char.toUpperCase() === char
const mod = (x, y) => x - y * Math.floor(x / y)

// caesar :: Int -> Char -> Char
const caesar = offset => char =>
  isUpper(char)
    ? String.fromCharCode(
        mod(char.charCodeAt() - "A".charCodeAt() + offset, 26) +
          "A".charCodeAt()
      )
    : String.fromCharCode(
        mod(char.charCodeAt() - "a".charCodeAt() + offset, 26) +
          "a".charCodeAt()
      )

const encr = char => (isNaN(Number(char)) ? caesar(13)(char) : char)
const decr = char => (isNaN(Number(char)) ? caesar(-13)(char) : char)

module.exports = { encr, decr }
