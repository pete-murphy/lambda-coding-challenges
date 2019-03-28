const isUpper = char => char.toUpperCase() === char
const mod = (x, y) => x - y * Math.floor(x / y)

caesar_ = (offset, base) =>
  String.fromCharCode(
    mod(char.charCodeAt() - base.charCodeAt() + offset, 26) + base.charCodeAt()
  )

// caesar :: Int -> Char -> Char
const caesar = offset => char =>
  isUpper(char) ? caesar_(offset, "A") : caesar_(offset, "a")

const encr = char => (isNaN(Number(char)) ? caesar(13)(char) : char)
const decr = char => (isNaN(Number(char)) ? caesar(-13)(char) : char)

module.exports = { encr, decr }
