const mergeObjects = arr =>
  arr.reduce((accObj, obj) => ({ ...accObj, ...obj }), {})
