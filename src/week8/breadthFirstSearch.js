const breadthFirstSearch = (obj, searchTerm) => {
  const vals = Object.values(obj)
  const branches = vals.filter(v => typeof v === "object")
  return (
    vals.includes(searchTerm) ||
    branches.some(branch => breadthFirstSearch(branch, searchTerm))
  )
}
