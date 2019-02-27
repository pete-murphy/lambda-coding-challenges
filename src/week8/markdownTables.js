const formatAsRow = strs => `|${strs.join("|")}|`
const unlines = xs => xs.join("\n")

const rowToArray = row => (typeof row === "string" ? row.split(",") : [row])

const markdownTables = ([header, ...rows] = []) => {
  const hs = header.split(",")
  const rs = rows.map(rowToArray)
  const fhs = formatAsRow(hs)
  const frs = rs.map(formatAsRow)
  return unlines([fhs, fhs.replace(/[^|]/gi, "-"), ...frs])
}
