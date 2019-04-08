const rotateImage = a =>
  a.reduce(
    (accs, xs) => accs.map((acc, i) => [...acc, xs[a.length - i - 1]]),
    Array(a.length).fill([])
  )

rotateImage([[1, 2], [3, 4]]) //?

const arr = [[1, 2], [3, 4]]

const transpose = arr =>
  arr.reduce(
    (accs, xs) => accs.map((acc, i) => [...acc, xs[i]]),
    Array(arr.length).fill([])
  )

transpose(arr) //?
