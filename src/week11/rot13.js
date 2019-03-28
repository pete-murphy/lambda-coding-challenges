const isUpper = char => char.toUpperCase() === char
const mod = (x, y) => x - y * Math.floor(x / y)
const isChar = x => /[A-Z]/gi.test(x)
const map = fn => xs => xs.map(fn)

String.prototype.map = function(fn) {
  return this.split("")
    .map(fn)
    .join("")
}

caesar_ = (char, offset, base) =>
  String.fromCharCode(
    mod(char.charCodeAt() - base.charCodeAt() + offset, 26) + base.charCodeAt()
  )

const caesar = offset => char =>
  isChar(char)
    ? isUpper(char)
      ? caesar_(char, offset, "A")
      : caesar_(char, offset, "a")
    : char

const rot13 = map(caesar(13))

rot13("You can do it!") //?
