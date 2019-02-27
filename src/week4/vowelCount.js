const isVowel = char => /[aeiou]/i.test(char)

function vowelCount(str) {
  return [...str].filter(isVowel).length
}
