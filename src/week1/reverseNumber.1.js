const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

// const reverseNumber = num => {
//   let str = ""
//   for (const n of `${num}`) {
//     str = n + str
//   }
//   return parseInt(str)
// }

// const reverseNumber = num => +[...`${num}`].reduce((acc, x) => x + acc)

// const reverseNumber = pipe(
//   String,
//   Array.from,
//   arr => arr.reverse(),
//   arr => arr.join(""),
//   Number
// )

console.log(JSON.stringify(reverseNumber(446)))
console.log(JSON.stringify(reverseNumber(446)))
