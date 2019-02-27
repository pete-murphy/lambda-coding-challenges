function createPhoneNumber(numbers) {
  const string = numbers.join("")
  return `(${string.slice(0, 3)}) ${string.slice(3, 6)}-${string.slice(6)}`
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //?
