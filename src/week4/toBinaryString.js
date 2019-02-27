// const divMod = d => num => [Math.floor(num / d), num % d]

// const toBinaryString = (num, acc = []) =>
//   num < 2
//     ? [num].concat(acc).join("")
//     : toBinaryString(Math.floor(num / 2), [num % 2].concat(acc))

// toBinaryString(0) //?
// toBinaryString(1) //?
// toBinaryString(2) //?
// toBinaryString(3) //?
// toBinaryString(4) //?
// toBinaryString(5) //?
// toBinaryString(6) //?
// toBinaryString(7) //?
// toBinaryString(12) //?
// ;(function(name) {
//   console.log(name.toUpperCase())
// })("jarred")

// function sum(arr) {
//   if (arr.length === 0) {
//     return 0
//   }
//   return arr[0] + sum(arr.slice(1))
// }

function sum(arr, acc = 0) {
  if (arr.length === 0) {
    return acc
  }
  return sum(arr.slice(1), acc + arr[0])
}

sum([1, 2, 3, 4]) //?
