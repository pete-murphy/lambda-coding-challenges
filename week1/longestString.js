// function longestString(arr) {
//   return arr.sort((a, b) => b.length - a.length)[0]
// }

// Just for practice, this works too
function longestString_(arr) {
  return arr.reduce((acc, x) => (x.length > acc.length ? x : acc), "")
}

const longestString = arr =>
  arr.reduce((acc, x) => (x.length > acc.length ? x : acc), "")

const strings1 = ["short", "really, really long!", "medium"]

console.log(longestString(strings1)) // <--- 'really, really long!'
console.log(longestString_(strings1)) // <--- 'really, really long!'

const strings2 = [
  "short",
  "first long string!!",
  "medium",
  "abcdefghijklmnopqrs"
]

console.log(longestString(strings2)) // <--- 'first long string!'
console.log(longestString_(strings2)) // <--- 'first long string!'
