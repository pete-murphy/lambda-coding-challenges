function trimNbsp(str) {
  let re = /(.*)&nbsp;$/
  let tempString
  while (str) {
    tempString = str.replace(re, "$1")
    if (tempString === str) {
      break
    } else {
      str = tempString
    }
  }
  return str ? str : ""
}

JSON.stringify(trimNbsp("   \n")) //?

JSON.stringify("hello   \n".trim()) //?

const trimLines = str =>
  str
    .split("\n")
    .map(line => line.trimEnd())
    .join("\n")
