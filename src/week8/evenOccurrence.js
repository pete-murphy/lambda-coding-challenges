const isEven = x => x % 2 === 0
const occurrences = x => ys => ys.filter(y => y === x).length
const evenOccurrence = xs => xs.find(x => isEven(occurrences(x)(xs))) || null

const arr = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4]
