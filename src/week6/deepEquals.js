const deepEquals = (obj1, obj2) =>
  Object.entries(obj1).reduce(
    (acc, [k, v]) =>
      acc && (typeof v !== "object" ? v === obj2[k] : deepEquals(v, obj2[k])),
    true
  )

module.exports = deepEquals
