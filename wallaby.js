module.exports = function() {
  return {
    files: ["src/*/*.js", "!src/*/*.test.js"],

    tests: ["src/*/*.test.js"],

    testFramework: "tape",
    env: {
      type: "node",
      runner: "node"
    }
  }
}
