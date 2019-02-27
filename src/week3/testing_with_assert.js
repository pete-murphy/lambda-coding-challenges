

const test = (fn, cases) => {
  cases.forEach(([input, expect]) => {
    console.log(`Testing ${fn.name}(${JSON.stringify(input)})`)
    assert(
      fn(input) === expect,
      `\nFor input: ${JSON.stringify(
        input
      )}\nExpected: ${expect}\nReceived: ${fn(input)}`
    )
  })
  console.log("All tests passed!")
}

