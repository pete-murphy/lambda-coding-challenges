const insert = (ys, x) => {
  const y = ys.shift()
  return y === undefined ? [x] : x < y ? [x, y, ...ys] : [y, ...insert(ys, x)]
}

const insertionSort = arr => arr.reduce(insert, [])

insertionSort([1, 2, 3, 9, 6, 3])
