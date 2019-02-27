// const getAngleFromZero =

// const getAngleBetweenHands = (hour, min) => {
//   const [h, m] = [(hour + min / 60) * 30, min * 6]
//   const a = 90
//   const p = 180
//   const x = Math.abs(h - m)
//   return ((2 * a) / p) * (Math.abs(((x + p / 2) % p) - p / 2) - p / 4)
// }

// f(0) //?
// f(0.5) //?
// f(1) //?
// f(2) //?
// f(3) //?
// f(4) //?

// const getAngleBetweenHands = (hour, min) => {
//   const angle = Math.abs(((hour % 12) + min / 60) * 30 - min * 60)
//   return angle <= 180 ? angle : 360 - angle
// }
const getAngleBetweenHands = (hour, min) =>
  180 - Math.abs(Math.abs(((hour % 12) + min / 60) * 30 - min * 6) - 180)

getAngleBetweenHands(7, 0) //?
// getAngleBetweenHands_(7, 0) //?

getAngleBetweenHands(6, 0) //?
// getAngleBetweenHands_(6, 0) //?

getAngleBetweenHands(11, 0) //?
// getAngleBetweenHands_(11, 0) //?

getAngleBetweenHands(1, 0) //?
// getAngleBetweenHands_(1, 0) //?

getAngleBetweenHands(11, 50) //?
