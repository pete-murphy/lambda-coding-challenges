const daysBetween = (...dates) => {
  const [start, end] = dates.map(Date.parse)
  return Math.round(end - start / (1000 * 60 * 60 * 24)).toString()
}

daysBetween("January 11, 2011", "January 12, 2011") //?
// daysBetween("01-11-11")
