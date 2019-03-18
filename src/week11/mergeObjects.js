const mergeObjects = arr =>
  arr.reduce((accObj, obj) => ({ ...accObj, ...obj }), {})

mergeObjects([
  { 1: "1", 2: "2", 3: "3" },
  { 3: "4", 4: "4", 5: "6" },
  { 5: "5", 6: "6", 7: "7" }
]) //?
