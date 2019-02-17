module.exports = function() {
  return {
    files: ["*/*.js", "!*/*.test.js"],

    tests: ["*/*.test.js"],

    testFramework: "tape",
    env: {
      type: "node",
      runner: "node"
    }
  }
}
