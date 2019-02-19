const {
  contiguousSubsequences,
  filter,
  length,
  map,
  maximum,
  pipe,
  words
} = require("./lib")

const isZigZag = nums =>
  nums.every(
    (num, i) =>
      num > Math.max(nums[i - 1] || -Infinity, nums[i + 1] || -Infinity) ||
      num < Math.min(nums[i - 1] || +Infinity, nums[i + 1] || +Infinity)
  )

const longestZigZag = pipe(
  words,
  map(Number),
  contiguousSubsequences,
  filter(isZigZag),
  map(length),
  maximum
)

export default longestZigZag
