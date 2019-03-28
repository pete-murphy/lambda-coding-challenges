const rot13 = str => {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]
  let capitals = alphabet.map(letter => letter.toUpperCase())
  let cipher = new Map()
  let cipherLetters = alphabet.slice(13).concat(alphabet.slice(0, 13))
  let cipherCapitals = capitals.slice(13).concat(capitals.slice(0, 13))
  alphabet.forEach((letter, i) => cipher.set(letter, cipherLetters[i]))
  capitals.forEach((capitals, i) => cipher.set(capitals, cipherCapitals[i]))

  return str
    .split(/(?:)/u)
    .map(char => (cipher.has(char) ? cipher.get(char) : char))
    .join("")
}
