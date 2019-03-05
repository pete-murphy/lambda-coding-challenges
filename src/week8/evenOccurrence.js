const isEven = x => x % 2 === 0
const occurrences = x => ys => ys.filter(y => y === x).length
const evenOccurrence = xs => xs.find(x => isEven(occurrences(x)(xs))) || null
