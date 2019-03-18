// const replicate = n => x => Array(n).fill(x)
// const sequence = ([xs, ...xss]) =>
//   xs === undefined ? [[]] : xs.flatMap(x => sequence(xss).map(xs => [x, ...xs]))

// const rockPaperScissors = n =>
//   sequence(replicate(n)(["rock", "paper", "scissors"]))
